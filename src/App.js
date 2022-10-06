import Home from 'pages/Home/Home';
import Page2Top from 'pages/page2/Page2Top';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Page2Top />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
