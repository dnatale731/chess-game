import React from "react";
import Tile from "./Tile";
import "./Chessboard.css";

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const pieces = [];

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

export default function Chessboard() {
  let board = [];

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = i + j + 2;
      let image = undefined;

      pieces.forEach((p) => {
        if (p.x === i && p.y === j) {
          image = p.image;
        }
      });

      board.push(<Tile image={image} number={number} />);
    }
  }

  return <div id="chessboard">{board}</div>;
}
