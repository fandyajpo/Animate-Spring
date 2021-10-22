import Image from "next/image";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
export default function Text() {
  const [open, setOpen] = useState(false);
  const styles = useSpring({
    // delay: 200,
    width: open ? 200 : 0,
  });
  const rotate = useSpring({
    from: { rotate: open ? 0 : 180 },
    to: { rotate: open ? 180 : 0 },
  });
  const firstDropdown = useSpring({
    y: open ? -30 : 0,
    x: open ? -5 : 0,
    width: open ? 200 : 0,
    rotateZ: open ? -20 : 0,
  });
  const secondDropdown = useSpring({
    y: open ? -55 : 0,
    x: open ? -20 : 0,
    width: open ? 200 : 0,
    rotateZ: open ? -40 : 0,
  });

  return (
    <div className="flex justify-center items-center py-36 w-full h-screen">
      <animated.div
        className="px-4 flex justify-center items-center bg-blue-500 rounded-full h-8 w-auto z-20"
        style={styles}
      >
        <button onClick={() => setOpen(!open)} className="outline-none">
          <animated.svg
            style={rotate}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              className={`${!open ? "block" : "hidden"}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              r
              d="M4 6h16M4 12h8m-8 6h16"
            />
            <path
              className={`${open ? "block" : "hidden"}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </animated.svg>
        </button>
      </animated.div>
      {/*  */}
      {/*  */}
      <animated.div
        className={`${
          open ? "block" : "hidden"
        }flex px-4 items-center bg-blue-300 rounded-full h-8 w-auto absolute`}
        style={firstDropdown}
      >
        <div className={`text-xs flex justify-center items-end py-2`}>
          <h1 className={`${open ? "block" : "hidden"} `}>Menu 1</h1>
        </div>
      </animated.div>
      {/*  */}
      {/*  */}
      <animated.div
        className={`${
          open ? "block" : "hidden"
        }flex px-4 items-center bg-blue-400 rounded-full h-8 w-auto absolute`}
        style={secondDropdown}
      >
        <div className={`text-xs flex justify-center items-end py-2`}>
          <h1 className={`${open ? "block" : "hidden"} `}>Menu 1</h1>
        </div>
      </animated.div>
    </div>
  );
}
