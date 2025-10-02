import { PokemonContext } from "../../../contexts/pokemonContext/PokemonContext";
import { NameView, Screen } from "./style";
import { useContext } from "react";
import { PokeButton } from "../../pokeButton";
import { useNavigate } from "react-router";
import { ScanLineEffect } from "../../retro-effect";

export const PokeScreen = () => {
  const navigate = useNavigate();
  const { selectedPokemon } = useContext(PokemonContext);
  return (
    <>
      <ScanLineEffect>
        <Screen>
          {!selectedPokemon ? (
            ""
          ) : (
            <img src={selectedPokemon.gif} alt={selectedPokemon.name} />
          )}
        </Screen>
      </ScanLineEffect>

      <NameView
        value={
          !selectedPokemon
            ? ""
            : `${selectedPokemon.name}  #${selectedPokemon.id}`
        }
        readOnly
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <PokeButton
          styles="
              background-color: #666;
              box-shadow: -3px 4px 0 #222, -5px 7px 0 #000;
              color: white;
              padding: 10px;
              margin-top: 10px;
              border-radius: 100%;
      
              &:active {
                transform: translateY(4px);
                box-shadow: -3px 4px #222;
              }
              "
          label={<img src="/images/iconBack.png" width="20px" />}
          onClick={() => {
            navigate("/");
          }}
        />

        <PokeButton
          styles="
              background-color: #666;
              box-shadow: -3px 4px 0 #222, -5px 7px 0 #000;
              color: white;
              padding: 10px;
              margin-top: 10px;
              border-radius: 100%;
      
              &:active {
                transform: translateY(4px);
                box-shadow: -3px 4px #222;
              }
              "
          label={<img src="/images/iconView.png" width="20px" />}
          onClick={() => {
            navigate("/details");
          }}
        />
      </div>
    </>
  );
};
