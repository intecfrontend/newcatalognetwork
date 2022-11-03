
import { lastSearch } from "../actions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import store from "store";

const SearchLastCriteria = () => {

    const dispatch = useDispatch();
    const { translate } = useSelector(state => state.general);
    const latestSearch = store.get("pn_searchCriteria");

    return (
        <div className="searchBarLastSearch">
            {latestSearch &&
                <React.Fragment>
                    {latestSearch.length > 0 && <span className="searchBarLastSearch_title">{translate("search_slug")}:</span>}
                    {latestSearch.length > 0 && latestSearch.map((item, index) => (
                        <Link key={index} to={`/${translate("search_slug")}/${item ? item + '/' : ''}${translate('page')}=1`}>
                            <span onClick={() => dispatch(lastSearch([]))}>
                                {item}
                            </span>
                        </Link>
                    ))}
                </React.Fragment>
            }
        </div>
    );
};

export default SearchLastCriteria;
