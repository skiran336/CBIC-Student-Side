import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import CBICLogo from './components/headpart/CBICLogo';
import EntryForm from './components/headpart/EntryForm';
import Umbc from './components/headpart/Umbc';
import AlexBrown from './components/headpart/AlexBrown';
import Form from './components/studentform/Form';
import FormPage2 from './components/studentform/FormPage2';
import { FormProvider } from './components/studentform/FormContext'; 
import ConfirmOnRefresh from "./components/ConfirmOnRefresh";

function App() {
  return (
    <div>
      <ConfirmOnRefresh /> 
      <Umbc/>
      <AlexBrown/>
      <CBICLogo />
      <EntryForm />
      <Router>
        <FormProvider>
          <Routes>
          <Route path="/" element={<Navigate replace to="/form" />} />
            <Route path="/form" element={<Form />} />
            <Route path="/formpage2/" element={<FormPage2 />} />
            <Route path="*" element={<Navigate replace to="/form" />} />
          </Routes>
        </FormProvider>
      </Router>
    </div>
  );
}

export default App;
