// import axios from "axios";
// import React from "react";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";

// function Contact() {
//   const {
//     register,
//     handleSubmit,

//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const userInfo = {
//       name: data.name,
//       email: data.email,
//       message: data.message,
//     };
//     try {
//       await axios.post("https://getform.io/f/bdrygkzb", userInfo);
//       toast.success("Your message has been sent");
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };
//   return (
//     <>
//       <div
//         name="Contact"
//         className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
//       >
//         <h1 className="text-3xl font-bold mb-4">Contact me</h1>
//         <span>Please fill out the form below to contact me</span>
//         <div className=" flex flex-col  mt-5">
//           <form
//             onSubmit={handleSubmit(onSubmit)}

//             className="bg-gray-200 w-96 px-8 py-6 rounded-xl"
//           >
//             <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
//             <div className="flex flex-col mb-4">
//               <label className="block text-gray-700">Full Name</label>
//               <input
//                 {...register("name", { required: true })}
//                 className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="name"
//                 name="name"
//                 type="text"
//                 placeholder="Enter your fullname"
//               />
//               {errors.name && <span>This field is required</span>}
//             </div>
//             <div className="flex flex-col mb-4">
//               <label className="block text-gray-700">Email Address</label>
//               <input
//                 {...register("email", { required: true })}
//                 className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="email"
//                 name="email"
//                 type="text"
//                 placeholder="Enter your email address"
//               />
//               {errors.email && <span>This field is required</span>}
//             </div>
//             <div className="flex flex-col mb-4">
//               <label className="block text-gray-700">Message</label>
//               <textarea
//                 {...register("message", { required: true })}
//                 className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="message"
//                 name="message"
//                 type="text"
//                 placeholder="Enter your Query"
//               />
//               {errors.message && <span>This field is required</span>}
//             </div>
//             <button
//               type="submit"
//               className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Contact;




import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bdrygkzb", userInfo);
      toast.success("Your message has been sent successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-lg container mx-auto px-4 md:px-8 my-16"
    >
      <h1 className="text-4xl font-extrabold mb-4 text-gray-900">Contact Me</h1>
      <p className="text-lg text-gray-700 mb-8">
        I'd love to hear from you! Please fill out the form below to get in touch with me, whether it's a question, feedback, or just to say hello.
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow-md rounded-lg w-full max-w-lg p-8"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Send Your Message</h2>
            
            <div className="flex flex-col mb-5">
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                {...register("name", { required: "Full Name is required" })}
                className="shadow-sm border border-gray-300 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
              />
              {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
            </div>

            <div className="flex flex-col mb-5">
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                {...register("email", { 
                  required: "Email Address is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address"
                  }
                })}
                className="shadow-sm border border-gray-300 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
              />
              {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
            </div>

            <div className="flex flex-col mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="shadow-sm border border-gray-300 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="message"
                name="message"
                placeholder="Enter your message here"
                rows="4"
              />
              {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Contact Information</h2>
            <p className="text-base text-gray-700 mb-4">
              Feel free to reach out to me through the following channels. I look forward to connecting with you!
            </p>
            <ul className="space-y-4">
              <li>
                <span className="font-medium text-gray-900">Email:</span> 
                <a href="mailto:example@example.com" className="text-blue-500 hover:underline">example@example.com</a>
              </li>
              <li>
                <span className="font-medium text-gray-900">Phone:</span> 
                <span className="text-gray-700">+1 (555) 123-4567</span>
              </li>
              <li>
                <span className="font-medium text-gray-900">Location:</span> 
                <span className="text-gray-700">1234 Street Name, City, Country</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Follow Me</h2>
            <ul className="flex space-x-4 items-center justify-center">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">
                  <FaTwitter size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">
                  <FaFacebook size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">
                  <FaInstagram size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
