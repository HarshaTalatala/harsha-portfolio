import './TextReveal.css';

const TextReveal = ({ text, color = '#FF5F1F' }) => {
  return (
    <div className="text-reveal-container">

      <h1 className="reveal-text">{text}</h1>

      <div 
        className="reveal-shape" 
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

export default TextReveal;