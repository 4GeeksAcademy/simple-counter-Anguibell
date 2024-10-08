//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

let intervalID = null;
let counter = 0

function updateCounter(){
    counter++
    root.render(<MainComponent/>);
}

const MainComponent = () => {
    return <>
        <SecondsCounter seconds={counter}/>
        <label className="text-white">Starting value:</label>
        <input type="number" onChange={(event)=>{
            counter = event.target.value;
            root.render(<MainComponent/>);
            }}/>
        <div className="p-2 d-flex gap-2">
            <button onClick={() => {
                intervalID = setInterval(updateCounter, 1000)
            }} className="btn btn-success">Start</button>
            <button onClick={()=>{
                clearInterval(intervalID)
                intervalID = null;
                root.render(<MainComponent/>);
            }} className="btn btn-danger">Stop</button>
            <button onClick={()=>{
                if (intervalID){
                    clearInterval(intervalID);
                    counter = 0;
                    root.render(<MainComponent/>);
                } else {
                    counter = 0;
                    root.render(<MainComponent/>);
                }
            }} className="btn btn-warning">Reset</button>
        </div>
    </>
}

let root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<MainComponent/>);