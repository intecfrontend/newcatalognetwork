import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "store";

import Icon from "@identitybuilding/idb-react-iconlib";
import '../assets/css/Searchbar.css'

const SearchBar = (props) => {
    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : "");
    const { translate } = useSelector(state => state.general);
    const history = useHistory()


    const lastCriteriaHandler = () => {
        if (keyword !== "") {
            let copy = store.get("pn_searchCriteria") ? store.get("pn_searchCriteria") : [];
            if (copy.length !== 0 && copy.length === 3 && !copy.includes(keyword)) {
                copy.pop()
            }
            if (!copy.includes(keyword)) {
                copy.unshift(keyword)
            }

            store.set("pn_searchCriteria", [...copy]);
        }

    }

    const onChangeHandler = (e) => {
        if (e.keyCode === 13) {
            history.push(`/${translate('search_slug')}/${keyword ? keyword + '/' : ""}${translate('page')}=1`)
            lastCriteriaHandler()
        }
    }

    return (
        <div id="searchbar" className={`${props.page}`}>
            <div className="search" >
                <input type="text" defaultValue={props.keyword} placeholder={translate('search_for_a_magazine')} onChange={(e) => setKeyword(e.target.value)} onKeyDown={(e) => onChangeHandler(e)} />
                <Link to={`/${translate("search_slug")}/${keyword ? keyword + '/' : ""}${translate('page')}=1`} onClick={() => lastCriteriaHandler()}>
                    <Icon name="ArrowRight" />
                    <Icon name="Search" />
                </Link>
            </div>
        </div>
    )
}

export default SearchBar