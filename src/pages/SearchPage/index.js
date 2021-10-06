import React from "react";
import { useHistory } from "react-router-dom";

export default function SearchPage() {
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
                  class="nav-link active"
                  href="#search"
                  onClick={() => history.push("/search-page")}
                >
                  Search
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#search"
                  onClick={() => history.push("/checkout")}
                >
                  Checkout
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
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

      {/* <!--Akhir Navbar--> */}

      {/* <!--Search--> */}

      <section id="search">
        <div class="container">
          <div class="row text-center mb-2 pt-5">
            <div class="col mt-3">
              <h2>Search</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Office Electronics"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* <!--Akhir Search--> */}

      {/* <!-- Search--> */}

      <section id="search">
        <div class="container">
          <div class="row text-sm-start mb-4 fs-6 pt-9">
            <div class="col-6 md-6 mt-3">
              <h4 class="fw-lighter">Hasil Pencarian</h4>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-4">
              <div class="card" onClick={() => history.push("/detail")}>
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  class="card-img-top"
                  alt="projects1"
                />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  class="card-img-top"
                  alt="projects2"
                />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img
                  src="https://images.unsplash.com/photo-1604088069732-ff0249c1e824?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGVsZWN0cm9uaWNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  class="card-img-top"
                  alt="projects3"
                />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-5">
              <div class="card">
                <img
                  src="https://images.unsplash.com/photo-1586645068267-21a3e8949fdb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  class="card-img-top"
                  alt="projects4"
                />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-5">
              <div class="card">
                <img
                  src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGVsZWN0cm9uaWNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  class="card-img-top"
                  alt="projects5"
                />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--Akhir Search--> */}

      {/* <!-- Other --> */}

      <section id="other">
        <div class="container">
          <div class="row text-center pt-5">
            <div class="col">
              <h2>Other</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-4 mt-5">
              <div class="card">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  class="card-img-top"
                  alt="projects1"
                />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-5">
              <div class="card">
                <img
                  src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  class="card-img-top"
                  alt="projects2"
                />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-5">
              <div class="card">
                <img
                  src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  class="card-img-top"
                  alt="projects3"
                />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-5">
              <div class="card">
                <img
                  src="https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGVsZWN0cm9uaWNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  class="card-img-top"
                  alt="projects3"
                />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-5">
              <div class="card">
                <img
                  src="https://images.unsplash.com/photo-1532186773960-85649e5cb70b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGVsZWN0cm9uaWNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  class="card-img-top"
                  alt="projects3"
                />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-5">
              <div class="card">
                <img
                  src="https://images.unsplash.com/photo-1592659762303-90081d34b277?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGVsZWN0cm9uaWNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  class="card-img-top"
                  alt="projects3"
                />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Akhir Other --> */}

      {/* <!-- Contact --> */}

      <section id="contact">
        <div class="container">
          <div class="row text-center pt-5">
            <div class="col text-center">
              <h2>Contact Us</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6">
              <form>
                <div class="mb-3">
                  <label for="name" class="form-label">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    aria-describedby="name"
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="pesan" class="form-label">
                    Pesan
                  </label>
                  <textarea class="form-control" id="pesan" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">
                  Kirim
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Akhir Contacts --> */}

      {/* <!-- Footer --> */}

      <footer class="bg-primary text-white text-center">
        <p>
          Created APK by
          <a
            href="https://www.instagram.com/napermanaa1/"
            class="text-white fw-bold"
          >
            EL Market.
          </a>
        </p>
      </footer>

      {/* <!-- Akhir Footer --> */}
    </>
  );
}
