import './Common.css';
import {useState} from 'react';
import './WorkHistory.css';

import { WorkHistoryData } from './WorkHistoryData';
function WorkHistory() {
    const [work, setWork] = useState({
        name: "",
        description: "Please click on the project to get more details.Thank you",
        technology: "",
        time: "" ,
        location:""
    });
    const WorkHistoryShow= item =>{
        setWork({
            name: item.name,
            description: item.description,
            technology: item.Technology,
            time: item.time,
            location: item.location
        })

    }
    return (
        <div>
            <h1>Work History</h1>
            <div className = "projectbody"> 
                {WorkHistoryData.map((item, index) =>{
                    return (
                        <p key ={index} className = "project" onClick= {() => {WorkHistoryShow(item)}}>
                        {item.name}
                        </p>)
                    
                }
                    
                )}  
            </div>
            <div className = 'details'>
                <p className='name'>{work.name}</p>
                <p className='Tech'>{work.technology}</p>
                <p className='time'>{work.time}</p>
                <p className='des'>{work.description}</p>
            </div>
        </div>
    );
}

export default WorkHistory;