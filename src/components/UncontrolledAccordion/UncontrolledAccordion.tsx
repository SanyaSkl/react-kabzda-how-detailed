import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string

}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log("Accordion rendering")

    let [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>

        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={props.onClick} style={{ cursor: "pointer" }}>{props.title}</h3>
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}