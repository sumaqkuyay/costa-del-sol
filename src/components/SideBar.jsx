import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-principal.png';
import avatar from '../images/account_circle.png';


const SideBar = () => {

  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

//   const menuItems = [
//     {name: 'Mando Principal', to: '/MandoPrincipal', subMenuItems: [] },
//     {name: 'Socios', to: '/Socios', 
//       subMenuItems: [
//         { name: 'Crear Nuevo Socio', to: '/NuevoSocio'},        
//         { name: 'Ficha de socio', to: '/FichaSocio'},
//         { name: 'Solicitud de socios', to: '/SolicitudSocios'},
//         { name: 'Stand By', to: '/StandBy'},
//       ] },
//     {name: 'Vigilancia', to: '/Vigilancia', subMenuItems: [] },
//     {name: 'Comunicaciones', to: '/Comunicaciones',  subMenuItems: [] },
//     {name: 'Informes', to: '/Informes', subMenuItems: [] },
//     {name: 'Cobros', to: '/Cobros', subMenuItems: [] },
//     {name: 'Eventos', to: '/Eventos', subMenuItems: [] },
//   ];

  return (
    <>
      <header className={sidebar?"header body-pd":"header"}  id="header">
          <div className="header__toggle">
              <i className='bx bx-menu' id="header-toggle" onClick={showSidebar} ></i>
          </div>

          <div className="header__img">
              <img src={avatar} alt="" />
          </div>
      </header>
      <div className={sidebar?"l-navbar show":"l-navbar"} id="nav-bar">
          <nav className="nav">
              <div>
                  <a href="/#" className="logo nav__logo">
                    <img className="img-logo" src={logo} alt="Logo Costa del sol" />
                  </a>

                  <div className="nav__list">
                      <a href="/#" className="nav__link act">
                          <i className='bx bxs-bar-chart-square nav__icon' ></i>
                          <span className="nav__name">Mando Principal</span>
                      </a>

                      <div href="/#" className="nav__link active">
                          <i className='bx bxs-group nav__icon' ></i>
                          <span className="nav__name">Socios</span>
                          <i className="bx bxs-chevron-down active_link"></i>
                          
                          <ul className="active_menu">
                            <li className="active_item"><a href="/home" className="active_sublink">Crear nuevo socio</a></li>
                            <li className="active_item"><Link to ="/partnerFile" className="active_sublink">Ficha de socio</Link></li>
                            <li className="active_item"><Link to ="/partnerRequests" className="active_sublink">Solicitudes de socios</Link></li>
                            <li className="active_item"><a href="/home" className="active_sublink">Stand By</a></li>
                          </ul>
                      </div>
                      
                      <a href="/#" className="nav__link">
                          <i className='bx bxs-check-shield nav__icon' ></i>
                          <span className="nav__name">Vigilancia</span>
                      </a>

                      <a href="/#" className="nav__link">
                          <i className='bx bxs-envelope nav__icon' ></i>
                          <span className="nav__name">Comunicaciones</span>
                      </a>

                      <a href="/#" className="nav__link">
                          <i className='bx bx-task nav__icon' ></i>
                          <span className="nav__name">Informes</span>
                      </a>

                      <a href="/#" className="nav__link">
                          <i className='bx bxs-wallet nav__icon' ></i>
                          <span className="nav__name">Cobros</span>
                      </a>

                      <a href="/#" className="nav__link">
                          <i className='bx bxs-calendar-star nav__icon' ></i>
                          <span className="nav__name">Eventos</span>
                      </a>

                      <a href="/#" className="nav__link">
                          <i className='bx bxs-shopping-bag nav__icon' ></i>
                          <span className="nav__name">Control de gastos</span>
                      </a>

                      <a href="/#" className="nav__link">
                          <i className='bx bxs-folder nav__icon' ></i>
                          <span className="nav__name">Gestor Documental</span>
                      </a>
                  </div>
              </div>

              {/* <a href="/#" className="nav__link">
                  <i className='bx bx-log-out nav__icon' ></i>
                  <span className="nav__name">Log Out</span>
              </a> */}
          </nav>
      </div>
    </>
    );
}

export default SideBar;