// src/App.js
import React from 'react';
import { RecoilRoot } from 'recoil';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './Components/Table';
import NavBar from './Components/NavBar';
import './Style/style.scss';

function App() {
  return (
    <RecoilRoot>
       <NavBar />
      <div className="container mt-5">
        <h1>Usage of Recoil and SCSS  </h1>
        <Table />
      </div>
    </RecoilRoot>
  );
}

export default App;
