import './App.css'

function App() {

  const quiz = () => {
  
    const pratos = [
      {
        "nome": "Lasanha",
        "caracteristicas": ["massa", "cozido", "recheado", "feito no forno"]
      },
      {
        "nome": "Macarrão",
        "caracteristicas": ["massa", "cozido"]
      },
      {
        "nome": "Brigadeiro",
        "caracteristicas": ["doce", "feito com chocolate"]
      }
    ];
    
      let prato = pratos.find((p) => p.caracteristicas.includes("massa"));
    
      if (!prato) {
        return null;
      }
    
      let pergunta = "O prato que você pensou é uma massa?";
      let resposta = window.prompt(pergunta);
    
      if (resposta === "sim") {
        pergunta = "O prato que você pensou é lasanha?";
        resposta = window.prompt(pergunta);
    
        if (resposta === "sim") {
          return prato;
        } else {
          pratos.map((item) => {
            if(item.nome != prato.nome){
              item.caracteristicas.map((caracteristica) => {
                if(caracteristica == "massa"){
                  let pergunta = window.prompt(`O prato que você pensou é uma ${item.nome}?`)

                  if(pergunta == "sim"){
                    console.log(`O prato que você pensou foi ${item.nome}`)
                    return item
                  }
                  else if(pergunta == "nao"){
                    let nome = window.prompt("Qual prato você pensou?")
                    let caracteristica = window.prompt("Fale uma caracteristica do seu prato: ")
                    const novoPrato = {
                      nome,
                      caracteristica
                    }
                    pratos.push(novoPrato)
                    console.log(pratos)
                  }
                }
              })
            }
          })
        }
      } else {
        return null;
      }
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
