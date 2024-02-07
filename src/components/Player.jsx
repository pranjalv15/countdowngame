import { useState, useRef } from "react";
export default function Player() {
  const player = useRef();
  const [playerName, setPlayerName] = useState("");

  function handleClick() {
    setPlayerName(player.current.value);
    player.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName.length > 0 ? playerName : "unknown entity"}</h2>
      <p>
        <input type="text" ref={player} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
