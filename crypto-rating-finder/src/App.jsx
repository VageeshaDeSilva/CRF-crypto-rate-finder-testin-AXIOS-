import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import axios from 'axios';
import { useEffect } from 'react';
import MainPage from './components/MainPage';

function App() {

  return (
    <>
      <div className='main'>
        <MainPage></MainPage>
      </div>
    </>
  )
}

export default App
