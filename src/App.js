import React, {useState} from 'react';
import './App.css';

function App() {
//===useState set===
  const [poke, setPoke] = useState([])
//===fetch method for API===
  const fetchPoke = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=200")
      .then( res => {
        return res.json()
      } )
    .then(jsonPass => {
      console.log(jsonPass);//pass
      setPoke(jsonPass.results);
    })
    .catch( fail => console.log(fail) )//fail
  }


  return (
    <div className="App">
      <h1>Pokemon</h1>
      <button onClick={fetchPoke}>fetch pokemon</button>
      <hr />
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
                <tr>
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
