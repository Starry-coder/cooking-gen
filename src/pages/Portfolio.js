import React from 'react';
import './web_portfolio/index.css'; // Import the CSS

function Portfolio() {
return (
    <div className="main-container">
        <div className="navbar">
            <div className="logo"></div>
            <a href="#contacttt" className="contact">Contact</a>
            <a href="#projectsss" className="projects">Projects</a>
            <a href="#abouttt" className="about">About</a>
            <a href="#contacttt" className="skills">Skills</a>
        </div>
        <div className="rectangle">
            <span className="projects-worked-on" id="projectsss">Projects that I’ve worked on</span>
            <div className="about-content">
                <span className="portfolio-website">I have worked in the Design Team as well as Video Editing team in Computer Society of India (CSI) Chapter and MATRIX Club.<br /></span>
                <span className="works-listed-below">A few of my works are listed below: </span>
                <span className="portfolio-website-1"> <br /></span>
                <span className="laser-tag-website">My portfolio Website that you are able to see.<br />Laser Tag Website Design on Figma<br />Multiple Videos for marketing of Laser Tag Event<br />After Movie of Riviera which is the cultural event of VIT<br />Animated the Logo of Matrix Club</span>
            </div>
        </div>
        <div className="rectangle-2">
            <span className="skills-3" id="contacttt">Skills</span>
            <span className="about-content-4">I have work experience with the following software:<br />After Effects<br />Premiere Pro<br />Illustrator<br />Figma</span>
        </div>
        <div className="rectangle-5">
            <span className="contact-me">Contact Me</span>
            <span className="contact-details">
                Phone - +91 9979894244<br />
                Email - aryan.kumar2022b@vitstudent.ac.in<br />
                Github - www.github.com/starry-coder<br />
                Linked In - www.linkedin.com/in/aryan-kumar-b2925a249/
            </span>
        </div>
        <div className="vector"></div>
        <div className="photo-frame"></div>
        <span className="graphics-designer">Graphics Designer</span>
        <span className="aryan-kumar">ARYAN KUMAR</span>
        <div className="divider"></div>
        <div className="doodle"><div className="rectangle-6"></div></div>
        <div className="rectangle-7">
            <span className="welcome-portfolio" id="abouttt">Welcome to my Portfolio</span>
            <span className="about-content-8">Welcome to my first website that I’ve made using HTML and CSS.<br />I am a Graphics designer and a Video Editor that has hands on experience with many industry standard applications such as Figma, Adobe Illustrator, Adobe After Effects, and Adobe Premiere Pro.</span>
        </div>
    </div>
);
}

export default Portfolio;