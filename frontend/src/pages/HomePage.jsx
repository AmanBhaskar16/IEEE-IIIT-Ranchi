import { Link } from 'react-router-dom';
import Leadership from '../components/Leadership';
import InterestGroups from '../components/InterestGroups';
import { BranchIntroduction, AboutSections } from '../components/BranchSections';
export default function HomePage(){return <>
  <header className="reference-hero"><div className="hero-inner container"><div className="branch-emblem"><img src="/reference/branch.svg" alt="IEEE Student Branch IIIT Ranchi"/></div><h1>IEEE IIIT Ranchi<br/>Student Branch</h1></div></header>
  <section className="introduction-row container"><div className="introduction-box"><BranchIntroduction/></div><aside className="noticeboard"><h2>Notice</h2><p>No notices have been published yet.</p></aside></section>
  <AboutSections/>
  <section className="societies-section container"><h2 className="section-title">Societies under IEEESB</h2><InterestGroups/><p className="section-note">Societies listed on the original branch website; current status awaits confirmation.</p></section>
  <section className="reference-testimonial"><h2>From the IEEE Community</h2><p>The original website shares a past IEEE president’s perspective on staying current in technology and building professional connections.</p><a href="https://iiitieee.netlify.app/" target="_blank" rel="noopener noreferrer">Read the original testimonial</a></section>
  <section className="container home-team"><h2 className="section-title">Our Chapter</h2><Leadership preview/><p className="members-link"><Link to="/members">View all members and office bearers</Link></p></section>
</>}
