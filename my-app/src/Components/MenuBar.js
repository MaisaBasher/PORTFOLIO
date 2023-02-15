import './Common.css';
import './MenuBar.css'



function MenuBar() {
    return (
        <div className="App">
          <nav className = "menubar">
            <ul>
                <a href = " <Intro/>">Intro</a>
                <a href = "<Projects/>">Projects</a>
                <a href = "<WorkHistory/>">WorkHistory</a>

            </ul>
          </nav>
    </div>
    );
}

export default MenuBar;