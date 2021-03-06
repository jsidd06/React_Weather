import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './views/HomeScreen';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/React_Weather" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
