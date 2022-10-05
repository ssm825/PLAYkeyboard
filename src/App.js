import Home from 'pages/Home/Home';
import Page2 from 'pages/Page2/Page2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:day" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
