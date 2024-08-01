import "./App.css";
import Main from "./components/main/main.jsx";
import FormHead from "./components/formHead/formHead.jsx";
// import { FormProviderWrapper } from "./formContext.jsx";
import React from "react";

function App() {
  const formRef = React.useRef(null);
  return (
    <div className="App container">
      <div className="form-div">
        <FormHead ref={formRef} />
      </div>
      <Main formRef={formRef} />
    </div>
  );
}

export default App;
