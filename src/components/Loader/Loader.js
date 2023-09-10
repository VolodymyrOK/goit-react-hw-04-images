import { RotatingLines } from 'react-loader-spinner';
import { LoaderStile } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderStile>
      <RotatingLines
        strokeColor="teal"
        strokeWidth="5"
        animationDuration="0.75"
        width="196"
        visible={true}
      />
    </LoaderStile>
  );
};
