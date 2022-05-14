import _ from 'lodash';
import React from 'react';
import {
    Segment,
    Header,
    Table,
    Rating
} from 'semantic-ui-react'
import contactsJson from '../static/contacts.json';

export default () => {

    let getContactRow = (contact) => {
        return (
            <Table.Row key={`${contact.order}_${contact.name}`}>
                <Table.Cell>{contact.service}</Table.Cell>
                <Table.Cell>
                    <Header as='h4' center="true">{contact.name}</Header>
                </Table.Cell>
                <Table.Cell>
                 {contact.contact}
                </Table.Cell>
                
                <Table.Cell>
                    <Rating icon='star' defaultRating={contact.rating} maxRating={contact.rating} />
                </Table.Cell>
                <Table.Cell>
                {(contact.comments && contact.comments.length)? contact.comments[0]: ''}
                </Table.Cell>
            </Table.Row>
        )
    };

    return (

        <Segment>
            <Header> List of service providers worked in layout and have good feedback.</Header>
            <Table celled padded>
              <Table.Header>
                <Table.Row>
                 <Table.HeaderCell>Service</Table.HeaderCell>
                  <Table.HeaderCell singleLine>Name</Table.HeaderCell>
                  <Table.HeaderCell>Contact No.</Table.HeaderCell>
                  <Table.HeaderCell>Efficacy</Table.HeaderCell>
                  <Table.HeaderCell>Comments</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
          
              <Table.Body>
              { 
                  _.map(contactsJson, contact=>{
                    return getContactRow(contact)
                 })
              }
              </Table.Body>
            </Table>
        </Segment>
    )
}
