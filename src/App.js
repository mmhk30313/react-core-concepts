import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let person = {
    name: "Md. Mehedi Hasan Khan",
    dept: "cse",
    mobile: "01521108858"
  }
  const design = {
    boxShadow: "3px 3px 10px orange",
    backgroundColor: "#55D0FF",
    color: "green",
    padding: "20px",
    borderRadius: "10px",
    transition: "all 1s",
    width: "50%",
    listStyleType: "none"
  }
  const design_Mobile = {
    boxShadow: "3px 3px 10px lightgreen",
    backgroundColor: "white",
    color: "green",
    padding: "20px",
    borderRadius: "10px",
    transition: "all 1s"
  }

  function findPrime(){
    let prime = "";
    let p = true;
    for(let j=2;j<=100;j++){
      p = true;
      for(let i=2;i<Math.sqrt(j);i++){
        if(j%i==0){
          p = false;
          break;
        }
      }
      if(p){
        // prime += j.toString()+"\n";
        prime += `${j},\n`;
      }
    }
    return prime;
  }

  const student = {
    name: ["Sumaiya","Md. Mehedi Hasan Khan","Elias","Estiyak","Junaid","Sharthok"],
    dept: ["PHY","CSE","MATH","CSE","CSE","ICT"]
  };

  const products = [{name: "Books", info: "It's a best book", price: "$10"},{name: "Bike", info: "This bike is very popular", price: "$180"}]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit just <code>src/App.js</code> and save to reload.
        </p> */}
        <h1>My name is: {person.name}</h1>
        <h5 style={{color: "red"}}>My department is: {person.dept}</h5>
        <h4 className="mobile" style = {design_Mobile}  >My mobile no. is: {person.mobile}</h4>
        <ul style = {design}>
          {
            // .map() -> just array er upor use kora jay...
            student.name.map(name => <li>{name}</li>)
          }
        </ul>
        <div style = {design}>
          <h4>Prime Number: </h4>
          <p>{findPrime()+"..."}</p>
        </div>

        <br/>{card(person)}

        {/* Function call korar jonno function er 1st letter capital or small je konotai hote pare... */}
        {/* {myCard()} */}

        {/* html element hishabe function ke call korar jonno function er 1st letter capital hobe... */}
        <br/><MyCard></MyCard>
        {/* style-1 */}
        {/* <ProductCard name={product[0].name} price={product[0].price}></ProductCard>
        <ProductCard name={product[1].name} price={product[1].price}></ProductCard> */}
        
        {/* style-2 & 3 */}
        {/* <ProductCard product = {products[0]}></ProductCard>
        <ProductCard product = {products[1]}></ProductCard> */}

        {/* style-4 for mapping in one line for many output components */}
        {
          products.map(pd => <ProductCard product = {pd}></ProductCard>)
        }

        {/* for loop use kore call kora jay na ekhane... */}
        <MyCard name={student.name[0]} dept={student.dept[0]}></MyCard>
        <MyCard name={student.name[1]} dept={student.dept[1]}></MyCard>
        <MyCard name={student.name[2]} dept={student.dept[2]}></MyCard>
        <MyCard name={student.name[3]} dept={student.dept[3]}></MyCard>

        {/* Event Handler for button click...(increase and decreasing like number of facebook post) */}
        <Count></Count>

        {/* JSON api call function...example */}
        <Users></Users>
        <p>My first react paragraph...</p>
      </header>
    </div>
  );
}
function Users(){
  const [users, setName] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setName(data))
  }, [])
  return (
    <div>
      <h1>Name of the list of data: {users.length}</h1>
      <ul style={{listStyleType: "none"}}>
        {/* {
          // console.log(users)
        } */}
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )

}
function Count(){
  const [count, setCount] = useState(0);
  let cnt = 0;
  if(count>0){
    cnt = count-1;
  }
  // console.log(cnt);
  return (
  <div>
    <h1>Like: {count}</h1>
    <button onClick={() => setCount(count+1)} style={{backgroundColor: "lightsalmon",padding: "5px",color: "white",border: "none",borderRadius: "10px 8px",outline: "none"}}><h1>+</h1></button>
    <button onClick={() =>  setCount(cnt)} style={{backgroundColor: "lightsalmon",padding: "5px",color: "white",border: "none",borderRadius: "10px 8px",outline: "none",marginLeft: "15px"}}><h1>-</h1></button>
  </div>
  )
}

function ProductCard(props){
  // console.log(props);
  const productDesign = {
    backgroundColor:"lightgray",
    width: "320px",
    borderRadius: "10px",
    padding: "15px",
    float: "left",
    color: "black",
    margin: "15px"
  }
  //style-3 --> style-2 er parameter gula e...
  const {name, info, price} = props.product;
  return (
    <div style={productDesign}>
      {/* {/* style-1 */}
      {/* <h2>{props.name}</h2>
      <h5>{props.price}</h5> */}

      {/* style-2 */}
      {/* <h2>{props.product.name}</h2>
      <h2>{props.product.price}</h2> */}
      
      {/* style-3 */}
      <h2>{name}</h2>
      <p>{info}</p>
      <h2>{price}</h2>
      <br/>
      <button>BUY NOW</button>
    </div>
  )
}
function  MyCard(props){
  const design = {
    backgroundColor: "white", 
    color: "purple", 
    boxShadow: "5px 5px 18px purple",
    borderRadius: '10px',
    padding: "20px",
    margin: "10px",
    transition: "all 1s"
  }
  return (
    <div className="mobile" style = {design}>
      <div style = {{display: "flex", flexDirection: "column", justifyContent: "center",margin: "10px",width: "300px",float: "left"}}>
        <p>Name: {props.name}</p>
        <p>Dept.: {props.dept}</p>
      </div>
      <h4>Find Your City</h4>
      <input placeholder="search your city..." type="text"/>
      <button style={{backgroundColor: "lightsalmon",padding: "5px",color: "white",border: "none",borderRadius: "10px 8px",outline: "none",position: "relative",left:"-5px"}}>Click</button>
    </div>
  )
}
function card(person){
  return (
    <div style = {{backgroundColor: "white", color: "purple", boxShadow: "5px 5px 18px wheat",borderRadius: '10px',padding: "20px"}}>
      <h4>{person.name}</h4>
      <p>{person.mobile}</p>
    </div>
  )
}
export default App;
