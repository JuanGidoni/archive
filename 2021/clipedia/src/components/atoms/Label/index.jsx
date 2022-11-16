const Label = ({
 idFor,
 className,
 title
}) => {
 return (
  <label 
  htmlFor={idFor}
  className={className}
  >
   {title}
  </label>
 )
}

export default Label
