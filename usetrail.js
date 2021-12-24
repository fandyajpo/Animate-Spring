import { animated, useTrail, config } from "react-spring";
import { useState } from "react";
const App = () => {
  const [on, toggle] = useState(false);
  const springs = useTrail(5, {
    from: {
      x: on ? 1000 : 0,
    },
    to: {
      x: on ? 0 : 1000,
    },
    config: { tension: 250 },
  });
  return (
    <div className="overflow-hidden">
      {springs.map((animation, index) => (
        <animated.div style={animation} key={index}>
          Hello World
        </animated.div>
      ))}
      <button onClick={() => toggle(!on)}>Change</button>
    </div>
  );
};
export default App;
