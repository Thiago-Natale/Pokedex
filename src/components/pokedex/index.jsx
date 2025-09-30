import {
  PokedexLeftSide,
  PokedexLeftSideContainer,
  PokedexRightSide,
  PokedexRightSideContainer,
  PokedexContainer,
} from "./style";

export const PokedexLayout = ({ leftSide: LeftSide, rightSide: RightSide }) => {
  return (
      <PokedexContainer>
        <PokedexLeftSide>
          <PokedexLeftSideContainer>
            <LeftSide />
          </PokedexLeftSideContainer>
        </PokedexLeftSide>

        <PokedexRightSide>
          <PokedexRightSideContainer>
            <RightSide />
          </PokedexRightSideContainer>
        </PokedexRightSide>
      </PokedexContainer>
  );
};
