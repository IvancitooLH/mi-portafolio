export interface Project {
  title: string;
  description: string;
  image: string;
  repo: string;
  demo: string;
}

export const projects: Project[] = [
  {
    title: "Proyecto 1",
    description: "Descripción breve del proyecto.",
    image:
      "https://roymo.es/wp-content/uploads/2024/10/proyecto-digital-exito1.jpg",
    repo: "https://github.com/usuario/proyecto1",
    demo: "https://demo1.com",
  },
];
