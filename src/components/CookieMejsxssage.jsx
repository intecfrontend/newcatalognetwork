import { useSelector } from "react-redux";
import React, { useState } from "react";
import store from "store";
import { useLocation } from 'react-router-dom'
import '../assets/css/Cookies.css';

const CookieMessage = () => {

    const has_accepted = store.get("pn_cookie_pref");
    const [cookie, setCookie] = useState(true);
    const translate = useSelector(state => state.general.translate);
    const setNewCookie = (acceptance) => {
        store.set("pn_cookie_pref", { acceptance: acceptance });
        setCookie(false);
    };

    // look if cookiemessage has been set to false, with a query param
    const useQuery = () => { return new URLSearchParams(useLocation().search); }
    let showMessage = useQuery().get('cookie') === 'false'
    
    return (
        (!has_accepted && cookie && !showMessage) ?
            <div className="cookie">
                <span className="cookie_message">
                    {translate("cookies_message")}
                </span>
                <div className="cookie_buttons">
                    <span className="cookie_button" onClick={() => setNewCookie(true)}>{translate("accept")}</span>
                    <span className="cookie_button" onClick={() => setNewCookie(false)}>{translate("refuse")}</span>
                </div>
            </div>
            : <React.Fragment></React.Fragment>
    );
}

export default CookieMessage;
