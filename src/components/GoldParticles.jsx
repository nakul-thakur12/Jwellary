import Particles from "react-tsparticles";

export default function GoldParticles() {
  return (
    <Particles
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 40 },
          color: { value: "#d4af37" }, // gold
          shape: { type: "circle" },
          opacity: { value: 0.4 },
          size: { value: { min: 1, max: 3 } },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            outModes: "out",
          },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
}
