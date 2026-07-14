import React, { useState } from "react";
import lowbrun from "./images/lowbrun.png";
import highbrun1 from "./images/heighbrun1.png";
import lowbrun0 from "./images/lowbrun0.png";
import loworange from "./images/loworange.png";
import loworange1 from "./images/loworange1.png";
import lowblue1 from "./images/lowblue1.png";
import lowblue from "./images/lowblue.png";
import highblueciel from "./images/highbleuciel.png";
import highblueciel1 from "./images/hieghbleuciel1.png";
import highgray from "./images/highgray.png";
import highgray1 from "./images/highgray1.png";
import airhighbiz from "./images/airhighbiz.png";
import airhighbiz1 from "./images/airhighbiz1.png";
import "./Shoose.css";

export default function Shoose({ ajouterAuPanier }) {
  const [filtre, setFiltre] = useState("tous");

  return (
    <>
      <div className="top">
        <img
          id="img1"
          src={lowbrun}
          alt="dunk low brun"
          onClick={() => setFiltre("low")}
        />
        <img
          id="img2"
          src={highbrun1}
          alt="air-jordan-high-brun"
          onClick={() => setFiltre("high")}
        />
        <button className="all-btn" onClick={() => setFiltre("tous")}>
          All
        </button>
      </div>

      {filtre !== "high" && (
        <div className="images-prt1">
          <div className="transi1">
            <img id="t1-img1" src={lowbrun0} alt="" />
            <img id="t1-img2" src={lowbrun} alt="" />
            <p className="prix">120 €</p>
            <button
              onClick={() => ajouterAuPanier({ image: lowbrun0, prix: 120 })}
            >
              +
            </button>
          </div>
          <div className="transi2">
            <img id="t2-img1" src={loworange} alt="" />
            <img id="t2-img2" src={loworange1} alt="" />
            <p className="prix">95 €</p>
            <button
              onClick={() => ajouterAuPanier({ image: loworange, prix: 95 })}
            >
              +
            </button>
          </div>
          <div className="transi3">
            <img id="t3-img1" src={lowblue1} alt="" />
            <img id="t3-img2" src={lowblue} alt="" />
            <p className="prix">110 €</p>
            <button
              onClick={() => ajouterAuPanier({ image: lowblue1, prix: 110 })}
            >
              +
            </button>
          </div>
        </div>
      )}

      {filtre !== "low" && (
        <div className="images-prt2">
          <div className="transi4">
            <img id="t4-img1" src={highblueciel} alt="" />
            <img id="t4-img2" src={highblueciel1} alt="" />
            <p className="prix">150 €</p>
            <button
              onClick={() =>
                ajouterAuPanier({ image: highblueciel, prix: 150 })
              }
            >
              +
            </button>
          </div>
          <div className="transi5">
            <img id="t5-img1" src={highgray1} alt="" />
            <img id="t5-img2" src={highgray} alt="" />
            <p className="prix">135 €</p>
            <button
              onClick={() => ajouterAuPanier({ image: highgray1, prix: 135 })}
            >
              +
            </button>
          </div>
          <div className="transi6">
            <img id="t6-img1" src={airhighbiz} alt="" />
            <img id="t6-img2" src={airhighbiz1} alt="" />
            <p className="prix">160 €</p>
            <button
              onClick={() => ajouterAuPanier({ image: airhighbiz, prix: 160 })}
            >
              +
            </button>
          </div>
        </div>
      )}
    </>
  );
}
