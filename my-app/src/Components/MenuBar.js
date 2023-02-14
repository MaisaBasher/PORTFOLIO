import './Common.css';

import dp from '../img/me2.jpg';

function MenuBar() {
    return (
        <div className="App">
      <header className="App-header">
        <h1>Maisa Basher</h1>
        <img className="DP" src={dp}  alt="DP" />
      </header>
     
    </div>
    );
}

export default MenuBar;