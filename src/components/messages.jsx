import React from 'react';
import {
    Segment,
    Message
} from 'semantic-ui-react'

import messagesJson from '../static/messages.json';

export default () => {

    return (
        messagesJson.length ? <Segment>
            {
                messagesJson.map(message => (
                    <Message
                        icon={message.icon}
                        header={message.message}
                        list={message.list}
                    />
                ))
            }
        </Segment>
            : null
    )
}