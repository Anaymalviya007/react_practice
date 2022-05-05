import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="TextUtils" About="About" />
     <div className="container my-3">
       <TextForm heading="Text"/>
       </div> 
    </>
  );
}

export default App;
