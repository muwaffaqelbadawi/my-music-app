import React from "react";
import Song from "./Song";
import Album from "./Album";
import Lyrics from "./Lyrics";

const UI = () => {
  return (
    <div className="UI">
      <Song />
      <Album />
      <Lyrics />
    </div>
  );
};

export default UI;
