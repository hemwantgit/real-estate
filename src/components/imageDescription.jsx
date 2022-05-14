import React from 'react';
import {
    Divider, Grid, Image, Segment, List
} from 'semantic-ui-react'


export default (props) => {

    return (
        <Segment>
            <Grid columns={2} relaxed='very'>
                <Grid.Column width={13}>
                    <a href={props.location.url} target={'_blank'}><img alt='Location' src={props.location.image}
                        style={{ "width": "100%", "height": "400px" }} /></a>
                </Grid.Column>
                <Grid.Column width={3}>
                    <List divided relaxed>
                        <List.Item>
                            <List.Icon name='student' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header as='a'>Schools</List.Header>
                                <List.Description as='a'>VIBGYOR, SHRI RAM GLOBAL SCHOOL, NEW BALDWIN</List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='shop' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header as='a'>MALL</List.Header>
                                <List.Description as='a'>ORION UPTOWN MALL</List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='hospital' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header as='a'>Hospitals</List.Header>
                                <List.Description as='a'>Ovum, Siliconcity Hospitals, East Point Multi-Speciality Hospital, Femiint Health Family Clinics</List.Description>
                            </List.Content>
                        </List.Item>
                    </List>
                </Grid.Column>
            </Grid>

        </Segment>
    )
}