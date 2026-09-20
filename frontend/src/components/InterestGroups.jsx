const groups=[
  ['computer.png','IEEE Computer Society','Resources for computing and engineering: SWEBOK, continuing education, publications, conferences, and professional standards.'],
  ['robotics.png','Robotics & Automation Society','A community for sharing robotics and automation knowledge, with publications, educational resources, and professional connections.'],
  ['signal.png','Signal Processing Society','An international signal-processing community with educational materials, publications, conferences, and student opportunities.'],
];
export default function InterestGroups(){return <div className="society-grid">{groups.map(([image,title,text])=><article className="society" key={title}><img src={'/reference/'+image} alt={title}/><div className="society-caption"><h3>{title}</h3></div><div className="society-description"><p>{text}</p></div></article>)}</div>}
