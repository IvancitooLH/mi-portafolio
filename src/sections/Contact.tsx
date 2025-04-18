import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="bg-surface text-light py-20 min-h-[80vh] flex items-center justify-center"
    >
      <div className="max-w-3xl w-full px-4 text-center">
        <motion.h3
          className="text-3xl font-semibold text-blue mb-6"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contacto
        </motion.h3>

        <p className="text-blueGray mb-8">
          ¿Quieres trabajar conmigo o tienes una propuesta? Rellena el
          formulario:
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
          <div>
            <input
              {...register("name", { required: "Tu nombre es requerido" })}
              placeholder="Tu nombre"
              className="w-full p-3 rounded bg-dark text-light border border-blueGray focus:outline-none focus:ring-2 focus:ring-blue"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              {...register("email", {
                required: "Tu correo es requerido",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Correo no válido",
                },
              })}
              placeholder="Tu correo"
              className="w-full p-3 rounded bg-dark text-light border border-blueGray focus:outline-none focus:ring-2 focus:ring-blue"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <textarea
              {...register("message", { required: "Escribe tu mensaje" })}
              placeholder="Tu mensaje"
              rows={5}
              className="w-full p-3 h-50px rounded bg-dark text-light border border-blueGray focus:outline-none focus:ring-2 focus:ring-blue max-h-[200px] min-h-[50px] overflow-y-auto"
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="bg-blue text-white px-6 py-3 rounded-lg hover:bg-blueDark transition"
          >
            Enviar mensaje
          </motion.button>

          {isSubmitSuccessful && (
            <p className="text-green-400 text-sm mt-4">
              ¡Mensaje enviado con éxito!
            </p>
          )}
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
