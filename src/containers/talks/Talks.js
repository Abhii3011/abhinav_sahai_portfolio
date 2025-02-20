import React, { useContext } from "react";
import "./Talks.scss";
import TalkCard from "../../components/talkCard/TalkCard";
import { talkSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Talks() {
  const { isDark } = useContext(StyleContext);
  if (!talkSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="talks">
        <div className="talk-header">
          <h1 className="talk-header-title">{talkSection.title}</h1>
          <p className={isDark ? "dark-mode talk-header-subtitle" : "subTitle talk-header-subtitle"}>
            {talkSection.subtitle}
          </p>
          
          {/* Container to hold TalkCards in a horizontal layout */}
          <div className="talks-container">
            {talkSection.talks.map((talk, i) => (
              <TalkCard
                key={i}
                talkDetails={{
                  title: talk.title,
                  subtitle: talk.subtitle,
                  image_url: talk.image_url, 
                  isDark
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
