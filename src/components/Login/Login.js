import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import styles from "./Login.module.css";
import axios from "axios";

const Login = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     history.replace("/home");
  //   }
  // }, [history]);
  return (
    <section className={styles.auth}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          let errores = {};
          //Validacion email
          if (!values.email) {
            errores.email = "Por favor ingrese un Email";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              values.email
            )
          ) {
            errores.email =
              "El email solo puede contener letras, numeros, puntos, guiones y guion bajo";
          }

          if (!values.password) {
            errores.password = "Por favor ingrese una Contraseña";
          }
          return errores;
        }}
        onSubmit={(values) => {
          axios
            .post("http://challenge-react.alkemy.org", values)
            .then((res) => {
              console.log(res.data.token);
              authCtx.login(res.data.token);
              localStorage.setItem("token", res.data.token);
              history.replace("/home");
            })
            .catch((err) => {
              alert("Datos incorrectos");
              console.log(err);
            });
        }}
      >
        {({ errors }) => (
          <Form>
            <h1>Login</h1>
            <div className={styles.control}>
              <label htmlFor="email">Email</label>
              <Field id="email" type="email" name="email" placeholder="Email" />
              <ErrorMessage
                name="email"
                component={() => (
                  <div className={styles.error}>{errors.email}</div>
                )}
              />
            </div>
            <div className={styles.control}>
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                type="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage
                name="password"
                component={() => (
                  <div className={styles.error}>{errors.password}</div>
                )}
              />
            </div>

            <button type="submit" className={styles.button}>
              ENVIAR
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Login;
