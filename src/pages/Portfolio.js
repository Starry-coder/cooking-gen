import React, { useState, useEffect } from 'react';
import './web_portfolio/index.css'; // Import your CSS file

function Header() {
    return (
        <header className="header">
            <a href="about" className="logo">Aryan.</a>
            <nav className="navbar">
                <a href="#home">Home</a>
                <a href="/">Project</a>
                <a href="#Skills">Skills</a>
                <a href="#education">Education</a>
                <a href="#contact">Contact Me</a>
            </nav>
            <i className='bx bx-menu' id="menu"></i>
        </header>
    );
}

function Home() {
    return (
        <section className="home" id="home">
            <div className="text-content">
                <h2 style={
                    {
                        color: "#92AA02"
                    }
                }>ARYAN KUMAR</h2>
                <h5 style={
                    {
                        color: "#B8C376"
                    }
                }>WEBSITE DESIGNER</h5>
                <p>Transforming visions into stunning digital realities, our team of website designers blend creativity with functionality to craft immersive online experiences that captivate, <br />engage, and inspire</p>
                <div className="social-media">
                    <a href="https://www.instagram.com/aaaryankumar._/"><i className='bx bxl-instagram'></i></a>
                    <a href="https://www.linkedin.com/in/aryan-kumar-b2925a249/"><i className='bx bxl-linkedin'></i></a>
                    <a href="https://twitter.com/aryan_1_kumar"><i className='bx bxl-twitter'></i></a>
                </div>
                <button className="btn">Download C.V</button>
            </div>
            <div className="cover">
                <div className="image"></div>
                <div className="layout"></div>
            </div>
        </section>
    );
}

function Skills() {
    return (
        <section className="Skills" id="Skills">
            <h3 className="title" style={
                {
                    color: "#92AA02"
                }
            }><i className='bx bx-user'></i>SKILLS</h3>
            <div className="skill-container">
                <div className="skills-content">
                    <i className='bx bx-code-alt'></i>
                    <h5>Frontend Development</h5>
                    <p>Transforming designs into functional websites using HTML, CSS, and JavaScript. Specializing in responsive layouts, interactive elements, and integration with frameworks like React.js</p>
                    <button className="btn">Read More</button>
                </div>
                <div className="skills-content">
                    <i className='bx bx-signal-5'></i>
                    <h5>Web Design</h5>
                    <p>Expertise in crafting visually captivating and user-friendly websites. Proficient in UI/UX design, layout composition, typography, and color theory. Skilled in tools like Adobe XD, Figma, and Sketch.</p>
                    <button className="btn">Read More</button>
                </div>
                <div className="skills-content">
                    <i className='bx bxl-adobe'></i>
                    <h5>Graphic Design</h5>
                    <p>Creating eye-catching visual assets for web projects, including logos, icons, and illustrations. Proficient in Adobe Photoshop, Illustrator, or Affinity Designer for high-quality graphic design work.</p>
                    <button className="btn">Read More</button>
                </div>
            </div>
        </section>
    );
}

function Education() {
    return (
        <section className="education" id="education">
            <h3 className="title" style={
                {
                    color: "#92AA02"
                }
            }><i className='bx bx-book-open'></i>EDUCATION</h3>
            <div className="row">
                <div className="column">
                    <div className="education-content">
                        <div className="year"><i className='bx bx-time'></i>2022-Present</div>
                        <h2>VIT Vellore</h2>
                        <p>BTECH in Computer Science with spl in Information Security<br />CGPA: 8.56<br /><br /><b>Computer Society of India</b><br /><br />   1. Played a pivotal role in the management and design core team of CSI VIT, one of the largest chapters of VIT.<br />
                            2. Organised Byte Bistro, a high-impact speaker event with over 300 registrations, overseeing marketing strategies and event management.
                            3. Coordinated the HackStory'23 hackathon, ensuring seamless event operations and securing key sponsorships.<br />
                            4. Volunteered for the management team of Yantra'23 hackathon, overseeing participant registration, communication, and coordination for an event with a prize pool exceeding 3 lakh rupees and over 200 participants.<br />
                            5. Led the organization of Laser Tag events during Gravitas'23 and Riviera'24, the flagship events of the fest with over 1000 participants across 3 days.<br />
                            6. Leveraged Figma to craft captivating designs for various websites and Instagram posts, enhancing the visual identity and branding of events.</p><br /><br />
                    </div>
                    <div className="education-content">
                        <div className="year"><i className='bx bx-time'></i>2008-2022</div>
                        <h2>NMS Jaipur</h2>
                        <p>High School<br />Grade: 90.4%<br /><br />
                            1. Served as Co-Curricular Captain in the Student Council, spearheading the management of diverse small and large-scale events.<br />
                            2. Contributed to organizing AlphaNode, a pioneering school event featuring a Discord server and tech competitions for students from different schools in Jaipur.</p><br /><br />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Contact() {
    return (
        <section className="contact" id="contact">
            <h2 className="title" style={
                {
                    color: "#92AA02"
                }
            }><i className='bx bx-headphone'></i>CONTACT ME</h2><br /><br /><br /><br />
            <form action="#" id="">
                <div className="input-box">
                    <input type="text" required placeholder="Full Name" />
                    <input type="email" required placeholder="Email" />
                </div>
                <div className="input-box">
                    <input type="tel" required placeholder="Mobile Number" />
                    <input type="email" required placeholder="Subject For" />
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder="Message" required></textarea>
                <input type="submit" value="Send Message" className="btn" />
            </form>
        </section>
    );
}




function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const menuButton = document.getElementById("menu");
        const navbar = document.querySelector(".navbar");

        menuButton.addEventListener("click", toggleMenu);

        function toggleMenu() {
            setMenuOpen(!menuOpen);
            navbar.classList.toggle("active");
        }

        return () => {
            menuButton.removeEventListener("click", toggleMenu);
        };
    }, [menuOpen]);

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll("header nav a");

        function handleScroll() {
            sections.forEach((sec) => {
                const top = window.scrollY;
                const offset = sec.offsetTop - 150;
                const height = sec.offsetHeight;
                const id = sec.getAttribute("id");
                if (top > offset && top < offset + height) {
                    sec.classList.add("start-animation");
                    navLinks.forEach((link) => {
                        link.classList.remove("active");
                        document
                            .querySelector(`header nav a[href*=${id}]`)
                            .classList.add("active");
                    });
                }
            });
            //const header = document.querySelector(".header");
            //header.classList.toggle("sticky", window.scrollY > 100);
            setMenuOpen(false);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <Header />
            <Home />
            <Skills />
            <Education />
            <Contact />
            <footer>
                <div className="text">
                    <p>Copyright @ 2024 by Aryan Kumar</p>
                </div>
                <a href=" "> <i className='bx bx-up-arrow-alt'></i></a>
            </footer>
        </div>
    );
}

export default App;
