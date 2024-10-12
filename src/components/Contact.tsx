import React from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission (e.g., send email)
  };

  return (
    <section id="contact" className="my-16" data-aos="fade-up">
      <div className="container mx-auto">
        <h3 className="text-3xl mb-4">Contact Me</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("name")}
            placeholder="Name"
            className="p-2 w-full"
            required
          />
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="p-2 w-full"
            required
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="p-2 w-full h-32"
            required
          />
          <button
            type="submit"
            className="bg-glowinglime text-black p-2 rounded"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
