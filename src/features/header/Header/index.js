import { HeaderBox, Logo, Tile, Wrapper } from "./styled";

export const Header = () => {
  return (
    <>
      <Wrapper>
        <HeaderBox>
          <Tile logo>
            <Logo>Rope Works</Logo>
          </Tile>
          <Tile item>
            <span>icona</span>home
          </Tile>
          <Tile item>
            <span>icona</span>oferta
          </Tile>
          <Tile item>
            <span>icona</span> o nas
          </Tile>
          <Tile item>
            <span>icona</span>kariera
          </Tile>
          <Tile item>
            <span>icona</span>kontakt
          </Tile>
          <Tile contact item>
            Bezpłatna wycena <span>icons</span>
          </Tile>
        </HeaderBox>
      </Wrapper>
    </>
  );
};
