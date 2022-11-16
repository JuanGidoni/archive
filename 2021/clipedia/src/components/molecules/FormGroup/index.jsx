import Input from "../../atoms/Input"
import Label from "../../atoms/Label"

const FormGroup = () => {
 return (
  <div className="form-group">
   <Label 
   title="insert your clip link"
   idFor="link"
   className="label"
   />
   <Input
   type="text"
   placeholder="Paste your link"
   idFor="link"
   className="input"
   />
  </div>
 )
}

export default FormGroup
