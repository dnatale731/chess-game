import "./Tile.css";

export default function Tile(props) {
  if (props.number % 2 === 0) {
    return (
      <div className="tile dark-tile">
        <img src={props.image} />
      </div>
    );
  } else {
    return (
      <div className="tile light-tile">
        <img src={props.image} />
      </div>
    );
  }
}
