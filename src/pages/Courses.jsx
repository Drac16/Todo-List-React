import CourseCard from "../components/CourseCard";
import "../styles/CourseCard.css";

export default function Courses() {
  const cursos = [
    { titulo: "ADSO", descripcion: "Análisis y Desarrollo de Software." },
    { titulo: "Redes", descripcion: "Infraestructura y conectividad." },
    { titulo: "Inglés", descripcion: "Aprendizaje de idioma global." },
    { titulo: "Multimedia", descripcion: "Diseño y producción digital." },
  ];

  return (
    <section className="courses">
      <h2>Programas</h2>
      <div className="course-container">
        {cursos.map((curso, i) => (
          <CourseCard key={i} titulo={curso.titulo} descripcion={curso.descripcion} />
        ))}
      </div>
    </section>
  );
}
