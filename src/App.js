import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textfrom from './Components/textfrom';
import React ,{useState} from 'react'
//import About from './Components/About';
//import {
  //BrowserRouter,
  //Routes,
  //Route,
//} from "react-router-dom";



function App() {
  const[mode,setmode]=useState("light");

  const [alert,setalert]=useState(null);

  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);

    },1000)
  }

  const toggle=()=>{
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor="#082145";
      showalert("Dark mode activated","success");
    }else{
      setmode("light");
      document.body.style.backgroundColor="white";
      
    }
  }

const redtoggle=()=>{
  if(mode==="light" ){
    document.body.style.backgroundColor="#811111";
    showalert("Red Mode activated","success");
    setmode("red");
    
  }else{
    setmode("light");
    document.body.style.backgroundColor="white";      
  }
}

const purtoggle=()=>{
  if(mode==="light"){
    document.body.style.backgroundColor="#2d0343";
    showalert("Purple Mode activated","success");
    setmode("purple");
  }else{
    setmode("light");
    document.body.style.backgroundColor="white";      
  }
}

const grtoggle=()=>{
  if(mode==="light"){
    document.body.style.backgroundColor="#092f08";
    showalert("Green Mode activated","success");
    setmode("green");
  }else{
    setmode("light");
    document.body.style.backgroundColor="white";      
  }
}

  return (
    <>
   {/* <BrowserRouter>*/}
<Navbar title="Textutial" abouttext="About Us" mode={mode} toggle={toggle} redtoggle={redtoggle} purtoggle={purtoggle} grtoggle={grtoggle}/>
<Alert alert={alert}/>
<div className="container my-3">
 {/*  <Routes>
    <Route exact path="/about" element={<About/>}/>
    </Routes>
  <Routes>
    <Route exact path="/" element={*/}
    <Textfrom heading="Enter text to analyze:" mode={mode} />
  {/*}  }/>
  </Routes>*/}
</div>
{/*</BrowserRouter>*/}
    </>
  );
}

export default App;
