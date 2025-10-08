import { keyframes } from "styled-components";
import styled from "styled-components";

const scanline = keyframes`
  from { background-position: 0 0; }
  to { background-position: 0 100%; }
`;

export const ScanLineEffect = styled.div`
  position: relative;
  border-radius: 15px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: repeating-linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.15) 0px,
      rgba(255, 255, 255, 0) 3px,
      transparent 4px,
      transparent 10px
    );
    background-size: 100% 500px;
    animation: ${scanline} 10s linear infinite;
    pointer-events: none;
  }
`;