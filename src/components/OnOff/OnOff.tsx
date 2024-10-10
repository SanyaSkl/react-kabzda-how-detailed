import {useState} from "react";

type PropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

export function OnOff (props: PropsType) {

const {on, onChange} = props

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        background: on ? "lightgreen" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        background: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        background: on ? "lightgreen" : "red"
    };
    
    return <div>
        <div style={onStyle} onClick={ () => {onChange(true)}}>on</div>
        <div style={offStyle} onClick={ () => {onChange(false)}}>off</div>
        <div style={indicatorStyle}></div>
    </div>
}
