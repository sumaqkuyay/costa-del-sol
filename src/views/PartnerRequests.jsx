import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup , Button, Navbar, Container, NavbarBrand} from 'react-bootstrap';
import SideBar from '../components/SideBar'

const PartnerRequests = () =>{
  const listPartnersRequests = [
    {name: 'Ingreso de invitados', buton:'ingresar'},
    {name: 'Solicitudes de Estacionamiento', buton:'ingresar'},
    {name: 'Visitante Express', buton:'ingresar'},
    {name: 'Solicitud de Alquiler', buton:'ingresar'},
    {name: 'Solicitudes Extraordinarias', buton:'ingresar'},
    {name: 'Solicitud de Servicios', buton:'ingresar'},
    {name: 'Solicitud de Grill', buton:'ingresar'},
  ]
  return(
    <>
      <Navbar className="sub-nav" expand="lg" variant="light">
        <Container>
          <NavbarBrand className="materials-card-header-little-section">
            <Link to="/materials">
              <p>Socios</p>
            </Link>
            <a href="/#" className="nav__link act">
              <i class='bx bxs-chevron-right'></i>
              <span className="nav__name">Solicitud de Socios</span>
            </a>
          </NavbarBrand>
        </Container>
      </Navbar>
      <SideBar/>
      <section className="container align-items-center ">
        <ListGroup >
          {
            listPartnersRequests.map((request)=>{
              return(
                <ListGroup.Item className="ListGroup-Item">{request.name}
                <Button variant="primary">{request.buton}</Button>
                </ListGroup.Item>
              );
            })
          }
        </ListGroup>
      </section>
    </>
  );
};
export default PartnerRequests;
