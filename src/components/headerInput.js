import React from 'react'
import ONcatnetwerklogo from "../assets/ONcatnetwerk.svg"
import ONnetwerklogo from "../assets/ONnetwerk.svg"
import Headerright from './headerright';
import { Link } from 'react-router-dom'


export default function headerInput() {
  return (
    <div>
      <div className="ONntk__header">      <img src={ONnetwerklogo} alt="ONlogo" className="ONntwk__headerONLogo" />
        <Link className="ONntwk__LinkHeaderLogo" to="/">
          <img src={ONcatnetwerklogo} alt="ONlogo" className="ONntwk__catLogo" />
        </Link>

        <Headerright />
      </div>
    </div >
  )
}
