import React from "react";
import { useHistory } from "react-router-dom";

export default function Chat() {
  const history = useHistory();

  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-primary shadow sm fixed-top"
        mb-3
      >
        <div class="container">
          <a class="navbar-brand" href="#navbar">
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
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a
                  class="nav-link"
                  aria-current="page"
                  href="#home"
                  onClick={() => history.push("/home")}
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#search"
                  onClick={() => history.push("/search-page")}
                >
                  Search
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  href="#chat"
                  onClick={() => history.push("/chat")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-chat-text"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                    <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
                  </svg>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#keranjang"
                  onClick={() => history.push("/keranjang")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-cart3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="background-image">
        {/* <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
          <div class="container-fluid text-light">
            <Link class="navbar-brand text-light" to="/keranjang">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                class="bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </Link>
            <button
              class="navbar-toggler text-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon text-light"></span>
            </button>
          </div>
        </nav> */}
        <section id="projects" class="text-center">
          <div class="container">
            <div class="row">
              <div class="col">
                <div
                  class="card mb-3 container bg-transparent"
                  style={{ maxWidth: "540px" }}
                >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src="https://th.bing.com/th/id/OIP.PkCXX4ZgdWiMCr0UJjaLVgHaHa?w=189&h=189&c=7&r=0&o=5&pid=1.7"
                        alt="gambar-aminasi"
                        width="150"
                        class="rounded-circle"
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title text-light">SCID.STORE</h5>
                        <p class="card-text text-light">
                          Apakah barang ini masih ada ?
                        </p>
                        <p class="card-text">
                          <small class="text-light">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="card mb-3 container bg-transparent"
                  style={{ maxWidth: "540px" }}
                >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src="data:image/jpeg;base64,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"
                        alt="gambar-aminasi"
                        width="150"
                        class="rounded-circle"
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title text-light">FAITH.STORE</h5>
                        <p class="card-text text-light">
                          Apakah barang ini masih ada?
                        </p>
                        <p class="card-text">
                          <small class="text-light">
                            Last updated 4 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="card mb-3 container bg-transparent"
                  style={{ maxWidth: "540px" }}
                >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src="https://th.bing.com/th/id/OIP.tR1cEv2oswraLVQd73xfYgHaHa?w=169&h=180&c=7&r=0&o=5&pid=1.7"
                        alt="gambar-aminasi"
                        width="150"
                        class="rounded-circle"
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title text-light">ROZES.STORE</h5>
                        <p class="card-text text-light">
                          Apakah barang ini masih ?
                        </p>
                        <p class="card-text">
                          <small class="text-light">
                            Last updated 5 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="card mb-3 container bg-transparent"
                  style={{ maxWidth: "540px" }}
                >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src="https://th.bing.com/th/id/OIP._M0_i966HRKuEWubIOFkMwHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7"
                        alt="gambar-aminasi"
                        width="150"
                        class="rounded-circle"
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title text-light">ANA.STORE</h5>
                        <p class="card-text text-light">
                          Apakah barang ini masih ?
                        </p>
                        <p class="card-text">
                          <small class="text-light">
                            Last updated 6 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#0099ff"
                    fill-opacity="1"
                    d="M0,256L34.3,240C68.6,224,137,192,206,176C274.3,160,343,160,411,176C480,192,549,224,617,234.7C685.7,245,754,235,823,218.7C891.4,203,960,181,1029,192C1097.1,203,1166,245,1234,240C1302.9,235,1371,181,1406,154.7L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
