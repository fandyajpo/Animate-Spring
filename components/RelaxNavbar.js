import { useState } from "react";
import { useSpring, animated } from "react-spring";

function RelaxNavbar() {
  const [open, setOpen] = useState(false);
  const NAVBAR_BUTTON_STYLE = useSpring({
    from: { rotate: open ? 0 : 180 },
    to: { rotate: open ? 180 : 0 },
    loop: true,
  });

  return (
    <div className="">
      <div className="flex justify-center items-center w-full h-12 backdrop-filter backdrop-hue-rotate-15">
        <button className="" onClick={() => setOpen(!open)}>
          <animated.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={NAVBAR_BUTTON_STYLE}
          >
            <path
              className={`${!open ? "block" : "hidden"}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
      </div>
      <div className="flex justify-center items-center">
        <div className="">
          <div className="py-2">
            <button
              className={`${open ? "block" : "hidden"} w-24 h-6 bg-green-200`}
            >
              <div className="flex gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <p>Home</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelaxNavbar;
