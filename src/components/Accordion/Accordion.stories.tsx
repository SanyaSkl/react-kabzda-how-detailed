import {action} from '@storybook/addon-actions'
import {Accordion} from './Accordion';
import React, {useState} from "react";

export default {
    title: 'Accordion',
    component: Accordion
}

const onChangeHandler = action('accordion mode change event fired')
const onItemClickCallback = action('some item was clicked')

export const CollapsedAccordion = () => {
    return (
        <Accordion titleValue={'Collapsed Accordion'}
                   collapsed={true}
                   onChange={() => {
                   }}
                   items={[]}
                   onItemClick={onItemClickCallback}
        />
    )
}

export const OpenedAccordion = () => {
    return (
        <Accordion titleValue={'Opened Accordion'}
                   collapsed={false}
                   onChange={onChangeHandler}
                   items={[{title: 'Alex', value: 1},
                       {title: 'Helga', value: 2},
                       {title: 'Mika', value: 3},
                       {title: 'Ali', value: 4}]
                   }
                   onItemClick={onItemClickCallback}
        />
    )
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <Accordion titleValue={'Accordion Demo'}
                   collapsed={collapsed}
                   onChange={() => {
                       setCollapsed(!collapsed)
                   }}
                   items={[{title: 'Alex', value: 1},
                       {title: 'Helga', value: 2},
                       {title: 'Mika', value: 3},
                       {title: 'Ali', value: 4},
                   ]}
                   onItemClick={onItemClickCallback}
        />
    )
}