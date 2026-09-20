import PositionHolderCard from './PositionHolderCard';
import raviImage from './images/ravi-shanker.png';
import priyankImage from './images/priyank-khare.png';
import abhinavImage from './images/abhinav-sir.png';
import lakshyadityaImage from './images/lakshyaditya.jpg';
import govidImage from './images/govid.jpg';
import pranjalImage from './images/pranjal.jpg';
import sujoy from './images/sujoy-mondal.jpg';
import amanImage from './images/aman.jpg';

const faculty = [
  {
    name: 'Dr. Ravi Shanker',
    post: 'Faculty Advisor',
    vision: 'To guide students in connecting technical learning with thoughtful research and practical engineering.',
    imageUrl: raviImage
  },
  {
    name: 'Dr. Abhinav Kumar',
    post: 'Membership Chair',
    vision: 'To welcome new members and help every student find a meaningful way to participate in IEEE.',
    imageUrl: abhinavImage
  },
  {
    name: 'Dr. Priyank Khare',
    post: '',
    vision: 'To encourage curiosity, open discussion, and a deeper understanding of technology.',
    imageUrl: priyankImage
  },
];
const studentRoles = [
  { name: 'Lakshyaditya Bhatnagar',post: 'Chair', vision: 'To bring the chapter together around shared goals and turn student ideas into well-planned activities.', imageUrl: lakshyadityaImage },
  { name: 'Govind Singh',post: 'Vice Chair', vision: 'To support the team, connect members across interests, and help chapter initiatives move forward.',imageUrl : govidImage },
  { name: 'Pranjal Tiwari',post: 'Secretary', vision: 'To keep members informed and chapter activities organised through clear communication and careful coordination.', imageUrl: pranjalImage},
  { name: 'Sujoy Mondal',post: 'Treasurer', vision: 'To manage chapter resources responsibly and help the team plan activities within a clear budget.',imageUrl:sujoy },
  { name: 'Aman Bhaskar',post: 'Webmaster', vision: 'To keep the chapter website accurate, accessible, and useful for members and visitors.' ,imageUrl:amanImage},
];
export default function Leadership({preview = false}) {
  return <div className="team-grid">
    {faculty.map(person => <PositionHolderCard key={person.name} {...person}/>)}
    {!preview && studentRoles.map(person => <PositionHolderCard key={person.post} {...person}/>)}
  </div>;
}
