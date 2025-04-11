function Events() {
  function myEvent() {
    console.log("Evento disparado com sucesso!");
  }

  return (
    <div>
      <p>Clique para disparar um evento!</p>
      <button onClick={myEvent}>Ativar!</button>
    </div>
  );
}
export default Events;
