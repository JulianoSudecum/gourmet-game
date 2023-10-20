import "./App.css";

function App() {
  const plates = [
    {
      name: "Lasanha",
      characteristics: ["massa"],
    },
    {
      name: "Macarrão",
      characteristics: ["massa", "cozido"],
    },
    {
      name: "Brigadeiro",
      characteristics: ["doce"],
    },
  ];
  const quiz = () => {

    let array = plates.map((plate) => plate.characteristics);
    let isFinished = false;

    let uniqueArray = [...new Set(array.flat())];

    uniqueArray.map((element, index) => {
      if (!isFinished) {
        let response = prompt(`O prato que você pensou é ${element}?`);
        if (response.toLowerCase() == "sim") {
          let arrayFiltered = plates.filter(
            (plateFilter) => plateFilter.characteristics == element
          );
          plates.map((plate) => {
            if (plate.characteristics.length >= 2) {
              plate.characteristics.map((singleCharacteristic) => {
                if (singleCharacteristic == element) {
                  arrayFiltered.push(plate);
                }
              });
            }
          });
          if (arrayFiltered.length <= 1) {
            let response = prompt(
              `O prato que você pensou é ${arrayFiltered[0].name}?`
            );
            if (response.toLowerCase() == "sim") {
              alert("Acertei denovo!");
              isFinished = true;
            }
          }
          else if (arrayFiltered.length > 1) {
            arrayFiltered.map((plate) => {
              plate.characteristics.map((characteristic) => {
                if (characteristic != element) {
                  const index = arrayFiltered.filter(
                    (filtered, index) =>
                      filtered.characteristics[index] == characteristic
                  );
                  let response = prompt(
                    `O prato que você pensou é ${characteristic}?`
                  );
                  if (response.toLowerCase() == "sim") {
                    let response = prompt(
                      `O prato que você pensou é ${index[0].name}`
                    );
                    if (response.toLowerCase() == "sim") {
                      alert("Acertei denovo!");
                      isFinished = true;
                    }
                  } else {
                    const array = arrayFiltered.filter(
                      (arrayElement) => arrayElement.name != index[0].name
                    );
                    let response = prompt(
                      `O prato que você pensou é ${array[0].name}?`
                    );
                    if (response.toLowerCase() == "sim") {
                      alert("Acertei denovo!");
                      isFinished = true;
                    }
                  }
                }
              });
            });
          }
        }
        else {
          if((index + 1) == plates.length){
            let plateResponse = prompt("Qual prato você pensou?");
            let characteristicResponse = prompt(
              `${plateResponse} é _______ mas ${plates[index].name} não`
            );
            let newPlate = {
              name: plateResponse,
              characteristics: [characteristicResponse],
            }
            plates.push(newPlate)
          }
        }
      }
    });
  };

  return (
    <>
      <img className="logo" src="conteudize.jpg" alt="" />
      <div className="mainDiv">
        <p>Pense em um prato que gosta</p>
        <button onClick={quiz}>Iniciar</button>
      </div>
      <p id="credits">created by Juliano Sudecum</p>
    </>
  );
}

export default App;
