import Home from 'pages/Home/Home';
import Page2Bottom from 'pages/Page2/Page2Bottom';
import Page2Top from 'pages/Page2/Page2Top';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Page2Top />} />
        <Route path="/detail/:id" element={<Page2Bottom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
