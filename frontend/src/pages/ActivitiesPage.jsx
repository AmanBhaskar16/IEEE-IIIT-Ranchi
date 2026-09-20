import InterestGroups from '../components/InterestGroups';
import { PageHeader } from '../components/Shared';
export default function ActivitiesPage() {
  return <><PageHeader title="Our Activities">Areas of interest in engineering and technology.</PageHeader><section className="container narrow section"><p className="section-note">Society interests listed on the original IEEE IIIT Ranchi website. Current society status and activity schedules are yet to be confirmed.</p><InterestGroups/></section></>;
}
