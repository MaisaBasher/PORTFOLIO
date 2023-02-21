import './Common.css';
import './MenuBar.css'

function MenuBar() {
    return (
        <div className="main">
          <nav className = "menubar">
            <ul>
                <a href = "https://www.linkedin.com/in/maisa-basher/" >Linkedin</a>
                <a href = 'https://github.com/MaisaBasher'>Github</a>
                <a href = "https://www.facebook.com/maisabasher.suba">Facebook</a>

            </ul>
          </nav>
      </div>
    );
}

export default MenuBar;