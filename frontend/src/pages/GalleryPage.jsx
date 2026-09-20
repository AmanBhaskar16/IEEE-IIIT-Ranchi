import { Image } from 'lucide-react';
import { PageHeader } from '../components/Shared';
export default function GalleryPage() {
  return <><PageHeader title="Gallery">Photographs from branch events and activities will be shared here.</PageHeader><section className="container narrow section"><div className="gallery-placeholder"><Image size={46} strokeWidth={1}/><p>No photographs have been added yet.</p></div></section></>;
}
