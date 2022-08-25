import _ from 'lodash'
import React, { createRef, useState } from 'react'
import {
    Grid,
    Ref,
    Segment,
    Accordion,
    Icon,
    Header,
    Table
} from 'semantic-ui-react'

import QuickLinks from '../components/quickLinks';
import { VOTING } from '../utils/constants';

export default () => {

    let isLargeScreen = visualViewport.width > 768;
    let [activeIndex, setActiveIndex] = useState(0);

    let handleClick = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index

        setActiveIndex(newIndex)
    }
    let contextRef = createRef();
    return (
        <Ref innerRef={contextRef}>
            <Grid columns={1} style={{height:"100vh"}}>

                <Grid.Column width={isLargeScreen ? 13 : 16}>

                    <Segment>

                        <Accordion fluid styled>
                            <Accordion.Title
                                active={activeIndex === 0}
                                index={0}
                                onClick={handleClick}
                            >
                                <Icon name='dropdown' />
                                Maintenance Voting
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 0}>
                                <Segment>
                                    <img alt='Voting' src={VOTING.requiredMnt}
                                        style={{ "width": "100%", "height": "400px" }} />
                                    <Header as='h3'>Max amount possible to collect per month (no defaulter)</Header>
                                    <Table celled padded>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell singleLine>Rate</Table.HeaderCell>
                                                <Table.HeaderCell>Collected Amount</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>

                                        <Table.Body>
                                            <Table.Row>
                                                <Table.Cell>
                                                    <Header as='h2' textAlign='center'>
                                                        30 Paise
                                                    </Header>
                                                </Table.Cell>
                                                <Table.Cell singleLine>71,357 INR</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell>
                                                    <Header as='h2' textAlign='center'>
                                                        50 Paise
                                                    </Header>
                                                </Table.Cell>
                                                <Table.Cell singleLine>1,18,931 INR</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell>
                                                    <Header as='h2' textAlign='center'>
                                                        70 Paise
                                                    </Header>
                                                </Table.Cell>
                                                <Table.Cell singleLine>1,66,501 INR</Table.Cell>
                                            </Table.Row>
                                        </Table.Body>
                                    </Table>
                                    <a href={'https://www.ferendum.com/en/PID1075701PSD2068069564'} target={'_blank'}><img alt='Voting' src={VOTING.votingStatus}
                                        style={{ "width": "100%", "height": "400px" }} /></a>
                                </Segment>
                            </Accordion.Content>

                        </Accordion>
                    </Segment>

                    {isLargeScreen && <QuickLinks contextRef={contextRef} />}

                </Grid.Column>
            </Grid>
        </Ref>
    )
}