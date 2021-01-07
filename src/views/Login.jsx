import React from 'react';
// import { withRouter, Redirect} from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import logo from '../images/logo-principal.png';
// import prueba from '../images/imagen-referencial.jpg';
// import firebase from '../controller/firebaseConfig';
// import { AuthContext } from '../controller/Auth';
import logo1 from '../images/photo-login1.jpeg';
import logo2 from '../images/photo-login2.jpeg';
import logo3 from '../images/photo-login3.jpeg';
import logo4 from '../images/photo-login4.jpeg';

const Login = () => {
//   const handleLogin = useCallback(
//     async (event) => {
//       event.preventDefault();
//       const { email, password } = event.target.elements;
//       try {
//         await firebase
//           .auth()
//           .singInWithEmailAndPassword(email.value, password.value);
//         history.push('/');
//       } catch (error) {
//         alert(error);
//       }
//     },
//     [history],
//   );
  // const { currentUser } = useContext(AuthContext);
  // if (currentUser) {
  //   return <Redirect to="/" />;
  // }
  return (
    <div className="row p-0 m-0 justify-content-center align-items-center vh-100">
      <div className="col-md-7 p-0 p-md-5">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block h-100"
              src={logo1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block h-100"
              src={logo2}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block h-100"
              src={logo3 }
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block h-100"
              src={logo4 }
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="col-sm-8 col-md-6 col-lg-4 col-xl-3">
        <div className="d-flex justify-content-center">
          <img className="size-img mt-2" src={logo} alt="Logo Costa del sol" />
        </div>
        <form className="text-center" >
          <p>Ingresa tu usuario y contraseña de red</p>
          {/* <select name="type" className="form-control" >
              <option>Tipos de usuario</option>
              <option value="sell">Socios</option>
              <option value="buy">Vigilantes</option>
          </select> */}
          <input type="email" name="email" className="form-control my-3 bottom px-0" placeholder="DNI" required />
          <input type="password" name="pass" className="form-control my-3 bottom px-0" placeholder="CONTRASEÑA" required />
          <button className="btn btn-blue my-3 text-white rounded-pill-6 w-90" type="submit">INICIAR SESIÓN</button>
          <p> Olvidaste tu contraseña recuperar contraseña</p>
        </form>
      </div>
    </div>
  );
};
export default Login;
