import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App(props: any) {
    console.log("App rendering")

    //let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false);

    return (
        <div>

            <Accordion
                titleValue={"Menu"}
                collapsed={accordionCollapsed}
                onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>

            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}

            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            {/* <UncontrolledOnOff />*/}
            {/*  <UncontrolledOnOff on={true}/>
            <UncontrolledOnOff on={false}/>*/}

            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}

            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<UncontrolledRating />*/}

            {/*<Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>

            <Rating value={0}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
