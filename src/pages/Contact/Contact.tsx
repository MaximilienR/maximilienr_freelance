import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { sendContactForm } from "../../api/contact.api";

const Contact: React.FC = () => {
  // --- Validation Yup ---
  const validationSchema = Yup.object({
    email: Yup.string().email("Email invalide").required("Email requis"),
    sujet: Yup.string().required("Sujet requis"),
    message: Yup.string().required("Message requis").min(10, "Message trop court"),
  });

  // --- Submit ---
const handleSubmit = async (values: any) => {
  const res = await sendContactForm(values);

  if (res.success) {
    alert("Message envoyé !");
  } else {
    alert("Erreur lors de l’envoi.");
  }
};


  return (
    <div className="pb-12">
      <Formik
        initialValues={{ email: "", sujet: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form
            className="
              bg-white shadow rounded-2xl p-6 sm:p-8 mt-12 mx-auto space-y-6
              w-full max-w-4xl
              md:w-[48rem]
            "
          >
            {/* Titre */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-center text-sky-900">
                Contactez-moi
              </h1>
              <p className="mt-2 text-center text-gray-600">
                Remplissez le formulaire ci-dessous pour me contacter.
              </p>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                Email
              </label>

              <Field
                type="email"
                id="email"
                name="email"
                placeholder="votre.email@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
              />

              <ErrorMessage
                name="email"
                component="p"
                className="mt-1 text-sm text-red-600"
              />
            </div>

            {/* Sujet */}
            <div>
              <label htmlFor="sujet" className="block mb-2 font-medium text-gray-700">
                Sujet
              </label>

              <Field
                as="select"
                id="sujet"
                name="sujet"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="formation">Formation</option>
                <option value="creation">Création</option>
                <option value="autre">Autre</option>
              </Field>

              <ErrorMessage
                name="sujet"
                component="p"
                className="mt-1 text-sm text-red-600"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                Message
              </label>

              <Field
                as="textarea"
                id="message"
                name="message"
                rows={8}
                placeholder="Écrivez votre message ici..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
              />

              <ErrorMessage
                name="message"
                component="p"
                className="mt-1 text-sm text-red-600"
              />
            </div>

            {/* Bouton */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="
                  px-6 py-3 text-lg font-semibold text-white rounded-lg bg-sky-600
                  hover:bg-sky-700 transition
                  focus:ring-2 focus:ring-offset-2 focus:ring-sky-600
                  w-full sm:w-auto
                "
              >
                Envoyer
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
