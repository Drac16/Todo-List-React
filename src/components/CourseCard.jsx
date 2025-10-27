export default function CourseCard({ titulo, descripcion }) {
  return (
    <div className="card">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}
