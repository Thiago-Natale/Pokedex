import styled from "styled-components";

export const Screen = styled.div`
  display: flex;
  width: 210px;
  height: 139px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const NameView = styled.input`
  margin-top: 60px;
  height: 35px;
  width: 95%;
  padding-left: 5px;
  outline: none;
  border: 2px solid #333;
  border-radius: 5px;
  color: #3a444d;
  font-weight: bold;
  box-shadow: -3px 4px 0 #888, -5px 7px 0 #333;
  font-family: Pixel;
  font-size: 12px;
  text-transform: uppercase;
`;
