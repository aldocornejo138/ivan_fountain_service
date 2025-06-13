import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactStyles.css";
import { contact } from "../../assets/index.js";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  // Form reference for EmailJS
  const form = useRef();

  // Email sending function
  const sendEmail = (sanitizedData) => {
    emailjs
      .send(
        "service_p0jbhyl", //emailJs Service ID
        "template_gb44azs", // EmailJs template ID
        sanitizedData,
        "Ah9VqXeck2rq2S5Me" // EmailJS user ID (public key) so its safe to have out
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setSuccessMsg(
            `Thank you ${sanitizedData.user_name}, your message has been sent successfully!`
          );
        },
        (error) => {
          console.error("Email send error:", error);
          setErrMsg(
            "Oops! Something went wrong. Please try again later. Or Text to (951) 837-8384"
          );
        }
      );
  };

  //state for form fields and messages
  const [user_name, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [user_email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState(""); // Error message state
  const [successMsg, setSuccessMsg] = useState(""); // Success message state

  // Input sanitization to prevent XSS attacks
  const sanitizeInput = (input) => {
    return input
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;")
      .replace(/&/g, "&amp;");
  };

  //Email Validation regex function
  const emailValidation = () => {
    return String(user_email)
      .toLocaleLowerCase()
      .match(/^\w+([.-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  //form submission handler
  const handleSend = (e) => {
    e.preventDefault();

    // Validation checks
    if (user_name === "") {
      setErrMsg("Username is required!!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (user_email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(user_email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    }
    //If all validations pass
    else {
      //  Sanitize all inputs before sending
      const sanitizedData = {
        user_name: sanitizeInput(user_name),
        phoneNumber: sanitizeInput(phoneNumber),
        user_email: sanitizeInput(user_email),
        subject: sanitizeInput(subject),
        message: sanitizeInput(message),
      };

      setSuccessMsg(
        `Thank you ${sanitizedData.user_name}, Your Message has been sent Successfully!`
      );
      sendEmail(sanitizedData); // Trigger email sending
      setErrMsg(""); // Clear error message

      // Reset form fields
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  //intersection Observer again for animations
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <section id="contact">
      <div ref={ref} className={`title ${inView ? "zoomIn" : "zoomOut"}`}>
        <h1>Have a Project in Mind?</h1>
        <p>Send a Message, Were here for you!</p>
      </div>
      <div className="contact-container">
        <div
          ref={ref}
          className={`image-container ${inView ? "zoomInLeft" : "zoomOutLeft"}`}
        >
          <img
            src={contact}
            alt="Contact"
            title="Ivan Fountain Service Contact"
            width="2963"
            height="2661"
            loading="lazy"
          />
        </div>
        <div
          ref={ref}
          className={`contact-form ${inView ? "zoomInRight" : "zoomOutRight"}`}
        >
          <form ref={form} className="">
            {errMsg && <p className="outline-designColor">{errMsg}</p>}
            {successMsg && <p className="successMsg">{successMsg}</p>}

            <div className="">
              <div className="">
                <h1 className="">YOUR NAME</h1>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={user_name}
                  name="user_name"
                  className={`${
                    errMsg === "Username is required!" && "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div>
              <div className="">
                <h1 className="">Phone Number</h1>
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  name="phoneNumber"
                  className={`${
                    errMsg === "Phone number is required!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div>
            </div>
            <div className="">
              <h1 className="">Email</h1>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={user_email}
                name="user_email"
                className={`${
                  errMsg === "Please give your Email!" && "outline-designColor"
                } contactInput`}
                type="email"
              />
            </div>
            <div className="">
              <h1 className="">Subject</h1>
              <input
                onChange={(e) => setSubject(e.target.value)}
                name="subject"
                value={subject}
                className={`${
                  errMsg === "Plese give your Subject!" && "outline-designColor"
                } contactInput`}
                type="text"
              />
            </div>
            <div className="">
              <h1 className="">Message (Please Include Your City)</h1>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                name="message"
                className={`${
                  errMsg === "Message is required!" && "outline-designColor"
                } contactTextArea`}
                cols="30"
                rows="8"
              ></textarea>
            </div>
            <div className="w-full">
              <button onClick={handleSend} className="">
                Send Message
              </button>
            </div>
            {errMsg && <p className="errorMsg">{errMsg}</p>}
            {successMsg && <p className="successMsg">{successMsg}</p>}
          </form>
        </div>
      </div>
      {/* Looking back I could of replaced this with CSS Padding*/}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default Contact;
