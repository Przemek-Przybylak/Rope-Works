import { SectionHeader } from "../../../common/SectionHeader";
import { content } from "../content";
import { Wrapper } from "./styled";

export const AboutUs = () => {
  return (
    <>
      <Wrapper>
        <SectionHeader>O nas</SectionHeader>
        {content}
      </Wrapper>
    </>
  );
};
