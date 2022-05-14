import _ from 'lodash'
import React, {  createRef } from 'react'
import {
  Grid,
  Ref,
  Segment
} from 'semantic-ui-react'

import QuickLinks from '../components/quickLinks';
import TextSection from '../components/textSection';
import ImageCards from '../components/imageCards';
import ImageGallery from '../components/imageGallery';
import ImageDescription from '../components/imageDescription';
import { OVERVIEW_TEXT, DISCLAIMER_TEXT, GALLERY_IMAGES, AMENITIES_IMAGES, LOCATION } from '../utils/constants';

export default () => {

    let contextRef = createRef();
    return (
        <Grid columns={1}>
        <Grid.Column width={13}>
          <Ref innerRef={contextRef}>
            <Segment>
                <img alt="SD" src={require('../sd_southgate.png')} style={{"width":"100%", "height":"400px"}}/>

            <TextSection 
            dividerText={'Overview'}
            header={'Signature Dreams'}
            paras={[OVERVIEW_TEXT]}
            />
            <ImageCards 
            dividerText={'Amenities'}
            images={AMENITIES_IMAGES}
            />

             <ImageDescription 
            dividerText={'Location'}
            location={LOCATION}
            />
             <ImageGallery 
            dividerText={'Gallery'}
            images={GALLERY_IMAGES}
            />
            <TextSection 
            dividerText={'Disclaimer'}
            paras={DISCLAIMER_TEXT}
            />
             

                <QuickLinks contextRef={contextRef}/>
            </Segment>
          </Ref>
        </Grid.Column>
      </Grid>
    )
}