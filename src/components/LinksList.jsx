import _ from 'lodash';
import React from 'react';
import {
    Segment,
    Header,
    List
} from 'semantic-ui-react'


const links = [
    {
        name: "MyGate",
        displayName: "MyGate",
        icon: "group",
        url: "https://signaturedreams.ul.mygateliving.in/overview"
    },
    {
        name: "MyGateRegister",
        displayName: "MyGate: How to register",
        icon: "youtube",
        url: "https://www.youtube.com/watch?v=_vsGbrHzUKk"
    },
    {
        name: "voting-202204",
        displayName: "Voting: Apr,2022",
        icon: "comment outline",
        url: "https://www.ferendum.com/en/PID1075701PSD2068069564"
    },
    {
        name: "maintenance-sheet",
        displayName: "Maintenance Sheet",
        icon: "external",
        url: "https://docs.google.com/spreadsheets/d/1vgLsEVU7FRuV3I7E0f--hVfxAzO0-9pq/edit#gid=1570374283"
    },
    {
        name: "expense-sheet",
        displayName: "Expense Sheet",
        icon: "external",
        url: "https://docs.google.com/spreadsheets/d/1kJVugN_Iud5GbgdzdjdoqcgGZnYobk4H/edit#gid=626511703"
    },
    {
        name: "summary-sheet",
        displayName: "Summary Sheet",
        icon: "external",
        url: "https://docs.google.com/spreadsheets/d/1a4xXIF4kd1aHOT0AXSOZatNpKk4kgWuet4PWQH0R-cg/edit?usp=sharing"
    },
    {
        name: "facebook-group",
        displayName: "Facebook Group",
        icon: "external",
        url: "https://www.facebook.com/groups/609871970280157/?ref=share"
    }

]

export default () => {

    return (
        <Segment>
            <Header as='h3'>Quick Links</Header>
            <List >
                {
                    links.map(link => (
                        <List.Item
                            icon={link.icon}
                            content={<a href={link.url} target={'_blank'}>{link.displayName}</a>}
                        />
                    ))
                }
            </List>
        </Segment>
    )
}
