import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import SideBar from '../components/SideBar'

const GuestEntrance = () => {
  // const listGuestEntrance = [
  //   {name: 'Javier Gomez', buton:'ingresar'},
  //   {name: 'Luis Paiva', buton:'ingresar'},
  //   {name: 'Mónica Guerra', buton:'ingresar'},
  //   {name: 'Francisco Hermoza', buton:'ingresar'},
  //   {name: 'Solicitudes Extraordinarias', buton:'ingresar'},
  //   {name: 'Solicitud de Servicios', buton:'ingresar'},
  //   {name: 'Solicitud de Grill', buton:'ingresar'},
  // ]
  return(
    <>
      <div className="sub-navbar">
        <Link to="/partners">
            <i class='bx bxs-chevron-right'></i>
            <span> Socios</span>
          </Link>
          <Link to="/partnerRequests">
            <i class='bx bxs-chevron-right'></i>
            <span> Solicitud socios</span>
          </Link>
        <i class='bx bxs-chevron-right'></i>
        <span>Ingreso invitados</span>
      </div>
      <SideBar/>
      <div className="search">
        <input placeholder="Filtrar por " required />
      </div>
      <Table className="table" striped bordered hover>
        <thead>
          <tr>
            <th>Nombre Socio</th>
            <th>Fecha de solicitud</th>
            <th>Fecha de ingreso</th>
            <th>Nro. de invitados </th>
            <th>Estado socio </th>
            <th>Editar estado </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Link to="/guestList">
            <td>Javier Gomez</td>
            </Link>
            <td>30/11/2020</td>
            <td>O4/12/2020</td>
            <td>8</td>
            <td>Habilitado</td>
            <td>H</td>
          </tr>
          <tr>
            <td>Luis Paiva</td>
            <td>30/11/2020</td>
            <td>O5/12/2020</td>
            <td>10</td>
            <td>Habilitado</td>
            <td>H</td>
          </tr>
          <tr>
            <td>Luis Paiva</td>
            <td>30/11/2020</td>
            <td>O5/12/2020</td>
            <td>10</td>
            <td>Habilitado</td>
            <td>H</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
export default GuestEntrance;