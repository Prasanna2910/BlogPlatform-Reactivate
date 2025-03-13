import React from "react";
import { TypeAnimation } from "react-type-animation";

const BlogifyEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "Blogify",
        1000, 
      ]}
      speed={50}
      repeat={0} 
      cursor={false} 
      className="text-9xl font-extrabold font-mono"
    />
  );
};

export default BlogifyEffect;
