import React from "react";
import { serData } from "../data";
import Service from "./Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div>
      <div className="section-center services-center">
        {serData.map((data) => {
          return (
            <Service key={data.id} {...data}/>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
