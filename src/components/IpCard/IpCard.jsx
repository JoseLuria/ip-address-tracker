import { CardContainer } from "./IpCard.styled";

const IpCard = ({children, show}) => {
  return (
    <CardContainer show={show}>
      {children}
    </CardContainer>
  );
}
 
export default IpCard;
