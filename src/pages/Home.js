import React from "react";
import forms from "../forms.png";
import clock from "../clock.png";
import computer from "../computer.png";

export default function Home() {
  return (
    <>
      <h1 className="title">About StarkLoan</h1>

      <div className="pagesLeft">
        <div>
          <h2 className="subtitleLeft">Smart Financing</h2>

          <div className="textLeft">
            <p>The loan of the future has arrived and without</p>
            <p>bureaucracy, apply instantly and enjoy the fastest</p>
            <p>loan on the market</p>
          </div>
        </div>

        <div className="sideImage"></div>
      </div>

      <div className="pagesRight">
        <div className="sideImage">
          <img width="200vw" src={forms} alt="forms" />
        </div>

        <div>
          <h2 className="subtitleRight">Simple form</h2>

          <div className="textRight">
            <p>We only ask for essential information</p>
            <p>dispensing with piles of paper and saving your</p>
            <p>time</p>
          </div>
        </div>
      </div>

      <div className="pagesLeft">
        <div>
          <h2 className="subtitleLeft">Fast Approval</h2>

          <div className="textLeft">
            <p>Automated validation system that guarantees</p>
            <p>greater agility in the data validation process</p>
            <p>and approval flow</p>
          </div>
        </div>
        <div className="sideImage">
          <img width="200vw" src={clock} alt="clock" />
        </div>
      </div>

      <div className="pagesRight">
        <div className="sideImage">
          <img width="200px" src={computer} alt="computer" />
        </div>

        <div>
          <h2 className="subtitleRight">modern implementation</h2>

          <div className="textRight">
            <p>Bringing you all the technology you deserve</p>

            <p>A real bank for real people</p>
          </div>
        </div>
      </div>
    </>
  );
}
