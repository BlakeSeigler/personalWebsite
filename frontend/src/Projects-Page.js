import react from 'react'
import './Projects-Page.css'
import Menu from './Menu'
import { Project } from './Project.js'
import React, { useState } from 'react';
import ProjectDetail from './ProjectDetail';

// Images for the Projects
const BMS_System1 = require('./media/BMS_System1.jpg')
const Personal_Website1 = require('./media/Personal_Website1.jpeg')
const Ram_Robotics1 = require('./media/Ram_Robotics1.png')
const Ionic_Radii1 = require('./media/Ionic_Radii1.jpeg')
const AMFM_Radio1 = require('./media/AMFM_Radio1.jpeg')
const AMFM_Radio2 = require('./media/AMFM_Radio2.jpeg')
const Fermi_Problems1 = require('./media/fermi_problems1.jpeg')

const Projects_Page = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const closeModal = () => setSelectedProject(null);

    const projects = [
        {
            id: 7,
            title: "BMS System - In Progress",
            description: "For this project, I will be building a battery management system (BMS) for a set of lithium ion batteries and a small solar cell utilizing an arduino and programming in C++. The goal of this project is to build experience in embedded systems programming and power systems engineering while also keeping me entertained during the holiday season. This project is currently in progress, and a summary of the work will be reported here when completed.",
            images: [BMS_System1],
        },
        {
            id: 6,
            title: "Laser Tripwire - In Progress",
            description: "For this project, I will be designing and building a laser tripwire system on two PCBs. For the circuit design and simulation, I used KiCad and ngspice and tried to utilize components that I already owned where I could. The design consists of two PCBs with the first being what is essentially a laser pointer and the second being an alarm with a power and reset function. I wanted to make the alarm so that when the laser was broken, it would continue to go off until it was turned off or reset. For this functionality, I used an SR latch. For both boards, I used two coin batteries for a 6V power supply on each. My boards are surface mounted and I have yet to decide whether I will mount them to a door frame using tape or suction caps fastened to the structural holes in the corners of the boards. In the pictures to the right, there should be some views of the overall circuit designs I went through for this project",
            images: ["image1.jpg", "image2.jpg"],
        },
        {
            id: 5,
            title: "Ionic Radii Model - In Progress",
            description: "For this project, I am working in a research group at UNC-Chapel Hill called the Warren Group to develop a machine learning model to help predict the accurate atomic radii of ions in different ionic structures. For the first half of this project, our goals were to collect the data necessary to create our model. This part has so far involved running several DFT calculations utilizing VASP, and our in-house developed computational material package known as Simmate. So far, we have run several calculations to determine optimal settings and have developed infrastructure to handle all of the parameter data we will be collecting from our final DFT calculation. This project has been a massive learning curve for me due to my limited experience in computational material simulation but I have picked up quite a bit. I've gained a much stronger understanding of Linux and bash as well as of high-performance computing (HPC) systems by using our inhouse supercomputing cluster and the university wide cluster which both run Slurm. I have also used Numpy and Pandas extensively for this project along with Django which is what Simmate uses to run its databases.",
            images: [Ionic_Radii1],
        },
        {
            id: 4,
            title: "AM/FM Radio",
            description: "For this project, I was given an AM/FM Radio project as part of an honors project for my electronics class. This project simultaneously took much less time and way more time than I thought it would. Although many of the components I got were labeled and knowing how to put the throughput components together and solder was fairly straightforward, a simple mistake early on caused a big hiccup. Being that this was my first large soldering project, when I ran into my first lifted pad (of which more followed) I took a deep dive into the world of repairing PCB boards. I learned to do fixes such as scraping back traces and learned how to improvise on components when a piece was lost or blown. While installing components, I also had to pass several tests given to me by the kit and whenever I failed a test I would gain extensive practice in debugging circuits. This taught me to quickly pick up what a circuit was trying to do and what the potential, current, and resistance should be. Definitely an amazing project.",
            images: [AMFM_Radio1, AMFM_Radio2],
        },
        {
            id: 3,
            title: "Ram Robotics",
            description: "This project has a special place for me. Instead of a purely technical project, I decided to organize and build out UNC-Chapel Hill's first robotics and engineering based organization known as Ram Robotics. This organization has the goals of building a community centered on robotics, organizing projects for students to work on their technical skills, and bringing professionals from industry and academia for students to meet and learn from. As president of this organization, I have had to go through the process of doing exorbitant amounts of paperwork and assisting my amazing technical teams with their projects. Our very first technical project was building RC cars and an arena for a game of car soccer to present for our very first event tabling on campus. I'm excited to build many more projects in the future. For more information on us see our linktree here: \n https://linktr.ee/ramroboticsunc?utm_source=linktree_profile_share&ltsid=6ddae947-d42d-4e99-a30c-a2e7a1fbc16e",
            images: [Ram_Robotics1],
        },
        {
            id: 2,
            title: "Fermi Problem Site",
            description: "For this project, my goal was to design a web app to store subscribers and send out emails containing unique Fermi problems that I can think about for fun. As another challenge, I also wanted to host this web app on a server run out of my personal PC. For this project, I utilized Nodejs for the backend api, Apache for my PCs web server, MongoDB for the database, and the OpenAI api to generate fermi problems for me. This project took much longer than expected to debug because of my inexperience with debugging GET and POST requests when they failed. I also got the opportunity to learn more about networking by setting up port forwarding (this took way longer than it should have), and managing my PCs firewall. For the server, I also had to utilize Docker in order to use MongoDB as for some reason my OS on my PC wasn't able to properly support all of the dependencies for Mongo 6.0 but in the end a docker container worked like a charm. For the site, if you would like to visit it (assuming its up) go to 69.232.33.60 or you can check out the code on my github (slightly altered for security reasons)",
            images: [Fermi_Problems1],
        },
        {
            id: 1,
            title: "My Personal Website",
            description: "For this project, I used React and a little bit of nodejs to build this website! I've been wanting to really learn more web development technologies and build a portfolio for myself for a while so I was really excited to get this project finished. Although I marked this project as finished, I am constantly updating the project and like several of these, will never really finish tweaking to make it perfect. I did not have a strong need for a backend on this site so most of the site is just the frontend. I toyed with the idea of setting up a database for this site but decided that it wasn't really necessary and I could do that on a later project anyway. Also, I don't think React was strictly necessary for this project as it isn't too large but it's always nice to learn technologies and see the differences between basic html, css, and js vs what these projects can provide. I was also planning on using tailwind CSS for this project but decided to focus strictly on react for now.",
            images: [Personal_Website1],
        }
        // Add more projects as needed
    ];

    return (
        <>
            <Menu />
            <div>
                <h1 className='page-title'>Projects</h1>
                <div className='project-grid'>
                    {projects.map((project) => (
                        <Project 
                            key={project.id} 
                            title={project.title} 
                            image={project.images[0]} 
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </div>
            {selectedProject && (
                <ProjectDetail
                    project={selectedProject}
                    onClose={closeModal}
                />
            )}
        </>
    );
}
export default Projects_Page