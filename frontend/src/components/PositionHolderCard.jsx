import { UserRound } from 'lucide-react';
export default function PositionHolderCard({post, name = 'Name to be announced', vision = 'Profile will be added after confirmation.', imageUrl}) {
  return <article className="person">
    <div className="portrait">{imageUrl ? <img src={imageUrl} alt={name}/> : <UserRound size={60} strokeWidth={1}/>}</div>
    <div className="person-content"><p className="role">{post || '\u00a0'}</p><h3>{name}</h3><p className="member-statement">{vision}</p></div>
  </article>;
}
