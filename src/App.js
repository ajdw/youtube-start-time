
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import GetTime from './components/GetTime';


export default function Appy(){
  return (
    <div className="container">
    <Navbar />
    <Main />
    <GetTime/>
</div>
  )
}



