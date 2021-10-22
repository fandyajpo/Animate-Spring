import { useSpring, animated } from "react-spring";

export default function LoopTrue() {
  const styles = useSpring({
    loop: true,
    delay: 200,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
  });
  const fade = useSpring({
    delay: 200,
    loop: true,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <>
      <div className="py-12 flex justify-center items-center w-full h-screen">
        <animated.div
          style={{
            width: 80,
            height: 80,
            backgroundColor: "#46e891",
            borderRadius: 16,
            ...styles,
          }}
        />
        <animated.div style={{ ...fade }}>
          This is Fade in-out with loop
        </animated.div>
      </div>
    </>
  );
}
