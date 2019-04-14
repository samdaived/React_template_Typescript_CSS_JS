import React from 'react';
import ReactDOM from 'react-dom';
import TryJSComponent from './component/JsComponent';
import TryTSXComponent from './component/tsxComponent';
import './index.css';


export default function App ():JSX.Element {
    const sum=(a:number,b:number):number=>a+b;

    return (
        <React.Fragment>
            <h1>Hello Here start your typecsript project {sum(1,2)}</h1>
            <TryJSComponent/>
            <TryTSXComponent/>
         </React.Fragment>
    )
}


ReactDOM.render(<App/>,document.getElementById("root"))