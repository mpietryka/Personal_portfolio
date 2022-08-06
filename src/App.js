import './App.css';
import { Header } from './components';
import { Bio } from './components';
import { Tech } from './components';
import { Education } from './components';
import { Experience } from './components';
import { Footer } from './components';

function App() {
    return ( <div> 
    <Header/>
    <Bio/>
    <Tech/>
    <Education/>
    <Experience/>
    <Footer/>
        </div>
    );
}

export default App;