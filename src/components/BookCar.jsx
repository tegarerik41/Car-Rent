import CarImg1 from "../images/cars-big/avanza-box.jpg";
import CarImg2 from "../images/cars-big/terios.jpg";
import CarImg3 from "../images/cars-big/xpander-box.png";
import CarImg4 from "../images/cars-big/reborn.png";
import { IconCar, IconStar } from "@tabler/icons-react";

function Models() {
  return (
    <>
      <section className="models-section">
        
        <div className="container">
        <div className="pick-container">
            <div className="pick-container__title">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
                <h3>Vehicles Models</h3>
                <h2>Include fuel and driver</h2>
                <p>
                Choose from a variety of our amazing vehicles to rent for your next adventure or business trip, including fuel and a driver.
              </p>
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
      </section>
    </>
  );
}

export default Models;
