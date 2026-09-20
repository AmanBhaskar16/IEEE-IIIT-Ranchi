import Leadership from '../components/Leadership';
import { PageHeader } from '../components/Shared';
export default function TeamPage() {
  return <><PageHeader title="Our Team">Proposed leadership roles for the IEEE Student Branch at IIIT Ranchi.</PageHeader><section className="container section"><p className="section-note">Names, photographs, and profiles are awaiting confirmation.</p><Leadership/></section></>;
}
