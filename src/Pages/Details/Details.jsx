import React from 'react';
// import image from '../../assets/shop/img1.png'
import image from '../../assets/det.jpeg'
import ReactImageMagnify from 'react-image-magnify';

const Details = () => {
    return (
        <div className='lg:mx-20 min-h-screen'>
            <div style={{ width: "400px" }}>
                <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: true,
                        src: image
                    },
                    largeImage: {
                        src: image,
                        width: 1200,
                        height: 1000
                    },
                    enlargedImageContainerDimensions: {
                        width: '200%',
                        height: '200%',
                    },
                }} />
            </div>
        </div>
    );
};

export default Details;