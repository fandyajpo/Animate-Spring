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
    y: open ? -0 : 0,
    x: open ? 80 : 0,
    width: open ? 40 : 0,
    height: open ? 40 : 0,
  });
  const secondDropdown = useSpring({
    y: open ? -50 : 0,
    x: open ? 50 : 0,
    width: open ? 40 : 0,
    height: open ? 40 : 0,
  });
  const thirdDropdown = useSpring({
    y: open ? 50 : 0,
    x: open ? 50 : 0,
    width: open ? 40 : 0,
    height: open ? 40 : 0,
  });
  const fourDropdown = useSpring({
    y: open ? 80 : 0,
    x: open ? 5 : 0,
    width: open ? 40 : 0,
    height: open ? 40 : 0,
  });
  const fiveDropdown = useSpring({
    y: open ? -80 : 0,
    x: open ? 5 : 0,
    width: open ? 40 : 0,
    height: open ? 40 : 0,
  });

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <animated.div
        className="px-4 flex justify-center items-center bg-red-500 rounded-r-full h-12 w-12 z-20"
        // style={styles}
      >
        <button onClick={() => setOpen(!open)} className="outline-none">
          <animated.svg
            style={rotate}
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              className={`${!open ? "block" : "hidden"}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              className={`${open ? "block" : "hidden"}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </animated.svg>
        </button>
      </animated.div>
      {/*  */}
      {/*  */}
      <animated.button
        className={`${
          open ? "block" : "hidden"
        }flex px-4 items-center bg-red-500 hover:bg-gray-400 rounded-full h-8 w-auto absolute outline-none`}
        style={firstDropdown}
      >
        <div
          className={`text-xs flex justify-center items-end py-2 text-white`}
        >
          <h1 className={`${open ? "block" : "hidden"} `}>Select</h1>
        </div>
      </animated.button>
      {/*  */}
      {/*  */}
      <animated.button
        className={`${
          open ? "block" : "hidden"
        }flex px-4 items-center bg-red-500 hover:bg-gray-400 rounded-full h-8 w-auto absolute outline-none`}
        style={secondDropdown}
      >
        <div
          className={`text-xs flex justify-center items-end py-2 text-white`}
        >
          <h1 className={`${open ? "block" : "hidden"} `}>Select</h1>
        </div>
      </animated.button>
      <animated.button
        className={`${
          open ? "block" : "hidden"
        }flex px-4 items-center bg-red-500 hover:bg-gray-400 rounded-full h-8 w-auto absolute outline-none`}
        style={thirdDropdown}
      >
        <div
          className={`text-xs flex justify-center items-end py-2 text-white`}
        >
          <h1 className={`${open ? "block" : "hidden"} `}>Select</h1>
        </div>
      </animated.button>
      <animated.button
        className={`${
          open ? "block" : "hidden"
        }flex px-4 items-center bg-red-500 hover:bg-gray-400 rounded-full h-8 w-auto absolute outline-none`}
        style={fourDropdown}
      >
        <div
          className={`text-xs flex justify-center items-end py-2 text-white`}
        >
          <h1 className={`${open ? "block" : "hidden"} `}>Select</h1>
        </div>
      </animated.button>
      <animated.button
        className={`${
          open ? "block" : "hidden"
        }flex px-4 items-center bg-red-500 hover:bg-gray-400 rounded-full h-8 w-auto absolute outline-none`}
        style={fiveDropdown}
      >
        <div
          className={`text-xs flex justify-center items-end py-2 text-white`}
        >
          <h1 className={`${open ? "block" : "hidden"} `}>Select</h1>
        </div>
      </animated.button>
    </div>
  );
}
