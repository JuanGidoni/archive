import { useEffect, useState } from "react";

const Input = ({
  type,
  placeholder,
  name,
  className,
  idFor,
  required,
  disabled,
  reduxValue,
  sendToStore,
  min,
  max,
}) => {
  const [target, setTarget] = useState({});
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(reduxValue);
    console.log(name);
  }, [reduxValue]);

  if (type === "number")
    return (
      <input
        disabled={disabled}
        required={required}
        type={type}
        placeholder={placeholder}
        name={name}
        min={min}
        max={max}
        id={idFor}
        className={className}
        onChange={(evt) => {
          setValue(evt.target.value);
          setTarget({
            name: evt.target.name,
            value: value,
          });
        }}
        onBlur={() => {
          target && sendToStore(target);
        }}
        value={value}
      />
    );
  if (type === "email")
    return (
      <input
        disabled={disabled}
        required={required}
        type={type}
        placeholder={placeholder}
        name={name}
        id={idFor}
        className={className}
        onChange={(evt) => {
          setValue(evt.target.value);
          setTarget({
            name: evt.target.name,
            value: value,
          });
        }}
        onBlur={() => {
          target && sendToStore(target);
        }}
        value={value}
      />
    );
  if (type === "checkbox")
    return (
      <input
        disabled={disabled}
        required={required}
        type={type}
        placeholder={placeholder}
        name={name}
        id={idFor}
        className={className}
        onChange={(evt) => {
          setValue(evt.target.value);
          setTarget({
            name: evt.target.name,
            value: value,
          });
        }}
        onBlur={() => {
          target && sendToStore(target);
        }}
        value={value}
      />
    );
  if (type === "radio")
    return (
      <input
        disabled={disabled}
        required={required}
        type={type}
        placeholder={placeholder}
        name={name}
        id={idFor}
        className={className}
        onChange={(evt) => {
          setValue(evt.target.value);
          setTarget({
            name: evt.target.name,
            value: value,
          });
        }}
        onBlur={() => {
          target && sendToStore(target);
        }}
        value={value}
      />
    );
  if (type === "date")
    return (
      <input
        disabled={disabled}
        required={required}
        type={type}
        name={name}
        min={min}
        max={max}
        id={idFor}
        className={className}
        onChange={(evt) => {
          setValue(evt.target.value);
          setTarget({
            name: evt.target.name,
            value: value,
          });
        }}
        onBlur={() => {
          target && sendToStore(target);
        }}
        value={value}
      />
    );
  return (
    <input
      disabled={disabled}
      required={required}
      type={type}
      placeholder={placeholder}
      name={name}
      id={idFor}
      className={className}
      onChange={(evt) => {
        setValue(evt.target.value);
        setTarget({
          name: evt.target.name,
          value: value,
        });
      }}
      onBlur={() => {
        console.log(target, 'targ');
        target && sendToStore(target);
      }}
      value={value}
    />
  );
};

export default Input;
