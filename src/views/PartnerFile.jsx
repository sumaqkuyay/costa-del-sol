import React from 'react'
import SideBar from '../components/SideBar'
import { Link } from 'react-router-dom';
import avatarsocios from '../images/account_circle_azul.png';
import ojito from '../images/visibility.png';
import plantilla from '../images/pantillainvitado.png';

const PartnerFile = () =>{
   const listMembers = [
    {state:"habilitado", name: 'Javier Gomez', codigo:'SOC-0102' },
    {state:"habilitado", name: 'Joseph Henry Arias Vidal', codigo:'SOC-0032' },
    {state:"habilitado", name: 'Daniel Dilmar Asto Fernández', codigo:'SOC-0011' },
    {state:"habilitado", name: 'Enrique Teodoro Benjarano Caballero', codigo:'SOC-0102' },
    {state:"habilitado", name: 'Julio César Borda Salazar', codigo:'SOC-0120' },
    {state:"habilitado", name: 'Julio César Borda Salazar', codigo:'SOC-0120' },
    {state:"habilitado", name: 'Julio César Borda Salazar', codigo:'SOC-0120' },
    {state:"habilitado", name: 'Julio César Borda Salazar', codigo:'SOC-0120' },
    {state:"habilitado", name: 'Julio César Borda Salazar', codigo:'SOC-0120' },
    {state:"habilitado", name: 'Julio César Borda Salazar', codigo:'SOC-0120' },
  ]
    return(
        <>
          <div className="sub-navbar">
            <Link to="/partners">
                <i class='bx bxs-chevron-right'></i>
                <span> Socios</span>
            </Link>
            <i class='bx bxs-chevron-right'></i>
            <span>Ficha de socio</span>
          </div>
          <SideBar/>
          <div className="search">
            <input placeholder="Filtrar por " required />
          </div>
          <div className="section-membersCard overflow-auto">
          {
            listMembers.map((element)=>{

                return(
                <div className="members-card">
                  <div className="text-card">
                    <p>{element.state}</p>
                  </div>
                  <div className="body-card">
                    <img src={avatarsocios} alt="" />
                    <Link to="/home"> <p className="texto">{element.name}</p></Link>
                    <p>{element.codigo}</p>
                  </div>
                  <div className="footer-card">
                    <div className="izquierdo">
                      <p> Exceso de invitados</p>
                    </div>
                    <div className="derecho">
                      <p>05</p>
                      <img src={ojito} alt=""/>
                    </div>
                  </div>
                </div>
                );
            })
          }

          </div>
        {/* <img className="plantilla" src={plantilla} alt="" /> */}
        </>
    );
}
export default PartnerFile;
