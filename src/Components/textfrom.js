import React ,{useState} from 'react'

export default function Textfrom(props) {

    const handleonchange=(event)=>{
        settext(event.target.value)
    }

    const [val,setval]=useState("Convert to UpperCase");
    const [text,settext]=useState("");

    const handleclick=()=>{
        if(val==="Convert to UpperCase"){
            settext(text.toUpperCase()); 
            setval("Convert to LowerCase")   
        }else{
            settext(text.toLowerCase()); 
            setval("Convert to UpperCase") 
        }
    }


    const handleclearclick=()=>{
        settext("");
    }

    const searchword=()=>{
        let find=document.getElementById("wordd").value;
        if(find.length===0){
            alert("enter word")
        }else if(text.includes(find)){
                alert("found")
            }else{
                alert("not found")
            }
        }


    
    return (
        <>
        <div className='container' style={{color: (props.mode==="dark")?"white":(props.mode==="red")?"white":(props.mode==="purple")?"white":(props.mode==="green")?"white":"black"}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control"  style={{backgroundColor: (props.mode==="dark")?"#082145":(props.mode==="red")?"#811111":(props.mode==="purple")?"#2d0343":(props.mode==="green")?"#092f08":"white", color: props.mode==="light"?"black":"white"}} value={text}  onChange={handleonchange} id="mytextbox" rows="8"></textarea>
            </div>
            <button className={`btn btn-${(props.mode==="red")?"danger":(props.mode==="purple")?"warning":(props.mode==="dark")?"dark":(props.mode==="green")?"success":"primary"} mx-2`} onClick={handleclick}>{val}</button>
    
            <input className={`btn btn-${props.mode==="red"?"danger":(props.mode==="purple")?"warning":(props.mode==="dark")?"dark":(props.mode==="green")?"success":"primary"}  mx-2 `} id="wordd" type="text" placeholder='search word'/>
            
            <button className={`btn btn-${props.mode==="red"?"danger":(props.mode==="purple")?"warning":(props.mode==="dark")?"dark":(props.mode==="green")?"success":"primary"} mx-2`} onClick={searchword}>Search</button>

            <button className={`btn btn-${props.mode==="red"?"danger":(props.mode==="purple")?"warning":(props.mode==="dark")?"dark":(props.mode==="green")?"success":"primary"} mx-2`} onClick={handleclearclick}>Clear Text</button>
        </div>
        <div className="conatiner my-2" style={{color: (props.mode==="dark")?"white":(props.mode==="red")?"white":(props.mode==="purple")?"white":(props.mode==="green")?"white":"black"}}>
            <h2>Text summary</h2>
            <p> {text.split(" ").length-1} words , {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes to read</p>
            <h4>Preview</h4>
            <p>{text.length>0?text:"Enter text in the textbox above to preview it here"}</p>
        </div>

        </>
    )
}
