import React from "react";
import forms from "../forms.png";
import clock from "../clock.png";
import computer from "../computer.png";
import "intersection-observer";

export default function Home() {
  const [isVisible, setIsVisible] = React.useState({}); // State to manage section visibility

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible((prevState) => ({
          ...prevState,
          [entry.target.id]: entry.isIntersecting,
        }));
      });
    });

    const sections = document.querySelectorAll(".hidden");
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Clean up the observer when the component unmounts
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="home-container">
      {/* <h1 className="title">About StarkLoan</h1> */}
      <section
        id="section1"
        className={`${isVisible["section1"] ? "visible" : "hidden"}`}
      >
        <div className="txt-box">
          <h2 className="subtitle">Smart Financing</h2>
          <div className="description-box">
            <p>The loan of the future has arrived and without</p>
            <p>bureaucracy, apply instantly and enjoy the fastest</p>
            <p>loan on the market</p>
          </div>
          <div className="sideImage"></div>
        </div>
      </section>

      <section
        id="section2"
        className={`${isVisible["section2"] ? "visible" : "hidden"}`}
      >
        <div className="sideImage">
          <img width="200vw" src={forms} alt="forms" />
        </div>

        <div className="txt-box">
          <h2 className="subtitle">Simple form</h2>

          <div className="description-box">
            <p>We only ask for essential information</p>
            <p>dispensing with piles of paper and saving your</p>
            <p>time</p>
          </div>
        </div>
      </section>

      <section
        id="section3"
        className={`${isVisible["section3"] ? "visible" : "hidden"}`}
      >
        <div className="txt-box">
          <h2 className="subtitle">Fast Approval</h2>

          <div className="description-box">
            <p>Automated validation system that guarantees</p>
            <p>greater agility in the data validation process</p>
            <p>and approval flow</p>
          </div>
        </div>
        <div className="sideImage">
          <img width="200vw" src={clock} alt="clock" />
        </div>
      </section>

      <section
        id="section4"
        className={`${isVisible["section4"] ? "visible" : "hidden"}`}
      >
        <div className="sideImage">
          <img width="200px" src={computer} alt="computer" />
        </div>
        <div className="txt-box">
          <h2 className="subtitle">modern implementation</h2>
          <div className="description-box">
            <p>Bringing you all the technology you deserve</p>
            <p>A real bank for real people</p>
          </div>
        </div>
      </section>
    </div>
  );
}
