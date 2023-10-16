import './App.css'

function App() {

  const foodOptions = ["Massa", "Lasanha"]

  const quiz = () => {
    let stopIteration = false;
  
    foodOptions.map((food) => {
      if (stopIteration) return;
  
      let response = prompt(`O prato que você pensou é ${food}?`);
  
      if (response.toLocaleLowerCase() === "sim") {
        alert("Acertei dnv!");
        stopIteration = true;
      }
    });

    if(!stopIteration){
      let correctFood = prompt("Qual prato você pensou?")
      let foodDiference = prompt(`${correctFood} é ______ mas Lasanha não.`)
      alert("Fim do questionario! Obrigado pela atenção :)")
      return foodDiference
    }
  };

  return (
    <>
      <img className='logo' src="conteudize.jpg" alt="" />
      <div className='mainDiv'>
        <p>Pense em um prato que gosta</p>
        <button onClick={quiz}>Iniciar</button>
      </div>
      <p id='credits'>created by Juliano Sudecum</p>
    </>
  )
}

export default App
