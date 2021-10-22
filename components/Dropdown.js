import { useSpring, animated } from "react-spring";
import { useState } from "react";

function Dropdown() {
  const [open, setOpen] = useState(false);
  const Drop = useSpring({
    delay: 200,
    width: open ? 200 : 30,
  });
  const Down = useSpring({
    delay: 200,
    height: open ? "auto" : 30,
    width: open ? 200 : 0,
  });
  const Text = useSpring({
    delay: 700,
    opacity: open ? 1 : 0,
  });
  const Symbol = useSpring({
    from: { rotate: open ? 0 : 180 },
    to: { rotate: open ? 180 : 0 },
  });
  return (
    <div className="py-64 w-full h-screen">
      <div>
        <button onClick={() => setOpen(!open)}>
          <animated.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 bg-red-500 rounded-r-full"
            fill="none"
            style={Drop}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              className={`${!open ? "block" : "hidden"} bg-blue-600`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
            <path
              className={`${open ? "block" : "hidden"} bg-blue-600`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </animated.svg>
        </button>

        <animated.div
          className={`${open ? "block" : "hidden"} bg-red-400 rounded-r-xl`}
          style={Down}
        >
          <animated.div style={Text} className="text-center">
            <div className="py-2 hover:bg-red-300 rounded-lg">
              <button>Pilih Cuy</button>
            </div>
            <div className="py-2 hover:bg-red-300 rounded-lg">
              <button>Pilih Cuy</button>
            </div>
            <div className="py-2 hover:bg-red-300 rounded-lg">
              <button>Pilih Cuy</button>
            </div>
            <div className="py-2 hover:bg-red-300 rounded-lg">
              <button>Pilih Cuy</button>
            </div>
            <div className="py-2 hover:bg-red-300 rounded-lg">
              <button>Pilih Cuy</button>
            </div>
          </animated.div>
        </animated.div>
      </div>
    </div>
  );
}

export default Dropdown;
