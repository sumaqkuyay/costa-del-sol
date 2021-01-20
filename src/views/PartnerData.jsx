import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../components/SideBar';

const PartnerData = () =>{

  return(
    <>
     <div className="sub-navbar">
        <Link to="/materials">
          <span>Datos de Asociado</span>
        </Link>
      </div>
      <div className="textoRegreso">
        <Link to="/guestEntrance" className="nav__link act">
          <i class='bx bxs-chevron-left'></i>
          <span className="nav__name">Regresar</span>
        </Link>
      </div>
     <SideBar/>
     <div className="section-form"> sabina</div>
    </>

  );

}
export default PartnerData;