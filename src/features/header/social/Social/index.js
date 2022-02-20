import { FacebookLogo, Icon, IconsList, LinkedInLogo } from "./styled";

export const Social = () => {
  return (
    <>
      <IconsList>
        <Icon href="https://www.facebook.com">
          <FacebookLogo />{" "}
        </Icon>{" "}
        <Icon href="https://www.linkedin.com/in/piotr-przybylak-b8b29722b/">
          <LinkedInLogo />{" "}
        </Icon>
      </IconsList>
    </>
  );
};
