import React from 'react';
import {
    Segment,
    Divider,
    Container,
    Header
} from 'semantic-ui-react'


export default (props) => {

    const { dividerText, header, paras, className } = props;
    return (
        <Segment className={className}>
            {dividerText && <Divider horizontal>{dividerText}</Divider>}
            <Container fluid>
                {header && <Header as='h2'>{header}</Header>}
                {
                    paras.map((para, index) => (
                        (<p key ={`${header}-${index}`}>
                            {para}
                        </p>)
                    ))
                }
            </Container>
        </Segment>
    )
}