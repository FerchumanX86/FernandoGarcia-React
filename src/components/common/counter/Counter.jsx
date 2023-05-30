const Counter = ( {contador, setContador} ) => { 
//   aca conecte con las prop
    return (
      <div>
        <h2>{contador}</h2>
        <button onClick={() => setContador(contador + 1)}>Sumar</button>
        <button onClick={() => setContador(contador - 1)}>Restar</button>
      </div>
    );
  };
  
  export default Counter;
  


