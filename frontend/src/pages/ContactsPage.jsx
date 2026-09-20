import { PageHeader } from '../components/Shared';
export default function ContactsPage() {
  return <>
    <PageHeader title="Contact Us">IEEE Student Branch · IIIT Ranchi</PageHeader>
    <section className="container contact-grid section">
      <div className="contact-details">
        <h2>Institute Contact</h2>
        <dl>
          <dt>Address</dt><dd>IIIT Ranchi, ARTTC BSNL Campus, Getlatu, Near Jumar River Bridge, P.O.: Neori Vikas Vidyalaya SO, Hazaribagh Road, Ranchi – 835217, Jharkhand</dd>
          <dt>Website</dt><dd><a href="https://www.iiitranchi.ac.in" target="_blank" rel="noopener noreferrer">www.iiitranchi.ac.in</a></dd>
        </dl>
      </div>
      <div className="contact-details">
        <h2>Faculty Advisor</h2>
        <dl>
          <dt>Name</dt><dd>Dr. Ravi Shanker</dd>
          <dt>Designation</dt><dd>Assistant Professor</dd>
          <dt>Specialization</dt><dd>Medical Image Processing, Machine Learning, Signal Processing, Optical Communication</dd>
          <dt>Contact Number</dt><dd><a href="tel:+917999935027">+91 7999935027</a></dd>
          <dt>Email</dt><dd><a href="mailto:ravi@iiitranchi.ac.in">ravi@iiitranchi.ac.in</a></dd>
        </dl>
      </div>
    </section>
    <section className="container relevant-links"><h2>Relevant Links</h2><ul><li><a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer">IEEE</a></li><li><a href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer">IEEE membership information</a></li><li><a href="https://ieeexplore.ieee.org/Xplore/home.jsp" target="_blank" rel="noopener noreferrer">IEEE Xplore Digital Library</a></li><li><a href="https://iiitieee.netlify.app/" target="_blank" rel="noopener noreferrer">Original IEEE IIIT Ranchi website</a></li></ul></section>
  </>;
}
