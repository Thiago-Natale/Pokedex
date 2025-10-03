import { Loader, LoadingContainer } from "./style"

export const Loading = ({style}) => {
  return (
    <LoadingContainer>
      <Loader style={style}/>
    </LoadingContainer>
  );
};