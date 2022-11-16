const Label = ({ idFor, headText, required, className }) => {
  return (
    <label htmlFor={idFor} className={className}>
      {headText} {required && <span className="font-bold w-full"> *</span>}
    </label>
  );
};

export default Label;
