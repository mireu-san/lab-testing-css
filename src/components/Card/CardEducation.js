import React from "react";
import "./CardEducation.css";

function CardEducation() {
  return (
    <>
      {/* Self taught experience since July 2020 to present */}
      <section className="container-card-edu">
        <div className="card-edu-1">
          <div className="card-image-edu eduImg-1"></div>
          <h2>removed</h2>
          <p>removed</p>
          {/* <p>Text</p> */}
          <div className="li-wrapper-edu">
            <li>removed</li>
          </div>
        </div>
      </section>
      {/* University */}
      <section className="container-card-edu">
        <div className="card-edu-2">
          <div className="card-image-edu eduImg-2"></div>
          <h2>removed</h2>
          <h3>removed</h3>
          <div className="li-wrapper-edu">
            <li>removed</li>
          </div>
        </div>
      </section>
    </>
  );
}

export default CardEducation;
