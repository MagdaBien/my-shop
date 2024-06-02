import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoadingDataInfo = ({ isLoading, isError }) => {
  const navigate = useNavigate();
  //console.log('LoadingData isLoading, isError', isLoading, isError);

  if (isLoading) {
    return (
      <Spinner animation="border" role="status" className="block mx-auto">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  if (isError) {
    return <p>Error ... {isError}</p>;
  }

  return true;
};

export default LoadingDataInfo;
