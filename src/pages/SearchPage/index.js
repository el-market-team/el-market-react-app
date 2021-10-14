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
              {" "}
              <input
                class="form-control me-2"
                type="search"
                placeholder="Samsung"
                aria-label="Search"
              />{" "}
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* // <!--Akhir Search--> */}

      {/* <!-- Search--> */}
      <section id="search">
        <div class="container">
          <div class="row text-sm-start mb-4 fs-6 pt-9 ">
            <div class="col-6 md-6 mt-3">
              <h4 class="fw-lighter">Hasil Pencarian </h4>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-4">
              <div class="card" onClick={() => history.push("/detail")}>
                <img
                  src="img/laptop.jpg"
                  class="card-img-top"
                  alt="baris pertama"
                />
                <div class="card-body text-center">
                  <p class="card-text">
                    LAPTOP ASUS A412FA N5405U 8GB 1TB UHD GRAPHIC WIN10 SLIM
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img
                  src="img/galaxys21 ultra g.webp"
                  class="card-img-top"
                  alt="baris kedua"
                />
                <div class="card-body text-center">
                  <p class="card-text">Galaxy S21 Ultra 5G</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img
                  src="img/galaxy20fe.webp"
                  class="card-img-top"
                  alt="baris ketiga"
                />
                <div class="card-body text-center">
                  <p class="card-text">Galaxy S20 F</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-5">
              <div class="card">
                <img
                  src="img/id-galaxy-s10-sm-g970-sm-g970fzwdxid-thumb-211380564.webp"
                  class="card-img-top"
                  alt="baris keempat"
                />
                <div class="card-body text-center">
                  <p class="card-text">Galaxy S10</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-5">
              <div class="card">
                <img
                  src="img/id-galaxy-s21-5g-g991-371107-sm-g991bzvdxid-thumb-368338109.webp"
                  class="card-img-top"
                  alt="baris kelima"
                />
                <div class="card-body text-center">
                  <p class="card-text">Galaxy S21 5G</p>
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
                  src="img/id-galaxy-z-flip3-f711-5g-sm-f711bzeaxid-thumb-474118036.webp"
                  class="card-img-top"
                  alt="baris pertama bawah"
                />
                <div class="card-body text-center">
                  <p class="card-text">Galaxy Z Flip 3 5G</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-5">
              <div class="card">
                <img
                  src="img/id-galaxy-s10-lite-g770-sm-g770fzbixid-frontprismblue-thumb-204014484.webp"
                  class="card-img-top"
                  alt="baris kedua bawah"
                />
                <div class="card-body text-center">
                  <p class="card-text">Galaxy S10 Lite</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-5">
              <div class="card">
                <img
                  src="img/id-galaxy-m51-m515f-sm-m515fzkexid-lsideblack-thumb-295901771.webp"
                  class="card-img-top"
                  alt="baris ketiga bawah"
                />
                <div class="card-body text-center">
                  <p class="card-text">Galaxy M51</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-5">
              <div class="card">
                <img
                  src="img/id-galaxy-z-fold3-f926-5g-399109-sm-f926bzuzxid-thumb-481156492.webp"
                  class="card-img-top"
                  alt="baris keempat bawah"
                />
                <div class="card-body text-center">
                  <p class="card-text">Galaxy Z Fold 3 </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-5">
              <div class="card">
                <img
                  src="img/f1-QN700A-160x160.webp"
                  class="card-img-top"
                  alt="baris kelima bawah"
                />
                <div class="card-body text-center">
                  <p class="card-text">Samsung TV QN700A</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-5">
              <div class="card">
                <img
                  src="img/id-galaxy-a52s-5g-a528-sm-a528bzkhxid-thumb-497588277.webp"
                  class="card-img-top"
                  alt="baris keenam bawah"
                />
                <div class="card-body text-center">
                  <p class="card-text">Galaxy A52 5G</p>
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
          Created APK by{" "}
          <a href="https://www.instagram.com/napermanaa1/" fw-bold>
            EL Market.
          </a>
        </p>
      </footer>
      {/* <!-- Akhir Footer --> */}
    </>
  );
}
