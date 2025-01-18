import react from 'react'
import './About.css'
import { useNavigate } from "react-router-dom"
import Menu from './Menu'
// import linkedin_logo from './media/linkedin-logo.jpeg'
// import instagram_logo from './media/instagram-logo.jpeg'
const instagram_logo = require('./media/instagram-logo.png')
const linkedin_logo = require('./media/linkedin-logo.png')
const github_logo = require('./media/github-logo.png')
const me_picture = require('./media/SelfPicture.png')

const About = () => {
    const navigate = useNavigate()

    return (
        <html>
            <Menu></Menu>
            <div className='mobile-column'>
                <body>
                    <h1 className='page-title'><u>About Me</u></h1>
                    <div className='main-column-organization'>
                        <div className='left-column'>
                            <img className='Self-Portrait' src={me_picture}></img> 
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
                                    <a href="https://www.github.com/BlakeSeigler" alt="Github" target="_blank">
                                        <img src={github_logo} className='social-links'></img>
                                    </a>
                                </div>
                            </div> 
                        </div>
                        <div className='right-column'>
                            <p className='Text-Description'>Welcome to my site! My name is Blake Seigler and right now I am a student studying Math and Physics, but my dream is to solve real world problems using technology. I'm most interested in technology that makes a tangible impact on the world. More specifically, I'm interested in the fields of sustainable energy, robotics, and computational modeling and in problems surrounding energy infrastructure, construction, manufacturing, and other industrial processes (mining, etc.). <br></br><br></br> For sustainable energy I believe we have seen huge advancements in generation from photovoltaics and I am excited to see what other methods (nuclear, geothermal) will bear us in the future. However, I believe there is much work available to be done in the energy storage space in order to build the infrastructure the world economy needs to become properly sustainable. <br></br><br></br> For robotics, I believe the field is going to see an explosion in the next decade as funding for AI has picked up and I am excited to see what advancements in cognition and decision making we will achieve. I believe the ability to reduce costs in manufacturing, construction, and other industrial processes by reducing the labor necessary per task will make great strides in reducing problems such as infrastructure degradation and the housing crisis that has been prominently present in the USA. <br></br><br></br> Computational modeling as a field is quite broad, so for this area I specifically mean advancements in techniques used to model the physical world in regards to materials, medicines, and robotics simulations. Whether these techniques involve clever approximations, AI, or potentially quantum computers as the technology matures, I believe advancements in these fields will provide immeasurable improvements in our technologies today. We will see this achieved through custom designed materials, drugs, and even more. <br></br><br></br> I am always open to learning new things and talking about these topics (or others) so if you would like to reach out about opportunities or for a conversation, see my contact info! </p>
                        </div>
                    </div>
                </body>
                <footer className='about-page-footer'>
                    <button onClick={() => navigate('/')} className="go-back-button">Go Back</button>
                </footer>
            </div>
        </html>
    )
}
export default About