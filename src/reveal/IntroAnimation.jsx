import TextReveal from './TextReveal';
import './IntroAnimation.css';

const IntroAnimation = ({ fadeOut }) => {
  return (
    <div className={`intro-container ${fadeOut ? 'fade-out' : ''}`}>
      <TextReveal text="harshabuilds.tech" />
    </div>
  );
};

export default IntroAnimation;
