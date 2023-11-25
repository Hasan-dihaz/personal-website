import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

const sections = ['home', 'about', 'services', 'contact']

export default function App() {
    const [activeSection, setActiveSection] = useState(sections[0])

    const handleSetActive = (to) => {
        setActiveSection(to)
    }

    return (
        <div>
            {/* <nav>
                {sections.map((section) => (
                    <Link
                        key={section}
                        activeClass="active"
                        to={section}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onSetActive={handleSetActive}
                    >
                        {section}
                    </Link>
                ))}
            </nav>
            <div id="home">Home</div>
            <div id="about">About</div>
            <div id="services">Services</div>
            <div id="contact">Contact</div> */}
        </div>
    )
}