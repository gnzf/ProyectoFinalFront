import React from "react";
import { useState } from "react";
import "../styles/Buscador/Buscador.css";
import SearchBar from "../components/Buscador/SearchBar";
import GrillaAlbum from "../components/Buscador/GrillaAlbum";
import FlowersMiley from "../../public/images/image-placeholder.svg";
import KillBillSZA from "../../public/images/image-placeholder (2).svg"

function Buscador() {
  const [isClicked, setIsClicked] = useState(false);

  const handleInputClick = () => {
    setIsClicked(true);
  }

  return (
    <>
      <div className="buscador-container">
        <div className="fixed-top">
          <div className="title-container">
            <div className="title-wrapper">
              <h1 className={isClicked ? 'animate-left' : ''}>Buscador</h1>
              <SearchBar onClickInput={handleInputClick} isClicked={isClicked}/>
            </div>
          </div>
          <div className={`divider-searcher ${isClicked ? 'animate-left' : ''}`}>
            <h2>Top 20s</h2>
          </div>
        </div>
        <div className={`grillas ${isClicked ? 'animate-left' : ''}`}>
          <div className="grillaAlbums">
            <GrillaAlbum
              img={FlowersMiley}
              title="Flowers"
              artistName="Miley Cyrus"
            />
            <GrillaAlbum
              img={KillBillSZA}
              title="KillBill"
              artistName="SZA"
            />
             <GrillaAlbum
              img={KillBillSZA}
              title="KillBill"
              artistName="SZA"
            />
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
              <GrillaAlbum
              img={KillBillSZA}
              title="KillBill"
              artistName="SZA"
            />
            <GrillaAlbum
              img={FlowersMiley}
              title="Flowers"
              artistName="Miley Cyrus"
            />
              <GrillaAlbum
              img={KillBillSZA}
              title="KillBill"
              artistName="SZA"
            />
            <GrillaAlbum
              img={FlowersMiley}
              title="Flowers"
              artistName="Miley Cyrus"
            />
              <GrillaAlbum
              img={KillBillSZA}
              title="KillBill"
              artistName="SZA"
            />
             <GrillaAlbum
              img={KillBillSZA}
              title="KillBill"
              artistName="SZA"
            />
            <GrillaAlbum
              img={FlowersMiley}
              title="Flowers"
              artistName="Miley Cyrus"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Buscador;
