import styled from "styled-components";

export const PokemonsInfoList = styled.ul`
  overflow-y: scroll;
  width: 254px;
  height: 300px;
  outline: none;
  border: 2px solid #333;
  box-shadow: 3px 4px 0 #888, 5px 7px 0 #333;
  background-color: #d8efffff;
  border-radius: 20px 0 0 20px;

  /* Scrollbar Chrome/Safari/Edge */
  &::-webkit-scrollbar {
    width: 8px;
    height: 90%;
  }

  &::-webkit-scrollbar-track {
    background: white;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(204, 204, 204, 0.7);
  }

  /* Scrollbar Firefox */
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.4) transparent;
`;

export const InfoGroup = styled.li`
  margin-bottom: 20px;
`;

export const GroupTitle = styled.h2`
  font-size: 14px;
  text-transform: uppercase;
  color: black;
  padding: 6px 10px;
  border-radius: 10px;
  margin: 5px;
  font-family: Pixel;
`;

export const InfoItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const InfoItem = styled.li`
  background: linear-gradient(to bottom, #e0e0e0ff, #a0a0a0ff);
  font-weight: bold;
  transition: transform 0.2s, background 0.2s;
  padding: 6px 10px;
  border-radius: 10px;
  margin: 5px;
  font-family: "Press Start 2P", monospace;
  border: 2px solid #afafafff;
`;

export const AbilitieDetailContainer = styled.div`
  background: white;
  margin: 6px 0;
  padding: 10px;
  border-radius: 0 0 5px 5px;
  border: 2px solid #afafafff;
`;