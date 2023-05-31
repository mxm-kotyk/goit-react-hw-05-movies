import { Wrapper } from './Loader.styled';
const { RotatingSquare } = require('react-loader-spinner');

const Loader = () => {
  return (
    <Wrapper>
      <RotatingSquare
        height="100"
        width="100"
        color="#050A18"
        ariaLabel="rotating-square-loading"
        strokeWidth="4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Wrapper>
  );
};

export default Loader;
