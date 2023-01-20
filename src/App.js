
// function App() {
//  const user = <h1>Muhayimana AMBROISE</h1>
//  const email = <h1>Muhayimana21@gmail.com</h1>
//  const adress = <h1>Kigali_rwanda</h1>
//   return (
// <div className="App">
// <div>

//   {user}

//   {email}
  
//   {adress}
// </div>
// <div>

//   {user}
  
//   {email}
 
//   {adress}
// </div>
// <div>

//   {user}
 
//   {email}
    
//   {adress}
// </div>
//     </div>
    
//   );
// }
// export default App;
// const App = ()=>{
//   const user = <h1>muhayimana</h1>
//   const email = <h1>muhayimana21@gmail.com</h1>
//   const adress = <h1>Kigali_rwanda</h1>
//   return(
//     <div className="App">
//       <div>
//         {user}
//         {email}
//         {adress}
//       </div>
//     </div>
//   );
// }
// export default App;


// const App = () =>{
//   return(
// <div className="App">
// <User />
// <User />
// <User />
// </div>
//   );
// }
// const User = () =>{
//   return (

//     <div>
//       <h1>muhayimana</h1>
//       <h1>muhayimana@gmail</h1>
//       <h1>Kigali_rwanda</h1>
//       <h1>University Of rwanda</h1>
//     </div>
//   );
// }

// export default App;


//props in reacts js
// In React, props (short for "properties") are a way to  
// pass data from a parent component to its child component(s). 
// Props are used to customize a component's 
// behavior and appearance, and they are passed to the 
// component as an object when it is created.



// const App = () =>{
//   return(
// <div className="App">
// <User name="muhayimana" email ="muhayimana21@gmail.com" adress="kIGALI-RWANDA"/>
// <User name ="ambroise" email="ambroi@gmail.com" adress="northern_rwanda"/>
// <User  name ="ambroise Tech" email="ambroise@ambroise.com" adress="nyarugenge hommies"/>
// </div>
//   );
// }
// const User = (props) =>{
//   return (

//     <div>
//     <h1>{props.name}</h1>
//     <h1>{props.email}</h1>
//     <h1>{props.adress}</h1>
//     </div>
//   );
// }

// export default App;


// css in react  js 

// import "./App.css";
// const App = () =>{
// return(
// <div className="App">
//   <h1 className="name">Ambroise</h1>
// </div>
// );
// }

// export default App;
//module css in react
// import styles from "./App.module.css";
// const App = () =>{
// return(
// <div className={styles.App}>
//   <h1 className={styles.name}>Ambroise</h1>
// </div>
// );
// }

// export default App;


//condition rendering in reacts js
// if statement in react js
// import "./App.css";
// const App = ()=>{
//   const age = 40;
//   if(age>25){
// return(
//   <h1>over Age Flow</h1>
// );
//   }
//   else{
//     return(
//       <h1>underFlow age</h1>
//     );
//   }
// }
// export default App;

//ternary operator in node js

// import "./App.css";

//  const App = () =>{
//   const age = 30;
//   return(
//   <div className="Appp">
//     {
//       age >18 ?<h1>Age over Flow</h1>:<h1>Age underFlow</h1>
//     }
//   </div>

//   )
//  }

//  export default App;


// import "./App.css";

//  const App = () =>{
//   const age = 10;
//   //boolean in reacts js
//   const isGreen = false;
//   return(
  
//      <div className="App">
//       {age >18 ?<h1 style={{color:'blue'}}>Age over Flow</h1>:<h1 style={{color:'red'}}>Age underFlow</h1>}
//      <h1 style={{ color: isGreen ? "green" : "red"}}> My name is Ambroise Tech</h1>
 
//      </div>
//   )
//  }

//  export default App;


// import "./App.css";

//  const App = () =>{
//   const age = 10;
//   //boolean in reacts js
//   const isGreen = false;
//   return(
  
//      <div className="App">
//       {age >18 ?<h1 style={{color:'blue'}}>Age over Flow</h1>:<h1 style={{color:'red'}}>Age underFlow</h1>}
//      <h1 style={{ color: isGreen ? "green" : "red"}}> My name is Ambroise Tech</h1>
//     {<button className="btn1">Add ME</button>}
//      </div>
//   )
//  }

//  export default App;

//array in reacts js
// In React, the map() function is not a built-in function 
// specific to the library, but rather a JavaScript function that is  
// commonly used to transform an array of elements. The map() method creates 
// a new array with the results of calling a provided 
// function on every element in the calling array.

// accessing array element in reacts js
// const App = ()=>{
//   const name = ["Ambroise Tech","the badest","badman"];
//  return (
// <div><h1>{name[0]}</h1></div>

