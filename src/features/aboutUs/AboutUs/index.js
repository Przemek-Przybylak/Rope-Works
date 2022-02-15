import { SectionHeader } from "../../../common/Header";
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
