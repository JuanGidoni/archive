const Button = ({ className, type, text, handleEvent }) => {
  return (
    <button type={type} className={className} onClick={handleEvent}>
      {text}
    </button>
  );
};

export default Button;
