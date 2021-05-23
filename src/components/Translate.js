import React, { useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const options = [
    {label:"Afrikaans",value:"af"},
    {label:"Arabic",value:"ar"},
    {label:"Hindi",value:"hi"}
];

const Translate = ()=>{
    const[language,setlanguage] = useState(options[0]);
    const [text,setText] = useState("");
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Translate Text</label>
                    <input type="text" value={text} onChange={(e)=> setText(e.target.value)} />

                </div>
            </div>
            <Dropdown selected={language} onSelectionChange={setlanguage} options={options} labelStr="Select a Language" />
        
        <hr/>
        <h3 className="ui header">Output</h3>
        <Convert language={language} text={text}/>
        </div>
    )
}

export default Translate;