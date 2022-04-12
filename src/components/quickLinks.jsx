import React from 'react';
import {
    Sticky,
    Header,
    Rail,
    List
} from 'semantic-ui-react'


export default (props) => {

    return (
        <Rail position='right' style={{ "backgroundColor": "lightyellow" }}>
            <Sticky context={props.contextRef}>
                <Header as='h3'>Quick Links</Header>
                <List >
                    <List.Item
                        icon='comment outline'
                        content={<a href='https://www.ferendum.com/en/PID1075701PSD2068069564' target={'_blank'}>Voting: Apr,2022</a>}
                    />
                    <List.Item
                        icon='linkify'
                        content={<a href='https://docs.google.com/spreadsheets/d/1vgLsEVU7FRuV3I7E0f--hVfxAzO0-9pq/edit#gid=1570374283' target={'_blank'}>Maintainance Sheet</a>}
                    />
                </List>
            </Sticky>
        </Rail>
    )
}