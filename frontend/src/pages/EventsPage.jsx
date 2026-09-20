import { PageHeader } from '../components/Shared';
import InterestGroups from '../components/InterestGroups';
export default function EventsPage() {
  return <><PageHeader title="Events & Activities">Technical learning and student collaboration at IIIT Ranchi.</PageHeader>
    <div className="container narrow section">
      <section className="event-notice"><h2>Chapter Events</h2><p>Confirmed event details have not been added yet. Dates, venues, and participation information will be published here when available.</p></section>
      <section><h2>Areas of Interest</h2><p>The original IEEE IIIT Ranchi website lists the societies below. Current society status and activity schedules are awaiting confirmation.</p><InterestGroups/></section>
    </div></>;
}
