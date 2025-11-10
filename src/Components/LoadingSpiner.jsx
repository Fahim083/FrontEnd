import React from "react";
import { useSpring, animated } from "@react-spring/web";

const LoadingSpiner = () => {
  const spin = useSpring({
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    loop: true,
    config: { duration: 1000 },
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <animated.div
        style={spin}
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
      />
    </div>
  );
};

export default LoadingSpiner;
