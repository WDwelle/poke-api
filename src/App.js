import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  //===vanilla js===
//===useState set===
  const [poke, setPoke] = useState([])
// //===fetch method for API===
//   const fetchPoke = () => {
//     fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=200")
//       .then( res => {
//         return res.json()
//       } )
//     .then(jsonPass => {
//       console.log(jsonPass);//pass
//       setPoke(jsonPass.results);
//     })
//     .catch( fail => console.log(fail) )//fail
//   }

//===axios===
  const axiosPoke = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=200")
      .then( res => {
        console.log(res.data.results)
        setPoke(res.data.results)
      } )
      .catch( err => console.log(err) )
  }


  return (
    <div className="App">
      <h1>Pokemon</h1>
      {/*<button onClick={fetchPoke}>fetch pokemon</button>*/}
      <button onClick={axiosPoke}>fetch pokemon</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            poke.map((poke, idx) => {
              return(
                <tr key={poke.idx}>
                  <td>{poke.name}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
