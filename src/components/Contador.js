import React from "react";
export default function Contador() {
  const [contador, setContador] = React.useState(0);
  return (
    <div className="calculator">
      <h1>Contador</h1>
      <div className="cell">
        <button onClick={() => setContador(contador + 1)} className="plus">
          +
        </button>
        <div className="value">{contador}</div>
        <button onClick={() => setContador(contador - 1)} className="minus">
          -
        </button>
      </div>
    </div>
  );
}
