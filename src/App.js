import React from "react";
import Pie from "./components/Pie";

const data = [
  {
    value: 3,
    id: 1,
    index: 0,
  },
  {
    value: 7,
    id: 2,
    index: 1,
  },
  {
    value: 4,
    id: 0,
    index: 2,
  },
];

function App() {
  return (
    <div>
      <Pie data={data} />
    </div>
  );
}

export default App;
