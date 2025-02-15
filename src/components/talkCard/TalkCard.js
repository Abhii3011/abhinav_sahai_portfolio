import React from "react";
import "./TalkCard.scss";

export default function TalkCard({ talkDetails }) {
  return (
    <div className="talk-card">
      <div className={talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle"}>
        <div className="diagonal-fill"></div>
        
        <div className="talk-card-content">
          <div className="talk-card-title">{talkDetails.title}</div>
          <p className="talk-card-subtitle">{talkDetails.subtitle}</p>
        </div>

        <div className="card-footer"> 
          <a href={talkDetails.image_url} target="_blank" rel="noopener noreferrer" className="talk-button">
            View Pictures
          </a>
        </div>
      </div>
    </div>
  );
}
