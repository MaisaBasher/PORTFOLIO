import './Common.css';
import dp from '../img/pic.jpg'
import './Intro.css'

function Intro() {
    return (
        <div className = "all">
            <div className = "image-holder" >
            <img src= {dp}  alt="Avatar" className= "imageI"/>
            <div><p>MAISA BASHER</p></div>
            </div>
            <div className = "Intro">
                <p> Hello, I am Maisa</p>
                <p>I am currently a senior GA Tech student, majoring in Computer Science</p>
                <p> I am originally from Bangledsh. I was born and raised there. Currently I am living in Atlana, GA. I love going out, eating and sleeping </p>
            </div>
        </div>
    );
}

export default Intro;