import { useState } from 'react';
import './App.css';
import Table from "./Table";
import {Users} from './users';

function App() {
  const [query, setQuery] = useState("");

const keys = ["first_name", "last_name","email"]


  const search = (data) =>{
    return data.filter(
      (item) =>
        keys.some((key)=>item[key].toLowerCase().includes(query))
    );
};

  return (
    <div>
      <input type='text' placeholder='Arama...' className='search' onChange={(e) => setQuery(e.target.value)}>
      
      </input>


      <Table data={search(Users)}/>
    
    </div>
  );
}

export default App;
