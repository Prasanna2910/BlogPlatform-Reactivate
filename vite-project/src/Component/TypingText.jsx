import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingText = () => {
  return (
    <TypeAnimation
      sequence={[
        "A platform for creators, creativity and brainstorming",
        1000,
      ]}
      speed={50} 
      repeat={Infinity} 
      cursor={true}
      className="text-base font-light"
    />
  );
};

export default TypingText;
