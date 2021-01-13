import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup , Button} from 'react-bootstrap';
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
      <div className="sub-navbar">
        <Link to="/partners">
            <i class='bx bxs-chevron-right'></i>
            <span> Socios</span>
          </Link>
        <i class='bx bxs-chevron-right'></i>
        <span>Solicitudes de Socios</span>
      </div>
      <SideBar/>
      <section className="containeroption">
        <ListGroup >
          {
            listPartnersRequests.map((request)=>{
              return(
                <ListGroup.Item className="ListGroup-Item">{request.name}
                <Link to="/guestEntrance">
                  <Button variant="primary">{request.buton}</Button>
                </Link>
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
