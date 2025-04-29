import React from 'react';
import visheshimage from '../assets/visheshimage.png'; // adjust path as needed

// Define the CSS styles directly within the component using a style object
const styles = {
  heroSection: {
    paddingTop: '4rem',
    paddingBottom: '8rem',
    background: '#111827',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  heroContainer: {
    maxWidth: '1280px',
    margin: '0 auto',    /////
    padding: '0 0.5rem',
    display: 'flex',
    flexDirection: 'row',
    gap: '3rem',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between'
  },
  heroText: {
    textAlign: 'left',
    flex: 1,
    zIndex: 1,
    width: '50%',
  },
  heroHeading: {
    fontSize: '4rem',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '1rem',
    letterSpacing: '-0.05em',
    transition: 'color 0.3s ease, transform 0.3s ease',
    '&:hover': {
      color: '#8e2de2',
      transform: 'scale(1.1)',
    }
  },
  heroName: {
    color: ' #7b3e8d',
  },
  heroSubtext: {
    fontSize: '1.8rem',
    color: '#9ca3af',
    marginTop: '1rem',
    marginBottom: '2rem',
    lineHeight: '1.7',
    background: 'linear-gradient(90deg, #6ee7b7, #3b82f6, #8b5cf6, #ec4899)',
    backgroundSize: '400% 400%',
    animation: 'animate-text 5s ease-in-out infinite',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
  },
  heroButton: {
    padding: '0.8rem 2.2rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#ffffff',
    backgroundColor: ' #7b3e8d',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: 'none',
    '&:hover': {
      backgroundColor: '#7322c3',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
    },
  },
  heroButtonHover: {
    backgroundColor: '#7322c3',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
  },
  arrowIcon: {
    stroke: 'white',
    width: '1.2em',
    height: '1.2em'
  },
  heroImageWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '50%',
  },
  heroImageContainer: {
    position: 'relative',
    borderRadius: '50%',
    marginTop: '3rem',
    overflow: 'hidden',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    width: '330px',
    height: '330px',
    border: '4px solid  #7b3e8d',
    marginRight: 0,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',  // Increased scale
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)', // Increased shadow
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-20px',
      left: '-20px',
      right: '-20px',
      bottom: '-20px',
      background: ' #7b3e8d',
      zIndex: '-1',
      borderRadius: '50%',
      opacity: 0,
      transition: 'opacity 0.3s ease',
      animation: 'none',
    },
    '&:hover::before': {
      opacity: 1,
      animation: 'rotate 2s linear infinite',
    },
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imageOverlay: {
    display: 'none'
  },
  animatedFadeSlideTop: {
    animation: 'fadeSlideTop 0.8s ease-in-out forwards',
  },
  animatedFadeSlideBottom: {
    animation: 'fadeSlideBottom 0.8s ease-in-out forwards',
    animationDelay: '0.3s',
  },
  animatedZoomIn: {
    animation: 'zoomIn 0.6s ease-in-out forwards',
    animationDelay: '0.6s',
  },
  animatedScaleIn: {
    animation: 'scaleIn 0.8s ease-in-out forwards',
    animationDelay: '0.2s',
  },
  '@keyframes fadeSlideTop': {
    from: {
      opacity: 0,
      transform: 'translateY(-20px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  '@keyframes fadeSlideBottom': {
    from: {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  '@keyframes zoomIn': {
    from: {
      opacity: 0,
      transform: 'scale(0.5)',
    },
    to: {
      opacity: 1,
      transform: 'scale(1)',
    },
  },
  '@keyframes scaleIn': {
    from: {
      opacity: 0,
      transform: 'scale(0.8)',
    },
    to: {
      opacity: 1,
      transform: 'scale(1)',
    },
  },
  '@keyframes animate-text': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
  '@keyframes rotate': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
  '@media (max-width: 768px)': {
    heroContainer: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    heroText: {
      width: '100%',
      textAlign: 'center'
    },
    heroImageWrapper: {
      width: '100%',
      justifyContent: 'center'
    }
  },
};

const Hero = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <section style={styles.heroSection}>
      <div style={styles.heroContainer}>
        {/* Text  */}
        <div style={styles.heroText}>
          <h1 style={{...styles.heroHeading,
            textShadow: '0 0 8px  #7b3e8d',
            transition: 'text-shadow 0.5s ease-in-out',
          }}>
            <span style={{
              textShadow: '0 0 40px rgba(56, 189, 248, 0.9), 0 0 5px rgba(56, 189, 248, 0.9)',
            }}>
              Hello, I'm 
            </span>
            <span style={styles.heroName}> Vishesh</span>
          </h1>
          <p style={styles.heroSubtext}>
            FullStack Web Developer
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>



          <a
  href="about"
  style={
    isHovered
      ? { ...styles.heroButton, ...styles.heroButtonHover, textDecoration: 'none' }
      : { ...styles.heroButton, textDecoration: 'none' }
  }
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  Hire Me
</a>

<a
  href="/cv.pdf"
  download
  style={{
    ...styles.heroButton,
    color: '#ffffff',
    backgroundColor: '#7b3e8d',
    textDecoration: 'none' // ✅ Remove underline
    // border: '2px solid #7b3e8d'
  }}
>
  Resume
</a>

            {/* <a
              href="about"
              style={isHovered ? { ...styles.heroButton, ...styles.heroButtonHover } : styles.heroButton}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Hire Me
            </a>
           

            <a
  href="/cv.pdf" // File path relative to public folder
  download // Triggers download
  style={{
    ...styles.heroButton,
    color: '#ffffff',
    backgroundColor: '#7b3e8d',
    // border: '2px solid #7b3e8d'
  }}
>
  Resume
</a> */}

          </div>
        </div>

        {/* Image on larger screens, above on small */}
        <div style={styles.heroImageWrapper}>
          <div style={styles.heroImageContainer}
          >
     
<img
  src={visheshimage}
  alt="Vishesh"
  style={styles.heroImage}
/>



          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
