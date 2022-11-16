const Input = ({
 type,
 placeholder,
 idFor,
 className
}) => {

 return (
  <input
   className={className}
   type={type}
   id={idFor}
   placeholde={placeholder}
  />
 )
}

export default Input
