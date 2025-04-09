import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar';
import Container from "./components/ui/Container";
import ButtonPrimary from "./components/ui/ButtonPrimary";
import './App.css';
import ButtonSecondary from "./components/ui/ButtonSecondary";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
      <Navbar/>
      <main>
        <Container>
          <h1>Title</h1>
          <div className={"subcontainer-showcase"}></div>
          <div className={"buttons-showcase"}>
            <ButtonPrimary/>
            <ButtonSecondary/>
          </div>
        </Container>
      </main>
    </div>
  );
}

export default App;
