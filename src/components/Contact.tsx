import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import avatar from "../assets/email_avatar.png";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    emailjs
      .send(
        "gmail",
        "template_iq2o26a",
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        "kZQA0sc7_tpawNdJy"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          reset(); // Reset form after successful submission
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-16" data-aos="fade-up">
      <div className="py-16 relative  overflow-hidden">
        {/* Background gradient circles */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-tl from-glowinglime to-transparent opacity-30 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-glowinglime to-transparent opacity-30 rounded-full pointer-events-none"></div>

        <div className="flex-1 flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-16 justify-between items-center relative z-10">
          {/* AVATAR */}
          <div className="w-full lg:w-1/2 p-4 lg:ms-16 order-1 lg:order-2 transform hover:scale-105 transition-transform duration-500 ease-in-out ">
            <Image
              width="450"
              height="550"
              src={avatar}
              alt="email avatar"
              className="rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-tl from-glowinglime to-transparent opacity-80"
            />
          </div>
          {/* FORM */}
          <div className="w-full lg:w-1/2 lg:p-0  p-4 order-2 lg:order-1">
            <h2 className="text-4xl  font-bold  text-shadow-glow">
              Reach me out
            </h2>
            <hr className="border-glowinglime w-4/12 my-8" />
            <p className="text-lg text-gray-300 text-start mb-10">
              Feel free to reach out for inquiries or collaboration. I&apos;d
              love to connect with you!
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg mx-auto max-w-2xl transform hover:scale-105 transition-transform duration-300"
            >
              <input
                {...register("name", { required: true })}
                placeholder="Your Name"
                className="w-full p-4 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-glowinglime transition-all duration-300 placeholder-gray-500"
              />
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-glowinglime transition-all duration-300 placeholder-gray-500"
              />
              <input
                {...register("subject", { required: true })}
                placeholder="Subject"
                className="w-full p-4 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-glowinglime transition-all duration-300 placeholder-gray-500"
              />
              <textarea
                {...register("message", { required: true })}
                placeholder="Your Message"
                className="w-full p-4 h-40 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-glowinglime transition-all duration-300 placeholder-gray-500"
              />
              <button
                type="submit"
                className="bg-glowinglime text-black p-3 w-full rounded-lg font-semibold hover:shadow-glow transition-transform transform hover:scale-110 duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
