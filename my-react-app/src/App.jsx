import './App.css'

function App() {

  const quiz = () => {
  
    const pratos = [
      {
        "nome": "Lasanha",
        "caracteristicas": ["massa"]
      },
      {
        "nome": "Macarrão",
        "caracteristicas": ["massa", "cozido"]
      },
      {
        "nome": "Brigadeiro",
        "caracteristicas": ["doce"]
      }
    ];

    let array = pratos.map((prato) => prato.caracteristicas);

    let uniqueArray = [...new Set(array.flat())];

    uniqueArray.map((element) => {
      let response = prompt(`O prato que você pensou é ${element}?`)
      // efetua o filtro de separacao por caracteristicas
      if(response.toLowerCase() == "sim"){
        let arrayFiltered = pratos.filter((pratoFilter) => pratoFilter.caracteristicas == element)
        pratos.map((prato) => {
          if(prato.caracteristicas.length >= 2){
            prato.caracteristicas.map((caracter) => {
              if(caracter == element){
                arrayFiltered.push(prato)
              }
            })
          }
        })
        // condicional se o elemento tiver apenas uma caracteristica
        if(arrayFiltered.length <= 1){
          console.log(arrayFiltered)
          let response = prompt(`O prato que você pensou é ${arrayFiltered[0].nome}?`)
          if(response.toLowerCase() == "sim"){
            alert("Acertei denovo!")
            return;
          }
        }
        // caso elemento tiver +1 caracteristica
        // verificar se é cozido antes que perguntar o prato
        else{
          arrayFiltered.map((prato) => {
            prato.caracteristicas.map((caracteristica) => {
              if(caracteristica != element){
                const index = arrayFiltered.filter((filtered, index) => filtered.caracteristicas[index] == caracteristica)
                console.log(caracteristica)
                let response = prompt(`O prato que você pensou é ${caracteristica}?`)
                if(response.toLowerCase() == "sim"){
                  console.log(index)
                  let response = prompt(`O prato que você pensou é ${index[0].nome}`)
                  if(response.toLowerCase() == "sim"){
                    alert("Acertei denovo!")
                    return;
                  }
                } else {
                  const array = arrayFiltered.filter((arrayElement) => arrayElement.nome != index[0].nome)
                  let response = prompt(`O prato que você pensou é ${array[0].nome}?`)
                  if(response.toLowerCase() == "sim"){
                    alert("Acertei denovo!")
                    return;
                  }
                }
                // else{
                //   console.log(prato)
                // }
              }
            })
          })
        }
      }
    })
    }

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
