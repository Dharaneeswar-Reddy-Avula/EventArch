import React from "react";
import "./Event.css";

const Workshopcard = ({ image, category, name, time, id, setIsModalOpen }) => {
  return (
    <div className="Eventcard mt-[-50px]">
      <div className="card" key={id}>
        <div className="card-banner">
          <img src={image} alt={name} className="w-full h-auto rounded-lg" loading="lazy" />
        </div>
        <div className="card-desc">
          <p className="card-date text-[20px]">{time}</p>
          <div className="flex justify-between">
            <div className="flex gap-[13px] justify-start flex-col">
              <h3 className="card-title">Event</h3>
              <h3 className="card-title mt-[-20px]">Category</h3>
            </div>
            <div className="flex gap-[10px] justify-start flex-col">
              <h3 className="card-title">{name}</h3>
              <h3 className="card-title mt-[-20px]">{category}</h3>
            </div>
          </div>

          <div className="card-nav">
            <a href="#" className="more text-white">READ MORE</a>
            <a className="btn cursor-pointer" onClick={() => setIsModalOpen(true)}>
              REGISTER NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshopcard;
