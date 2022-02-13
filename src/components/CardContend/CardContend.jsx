import { CardInfo, SectionTitle, SectionText, SectionLine } from "./CardContend.styled";

const CardContend = ({title, text, time}) => {
  return (
    <>
      <CardInfo>
        <SectionTitle>{title}</SectionTitle>
        <SectionText>{time && text && "UTC"}{text && !text.includes("undefined") ? text : "Not Avaliable"}</SectionText>
      </CardInfo>
      <SectionLine/>
    </>
  );
}
 
export default CardContend;
