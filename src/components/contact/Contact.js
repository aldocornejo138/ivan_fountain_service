import React, { useState, useRef, useCallback, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "./ContactStyles.css";
import { contact } from "../../assets/index.js";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// File size constants (15MB limit)
const MAX_FILE_SIZE = 15 * 1024 * 1024; // 15MB
const MAX_FILE_COUNT = 5; // Max 5 files

const Contact = () => {
  // Form reference
  const form = useRef();
  const fileInputRef = useRef();

  // State for form fields
  const [user_name, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [user_email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Status messages
  const [formStatus, setFormStatus] = useState({
    message: "",
    type: "",
    details: [],
  });

  // Intersection Observer for animations
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

  // Log environment variables for debugging
  useEffect(() => {
    console.log("Webhook URL:", process.env.REACT_APP_N8N_WEBHOOK_URL);
    console.log(
      "Secret present:",
      process.env.REACT_APP_N8N_SECRET ? "Yes" : "No"
    );
  }, []);

  // Phone number validation
  const phoneValidation = () => {
    return phoneNumber.match(/^[0-9\-+()\s]{7,20}$/);
  };

  // Email Validation
  const emailValidation = () => {
    return String(user_email)
      .toLowerCase()
      .match(/^\w+([.-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  // Drag and drop handlers
  const handleDragEvents = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragEnter = useCallback(
    (e) => {
      handleDragEvents(e);
      setIsDragging(true);
    },
    [handleDragEvents]
  );

  const handleDragLeave = useCallback(
    (e) => {
      handleDragEvents(e);
      setIsDragging(false);
    },
    [handleDragEvents]
  );

  const handleDragOver = useCallback(
    (e) => {
      handleDragEvents(e);
      setIsDragging(true);
    },
    [handleDragEvents]
  );

  const handleDrop = useCallback(
    (e) => {
      handleDragEvents(e);
      setIsDragging(false);

      if (e.dataTransfer.files?.length) {
        processFiles(e.dataTransfer.files);
        e.dataTransfer.clearData();
      }
    },
    [handleDragEvents]
  );

  const processFiles = (fileList) => {
    const newFiles = Array.from(fileList);

    // Check total file count
    if (files.length + newFiles.length > MAX_FILE_COUNT) {
      setFormStatus({
        message: "File limit exceeded",
        type: "error",
        details: [`Maximum ${MAX_FILE_COUNT} files allowed`],
      });
      return;
    }

    // Validate files
    const validFiles = [];
    const invalidFiles = [];

    newFiles.forEach((file) => {
      if (file.size > MAX_FILE_SIZE) {
        invalidFiles.push(`${file.name} exceeds 15MB limit`);
      } else if (
        !file.type.match(/(image\/jpeg|image\/png|application\/pdf)/)
      ) {
        invalidFiles.push(`${file.name}: Only JPG, PNG, PDF allowed`);
      } else {
        validFiles.push(file);
      }
    });

    setFiles((prev) => [...prev, ...validFiles]);

    if (invalidFiles.length) {
      setFormStatus({
        message: "Some files were rejected",
        type: "error",
        details: invalidFiles,
      });

      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, details: [] }));
      }, 5000);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files?.length) {
      processFiles(e.target.files);
    }
    e.target.value = null;
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // Form submission handler
  const handleSend = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ message: "", type: "", details: [] });

    // Validation checks
    const validations = [
      { condition: !user_name, message: "Name is required!" },
      { condition: !phoneNumber, message: "Phone number is required!" },
      { condition: !phoneValidation(), message: "Invalid phone number!" },
      { condition: !user_email, message: "Email is required!" },
      { condition: !emailValidation(), message: "Invalid email address!" },
      { condition: !city, message: "City is required!" },
      { condition: !subject, message: "Subject is required!" },
      { condition: !message, message: "Message is required!" },
      {
        condition: files.length > MAX_FILE_COUNT,
        message: "File limit exceeded!",
      },
    ];

    const failedValidation = validations.find((v) => v.condition);
    if (failedValidation) {
      setFormStatus({
        message: failedValidation.message,
        type: "error",
        details: [],
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Create FormData object
      const formData = new FormData();

      // Append form fields
      formData.append("name", user_name);
      formData.append("phone", phoneNumber);
      formData.append("email", user_email);
      formData.append("city", city);
      formData.append("subject", subject);
      formData.append("message", message);
      formData.append("fileCount", files.length.toString());

      // Append files
      files.forEach((file) => {
        formData.append("attachments", file);
      });

      // Send to webhook
      const response = await fetch(process.env.REACT_APP_N8N_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "X-N8N-SECRET": process.env.REACT_APP_N8N_SECRET,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      setFormStatus({
        message: `Thank you ${user_name}, your message has been sent successfully!`,
        type: "success",
        details: [],
      });

      // Reset form
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setCity("");
      setSubject("");
      setMessage("");
      setFiles([]);
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus({
        message: `Submission failed: ${error.message}`,
        type: "error",
        details: ["Please try again later or text to (951) 837-8384"],
      });
    } finally {
      setIsSubmitting(false);

      // Clear status message after delay
      setTimeout(() => {
        setFormStatus({ message: "", type: "", details: [] });
      }, 10000);
    }
  };

  return (
    <section id="contact" className="dark-contact-section">
      <motion.div
        ref={titleRef}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="contact-title"
      >
        <h2>Have a Project in Mind?</h2>
        <p>Send a Message, We're here for you!</p>
      </motion.div>

      <div className="contact-container">
        <motion.div
          ref={imageRef}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
          variants={slideInLeft}
          className="contact-image-container"
        >
          <img
            src={contact}
            alt="Contact Illustration"
            className="contact-image"
            width="2963"
            height="2661"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          ref={formRef}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
          variants={slideInRight}
          className="contact-form"
        >
          <form ref={form} onSubmit={handleSend}>
            {/* Status Messages */}
            {formStatus.message && (
              <div className={`form-status ${formStatus.type}`}>
                <div className="status-message">{formStatus.message}</div>
                {formStatus.details.length > 0 && (
                  <ul className="status-details">
                    {formStatus.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label>YOUR NAME</label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={user_name}
                  name="user_name"
                  className={`contact-input ${
                    formStatus.type === "error" &&
                    formStatus.message.includes("Name")
                      ? "input-error"
                      : ""
                  }`}
                  type="text"
                  disabled={isSubmitting}
                  placeholder="John Smith"
                />
              </div>

              <div className="form-group">
                <label>PHONE NUMBER</label>
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  name="phoneNumber"
                  className={`contact-input ${
                    formStatus.type === "error" &&
                    formStatus.message.includes("Phone")
                      ? "input-error"
                      : ""
                  }`}
                  type="tel"
                  disabled={isSubmitting}
                  placeholder="(123) 456-7890"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>EMAIL</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={user_email}
                  name="user_email"
                  className={`contact-input ${
                    formStatus.type === "error" &&
                    formStatus.message.includes("Email")
                      ? "input-error"
                      : ""
                  }`}
                  type="email"
                  disabled={isSubmitting}
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label>CITY</label>
                <input
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                  name="city"
                  className={`contact-input ${
                    formStatus.type === "error" &&
                    formStatus.message.includes("City")
                      ? "input-error"
                      : ""
                  }`}
                  type="text"
                  placeholder="City where service is needed"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="form-group">
              <label>SUBJECT</label>
              <input
                onChange={(e) => setSubject(e.target.value)}
                name="subject"
                value={subject}
                className={`contact-input ${
                  formStatus.type === "error" &&
                  formStatus.message.includes("Subject")
                    ? "input-error"
                    : ""
                }`}
                type="text"
                disabled={isSubmitting}
                placeholder="Subject"
              />
            </div>

            <div className="form-group">
              <label>MESSAGE</label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                name="message"
                className={`contact-textarea ${
                  formStatus.type === "error" &&
                  formStatus.message.includes("Message")
                    ? "input-error"
                    : ""
                }`}
                rows="5"
                placeholder="Please describe your project details"
                disabled={isSubmitting}
              ></textarea>
            </div>

            {/* File Attachment Section */}
            <div className="form-group">
              <div className="file-header">
                <label>ATTACHMENTS (OPTIONAL)</label>
                <div className="file-counter">
                  {files.length}/{MAX_FILE_COUNT}
                </div>
              </div>

              <div
                className={`file-upload-area ${isDragging ? "dragging" : ""}`}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  id="attachments"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  multiple
                  className="file-input"
                  disabled={isSubmitting || files.length >= MAX_FILE_COUNT}
                  accept=".jpg,.jpeg,.png,.pdf"
                />
                <label htmlFor="attachments" className="file-upload-label">
                  <div className="upload-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                  </div>
                  <p className="upload-text">
                    {isDragging
                      ? "Drop files here"
                      : "Click or drag files to upload"}
                  </p>
                  <p className="file-hint">
                    Max {MAX_FILE_COUNT} files, 15MB each (JPG, PNG, PDF)
                  </p>
                </label>
              </div>

              {/* File previews */}
              {files.length > 0 && (
                <div className="file-previews">
                  {files.map((file, index) => (
                    <div key={index} className="file-item">
                      <div className="file-icon">
                        {file.type.includes("image") ? "🖼️" : "📄"}
                      </div>
                      <div className="file-info">
                        <span className="file-name">
                          {file.name.length > 25
                            ? `${file.name.substring(0, 20)}...${file.name
                                .split(".")
                                .pop()}`
                            : file.name}
                        </span>
                        <span className="file-size">
                          {(file.size / 1024 / 1024).toFixed(1)}MB
                        </span>
                      </div>
                      <button
                        type="button"
                        className="remove-file"
                        onClick={() => removeFile(index)}
                        disabled={isSubmitting}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="form-submit">
              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
                {files.length > 0 && !isSubmitting && (
                  <span className="file-count">
                    ({files.length} file{files.length !== 1 ? "s" : ""})
                  </span>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
