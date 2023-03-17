import React from 'react';
import logo from './logo.svg';
import './App.css';
import teams from './CollegeBasketballTeams.json';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
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


/////////////////////////////////////////////////////////////////////////////////////
const teamNames = teams.teams

//This is the function that does the entire html body
function App(){
  return(
    <div>
      <Welcome/>
      <TeamList/>
    </div>
  );
}

class TeamList extends React.Component{
  render() {
    return(
      <div>
        {teamNames.map(oneTeam => <Team {...oneTeam}/>)}
        {/* <Team {...teamNames.teams[0]}/> */}
        {/* <p>{teamNames[0].name}</p> */}
      </div>
    );
  }
}


class Team extends React.Component{
  render (){

    var aTeam = this.props;

    return(
      <div>
        <h2>School: {aTeam.school}</h2>
        <h2>Name: {aTeam.name} </h2>
        <h2>Location: {aTeam.city}</h2>
      </div>
    );
  }
}


class Welcome extends React.Component{
  render() {
    return(
      <div>
        <h1>Welcome!</h1>
        <p>This is where you can find out more about NCAA teams</p>
      </div>
    );
  }
}





export default App;
