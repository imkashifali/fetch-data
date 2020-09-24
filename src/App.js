import React, { useEffect, useState  } from "react";
import "./App.css";

function App() {
  const [repos, setrepos] = useState([{}]);

  useEffect( () => {

     //SECOND Method for Get Api
    async function fetchGetApi(){
      const response = await fetch("https://api.github.com/users/kashifshafati/repos");
      const data = await response.json();
      console.log(data);
      setrepos(data)
    }
    fetchGetApi()
   

      //First Method for Get Api
    //   fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => {
    //     setData(json)})
  }, []);

  return <div className="App">
    <h1>You Are Seening All Repositry</h1>
    {repos.map((repoObj,i) => {
      return(<li key={i}>
        {repoObj.name}
        {repoObj.full_name}
       
      
      </li>)
    })}
    </div>;
}

export default App;
