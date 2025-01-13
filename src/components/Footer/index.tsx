import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, Linkedin } from 'lucide-react';
import styles from '@/styles/Footer.module.scss';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Footer: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Contact</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.contactWrapper}>
          {/* Contact Form */}
          <div className={styles.formSection}>
            <h3 className={styles.formTitle}>Get in Touch</h3>
            <p className={styles.formSubtitle}>
              Feel free to reach out. I'd love to hear from you!
            </p>
            
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className={styles.textarea}
                  rows={5}
                />
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send size={18} className={styles.sendIcon} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Contact Information</h3>
              
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <MapPin className={styles.icon} />
                  </div>
                  <div className={styles.contactText}>
                    <h4>Location:</h4>
                    <p>Pune, India</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <Mail className={styles.icon} />
                  </div>
                  <div className={styles.contactText}>
                    <h4>Email:</h4>
                    <a href="mailto:s.abhishek82@outlook.com">
                      s.abhishek82@outlook.com
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <Phone className={styles.icon} />
                  </div>
                  <div className={styles.contactText}>
                    <h4>Call:</h4>
                    <a href="tel:+918600998258">+91 86009 98258</a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <Linkedin className={styles.icon} />
                  </div>
                  <div className={styles.contactText}>
                    <h4>Linkedin:</h4>
                    <a href="https://www.linkedin.com/in/iabhishekk/">Abhishek Singh</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;