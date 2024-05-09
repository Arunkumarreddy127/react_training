import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// initial template code.
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// class App1 extends React.Component{
//   render() {
//     return(
//       <div>
//         <Header username="Arun" date="30-Apr-2024"/>
//         <p>Shopping website Main body</p>
//         <Footer sitename="ecommerce"/>
//       </div>
//     )
//   }
// }

// class Header extends React.Component{
//   render() {
//     return(
//       <div>
//         <p>header <strong>{this.props.username}</strong> </p>
//         <p>header <strong>{this.props.date}</strong> </p>
//       </div>
      
//     )
//   }
// }

// class Footer extends React.Component{
//   render() {
//     return(
//       <div>
//         <p>footer <strong>{this.props.sitename} </strong></p>
//       </div>
//     )
//   }
// }

//shouldComponentUpdate()
// class Music extends React.Component {

//   constructor(props) {
//       super(props);
//       this.state = {
//         instrument: "Guitar"
//       }
//   }

//   shouldComponentUpdate() {

//     return true;
//   }

//   change = () => {
//     this.setState({
//       instrument: "Drums"
//     })
//   }

//   getSnapshotBeforeUpdate(prP, prS) {
//     alert('before: '+prS.instrument);
//   }

//   componentDidUpdate() {
//     alert('after: '+ this.state.instrument)
//   }
  
//   render() {
//   return ( 
//     <div>
//       <p>This is music instrument <strong>{this.state.instrument}</strong></p>
//       <button type="button" onClick={this.change}>Update</button>
//       </div>
//    );
//   }
// }

// export default Music;

// function App() {
//   const[age, setAge] = useState(34);

//   return(
//     <div>
//       <p>The age is: {age}</p>
//       <button onClick={() => setAge(age+1)}>Increase age</button>
//     </div>
//   )
// }


function App() {
  const[age] = useState(34);
  const[maths, setMaths] = useState(50);
  const[physics, setPhysics] = useState(60);
  const[chemistry, setChesmistry] = useState(70);
  const[total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(maths+physics+chemistry);
  })
  const update = () =>{
    setMaths(maths+10)
    setPhysics(physics+10)
    setChesmistry(chemistry+10)
  }

  return(
    <div>
      <p>Arun {age}</p>
      
      <p>Maths : {maths}</p>
      <p>physics : {physics}</p>
      <p>chemistry : {chemistry}</p>
      <p>Total : {total}</p>
      <button onClick={() => update()}>Update</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));