import React, { useState } from "react";
import Board from "../board/Board";
import "./style.css";

export default function Container() {
  const [color, setColor] = useState("#000000");
  const [penSize, setPenSize] = useState(5);
  function changeColor(color: string) {
    setColor(color);
  }

  function changeSize(size: number) {
    setPenSize(size);
  }

  return (
    <div className="container">
      <div className="tools-bar">
        <div className="color-picker-container">
          Select Pen Color: &nbsp;
          {/* <input type="color" value={color} onChange={changeColor}/> */}
        </div>
      </div>

      <div className="board-container">
        <Board color="#000000" size={5}></Board>
      </div>
    </div>
  );
}
