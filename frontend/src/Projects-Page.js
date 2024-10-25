import react from 'react'
import './Projects-Page.css'
import Menu from './Menu'
import { Project } from './Project.js'
import { useNavigate } from 'react-router-dom'

const Projects_Page = () => {
    const navigate = useNavigate()

    return (
        <html>
            <Menu></Menu>
            <body>
                <h1 className='page-title'>Projects</h1>
                <div className='project-grid'>
                    <Project></Project>
                </div>
            </body>
            <button className='back-button' onClick={() => navigate('/')}>Go Back</button>   
        </html>
        
    )
}
export default Projects_Page