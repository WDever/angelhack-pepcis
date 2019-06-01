import * as React from 'react';
import Webcam from 'react-webcam';

const { useRef } = React;

interface Props {}

const VictimUploader: React.FC = () => {
  const camRef = useRef(null);

  // const getCapture = () => {
  //   // camRef.current
  // }
  return (
    <Webcam ref={camRef} />
  );
};

export default VictimUploader;
