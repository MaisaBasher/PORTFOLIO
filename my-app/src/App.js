
import './App.css';

import MenuBar from './Components/MenuBar';
import Intro from './Components/Intro';
import Projects from './Components/Projects';
import WorkHistory from './Components/WorkHistory';


function App() {
  return (
    <div className = "parent">
    <MenuBar/>
    <div className = "sec">
      <Intro/>
      <Projects/>
      <WorkHistory/>
    </div>
    </div>
    
  );
}

export default App;
