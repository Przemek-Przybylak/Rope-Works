import { Header } from "../../../common/Header";
import { content } from "../content";
import { Wrapper } from "./styled";

export const AboutUs = () => {
  return (
    <>
      <Wrapper>
        <Header>O nas</Header>
        {content}
      </Wrapper>
    </>
  );
};
