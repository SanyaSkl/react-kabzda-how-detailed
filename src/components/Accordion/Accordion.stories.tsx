import {action} from '@storybook/addon-actions'

import Accordion from './Accordion';
import React, {useState} from "react";

export default {
    component: Accordion
}

const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
    return (
        <Accordion titleValue={'Collapsed Accordion'}
                   collapsed={true}
                   onChange={() => {
                   }}
        />
    )
}

export const OpenedAccordion = () => {
    return (
        <Accordion titleValue={'Opened Accordion'}
                   collapsed={false}
                   onChange={() => {
                   }}
        />
    )
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <Accordion titleValue={'Accordion Demo'}
                   collapsed={false}
                   onChange={() => {
                       setCollapsed(!collapsed)
                   }}
        />
    )
}