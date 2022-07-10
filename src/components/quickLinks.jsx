import React from 'react';
import {
    Sticky,
    Rail,
} from 'semantic-ui-react'
import LinksList from './LinksList';

export default (props) => {

    return (
        <Rail position='right' style={{ "backgroundColor": "lightyellow" }}>
            <Sticky context={props.contextRef}>
                <LinksList style={{ "backgroundColor": "lightyellow" }}/>
            </Sticky>
        </Rail>
    )
}