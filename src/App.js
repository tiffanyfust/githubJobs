import './App.css';
import {Results, Filters} from './Results';
import { useState } from 'react';

function App() {

  const [searchValue, setSearchValue] = useState('');

  const newSearch = () => {
      const value = document.getElementById('keyword').value;
      setSearchValue('Keyword=' + value);
  } 

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <main>
        <div className="searchContainer">
            <input type="search" id="keyword" placeholder="Title, companies, expertise or benefits" aria-label="Job Search Bar"></input>
            <button type="submit" onClick={newSearch} onKeyPress={(e) => {if (e.key === 'Enter') {newSearch()}}}>Search</button>
        </div>
        <section>
          <Filters/>
          <Results keyword={searchValue}/>
        </section>
      </main>
    </div>
  );
}

export default App;
