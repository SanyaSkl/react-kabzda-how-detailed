import {action} from '@storybook/addon-actions'
import {UncontrolledAccordion} from './UncontrolledAccordion';


export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
}

const callback = action('accordion mode change event fired')

export const ModeChanging = () => {
    return <UncontrolledAccordion titleValue={"Users"}/>
}