//import logo from "./logo.svg";
import "./App.css";
import Upload from "./Components/UploadVideo";
import GetAllVideosList from "./Components/AllVideosList";
import NavBar from "./Components/NavBar";
//import  Slider  from "./Components/Slider";

function App() {

    return( 
      <div>
      <NavBar/>
      {/* <Slider /> */}
      <Upload/>
      <GetAllVideosList />
    </div>
    );
  }

export default App;