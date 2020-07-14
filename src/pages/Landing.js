import React, { useState } from "react";
import { useLessons } from "../hooks/useLessons";
import Sound from "react-sound";
import a from "../audio/a.mp3";
import a2 from "../audio/a2.mp3";
import air from "../audio/air.mp3";

const Landing = () => {
  // const { lessons, loading } = useLessons();
  // console.log(lessons);
  const [sound, setSound] = useState("a");

  const playNextSound = (sound) => {
    setSound(sound);
  };

  return (
    <>
      Hello from Landing
      {sound === "a" && (
        <Sound
          url={a}
          playStatus={Sound.status.PLAYING}
          onFinishedPlaying={() => playNextSound("a2")}
        />
      )}
      {sound === "a2" && (
        <Sound
          url={a2}
          playStatus={Sound.status.PLAYING}
          onFinishedPlaying={() => playNextSound("air")}
        />
      )}
      {sound === "air" && (
        <Sound
          url={air}
          playStatus={Sound.status.PLAYING}
          onFinishedPlaying={() => playNextSound("air")}
        />
      )}
    </>
  );
};

export default Landing;
