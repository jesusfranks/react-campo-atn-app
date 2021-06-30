import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { NavComponent } from "./components/NavComponent";
import OpcionEntrevista from "./components/OpcionEntrevista";
import InterviewForm from "./components/InterviewForm";
import FileInputsForm from "./components/FileInputsForm";

function App() {
  const [opcion, setOpcion] = useState(true);
  
  const handleChangeOpcion = (val) => {
    setOpcion(val)
  };

  return (
    <>
      <NavComponent />
      <OpcionEntrevista 
        opcion={opcion} 
        handleChangeOpcion={handleChangeOpcion} 
      />

      {
      opcion ? 
      <InterviewForm /> 
      : 
      <FileInputsForm />
      }

    </>
  );
}

export default App;
