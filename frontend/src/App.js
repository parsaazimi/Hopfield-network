import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [getMessage, setGetMessage] = useState([
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
  ]);
  const array1 = [
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
  ];
  const array2 = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [1, 1, 1, 1, 1, 1, 1, 1, -1, -1],
    [1, 1, 1, 1, 1, 1, 1, 1, -1, -1],
    [1, 1, 1, 1, 1, 1, 1, 1, -1, -1],
    [1, 1, 1, 1, 1, 1, 1, 1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, 1, 1, 1, 1, 1, 1, 1, 1],
    [-1, -1, 1, 1, 1, 1, 1, 1, 1, 1],
    [-1, -1, 1, 1, 1, 1, 1, 1, 1, 1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  ];
  const array3 = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [1, 1, 1, 1, 1, 1, 1, 1, -1, -1],
    [1, 1, 1, 1, 1, 1, 1, 1, -1, -1],
    [1, 1, 1, 1, 1, 1, 1, 1, -1, -1],
    [1, 1, -1, -1, -1, -1, -1, -1, -1, -1],
    [1, 1, -1, -1, -1, -1, -1, -1, -1, -1],
    [1, 1, 1, 1, 1, 1, 1, 1, -1, -1],
    [1, 1, 1, 1, 1, 1, 1, 1, -1, -1],
    [1, 1, 1, 1, 1, 1, 1, 1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  ];
  const array4 = [
    [-1, -1, 1, 1, 1, -1, -1, 1, 1, 1],
    [-1, -1, 1, 1, 1, -1, -1, 1, 1, 1],
    [-1, -1, 1, 1, 1, -1, -1, 1, 1, 1],
    [-1, -1, 1, 1, 1, -1, -1, 1, 1, 1],
    [-1, -1, 1, 1, 1, -1, -1, 1, 1, 1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [1, 1, 1, 1, 1, -1, -1, 1, 1, 1],
    [1, 1, 1, 1, 1, -1, -1, 1, 1, 1],
    [1, 1, 1, 1, 1, -1, -1, 1, 1, 1],
    [1, 1, 1, 1, 1, -1, -1, 1, 1, 1],
  ];
  // let rows = 10; create a button to make random patterns by select option corruption percentage!
  // let cols = 10;
  // let array = new Array(rows);

  // for (let i = 0; i < rows; i++) {
  //   array[i] = new Array(cols);
  //   for (let j = 0; j < cols; j++) {
  //     array[i][j] = Math.random() < 0.7 ? 1 : -1; // 70% chance of 1, 30% chance of -1
  //   }
  // }

  // console.log(array);
  const [storedPattern, setStoredPattern] = useState("array1");
  const [storedPatternValue, setStoredPatternValue] = useState([
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
  ]);
  const [corruptionPercentage, setCorruptionPercentage] = useState(0);
  const [corruptionPatternValue, setCorruptionPatternValue] = useState([
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
  ]);
  const [patternValueHolder, setPatternValueHolder] = useState([
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
    [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
  ]);
  function randomizeArray(arr, percentage) {
    let totalElements = arr.length * arr[0].length;
    let numChange = Math.round(
      totalElements * (percentage !== 0 ? percentage / 100 : 0)
    );

    for (let i = 0; i < numChange; i++) {
      let row = Math.floor(Math.random() * arr.length);
      let col = Math.floor(Math.random() * arr[0].length);
      arr[row][col] *= -1;
    }

    return arr;
  }

  useEffect(() => {
    let patternValues = document.querySelectorAll("p");
    for (let i = 0; i < patternValues.length; i++) {
      if (patternValues[i].innerHTML === "-1") {
        patternValues[i].style.backgroundColor = "black";
        patternValues[i].style.color = "black";
      } else if (patternValues[i].innerHTML === "1") {
        patternValues[i].style.backgroundColor = "white";
        patternValues[i].style.color = "white";
      }
    }
  }, [storedPatternValue, corruptionPatternValue]);
  // useEffect(() => {
  //   if (storedPattern === "array1") {
  //     setStoredPatternValue(array1);
  //     setPatternValueHolder(array1);
  //   } else if (storedPattern === "array2") {
  //     setStoredPatternValue(array2);
  //     setPatternValueHolder(array2);
  //   } else if (storedPattern === "array3") {
  //     setStoredPatternValue(array3);
  //     setPatternValueHolder(array3);
  //   } else if (storedPattern === "array4") {
  //     setStoredPatternValue(array4);
  //     setPatternValueHolder(array4);
  //   } else {
  //     setStoredPatternValue(array1);
  //     setPatternValueHolder(array1);
  //   }

  //   setCorruptionPatternValue(() =>
  //     randomizeArray(patternValueHolder, corruptionPercentage)
  //   );
  //   axios.post("http://localhost:5000/flask/hello", {
  //     message: JSON.stringify(corruptionPatternValue),
  //   })
  // }, [storedPattern, corruptionPercentage]);
  useEffect(() => {
    let currentPatternValue;
    if (storedPattern === "array1") {
      currentPatternValue = array1;
    } else if (storedPattern === "array2") {
      currentPatternValue = array2;
    } else if (storedPattern === "array3") {
      currentPatternValue = array3;
    } else if (storedPattern === "array4") {
      currentPatternValue = array4;
    } else {
      currentPatternValue = array1;
    }
    setStoredPatternValue(currentPatternValue);
    setPatternValueHolder(currentPatternValue);

    const corruptedPatternValue = randomizeArray(currentPatternValue, corruptionPercentage);
    setCorruptionPatternValue(corruptedPatternValue);

    // axios.post("http://localhost:5000/flask/hello", {
    //   message: JSON.stringify(corruptedPatternValue),
    // });
    axios.post("https://hopfield-uok.iran.liara.run//flask/hello", {
      message: JSON.stringify(corruptedPatternValue),
    });
  }, [storedPattern, corruptionPercentage]);
  useEffect(() => {
    if (storedPattern === "array1") {
      setCorruptionPatternValue(array1);
    } else if (storedPattern === "array2") {
      setCorruptionPatternValue(array2);
    } else if (storedPattern === "array3") {
      setCorruptionPatternValue(array3);
    } else if (storedPattern === "array4") {
      setCorruptionPatternValue(array4);
    } else {
      setCorruptionPatternValue(array1);
    }
    setCorruptionPercentage(0);
  }, [storedPattern]);

  useEffect(() => {
    axios
      .get("https://hopfield-uok.iran.liara.run/flask/hello")
      .then((response) => {
        let string = response.data.message.split(" ").map(Number);
        let matrix = [];
        for (let i = 0; i < 10; i++) {
          matrix[i] = string.slice(i * 10, i * 10 + 10);
        }
        // console.log(matrix);
        setGetMessage(matrix);
      })
      .catch((error) => {
        // console.log(error);
      });
      
      axios
      .post("https://hopfield-uok.iran.liara.run/flask/hello", {
        message: JSON.stringify(corruptionPatternValue),
      })
      // .then(response => console.log(response.data, 'here I am'))
      .catch((error) => console.error(error));
  }, []);
  const printHandler = () => {
    // console.log(getMessage, 'wow')
    // console.log(corruptionPatternValue, corruptionPercentage);
    setCorruptionPatternValue(getMessage);
    
    axios
      .post("https://hopfield-uok.iran.liara.run/flask/hello", {
        message: JSON.stringify(corruptionPatternValue),
      })
      .then(response => {
        console.log(response.data, 'here I am')
      let string = response.data.message.split(" ").map(Number);
        let matrix = [];
        for (let i = 0; i < 10; i++) {
          matrix[i] = string.slice(i * 10, i * 10 + 10);
        }
        console.log(matrix);
        setCorruptionPatternValue(matrix)
        setGetMessage(matrix);
    })
      .catch((error) => console.error(error));





      // axios.get('http://localhost:5000/flask/hello').then(response => {
      //   console.log("SUCCESS", response.data.message)
      //   setGetMessage(response)
      // }).catch(error => {
      //   console.log(error)
      // })



      axios
      .get("https://hopfield-uok.iran.liara.run/flask/hello")
      .then((response) => {
        console.log(response.data);
        // let string = response.data.message.split(" ").map(Number);
        // let matrix = [];
        // for (let i = 0; i < 10; i++) {
        //   matrix[i] = string.slice(i * 10, i * 10 + 10);
        // }
        // console.log(matrix);
        // setGetMessage(matrix);
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  return (
    <div className="App">
      <header>
        <h1>Hopfield Networks</h1>
      </header>
      <main className="window">
        <div className="parametersContainer">
          <h1>Parameters</h1>
          <div>
            <div>
              <label>Stored patterns</label>
              <select
                onChange={(e) => setStoredPattern(e.target.value)}
                value={storedPattern}
              >
                <option value="array1">1</option>
                <option value="array2">2</option>
                <option value="array3">3</option>
                <option value="array4">4</option>
              </select>
            </div>
          </div>
          <div>
            <div>
              <label>Corruption %</label>
              <select
                onChange={(e) =>
                  setCorruptionPercentage(Number(e.target.value))
                }
                value={corruptionPercentage}
              >
                <option value={"0"}>0</option>
                <option value={"10"}>10</option>
                <option value={"20"}>20</option>
                <option value={"30"}>30</option>
                <option value={"40"}>40</option>
                <option value={"50"}>50</option>
                <option value={"60"}>60</option>
                <option value={"70"}>70</option>
                <option value={"80"}>80</option>
                <option value={"90"}>90</option>
                <option value={"100"}>100</option>
              </select>
            </div>
          </div>
          <div>
            <div>
              <label>Iteration delay</label>
              <select>
                <option>25</option>
              </select>
            </div>
          </div>
        </div>
        <div className="patternsContainer">
          <h1>Stored pattern(s)</h1>
          <div className="storedPatternsContainer">
            {storedPatternValue.map((row, i) => (
              <div className="patternArray" key={i}>
                {row.map((item, j) => (
                  <p key={j}>{item}</p>
                ))}
              </div>
            ))}
          </div>
          <button onClick={printHandler}>print</button>
        </div>
        <div className="corruptedPatternContainer">
          <h1>Corrupted pattern</h1>
          <div className="storedPatternsContainer">
            {corruptionPatternValue.map((row, i) => (
              <div className="patternArray" key={i}>
                {row.map((item, j) => (
                  <p key={j}>{item}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
{
  /* <div>{getMessage.status === 200 ? <h3>{getMessage.data.message}</h3>:<h3>Loading</h3>}</div> */
}
