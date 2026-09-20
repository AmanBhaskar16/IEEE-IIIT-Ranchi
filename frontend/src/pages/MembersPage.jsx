import Leadership from '../components/Leadership';
import { PageHeader } from '../components/Shared';

export default function MembersPage() {
  const students = [
    "Vipul Verma",
    "Arnav chaurasia",
    "Prince Phatak",
    "Ayush Kushwaha",
    "Satyam Kumar",
    "Shaurya Singh",
    "Nikhil Kumar Singh",
    "Vikram Choudhary",
    "Yogeshwar Yadav"
  ];

  return (
    <>
      <PageHeader title="Members">
        Office bearers and student members of IEEE IIIT Ranchi.
      </PageHeader>

      <section className="container section">
        <Leadership />

        <h2 className="section-title">Student Members</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px"
        }}>
          {students.map((name) => (
            <div
              key={name}
              style={{
                padding: "20px",
                textAlign: "center",
                border: "1px solid #ddd",
                borderLeft: "4px solid #1683b5",
                borderRadius: "6px",
                fontWeight: "600"
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}