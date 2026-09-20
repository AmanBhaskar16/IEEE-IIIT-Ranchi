import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MembersPage from './pages/MembersPage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import ContactsPage from './pages/ContactsPage';
import Footer from './components/Footer';
import './App.css';
const pages = [['/', 'Home', HomePage], ['/members', 'Members', MembersPage], ['/about', 'About', AboutPage], ['/events', 'Events & Activities', EventsPage], ['/contact', 'Contact', ContactsPage]];
function RouteReset() {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${pages.find(([path]) => path === pathname)?.[1] || 'Page not found'} | IEEE Student Branch · IIIT Ranchi`;
    document.getElementById('main-content')?.focus();
  }, [pathname]);
  return null;
}
export default function App() {
  return <BrowserRouter><RouteReset/><a className="skip" href="#main-content">Skip to content</a><Navbar/>
    <main id="main-content" tabIndex="-1"><Routes>
      {pages.map(([path, , Page]) => <Route key={path} path={path} element={<Page/>}/>)}
      <Route path="/team" element={<Navigate to="/members" replace/>}/>
      <Route path="/activities" element={<Navigate to="/events" replace/>}/>
      <Route path="/membership" element={<Navigate to="/about" replace/>}/>
      <Route path="/gallery" element={<Navigate to="/events" replace/>}/>
      <Route path="*" element={<div className="empty"><h1>Page not found</h1><Link to="/">Back to home</Link></div>}/>
    </Routes></main>
    <Footer/>
  </BrowserRouter>;
}
