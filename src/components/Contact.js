import { useEffect, useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [showResume, setShowResume] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState([]);

  // Hero CTA → Resume Modal
  useEffect(() => {
    const openModal = () => setShowResume(true);
    window.addEventListener("openResumeModal", openModal);
    return () =>
      window.removeEventListener("openResumeModal", openModal);
  }, []);

  // Validation
  const validate = () => {
    let err = {};
    if (!formData.name.trim()) {
      err.name = "Name is required";
    }

    if (!formData.email) {
      err.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      err.email = "Invalid email";
    }

    if (!formData.message.trim()) {
      err.message = "Message cannot be empty";
    }

    return err;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData([...submittedData, formData]);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <>
      <section
        id="contact"
        className={`contact ${showResume ? "blurred" : ""}`}
      >
        <h2>Let's Connect</h2>

        <div className="contact-container">
          {/* LEFT INFO */}
          <div className="contact-info">
            <p>
              Hello, Everyone!!
            </p>

            <div className="info-list">
              <p>📍 India</p>
              <p>📞 +91 9304XXXXXX</p>
              <p>  
                <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=kashishpriya0112cs221066@gamil.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                  📧 kashishpriya0112cs221066@gmail.com 
                </a>
              </p>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/kashish-priya-a48428254/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">@</span>
                LinkedIn
              </a>
              <a
                href="https://github.com/kashishp11"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">&lt;&gt;</span>
                GitHub
              </a>
              {/* <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=kashishpriya0112cs221066@gamil.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">✉</span>
                Gmail
              </a> */}
              <a
                href="https://wa.me/919304502162"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">💬</span>
                WhatsApp
              </a>
            </div>

            <div className="cta-group">
              {/* <button
                className="cta primary-cta"
                onClick={() => setShowResume(true)}
              >
                Preview Resume
              </button> */}

              <a
                href="/Kashish_resume9.pdf"
                download
                className="cta secondary-cta"
              >
                ⬇️ Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <textarea
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            {errors.message && (
              <span className="error">{errors.message}</span>
            )}

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* DISPLAY SUBMITTED DATA */}
        {submittedData.length > 0 && (
          <div className="message-list">
            <h3>Messages Received</h3>
            {submittedData.map((item, index) => (
              <div key={index} className="message-card">
                <p><strong>Name:</strong> {item.name}</p>
                <p><strong>Email:</strong> {item.email}</p>
                <p><strong>Message:</strong> {item.message}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* RESUME MODAL */}
      {showResume && (
        <div className="modal-overlay">
          <div className="modal scale-in">
            <button
              className="close-btn"
              onClick={() => setShowResume(false)}
            >
              ✕
            </button>

            <iframe
              src="/Kashish_resume9.pdf"
              title="Resume Preview"
              className="resume-frame"
            />
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="footer">
        Designed & Developed by <strong>Kashish Priya</strong> © |
        All Rights Reserved
      </footer>
    </>
  );
}

export default Contact;
