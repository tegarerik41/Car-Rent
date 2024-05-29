import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import CarImg1 from "../images/cars-big/avanza-box.jpg";
import CarImg2 from "../images/cars-big/terios.jpg";
import CarImg3 from "../images/cars-big/xpander-box.png";
import CarImg4 from "../images/cars-big/reborn.png";
import { IconCar, IconPhone, IconStar } from "@tabler/icons-react";
import { useState } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "./CarData";

function Models() {
  return (
    <>
      <section className="models-section">
        <HeroPages name="Vehicle Models" />
        <div className="container">
        <div className="pick-container">
            <div className="pick-container__title">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
                <h3>Vehicles Models</h3>
                <h2>Include fuel and driver</h2>
                </div>
                </div>
          <div className="models-div">
            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg1} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Toyota Avanza</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$47</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; Toyota
                    </span>
                    <span style={{ textAlign: "right" }}>
                    <IconCar /> $29 Half Day &nbsp; 
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                    <IconCar /> Gasoline &nbsp; 
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                  <a
                    onClick={(e) => {e.preventDefault(); // Mencegah aksi default dari tag <a>
                    window.location.href = "https://wa.me/628882587204"; // Mengarahkan ke WhatsApp
                  }}
                  href="https://wa.me/628882587204"
                  >
                     Book Via WA
                     </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg2} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Toyota Terios</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$50</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; Toyota
                    </span>
                    <span style={{ textAlign: "right" }}>
                    <IconCar /> $32/Half Day &nbsp; 
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                    <IconCar /> Gasoline &nbsp; 
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                  <a
                    onClick={(e) => {e.preventDefault(); // Mencegah aksi default dari tag <a>
                    window.location.href = "https://wa.me/628882587204"; // Mengarahkan ke WhatsApp
                  }}
                  href="https://wa.me/628882587204"
                  >
                     Book Via WA
                     </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg3} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Xpander</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$54</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; Mitsubishi
                    </span>
                    <span style={{ textAlign: "right" }}>
                    <IconCar /> $35/Half Day &nbsp; 
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                    <IconCar /> Gasoline &nbsp; 
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                  <a
                    onClick={(e) => {e.preventDefault(); // Mencegah aksi default dari tag <a>
                    window.location.href = "https://wa.me/628882587204"; // Mengarahkan ke WhatsApp
                  }}
                  href="https://wa.me/628882587204"
                  >
                     Book Via WA
                     </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={CarImg4} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Innova Reborn</p>
                      <span>
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                        <IconStar width={15} height={15} />
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>$63</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <IconCar /> &nbsp; Toyota
                    </span>
                    <span style={{ textAlign: "right" }}>
                    <IconCar /> $44/Half Day &nbsp; 
                    </span>
                    <span>
                      <IconCar /> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Diesel &nbsp; <IconCar />
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                  <a
                    onClick={(e) => {e.preventDefault(); // Mencegah aksi default dari tag <a>
                    window.location.href = "https://wa.me/628882587204"; // Mengarahkan ke WhatsApp
                  }}
                  href="https://wa.me/628882587204"
                  >
                     Book Via WA
                     </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <IconPhone width={40} height={40} />
                <h3>(+62) 8882587204</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

function PickCar() {
  const [active, setActive] = useState("SecondCar");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Vehicle Models</h3>
              <h2>Shuttle YIA Airport - Yogyakarta City</h2>
              <p>
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p>
            </div>
            <div className="pick-container__car-content">
              {/* pick car */}
              <div className="pick-box">
                <button
                  className={`${coloringButton("btn1")}`}
                  onClick={() => {
                    setActive("SecondCar");
                    btnID("btn1");
                  }}
                >
                  Toyota Avanza
                </button>
                <button
                  className={`${coloringButton("btn2")}`}
                  id="btn2"
                  onClick={() => {
                    setActive("FirstCar");
                    btnID("btn2");
                  }}
                >
                  Toyota Terios
                </button>
                <button
                  className={`${coloringButton("btn3")}`}
                  id="btn3"
                  onClick={() => {
                    setActive("ThirdCar");
                    btnID("btn3");
                  }}
                >
                  Mitsubishi XPander
                </button>
                <button
                  className={`${coloringButton("btn4")}`}
                  id="btn4"
                  onClick={() => {
                    setActive("FourthCar");
                    btnID("btn4");
                  }}
                >
                  Innova Reborn
                </button>
                <button
                  className={`${coloringButton("btn5")}`}
                  id="btn5"
                  onClick={() => {
                    setActive("FiftyCar");
                    btnID("btn5");
                  }}
                >
                  Toyota Hiace 12 Seat
                </button>
              </div>

              {active === "FirstCar" && <CarBox data={CAR_DATA} carID={0} />}
              {active === "SecondCar" && <CarBox data={CAR_DATA} carID={1} />}
              {active === "ThirdCar" && <CarBox data={CAR_DATA} carID={2} />}
              {active === "FourthCar" && <CarBox data={CAR_DATA} carID={3} />}
              {active === "FiftyCar" && <CarBox data={CAR_DATA} carID={4} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export default Models;
