import './styles/main.css'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Project from './pages/Project';

function App() {
  return (
    <div className="App">

      <Navbar />

      {/* <Home /> */}
      {/* <Projects /> */}
      <Project />
      {/* <Contacts /> */}

      <Footer />


    </div>
  );
}

export default App;
