import React from 'react';
import axios, { Axios } from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

function Home(props)  {
    // Show Hide ELement
    const [show, setShow] = useState(true);
    
    // navigate programarically using useNavigate 

    const navigate = useNavigate()
    // Two way data binding
     const[value,setValue] = useState("Data Binding");
    
     const handleChange =(e)=>{
      setValue(e.target.value);
     }
    
     // Disable button if there is no input
     const[ipValue,setipValue]= useState();
    
     const oninputChange=(e)=>{
      setipValue(e.target.value);
     }
    
      // Loop through an array of objects in reactjs
      const users = [
        { name: "John Doe", id: 1 },
        { name: "Jane Doe", id: 2 },
        { name: "Billy Doe", id: 3 },
      ];
    
      // making API Call using axios
      const [numFact, setNumfact] = useState("");
      const getNumberFacts = () => {
        axios.get("http://numbersapi.com/random/math").then((res) => {
          console.log(res);
          setNumfact(res.data);
        });
      };
    
      const [makeupProducts, setmakeupProducts] = useState([]);
      // let listItems=[];
      const getWeather = () => {
        axios
          .get(
            "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
          )
          .then((response) => {
            console.log(response.data);
            setmakeupProducts(response.data);
            // listItems = makeupProducts.map((makeupProduct) =>
            // <li key={makeupProduct.id}>{makeupProduct.brand}</li> );
          });
      };
    
      const listItems = makeupProducts.map((makeupProduct) => (
        <li key={makeupProduct.id}>
          {" "}
          Product Name: {makeupProduct.name} <br />
          Product Price: {makeupProduct.price}
        </li>
      ));
    
      return (
        <div className="App">
          <button onClick={getWeather}>Make API Call</button>
          {/* <div>Brand:{makeupProducts.toString()}</div> */}
    
          <ul>{listItems}</ul>
          <div>
            <button onClick={getNumberFacts}>Get Number Facts</button>
            <h4>{numFact}</h4>
          </div>
          <h4>Navigate using Usenavigate</h4>
          <div>
            <button onClick={() => navigate('/orderSummary')}>Place Order</button>
          </div>
          <h3>loop through an array of objects</h3>
          {users.map((user) => {
            return (
              <div key={user.id}>
                <ul>{user.name}</ul>
              </div>
            );
          })}
    
          <div>
          <button onClick={() => setShow(!show)}>
            {" "}
            {show ? "Hide Element Below" : "Show Element Below"}
          </button>
          {show ? <h3>Toggle Challenge</h3> : null}
          </div>
    
          <div>
            <h3>Two Way Data Binding
            </h3>
            <input type="text" value={value} onChange={handleChange} placeholder="Text here"/>
            <p>{value}</p>
          </div>
          <div>
            <h3>Diable if there is no value</h3>
            <input type="text" onChange={oninputChange} value={ipValue}/>
            <button disabled={!ipValue}>Submit</button>
          </div>
        </div>
      );
    }

    export default Home;