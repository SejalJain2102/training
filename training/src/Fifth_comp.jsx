import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Fifth_comp = () => {
    return (
        <Carousel showThumbs={false} autoPlay infiniteLoop>
            <div>
                <h3>Career guidance 1</h3>
                <p>Receive personalized support from our dedicated team to help you land your dream job.</p>
            </div>
            <div>
                <h3>Hands-On Experience</h3>
                <p>Immerse yourself in real-world projects, gaining practical insights that set you apart.</p>
            </div>
            <div>
                <h3>Certification</h3>
                <p>Earn a recognized certification, validating your proficiency and boosting your resume.</p>
            </div>
            <div>
                <h3>Fun Learning Environment</h3>
                <p>Engage in a dynamic, enjoyable learning atmosphere where education meets excitement.</p>
            </div>
        </Carousel>
    );
}

export default Fifth_comp
