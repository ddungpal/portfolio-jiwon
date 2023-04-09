import React, { useRef } from "react";
import TopbarBg from "../components/TopbarBg";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID,
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("메일 전송에 성공했습니다.");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("메일 전송에 실패했습니다.");
        }
      );
  };
  return (
    <div className="h-screen" id="contact">
      <TopbarBg />
      <div className="container mx-auto w-1/2">
        <form className="w-full" ref={form} onSubmit={sendEmail}>
          <div className="flex flex-wrap mt-10 mb-6 md:flex">
            <div className="w-full px-3 mb-6 md:mb-0 md:w-1/2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left"
                htmlFor="grid-first-name"
              >
                First Name *
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
                type="text"
                name="first_name"
                required
              />
            </div>
            <div className="w-full px-3 md:w-1/2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left"
                htmlFor="grid-last-name"
              >
                Last Name *
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                name="last_name"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-9 md:flex px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email Address *
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              name="user_email"
              required
            />
          </div>
          <div className="flex flex-wrap mb-9 md:flex px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-message"
            >
              Message *
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-message"
              name="message"
              rows="6"
              required
            />
          </div>
          <div className="flex flex-wrap mb-9 md:flex px-3 justify-center">
            <button
              type="submit"
              className="bg-indigo-400 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              Send Mail
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
