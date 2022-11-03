
import { useSelector } from "react-redux";
import Icon from "@identitybuilding/idb-react-iconlib";
import React from "react";
import '../assets/css/Footer.css'


const Footer = () => {

	const translate = useSelector(state => state.general.translate);
	let social = [
		{ class: "idb", text: "BE0718.600.051", url: "https://identitybuilding.be", image: require('../assets/imgs/logos/idb/logo_idb_secundair.svg').default },
	]
	
	return (
		<footer>
			<div className="footerWrapper">

				{/* Information about identityBuilding bv */}
				<div className="footerSocial">
					{social.map(item => (
						<a className={item.class} href={item.url} key={item.class} rel="noopener noreferrer" target="_blank">
							<figure><img width='125' height='25px' src={item.image} alt={item.text} /></figure>
							{item.text}
						</a>
					))}
				</div>

				{/* Privacy message */}
				<div className="footerProtection">
					<a href="https://www.ondernemersnetwerk.be/#privacy" target="_blank" rel="noopener noreferrer">
						<Icon name="Protection" />
						<span>{translate("how_do_we_protect")}</span>
					</a>
				</div>

				{/* Links to our privacy pages */}
				<div className="footerPrivacy">
					<a href="mailto:support@ondernemersnetwerk.be">{translate("support")}</a>
					<a href="https://www.ondernemersnetwerk.be/privacy/policy" rel="noopener noreferrer" target="_blank">{translate("privacy_policy")}</a>
					<a href="https://www.ondernemersnetwerk.be/privacy/policy#terms" rel="noopener noreferrer" target="_blank">{translate("terms_and_conditions")}</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
