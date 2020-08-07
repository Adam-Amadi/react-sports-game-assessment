import React from "react";
import "./App.css";
import Game from "./components/game/Game";
import AMF from "./components/Images/AMF.png";
import Pins from "./components/Images/kingpins.png";
import Olympia from "./components/Images/Olympia Lanes.png";
import Bowl from "./components/Images/Stardus Bowl lll.png";

function App(props) {
  const afm = {
    name: "We Are All Bowlers",
    logoSrc: AMF,
  };

  const kingPins = {
    name: "King Pins",
    logoSrc: Pins,
  };

  const olympiaLanes = {
    name: "Olympia Lanes",
    logoSrc: Olympia,
  };

  const stardusBowl = {
    name: "Stardus Bowl lll",
    logoSrc: Bowl,
  };
  return (
    <div className="App">
      <Game
        venue="Bowling Night Game Pizza and Beer"
        homeTeam={afm}
        visitingTeam={kingPins}
      />
      <Game
        venue="Bowling Day Game burgers and Soda"
        homeTeam={olympiaLanes}
        visitingTeam={stardusBowl}
      />
    </div>
  );
}

export default App;

// import logo from "./logo.svg";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
