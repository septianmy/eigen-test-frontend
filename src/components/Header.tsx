import React from 'react';
import {Row, Col,} from 'reactstrap'

const Header = () => {
    return (
        <div className="header">
            <video src="/videos/video-2.mp4" autoPlay loop muted></video>
            <h2>TECH CRUNCH NEWS</h2>
        </div>
    );
}

export default Header