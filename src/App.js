// Tus rutas acá
import React from "react";
import Teams from "./components/Teams/Teams";
import TeamDetail from "./components/TeamDetail/TeamDetail";
import Nav from "./components/Nav/Nav";
import CreateTeam from "./components/CreateTeam/CreateTeam";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/*" element={<Nav></Nav>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/" element={<Teams></Teams>}/>
      </Routes>
      <Routes>
        <Route exact path="/teams/:teamId" element={<TeamDetail></TeamDetail>}/>
      </Routes>
      <Routes>
        <Route exact path="/team/create" element={<CreateTeam></CreateTeam>}/>
      </Routes>
    </div>
  );
}

export default App;
