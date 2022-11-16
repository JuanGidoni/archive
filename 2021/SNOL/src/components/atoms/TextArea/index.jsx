const TextArea = ({className, idFor, placeholder, disabled, data}) => {
  return <textarea id={idFor} value={data} disabled={disabled} placeholder={placeholder} className={className}>{data}</textarea>;
};

export default TextArea;
