import react from 'react'
import './About.css'
import { useNavigate } from "react-router-dom"
import Menu from './Menu'
// import linkedin_logo from './media/linkedin-logo.jpeg'
// import instagram_logo from './media/instagram-logo.jpeg'
const instagram_logo = require('./media/instagram-logo.png')
const linkedin_logo = require('./media/linkedin-logo.png')
const me_picutre = require('./media/SelfPicture.png')

const About = () => {
    const navigate = useNavigate()

    return (
        <html>
            <Menu></Menu>
            <body>
                <h1 className='page-title'><u>About Me</u></h1>
                <div className='main-column-organization'>
                    <div className='left-column'>
                    <img className='Self-Portrait' src={me_picutre}></img> 
                    <div className='Contact Information'>
                        <h3>Contact Info</h3>
                        <p>seiglerblake@gmail</p>
                        <p>blake_seigler@unc.edu</p>
                        <div id='social-links-container'>
                            <a href="https://www.instagram.com/blakeseigler04/" alt="Instagram" target="_blank">
                                <img src={instagram_logo} className='social-links'></img>
                            </a>
                            <a href="https://www.linkedin.com/in/blake-seigler" alt="LinkedIn" target="_blank">
                                <img src={linkedin_logo} className='social-links'></img>
                            </a>
                        </div>
                    </div> 
                </div>
                <div className='right-column'>
                    <p className='Text-Description'>This is a descriptionThis is a description</p>
                </div>
                </div>
            </body>
            <footer className='about-page-footer'>
                <button onClick={() => navigate('/')} className="go-back-button">Go Back</button>
            </footer>
            </html>
    )
}
export default About