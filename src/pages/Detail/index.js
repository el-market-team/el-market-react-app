import React from "react";
import { useHistory } from "react-router-dom";

export default function Detail() {
  const history = useHistory();
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sm fixed-top">
        <div className="container">
          <a className="navbar-brand" href="*">
            EL Market
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#back"
                  onClick={() => history.goBack()}
                >
                  Kembali
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#infoproduct">
                  Info Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#ulasan">
                  Ulasan
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#recomendasi">
                  Rekomendasi
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="*"></a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      {/* // <!-- Akhir Navbar --> */}

      {/* <!-- Jumbotron --> */}
      <section class="jumbotron text-center mb-5 pt-5">
        <img
          src="data:image/jpeg;base64,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"
          alt="gambar"
        />
        <p class="fw-bold fs-4">
          LAPTOP ASUS A412FA N5405U 8GB 1TB UHD GRAPHIC WIN10 SLIM
        </p>
        <p class="fw-bold fs-5 text-danger">Rp6.899.000</p>
        <hr class="my-4" />
      </section>
      {/* <!-- Akhir Jumbotron --> */}

      {/* <!-- Deskripsi--> */}
      <section id="deskripsi">
        <div class="container">
          <div class="row text-sm-between">
            <div class="col">
              <h4 class="fw-bold fs-6">
                Kondisi: Baru.
                <p> Berat: 4.000 Gram.</p> <p>Kategori: Laptop Consumer.</p>
                <p class="fw-bold">Spesifications :</p>
                <p>- Processor intel gold N5405U</p>
                <p>- RAM 8GB DDR4</p>
                <p>- Storage 1TB</p>
                <p>- OS Windows 10 Home</p>
                <p>- Graphics Card INTEL HD</p>
                <p>
                  - Display 14''" (16:9) LED backlit FHD (1920x1024)Glare, Ultra
                  Slim 200nits
                </p>
                <p>
                  - Ports 1x Microphone-in/Headphone-out jack, 1x USB 3.0 port,
                  1x HDMI, 1x MicroSD card reader, 1x USB 2.0 Port
                </p>
                <p>- Connectivity Integrated 802.11b/g/n + Bluetooth v4.0</p>
                <p>
                  - Includes 2 year warranty, VGA Web Camera, ASUS SonicMaster
                  Technology, Fingerprint
                </p>
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Akhir Deskripsi--> */}

      {/* <!-- Button-->  */}
      <section id="button">
        <div class="container">
          <div class="row text-end">
            <div class="col">
              <a class="btn btn-primary btn-lg" href="*" role="button">
                Buy Now
              </a>
              <a class="btn btn-primary btn-lg" href="*" role="button">
                Wishlist
              </a>
              <hr class="my-4" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Akhir Button-->  */}

      {/* <!-- Ulasan --> */}
      <section id="ulasan">
        <div class="container">
          <div class="row text-center">
            <div class="col text-center">
              <h2>Ulasan</h2>
            </div>
          </div>
          <div class="row justify-content-start">
            <div class="col mb-3 mt-3">
              <form>
                <div class="mb-3">
                  <p class="fst-normal fs-5">Krisnaars2@gmail.com</p>
                  <textarea class="form-control" id="pesan" rows="3">
                    Barang ini sangat bagus dan memuaskan
                  </textarea>
                </div>
              </form>
            </div>
          </div>
          <div class="row justify-content-start">
            <div class="col md-3 mt-3">
              <form>
                <div class="mb-3">
                  <p class="fst-normal fs-5">Bimaprada112@gmail.com</p>
                  <textarea class="form-control" id="pesan" rows="3">
                    Barang sangat sesuai ekspetasi dan cepat sampainya
                  </textarea>
                </div>
              </form>
            </div>
          </div>
          <div class="row justify-content-start">
            <div class="col mb-3 mt-3">
              <form>
                <div class="mb-3">
                  <p class="fst-normal fs-5">Jokopradipta001@gmail.com</p>
                  <textarea class="form-control" id="pesan" rows="3">
                    Sangat memuaskan barangnya, sudah berkali kali saya belanja
                    disini
                  </textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Akhir Ulasan --> */}

      {/* <!-- Recomendasi--> */}
      <section id="recomendasi">
        <div class="container">
          <div class="row text-center pt-5">
            <div class="col">
              <h2>Recomendasi</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-2 mt-5">
              <div class="card">
                <img
                  src="img/satu detailpage.jpg"
                  class="card-img-top"
                  alt="baris pertama"
                />
                <div class="card-body">
                  <p class="card-text">Arduino Nano </p>
                </div>
              </div>
            </div>
            <div class="col-md-2 mt-5">
              <div class="card">
                <img
                  src="img/dua detailpage.jpg"
                  class="card-img-top"
                  alt="baris kedua"
                />
                <div class="card-body">
                  <p class="card-text">Arduino Due</p>
                </div>
              </div>
            </div>
            <div class="col-md-2 mt-5">
              <div class="card">
                <img
                  src="img/tiga detailpage.jpg"
                  class="card-img-top"
                  alt="baris ketiga"
                />
                <div class="card-body">
                  <p class="card-text">Arduino Mega</p>
                </div>
              </div>
            </div>
            <div class="col-md-2 mt-5">
              <div class="card">
                <img
                  src="img/empat detailpage.jpg"
                  class="card-img-top"
                  alt="baris keempat"
                />
                <div class="card-body">
                  <p class="card-text">Arduino Fio</p>
                </div>
              </div>
            </div>
            <div class="col-md-2 mt-5">
              <div class="card">
                <img
                  src="img/lima detailpage.jpg"
                  class="card-img-top"
                  alt="baris kelima"
                />
                <div class="card-body">
                  <p class="card-text">Arduino Lilypad</p>
                </div>
              </div>
            </div>
            <div class="col-md-2 mt-5">
              <div class="card">
                <img
                  src="img/enam detailpage.jpg"
                  class="card-img-top"
                  alt="baris keenam"
                />
                <div class="card-body">
                  <p class="card-text">Arduino Leonardo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Akhir Recomendasi--> */}
    </>
  );
}
