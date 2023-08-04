import React from 'react';
import './App.css';
// import Login from './components/Login/Login';
import Header from './components/Header/Header';
import PersonalInfo from './components/PersonalInfo';
import EducationInfo from './components/EducationInfo';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Awards from './components/Awards';
import Hobbies from './components/Hobbies';
import Export from './components/Export/Export';
import TemplateSecond from './components/Templates/secondTemplate/TemplateSecond';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstTemplate from './components/Templates/firstTemplate/FirstTemplate';
import Preview from './components/Preview/Preview';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/firsttemplate" element={<FirstTemplate />} />
          <Route path="/" element={<Preview />} />
          <Route path="/templatesecond" element={<TemplateSecond />} />
          <Route path="/personalinfo" element={<PersonalInfo />} />
          <Route path="/educationinfo" element={<EducationInfo />} />
          <Route path="/workexperience" element={<WorkExperience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certification" element={<Certifications />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/export" element={<Export />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
