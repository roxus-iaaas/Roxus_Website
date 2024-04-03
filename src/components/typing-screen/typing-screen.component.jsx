import React, { useEffect, useState } from "react";
import { typing, afterTyping } from "../../constant/contents";
import "./typing-screen.styles.scss";

const Cursor = ({ noDisplay }) => {
  return (
    <span className={`cursor ${noDisplay}`}>
      &#9475;&#9475;&#9475;&#9475;&#9475;
    </span>
  );
};

const TypingScreen = () => {
  const [noDisplay, setNoDisplay] = useState("");
  const [noDisplayStart, setNoDisplayStart] = useState("");
  const [typingContent, setTypingContent] = useState(typing);

  const startDuration = 3500;
  const textDuration = startDuration + 3500;
  const allDuration = textDuration + 2500;

  useEffect(() => {
    setTimeout(() => {
      setNoDisplayStart("no-display");
    }, startDuration);
    setTimeout(() => {
      setTypingContent(afterTyping);
    }, textDuration);
    setTimeout(() => {
      setNoDisplay("no-display");
    }, allDuration);
  }, [allDuration, textDuration]);

  return (
    <div className={`typing-screen ${noDisplay}`}>
      <Cursor noDisplay={noDisplayStart} />
      {typingContent}
    </div>
  );
};

export default TypingScreen;
