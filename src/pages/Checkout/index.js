import React from "react";
import { useHistory } from "react-router-dom";

export default function Checkout() {
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
      <div className="background-image">
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <div className="container-fluid text-light">
            <Link className="navbar-brand text-light" to="/keranjang">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </Link>
            <button
              className="navbar-toggler text-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon text-light"></span>
            </button>
          </div>
        </nav> */}
        <section id="projects" className="text-center">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="bg-transparent text-light">
                  <h1>Alamat Pengiriman</h1>
                  <h6>
                    trixy. (+62) 81292392209 JL.Buaya IX no.99 pondok indah KOTA
                    BEKASI-MUSTIKA,SARI,JAYA,JAWA BARAT,ID 14045
                  </h6>
                </div>
                <h1 className="text-light">
                  <img
                    src="https://th.bing.com/th/id/OIP.tR1cEv2oswraLVQd73xfYgHaHa?w=169&h=180&c=7&r=0&o=5&pid=1.7"
                    alt="gambar-aminasi"
                    width="50"
                    className="rounded-circle text-light"
                  />
                  ROZES.STORE
                </h1>
                <div
                  className="card mb-3 container bg-transparent"
                  style={{ maxWidth: "540px" }}
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        className="mt-300"
                        src="https://th.bing.com/th/id/OIP.ceAFwQY6RIRtJuh2W_ioNAHaFl?w=272&h=204&c=7&r=0&o=5&pid=1.7"
                        alt="gambar-aminasi"
                        width="200"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title text-light">
                          Laptop Geming ROG
                        </h5>
                        <p className="card-text text-light">RP.13.499.999</p>
                        <p className="card-text">
                          <small className="text-light"></small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-transparent text-light">
                  <h1>OPSI PENGIRIMAN</h1>
                  <h3>Regular</h3>
                  <h6>akan diterima pada tanggal 27 jul-30 jul</h6>
                </div>
                <div className="bg-transparent text-light">
                  <h3>Pesan: Giveaway</h3>
                </div>
                <div className="bg-transparent text-light">
                  <h3>Total Pesanan (1 Produk):RP 13.499.999</h3>
                </div>
                <div className="bg-transparent text-light">
                  <h3>Metode Pembayaran:BANK BCA</h3>
                </div>
                <div className="bg-transparent text-light">
                  <h6>Subtotal untuk produk :RP 13.499.999</h6>
                  <h6>Subtotal Pengiriman :RP 17.000</h6>
                  <h6>Biaya penanganan:RP 4.500</h6>
                  <h1>Total Pembayaran: RP 13.521.499</h1>
                </div>
                <section className="contact">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <form>
                          <div className="mb-3 form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="exampleCheck1"
                            />
                            <label
                              className="form-check-label text-white"
                              for="exampleCheck1"
                            >
                              Semua SupTotal: RP 13.521.499
                            </label>
                          </div>
                          <button className="btn btn-primary">Checkout</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
