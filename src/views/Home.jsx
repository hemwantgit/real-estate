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
import { OVERVIEW_TEXT, DISCLAIMER_TEXT, GALLERY_IMAGES } from '../utils/constants';

export default () => {
    // const [mustSpin, setMustSpin] = useState(false);
    // const [prizeNumber, setPrizeNumber] = useState(0);
    const getImageSrc =(path)=>{
      // return require(path);
      return require('../images/sd_1st.png');
    }
    const galleryMap = ()=>{
      return GALLERY_IMAGES.map(imageProp =>{
        return {image :getImageSrc(imageProp.path), legend:imageProp.legend}
      })
    }
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
            images={['../../public/images/sd_1st.png', '../../public/images/children_park.png',
             '../../public/images/sd_8th.png']}
            />

             <TextSection 
            dividerText={'Location'}
            paras={[OVERVIEW_TEXT]}
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