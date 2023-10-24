import React from "react";
import { useState } from "react";
import "../styles/Buscador/Buscador.css";
import SearchBar from "../components/Buscador/SearchBar";
import GrillaAlbum from "../components/Buscador/GrillaAlbum";
import FlowersMiley from "../../public/images/image-placeholder.svg";
import KillBillSZA from "../../public/images/image-placeholder (2).svg";
import BusquedaReciente from "../components/Buscador/BusquedaReciente";
import BusquedaResultado from "../components/Buscador/BusquedaResultado";

function Buscador() {
  const [isClicked, setIsClicked] = useState(false);
  const [arrowClicked, setArrowClicked] = useState(false);
  const [searchedTerm, setSearchedTerm] = useState("");

  const handleInputClick = () => {
    setIsClicked(true);
  };

  const handleArrowClick = () => {
    setArrowClicked(true);
  };

  const handleSearch = (value) => {
    setSearchedTerm(value)
  }

  return (
    <>
      <div className="buscador-container">
        <div className="fixed-top">
          <div className="title-container">
            <div className="title-wrapper">
              <h1
                className={` ${isClicked ? "animate-left" : ""} ${
                  arrowClicked ? "animate-left-reverse" : ""
                }`}
              >
                Buscador
              </h1>
              <SearchBar
                onClickInput={handleInputClick}
                isClicked={isClicked}
                onArrowClicked={handleArrowClick}
                arrowClicked={arrowClicked}
                setArrowClicked={setArrowClicked}
                onSearch={handleSearch}
              />
            </div>
          </div>
          <div
            className={`divider-searcher ${
              isClicked ? "animate-left-down" : ""
            } ${arrowClicked ? "animate-left-down-reverse" : ""}`}
          >
            <h2>Top 20s</h2>{" "}
            <hr
              style={{
                borderTop: "2px solid #E4E6E8",
                width: "240px",
                height: "2px",
              }}
            />
          </div>
        </div>
        <div
          className={`grillas ${isClicked ? "animate-left-down" : ""} ${
            arrowClicked ? "animate-left-down-reverse" : ""
          }`}
        >
          <div className="grillaAlbums">
            <GrillaAlbum
              img={FlowersMiley}
              title="Flowers"
              artistName="Miley Cyrus"
            />
            <GrillaAlbum img={KillBillSZA} title="KillBill" artistName="SZA" />
            <GrillaAlbum img={KillBillSZA} title="KillBill" artistName="SZA" />
            <GrillaAlbum
              img={FlowersMiley}
              title="Flowers"
              artistName="Miley Cyrus"
            />
            <GrillaAlbum
              img={FlowersMiley}
              title="Flowers"
              artistName="Miley Cyrus"
            />
            <GrillaAlbum img={KillBillSZA} title="KillBill" artistName="SZA" />
            <GrillaAlbum
              img={FlowersMiley}
              title="Flowers"
              artistName="Miley Cyrus"
            />
            <GrillaAlbum img={KillBillSZA} title="KillBill" artistName="SZA" />
            <GrillaAlbum
              img={FlowersMiley}
              title="Flowers"
              artistName="Miley Cyrus"
            />
            <GrillaAlbum img={KillBillSZA} title="KillBill" artistName="SZA" />
            <GrillaAlbum img={KillBillSZA} title="KillBill" artistName="SZA" />
            <GrillaAlbum
              img={FlowersMiley}
              title="Flowers"
              artistName="Miley Cyrus"
            />
          </div>
        </div>
        {isClicked && searchedTerm == 0 ? (
          <div
            className={`recent-search animate-${
              arrowClicked ? "right-reverse" : "right"
            }`}
          >
            <BusquedaReciente />
          </div>
        ) : 
        searchedTerm.length > 0 && (
          <BusquedaResultado/>
        )}
      </div>
    </>
  );
}

export default Buscador;
