import React, { useState, useEffect } from "react";

export function AlertNewFeature() {
  const [rotation, setRotation] = useState(0); // Track the rotation in degrees
  const [direction, setDirection] = useState(1); // 1 for clockwise, -1 for counter-clockwise
  const [isRotating, setIsRotating] = useState(true); // Track if the component is rotating
  const [isMovingRight, setIsMovingRight] = useState(false); // Track if the component should move to the right

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRotating) {
      interval = setInterval(() => {
        setRotation((prev) => {
          const newRotation = prev + 5 * direction;

          if (newRotation >= 5) {
            setDirection(-1); // Change direction to counter-clockwise
          } else if (newRotation <= -5) {
            setDirection(1); // Change direction to clockwise
          }

          return newRotation;
        });
      }, 150);
    }

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, [isRotating, direction]);

  const handleOkayClick = () => {
    setIsRotating(false); // Stop the wobble effect
    setIsMovingRight(true); // Start moving to the right
  };

  return (
    <div
      style={{
        transform: isMovingRight
          ? "translateX(100vw)"
          : `rotate(${rotation}deg)`, // Slide off the screen to the right
        transition: isMovingRight
          ? "transform 0.5s ease-in-out"
          : "transform 0.15s ease-in-out", // Smooth slide effect
      }}
      className="bg-slate-200 border-2 ml-4 mt-14 shadow-md rounded-md border-slate-500 text-xs inline-block align-middle p-2"
    >
      <h3 className="font-bold italic flex">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
        {"  "}
        Heads up!
      </h3>
      <p>Check out the new pill dosage calculator!</p>
      <button
        onClick={handleOkayClick}
        className="flex items-center border-2 border-slate-500 rounded-md px-2 py-1 mt-2 bg-slate-50
               hover:bg-slate-500 hover:text-white transition shadow-md duration-300 ease-in-out"
      >
        OK
      </button>
    </div>
  );
}
