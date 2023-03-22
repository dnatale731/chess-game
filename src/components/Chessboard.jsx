import React from "react";
import Tile from "./Tile";
import "./Chessboard.css";

//Coordinates will use chess notation
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const pieces = [];

//Initialize Board State
for (let i = 0; i < 8; i++) {
  pieces.push({ image: "assets/pawn_d.png", x: i, y: 6 });
  pieces.push({ image: "assets/pawn_l.png", x: i, y: 1 });
}

for (let p = 0; p < 2; p++) {
  const type = p === 0 ? "d" : "l";
  const y = p === 0 ? 7 : 0;

  pieces.push({ image: `assets/rook_${type}.png`, x: 0, y: y });
  pieces.push({ image: `assets/rook_${type}.png`, x: 7, y: y });
  pieces.push({ image: `assets/knight_${type}.png`, x: 1, y: y });
  pieces.push({ image: `assets/knight_${type}.png`, x: 6, y: y });
  pieces.push({ image: `assets/bishop_${type}.png`, x: 2, y: y });
  pieces.push({ image: `assets/bishop_${type}.png`, x: 5, y: y });
  pieces.push({ image: `assets/queen_${type}.png`, x: 3, y: y });
  pieces.push({ image: `assets/king_${type}.png`, x: 4, y: y });
}

let activePiece = null;

function grabPiece(e) {
  if (e.target.classList.contains("chess-piece")) {
    const x = e.clientX - 37;
    const y = e.clientY - 37;

    e.target.style.position = "absolute";
    e.target.style.left = `${x}px`;
    e.target.style.top = `${y}px`;

    activePiece = e.target;
  }
}

function movePiece(e) {
  if (activePiece) {
    const x = e.clientX - 37;
    const y = e.clientY - 37;

    e.target.style.position = "absolute";
    e.target.style.left = `${x}px`;
    e.target.style.top = `${y}px`;
  }
}

function dropPiece(e) {
  if (activePiece) {
    activePiece = null;
  }
}

export default function Chessboard() {
  let board = [];

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = i + j + 2; //Determines dark or light tiles
      let image = undefined;

      //Updates image for rendering
      pieces.forEach((p) => {
        if (p.x === i && p.y === j) {
          image = p.image;
        }
      });

      board.push(<Tile key={`${j},${i}`} image={image} number={number} />);
    }
  }

  return (
    <div
      onMouseMove={(e) => movePiece(e)}
      onMouseDown={(e) => grabPiece(e)}
      onMouseUp={(e) => dropPiece(e)}
      id="chessboard">
      {board}
    </div>
  );
}
