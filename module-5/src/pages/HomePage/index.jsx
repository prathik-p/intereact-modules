import { Link } from "react-router-dom";
import { useState } from "react";

export default function HomePage({ user, setUser }) {
  let [count, setCount] = useState(0);
  let [vegetables, setVegetables] = useState(["carrot", "cabbage"]);
  return (
    <div>
      <h1>Home Page</h1>
      {/* <h1>{count}</h1> */}
      <h1>{user}</h1>
      <button
        onClick={() => {
          setVegetables((prev) => [...prev, "tomato"]);
          setUser("Joyal");
        }}
      >
        ADD
      </button>
      {vegetables.map((veg) => {
        return <div>{veg}</div>;
      })}
    </div>
  );
}
