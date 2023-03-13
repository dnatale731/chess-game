import React from "react";
import Tile from "./Tile";
import "./Chessboard.css";

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const pieces = [];

for (let i = 0; i < 8; i++) {
  pieces.push({ image: "assets/pawn_d.png", x: i, y: 6 });
  pieces.push({ image: "assets/pawn_l.png", x: i, y: 1 });
  if (i === 0 || i === 7) {
    pieces.push({ image: "assets/rook_d.png", x: i, y: 7 });
    pieces.push({ image: "assets/rook_l.png", x: i, y: 0 });
  }
  if (i === 1 || i === 6) {
    pieces.push({ image: "assets/knight_d.png", x: i, y: 7 });
    pieces.push({ image: "assets/knight_l.png", x: i, y: 0 });
  }
  if (i === 2 || i === 5) {
    pieces.push({ image: "assets/bishop_d.png", x: i, y: 7 });
    pieces.push({ image: "assets/bishop_l.png", x: i, y: 0 });
  }
  pieces.push({ image: "assets/queen_d.png", x: 3, y: 7 });
  pieces.push({ image: "assets/queen_l.png", x: 3, y: 0 });
  pieces.push({ image: "assets/king_d.png", x: 4, y: 7 });
  pieces.push({ image: "assets/king_l.png", x: 4, y: 0 });
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
