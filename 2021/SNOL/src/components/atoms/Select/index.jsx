const Select = ({ options, className, handleChange, form, idFor }) => {
  return (
    <select
      className={className}
      id="idFor"
      //onChange={(e) => handleChange({ ...form, [idFor]: e.target.value})}
    >
      {options.map((op) => (
        <option key={op.value} value={op.value}>
          {op.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
