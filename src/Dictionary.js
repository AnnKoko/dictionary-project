import React, {useState} from 'react';
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";

export default function Dictionary(){

  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response){
    console.log(response.data[0]);
  //  let meaning = response.data[0].meanings[0].definitions[0].definition;
    setResults(
      response.data[0]
    );
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
      <Results results={results} />
    </div>
  );
}
