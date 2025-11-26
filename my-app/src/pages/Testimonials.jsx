import React from 'react';
import './Testimonials.css';
import { motion } from 'framer-motion';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Card Wrapper Component
const Card = ({ children, className }) => (
  <div className={`testimonial-card-modern ${className}`}>{children}</div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Smith',
      company: 'Acme Corp',
      quote: 'Vishesh delivered exceptional work on our website redesign. Their attention to detail and creativity exceeded expectations.',
      image: "https://placehold.co/50x50/DDD/555?text=JS",
    },
    {
      name: 'Jane Doe',
      company: 'Beta Inc',
      quote: 'We hired Vishesh for a complex web application, and he delivered on time and within budget. Highly recommended!',
      image: "https://placehold.co/50x50/EEE/666?text=JD",
    },
    {
      name: 'David Lee',
      company: 'Gamma Co',
      quote: 'Vishesh is a talented designer and developer. He brought our vision to life with innovative solutions.',
      image: "https://placehold.co/50x50/FDD/777?text=DL",
    },
  ];

  return (
    <section className="testimonials-modern-section" id="testimonials">
      <div className="testimonials-modern-container">
        <h2 className="section-title">Testimonials</h2>
        <p className="section-subtitle">What my clients say about me.</p>

        <motion.div
          className="testimonials-modern-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card>
                <div className="testimonial-header">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.company}</p>
                  </div>
                </div>
                <blockquote className="testimonial-quote">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
