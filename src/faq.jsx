import { useState } from 'react';
import'./faq.css';
const AccordionItem=({answer,qustion})=>{   
    const[show,setShow]=useState(false);
    function toggleit(){
    setShow(!show)
    }
    return(
        <div className={`borderofitem ${show?'active':""}`}>
            <div className="header" onClick={toggleit}>{qustion}</div>
            <div className="body">
                <p>{answer}</p>
            </div>
        </div>
    )
}
export default function Accordion(props){
    return(
        <div className="outerbox">
            <div className="innerbox">
                <h2>FAQ</h2>
                {props.data.map((Item,index)=><AccordionItem key={index} answer={Item.Answer} qustion={Item.Questons}/>)}
            </div>
        </div>
    )
}
