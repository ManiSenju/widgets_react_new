import React, { useEffect, useState, useRef } from 'react';

const Dropdown = ({options,selected,onSelectionChange,labelStr})=>{
    const [open,setOpen] = useState(false);
    const ref = useRef();
    const onBodyClick = (event)=>{
        if(ref.current.contains(event.target)) return;
        setOpen(false);
    }
    useEffect(()=>{
        document.body.addEventListener(
            'click',
        onBodyClick,
        {capture:true}
        )

        return ()=>{document.body.removeEventListener('click',onBodyClick,{capture:true})}

    },[]);
    const renderedOptions = options.map((op)=>{
        if(op.value === selected.value) return null;
            return(
                <div key={op.value} className="item" onClick={()=> {onSelectionChange(op)}}>{op.label}</div>
            )
    })
    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{labelStr}</label>
                <div onClick={()=> setOpen(!open)}className={`ui selection dropdown ${open ? 'visible active': ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition':''}`}>{renderedOptions}</div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;
