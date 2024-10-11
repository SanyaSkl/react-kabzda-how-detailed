import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";



export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
}

const callBack = action('on or off clicked')

 export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callBack}/>
 export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callBack}/>
 export const DefaultInputValue = () => <input defaultValue={'yo'}/>



