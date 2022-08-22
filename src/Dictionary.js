import React, {useState} from 'react';
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(){

  let [keyword, setKeyword] = useState("");

  function handleResponse(response){
    console.log(response.data);
  }
  function search(e) {
    e.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeyword(e){
    setKeyword(e.target.value)
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeyword}/>
      </form>
    </div>
  );
}