import React from 'react'

import savelogo from "./magazines_assets/savelogo.svg"
import boek from "./magazines_assets/boek.svg"
import '../../App.css';
import styled from 'styled-components';
import { Daata } from "./data";


const ItemBuitenBorder = styled.div`
     border-radius: 5px;
     width: 200px;
      height: 280px;
      display: flex;      position:relative;

      justify-content: center;
      align-items: center; 
      background: rgb(232, 232, 232);
      flex-direction: column;     
      transition: all .5s;
      &:hover {transform: scale(1.06);}
`;
const ItemBorder = styled.div`
     Border: rgba(99, 99, 99, 0.2) 1px solid;
     border-radius: 5px;  overflow: hidden; /* Hide scrollbars */
     width: 150px;
      height: 204px;
      display: flex;
      flex-direction: column;
      position:relative;
      padding: 10px;
      box-shadow: rgba(99, 99, 99, 0.3) 2px 2px 8px 0px;
background: white;
`;

const Magazine = styled.img`
height: 234px;
  width: 184px;
  position: absolute;
  top: -5px;
  left: -4px;
  background:none;
`
const Logosave = styled.img`
box-shadow: rgba(99, 99, 99, 0.6) 2px 2px 4px 2px;
height: 13%;
  width: auto;
  position: absolute;
  top:11px;
  padding: 2px;
  left: 157px;
  border-radius: 5px;
z-index:990;
background: white;
`;
const Datetxt = styled.div`
color: gray;
font-size: 12px;
width: 170px;
margin-top: 5px;
display: flex;
justify-content: space-between;
`;
const Kleinboek = styled.img`
width: 10%
`;

function Magazineitem() {
  return (
    <>
      {Daata.map((ijustneedone) => (

        <ItemBuitenBorder>            <Logosave src={savelogo} alt="savelogo" />

          <ItemBorder>
            <Magazine src={`${ijustneedone.image}`} alt={`${ijustneedone.image}`} />
          </ItemBorder>
          <Datetxt>  01-08-2022
            <Kleinboek src={boek} alt="boek" />
            01-08-2022
          </Datetxt>
        </ItemBuitenBorder>
      ))}
    </>
  )
}

export default Magazineitem