//  );

// }

// export default App;

// map() function in reacts js 
// it used to transform array element, it does not change the current array but make it as new array 

// const App = () =>{
// const name =["Ambroise tech","ambroise@ambroise.com","Gicumbi_northern","The Bad man","The badest"];
// return(
//   <div className="App">
//     {name.map((value,key)=>{
//       return <h1 key={key}>{value}</h1>
//     })}
//   </div>
// ); 
// }
// export default App

//change the array to objects
// const App = () =>{
//   const users =
//   [
//     {name:"Ambroise tech"},
//     {email:"ambroise@ambroise.com"},
//     {adress:"Gicumbi_northern"},
//     {surname:"The Bad man"},
//     {StarName:"The badest"},
// ];
//   return(
//     <div className="App">
//       {users.map((user,key)=>{
//      return(
//      <div>
//       {user.name}{user.email}{user.adress}{user.surname}{user.StarName}
//      </div>
//      );
//       })}
//     </div>
//   ); 
//   }
//   export default App


// states in react usestate hook
//In ReactJS, "state" refers to the data or variables that determine a component's 
//behavior and render information to the user


// import "./App.css";
// import { useState } from "react";
// const App = () =>{

//   const [age,setAge]= useState(0);
//   const increasingFunction =()=>{
//         setAge(age +1)
//   }
//   const settozero =()=>{
//     setAge(0)
// }
//   const decrease =()=>{
//     setAge(age -1)
 
// }
//   return (
//   <div className="App">
//     {age}
//     <button onClick={increasingFunction}>Increasing</button>
//     <button onClick={decrease}>decrease</button>
//     <button onClick={settozero}>settozero</button>
//   </div>
//   );
// }

// export default App;

// import  "./App.css";
// import { useState } from "react";
// const App = () =>{
// const [inputValue,setInputValue] = useState("");
// const handleEventInputChange=(event)=>{

//   setInputValue(event.target.value);
// };

// return(
//   <div className="App">
//     <input type="text" onChange={handleEventInputChange}/>
//   {inputValue}
//   </div>

// );
// }
// export default App;


// import "./App.css";
// import{useState} from "react";


// const App =  () =>{

//   const[Key,Value] = useState("");
//   const InputChange = (event)=>{
//     Value(event.target.value)
//   };
// return(

//   <div className="App">
//     <input type="text" onChange={InputChange}/>

//     {Key}
//   </div>
// );

// }

// export default App;


// import "./App.css";
//  import { useState } from "react";

//  const App = () =>{
// const[Key,Value] = useState(false);

// const showHide = ()=>{
//   Key(!Value);
// }
// return (

// <div className="App">
// <button onClick={showHide}>Show/Hide</button>
// {Key && <h1>Hi My Name Is Ambroise Tech</h1>}
// </div>
// );

//  }

//  export default App;


// show and hide button 


// import "./App.css";
//  import { useState } from "react";
//  const App = () =>{
// const[showText,setShowText] = useState(false);
// return (
// <div className="App">
// <button onClick={()=>{
//   setShowText(!showText);
// }} 
// >Show/Hide
// </button>
// {showText && <h1>Hi My Name Is Ambroise Tech</h1>}
// </div>
// );
//  }
//  export d(efault App;




// import { useState } from "react";
// const App = () =>{
// const [showText,setShowText] = useState(false);

// return(

// <div className="App">

//   <button onClick={()=>{

// setShowText(!showText); 
//   }}>show/hide</button>
//   {
//     showText && <h1>Hi My Name IS Ambroise Tech</h1>
//   }
// </div>
// );

// }

// export default App;


// import { useState } from "react";
// const App = () =>{
// const [textColor,setTextColor] = useState("black");

// return(

// <div className="App">

//   <button onClick={()=>{

// setTextColor(textColor ==="black"? "red" : "black"); 
//   }}>show/hide</button>
//   <h1 style={{color:textColor}}>Hi My Name IS Ambroise Tech</h1>
  
// </div>
// );

// }

// export default App;
   

// import { useState } from "react";

// const  App = () =>{
// const[age,setAge] = useState(0);

// const increasingFunction = () =>{
//   setAge(age + 1);
//   }
  
//   const decreasingFunction = () =>{
//     setAge(age - 1);
//     }
//     const resetFunction = () =>{
//       setAge(0);
//       }

// return(

//   <div className="App">

// <button onClick={increasingFunction}>Increasing</button>
// <button onClick={decreasingFunction}>decrease</button>
// <button onClick={resetFunction}>Reset</button>
// {age}
//   </div>
// );

// }

// export default App;


// crude operation to do list in react js 

import "./App.css"
import {useState} from "react";

const App = ( ) =>{


  
}



