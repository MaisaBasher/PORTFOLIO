import './Common.css';
import './Projects.css'
import {useState} from 'react';
import { ProjectData } from './ProjectData';


function Projects() {
    const [proj, setProj] = useState({
        name: "",
        description: "Please click on the project to get more details.Thank you",
        Technology: "",
        time: ""
    });
    const projectShow = item =>{
        setProj({
            name: item.name,
            description: item.description,
            Technology: item.Technology,
            time: item.time
        })

    }
    return (
        <div>
            <h1>Projects</h1>
            <div className = "projectbody"> 
                {ProjectData.map((item, index) =>{
                    return (
                        <p key ={index} className = "project" onClick= {() => {projectShow(item)}}>
                        {item.name}
                        </p>)
                    
                }
                    
                )}  
            </div>
            <div className = 'details'>
                <p className='name'>{proj.name}</p>
                <p className='Tech'>{proj.Technology}</p>
                <p className='time'>{proj.time}</p>
                <p className='des'>{proj.description}</p>
            </div>
        </div>
    );
}

export default Projects;