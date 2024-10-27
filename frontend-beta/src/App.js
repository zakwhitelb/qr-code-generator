import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import { Home } from './page/home/component/Home';
import { Help } from './page/help/component/Help';

// Components
import { Header } from './shared/component/header/Header';

// Context
import { ThemeProvider } from './shared/store/Theme.context';

// Style
import './shared/style/Globale.style.css';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export { App };
