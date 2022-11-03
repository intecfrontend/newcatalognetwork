
/*
    This component renders all the meta tags of the ESN project.
    It also accepts props to update the meta tags for the business page.
    This means that every business page will have unique meta tags of the enterprise
*/
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import React from "react";

const Meta = (meta) => {

    let description = "Promonetwerk"
    const { lang } = useSelector(state => state.general);

    const favicon = (x) => require(`../assets/imgs/favicon/${x}`)

    return (
        <Helmet>
            <title>Catalogusnetwerk</title>

            {/* Don"t keep cache */}
            <meta http-equiv="cache-control" content="no-cache" />
            <meta http-equiv="expires" content="0" />
            <meta http-equiv="pragma" content="no-cache" />

            {/* General meta tags */}
            <meta charSet="utf-8" />
            <meta name="url" content={window.location.href} />
            <meta name="robots" content="index,follow" />

            {/* Prevents Search engine (Google, Yahoo and MSN)  to display its own description taken from its directory, instead of you meta description. Using below tag would ensure that Search engine would display your meta description below search results and it would be useful to improve your CTR. */}
            <meta name="robots" content="noodp,noydir" />
            <meta name="language" content={lang} />
            <meta name="copyright" content="identityBuilding bv" />
            <meta name="category" content={"magazines for municipalities or cities"} />
            <meta name="description" content={description} />
            <meta name="image" content={"https://zappa-tlaqv351d.s3.amazonaws.com/media/brand/l/mijn_stad-gemeente.png"} />
            {/* Social media meta tags */}
            {/* https://ogp.me/ */}

            {/* General */}
            <meta name="og:title" content="Mijn.stad-gemeente" />
            {/* <meta name="og:description" content={meta.description ? meta.description : translate("esn_description")} /> */}
            <meta name="og:image" content={"https://zappa-tlaqv351d.s3.amazonaws.com/media/brand/l/mijn_stad-gemeente.png"} />

            {/* Address */}
            <meta name="og:latitude" content={"50.940469"} />
            <meta name="og:longitude" content={"3.954115"} />
            <meta name="og:street-address" content={"Kuilstraat 1"} />
            <meta name="og:locality" content={"Erondegem"} />
            <meta name="og:postal-code" content={9420} />
            <meta name="og:country-name" content={"belgium"} />

            {/* Facebook */}
            <meta name="fb:page_id" content="1401933736730798" />

            {/* Twitter related tags */}
            <meta name="twitter:card" content="product" />
            <meta name="twitter:site" content="https://identitybuilding.be" />
            <meta name="twitter:title" content={"Mijn.stad-gemeente"} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={"https://zappa-tlaqv351d.s3.amazonaws.com/media/brand/l/mijn_stad-gemeente.png"} />

            {/* Favicon / icon related meta tags */}
            <link rel="apple-touch-icon" sizes="180x180" href={favicon("apple-touch-icon.png")} />
            <link rel="icon" type="image/png" sizes="32x32" href={favicon("favicon-32x32.png")} />
            <link rel="icon" type="image/png" sizes="16x16" href={favicon("favicon-16x16.png")} />
            <link rel="manifest" href={favicon("site.webmanifest")} />
            {/* <link rel="mask-icon" href={favicon("safari-pinned-tab.svg")} color="#5bbad5" /> */}
            <link rel="shortcut icon" href={favicon("favicon.ico")} />
            <link rel="shortcut icon" href="../../library/imgs/favicon/markerfavicon.png" />
            <meta name="msapplication-TileColor" content="#ffc40d" />
            {/* <meta name="msapplication-config" content={favicon("browserconfig.xml")} /> */}
            <meta name="theme-color" content="#ffffff" />


        </Helmet>
    );
}

export default Meta;
