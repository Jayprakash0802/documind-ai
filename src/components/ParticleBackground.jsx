import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadSlim(main);  
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: { value: 80 },
          color: { value: "#ffffff" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "repulse" },
          },
        },
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default ParticleBackground;
