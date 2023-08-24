import "./App.css";
import Form from "./form_components/Form";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Form />
      </div>
    </>
  );
}

export default App;
