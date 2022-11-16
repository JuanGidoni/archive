const Button = ({
 className,
 type,
 handleClick,
 text
}) => {
 return (
  <button
  className={className}
  type={type}
  onClick={handleClick}
  >
   {text}
  </button>
 )
}

export default Button
