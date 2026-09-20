export function PageHeader({title, children}) {
  return <header className="page-header container"><h1>{title}</h1>{children && <p>{children}</p>}</header>;
}
export function EventCards() {
  return <div className="event-list">{['Technical workshop', 'Expert talk', 'Collaborative challenge'].map(title =>
    <article key={title}><h2>{title}</h2><p>Sample format only. Details, date, and venue are yet to be confirmed.</p></article>
  )}</div>;
}
