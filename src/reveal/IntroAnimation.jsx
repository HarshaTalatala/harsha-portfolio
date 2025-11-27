import TextReveal from './TextReveal';
import './IntroAnimation.css';

const IntroAnimation = ({ fadeOut }) => {
  return (
    <div className={`intro-container ${fadeOut ? 'fade-out' : ''}`}>
      <TextReveal text="Harsha.Design" />
    </div>
  );
};

export default IntroAnimation;