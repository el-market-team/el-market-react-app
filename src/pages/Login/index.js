import React from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
          <a class="navbar-brand" href="#logo">
            EL Market
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <form>
        {/* <!--Login--> */}
        <section id="login">
          <div class="container mb-5 pt-5">
            <div class="row text-center">
              <div class="col text-center">
                <h2>Login</h2>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-6">
                <form>
                  <div class="mb-3">
                    <label for="name" class="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="Username"
                      aria-describedby="name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="name" class="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="Email"
                      aria-describedby="name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">
                      Password
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="password"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* <!--Akhir Login--> */}

        {/* <!--Button--> */}
        <section id="button">
          <div class="container">
            <div class="row text-center">
              <div class="col">
                <button
                  class="btn btn-primary btn-lg"
                  onClick={() => history.push("/home")}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* <!--Akhir Button--> */}
      </form>
    </>
  );
}
