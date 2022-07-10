import React from 'react';
import {
    Carousel
} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
    Divider
}  from 'semantic-ui-react';

export default (props) => {

    const { dividerText } = props;
    return (
        <>
            {dividerText && <Divider horizontal>{dividerText}</Divider>}

            <Carousel showArrows={true}  showStatus={false} showThumbs={false}>
                {
                    props.images.map((imageProp, index) => (
                        <div key={imageProp.legend}>
                            <img alt={imageProp.legend} src={imageProp.image} style={{"height":"420px", "width":"auto"}} />
                            
                        </div>))
                }
            </Carousel>

        </>
    )
}