import { FormContainer, FormInput, FormButton, IconButton } from "./Form.styled";
import ArrowIcon from "../../assets/icon-arrow.svg"

const Form = ({handleIpNumber, ipNumber, handleIpData, error}) => {
  return (
    <FormContainer onSubmit={handleIpData}>
      <FormInput
        onChange={({target}) => handleIpNumber(target)}
        ipNumber={ipNumber}
        type="text" 
        value={ipNumber}
        placeholder={error ? "Please add a correct IP address" : "Search for any IP address or domain"}
        error={error}
      />
      <FormButton type="submit">
        <IconButton src={ArrowIcon} alt="Arrow Icon" width="11" height="14"/> 
      </FormButton>
    </FormContainer>
  );
}
 
export default Form;
