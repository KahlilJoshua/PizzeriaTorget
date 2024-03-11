import { useEffect, useRef, useState } from "react";

export default function Homepage() {
  let reviewSlide = document.querySelector(".allReviews");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentReview, setReview] = useState(0);
  useEffect(() => {
    const blinkers = document.querySelectorAll(".blink");

    const intervalId = setInterval(() => {
      blinkers[currentIndex].style.transform = "translateY(-10px)";

      setCurrentIndex(currentIndex + 1);
      if (
        blinkers[blinkers.length - 1].style.transform == "translateY(-10px)" &&
        currentIndex == 0
      ) {
        blinkers[blinkers.length - 1].style.transform = "translateY(10px)";
      }
      if (currentIndex > 0) {
        blinkers[currentIndex - 1].style.transform = "translateY(10px)";
      }

      if (currentIndex >= blinkers.length - 1) {
        setCurrentIndex(0);
      }
    }, 1500);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="homepage">
      <div className="hero">
        <div className="blink-wrapper">
          <h1 className="blink">Välkommen</h1>
          <h1 className="blink">till</h1>
          <h1 className="blink">Pizzeria</h1>
          <h1 className="blink">Torget</h1>
        </div>
        <h3>SE VÅRAN MENY</h3>
      </div>
      <div className="news">
        <div className="wrapper scroller-inner">
          <div className="left">
            <div className="info">
              <h3>Vi har utkörning!</h3>
              <h4>Tel 0142-522 58</h4>
              <p>storgatan 18, Boxholm</p>
              <hr />
              <h4>Öppentider</h4>
              <p>Måndag-torsdag 11:00 - 21:00</p>
              <p>Fredag 11:00 - 01:00 (köket öppet till 23:00)</p>
              <p>Lördag 12:00 - 01:00 (köket öppet till 23:00)</p>
              <p>Söndag 12:00 - 21:00</p>
            </div>
            <div className="scroller">
              <div className="inner-scroller">
                <img src="./slice.png" alt="img" />
                <img src="./slice.png" alt="img" />
                <img src="./slice.png" alt="img" />
                <img src="./slice.png" alt="img" />
                <img src="./slice.png" alt="img" />
                <img src="./slice.png" alt="img" />
                <img src="./slice.png" alt="img" />
                <img src="./slice.png" alt="img" />
                <img src="./slice.png" alt="img" />
                <img src="./slice.png" alt="img" />
                <img src="./slice.png" alt="img" />
                <img src="./slice.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="right">
            <h3>Nyhet</h3>
            <img src="/pizzanews.png" alt="" />
            <h4>Vi har en ny pizza! Testa redan nu</h4>
            <p>ndw nawn dawni ad</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="about">
        <div className="wrapper">
          <div className="left">
            <h3>OM OSS</h3>
            <img src="./omossbild.jpg" alt="image" />
          </div>
          <div className="right">
            <div>
              <h4>Vi som jobbar här</h4>
              <p>
                Vi msdan ndw pawd mawd mapw a åwåm dåamd wm amwd amd Vi msdan
                ndw pawd mawd mapw a åwåm dåamd wm amwd amd Vi msdan ndw pawd
                mawd mapw a åwåm dåamd wm amwd amd Vi msdan ndw pawd mawd mapw a
                åwåm dåamd wm amwd amd
              </p>
              <h4>Historia</h4>
              <p>
                Vi msdan ndw pawd mawd mapw a åwåm dåamd wm amwd amd Vi msdan
                ndw pawd mawd mapw a åwåm dåamd wm amwd amd
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="reviews">
        <div className="wrapper">
          <h3>Så här säger våra kunder</h3>
          <div className="review-container">
            <div
              className="leftclick"
              onClick={() => {
                if (currentReview != 0) {
                  setReview(0);
                  console.log(currentReview);
                  reviewSlide.style.left = "0%";
                }
              }}
            ></div>
            <div
              className="rightclick"
              onClick={() => {
                if (currentReview != 3) {
                  setReview(currentReview + 1);
                  console.log(currentReview);
                  reviewSlide.style.left = "-" + currentReview + "00%";
                }
              }}
            ></div>
            <div className="allReviews">
              <div className="review1">
                <h1>God pizza!</h1>
                <p>
                  Alla vet vid detta laget att pizza skulle kunna kallas modern
                  husmanskost. Och i denna lokal får du en god sådan!
                </p>
                <div className="stars">
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                </div>
              </div>
              <div className="review2">
                <h1>Utmärkt pizza</h1>
                <p>
                  Utmärkt pizza! Sallad, pizzabröd och bra kaffe ingick. Vi var
                  tre nöjda gäster. Rent i restaurangen och på toaletten.
                </p>
                <div className="stars">
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                </div>
              </div>
              <div className="review3">
                <h1>Godaste pizzan</h1>
                <p>Godaste pizzan, magisk kebabsås!</p>
                <div className="stars">
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
