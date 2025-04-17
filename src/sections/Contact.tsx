const Contact = () => {
  return (
    <section id="contact" className="bg-surface text-light py-16 h-screen">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold text-blue mb-6">Contacto</h3>
        <p className="text-blueGray mb-4">
          ¿Te interesa trabajar conmigo o tienes alguna pregunta?
        </p>
        <a
          href="mailto:tuemail@correo.com"
          className="inline-block bg-blue text-light px-6 py-3 rounded hover:bg-blueDark"
        >
          Escríbeme
        </a>
      </div>
    </section>
  );
};
export default Contact;
