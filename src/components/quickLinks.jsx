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
                        icon='external'
                        content={<a href='https://docs.google.com/spreadsheets/d/1vgLsEVU7FRuV3I7E0f--hVfxAzO0-9pq/edit#gid=1570374283' target={'_blank'}>
                        Maintenance Sheet
                        </a>}
                    />

                    <List.Item
                        icon='external'
                        content={<a href='https://docs.google.com/spreadsheets/d/1kJVugN_Iud5GbgdzdjdoqcgGZnYobk4H/edit#gid=626511703' target={'_blank'}>
                        Expense Sheet
                        </a>}
                    />
                    <List.Item
                        icon='external'
                        content={<a href='https://docs.google.com/spreadsheets/d/1a4xXIF4kd1aHOT0AXSOZatNpKk4kgWuet4PWQH0R-cg/edit?usp=sharing' target={'_blank'}>
                        Maintenance Sheet Summary
                        </a>}
                    />

                    <List.Item
                        icon='facebook f'
                        content={<a href='https://www.facebook.com/groups/609871970280157/?ref=share' target={'_blank'}>Facebook Group</a>}
                    />
                </List>
            </Sticky>
        </Rail>
    )
}