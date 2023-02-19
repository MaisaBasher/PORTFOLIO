import './Common.css';
import './MenuBar.css'
import Intro from './Intro';
import Projects from './Projects';



function MenuBar() {
    return (
        <div className="main">
          <nav className = "menubar">
            <ul>
                <a href =  "</Intro>" >Intro</a>
                <a href = '</Projects>'>Projects</a>
                <a href = "</WorkHistory>">WorkHistory</a>

            </ul>
          </nav>
      </div>
    );
}

export default MenuBar;