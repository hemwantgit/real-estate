import React from 'react';
import {
    Card, Segment, Divider
} from 'semantic-ui-react'


export default (props) => {

    const { dividerText } = props;
    return (
        <Segment>
            {dividerText && <Divider horizontal>{dividerText}</Divider>}
            <Card.Group itemsPerRow={6}>
                {
                    props.images.map((imagePath, index) => (
                        <Card raised key={`card-${index}`}  image={require('../sd_southgate.png')}/>))
                }
            </Card.Group>
        </Segment>
    )
}