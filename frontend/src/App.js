import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import { Home } from './page/home/component/Home';
import { Help } from './page/help/component/Help';
import { NotFound } from "./page/not-found/NotFound";

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
        <div className="grid w-full h-screen overflow-hidden bg-transparent">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/help" element={<Help />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export { App };
