import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CBICLogo from './components/headpart/CBICLogo';
import EntryForm from './components/headpart/EntryForm';
import Umbc from './components/headpart/Umbc';
import AlexBrown from './components/headpart/AlexBrown';
import Form from './components/studentform/Form';
import FormPage2 from './components/studentform/FormPage2';
import { FormProvider } from './components/studentform/FormContext'; 
function App() {
  return (
    <div>
      <Umbc/>
      <AlexBrown/>
      <CBICLogo />
      <EntryForm />
      <Router>
        <FormProvider>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/formpage2/" element={<FormPage2 />} />
          </Routes>
        </FormProvider>
      </Router>
    </div>
  );
}

export default App;
