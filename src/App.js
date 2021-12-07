import React from 'react';
import NavBar from './components/navbar';

function App() {
  return (
    <div classNameName="App">
      <header classNameName="App-header">
        <NavBar></NavBar>
      </header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" class="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out">
        AAA</button>
        <a
          classNameName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
