import logo from './logo.svg';
import './Style.css';
import SiteHeader from './components/SiteHeader';
import HomePage from './pages/HomePage';
import FooterSite from './components/FooterSite';
import { HashRouter, Route, Routes } from "react-router-dom";
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';

export default function App() {
  return (
    <main class="flex-shrink-0">

      <SiteHeader />

      <HashRouter>
        <Routes>

          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/experiencia" element={<ResumePage />} />
          <Route exact path="/projetos" element={<ProjectsPage />} />
          <Route exact path="*" element={<>Página Não Encontrada</>} />

        </Routes>
      </HashRouter>

      <FooterSite />

    </main>
  );
}

