import React from 'react';
import {
    Card, Segment, Divider
} from 'semantic-ui-react'


export default (props) => {

    const { dividerText } = props;
    return (
        <Segment>
            {dividerText && <Divider horizontal>{dividerText}</Divider>}
            <p>Full list of Amenities</p>
            <Card.Group itemsPerRow={6}>
                {
                    props.images.map((imageProp, index) => (
                        <Card raised key={`card-${index}`}  image={imageProp.image}/>))
                }
            </Card.Group>
        </Segment>
    )
}