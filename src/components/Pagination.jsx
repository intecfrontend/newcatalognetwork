import { Link } from "react-router-dom";
import Icon from "@identitybuilding/idb-react-iconlib";
import React from "react";
import { useSelector } from "react-redux";
import '../assets/css/Pagination.css'

const Pagination = ({ pages, keyword }) => {
    const { translate } = useSelector(state => state.general);

    let pagination = [],
        current_page = Number(pages.current_page),
        last_page = Number(pages.total_pages);

    for (let i = 0; i < 5; i++) {
        // If we"re not an page 1, show the "go to first page" arrow icon
        // only render arrow in the first loop
        if (current_page !== 1 && i === 0)
            pagination.push(
                <React.Fragment key="prevArrows">
                    <Link className="pageLeftArrow" to={`/${translate("search_slug")}/${keyword ? keyword + '/' : ""}${translate('page')}=1`}>
                        <Icon name="ArrowDoubleLeft" />
                    </Link>
                    <Link className="pageLeftArrow" to={`/${translate("search_slug")}/${keyword ? keyword + '/' : ""}${translate('page')}=${pages.prev_page}`}>
                        <Icon name="ArrowLeft" />
                    </Link>
                </React.Fragment>
            );

        // Set the pagination
        let setPage;
        if (current_page === 1) setPage = current_page + i;
        else if (current_page === 2) setPage = current_page - 1 + i;
        else if (current_page === 3) setPage = current_page - 2 + i;
        else if (current_page > 3 && current_page < last_page - 1)
            setPage = current_page - 2 + i;
        else if (current_page === last_page - 1) setPage = current_page - 3 + i;
        else if (current_page === last_page) setPage = current_page - 4 + i;
        if (setPage <= last_page)
            if (setPage !== 0)
                pagination.push(
                    <Link
                        className={
                            current_page === setPage ? "active pageNumber" : "pageNumber"
                        }
                        key={setPage}
                        to={`/${translate("search_slug")}/${keyword ? keyword + '/' : ""}${translate('page')}=${setPage}`}
                    >
                        {setPage}
                    </Link>
                );

        // If we"re not the last page, show the "go to last page" arrow icon
        // Only render arrow in the last loop
        if (current_page !== pages.total_pages && i === 4)
            pagination.push(
                <React.Fragment key="nextArrows">
                    <Link className="pageRightArrow" to={`/${translate("search_slug")}/${keyword ? keyword + '/' : ""}${translate('page')}=${pages.next_page}`}>
                        <Icon name="ArrowRight" />
                    </Link>
                    <Link className="pageRightArrow" to={`/${translate("search_slug")}/${keyword ? keyword + '/' : ""}${translate('page')}=${pages.total_pages}`}>
                        <Icon name="ArrowDoubleRight" />
                    </Link>
                </React.Fragment>
            );
    }
    return <div id="pagination">{pagination}</div>;
};

export default Pagination;
