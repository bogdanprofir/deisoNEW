import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import '../index.css'

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xlekkvbd");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "", // Corrected the state variable name
    message: "",
  });

  useEffect(() => {
    if (state.succeeded) {
      // Clear form fields after successful submission
      setFormValues({
        name: "",
        email: "",
        subject: "", // Corrected the state variable name
        message: "",
      });
    }
  }, [state.succeeded]);

  const handleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section name='contact' className="bg-[#F8C322] dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#0C0530] dark:text-white">
          Contact Us
        </h2>
        <p className="mb-4 lg:mb-16 font-light text-center text-[#0C0530] dark:text-gray-400 sm:text-xl">
          Ready to get started? Fill the form below and we will contact you in
          the next 24hrs!
        </p>
        <form noValidate onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name" // Corrected input id to "name"
              className="block mb-2 text-sm font-medium text-[#0C0530] dark:text-gray-300"
            >
              Your/ Company name
            </label>
            <input
              type="text" // Corrected input type to "text"
              id="name"
              className="shadow-sm bg-gray-50 border-2 border-[#0C0530] text-[#0C0530] text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Name"
              required
              value={formValues.name}
              onChange={handleInputChange}
              name="name" // Added the name attribute
            />
            <ValidationError prefix="Nume" field="name" errors={state.errors} />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-[#0C0530] dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border-2 border-[#0C0530] text-[#0C0530] text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@mail.com"
              required
              value={formValues.email}
              onChange={handleInputChange}
              name="email" // Added the name attribute
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-[#0C0530] dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm bg-gray-50 rounded-lg border-2 border-[#0C0530] text-[#0C0530] shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
              value={formValues.subject}
              onChange={handleInputChange}
              name="subject" // Added the name attribute
            />
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message" // Added the name attribute
              rows="6"
              className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border-2 border-[#0C0530] text-[#0C0530] focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
              required
              value={formValues.message}
              onChange={handleInputChange}
            ></textarea>
            <ValidationError 
              prefix="Mesaj" 
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit" disabled={state.submitting}
            className="py-3 px-5 text-sm font-medium text-center bg-[#0C0530] text-[#F8C322] rounded-lg bg-primary-700 sm:w-fit hover:bg-white hover:text-[#0C0530]  focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover-bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
        {state.succeeded && (
        <p className='message__succes'>Thanks for reaching out!</p>
      )}
      </div>
    </section>
  );
};

export default ContactForm;
