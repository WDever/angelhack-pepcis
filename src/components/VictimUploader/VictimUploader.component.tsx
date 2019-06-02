import * as React from 'react';
import styled from 'styled-components';
import Webcam from 'react-webcam';
import DefaultSrc from 'lib/png/default.png';
import { VictimUploadParams } from 'store';

const { useState } = React;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const LifeToggle = styled.button<{ live: boolean }>`
  font-family: 'Roboto';
  color: white;
  font-size: 1rem;
  width: 3.75rem;
  height: 1.57rem;
  background-color: ${props => (props.live ? '#6EC500' : '#FF4F4F')};
  border-radius: 16px;
  outline: none;
  border: none;
  position: fixed;
  z-index: 11;
  top: 1rem;
  left: 1rem;
`;

const StyledWebcam = styled(Webcam)``;

const ButtonBar = styled.div`
  width: 100%;
  height: 11.3rem;
  background-color: #0e0535;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: -0.3rem;
`;

const CaptureOutBtn = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  background-color: transparent;
  border: 4px solid #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CaptureInBtn = styled.div`
  width: 2.875rem;
  height: 2.875rem;
  background-color: #ffffff;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Img = styled.img`
  width: 3.125rem;
  height: 3.125rem;
`;

const Empty = styled.div`
  width: 3.125rem;
  height: 3.125rem;
`;

interface Props {
  victimUploadStatus: 'none' | 'pending' | 'success' | 'failure';
  victimUploadApi(params: VictimUploadParams): void;
}

const VictimUploader: React.FC<Props> = ({ victimUploadApi, victimUploadStatus }) => {
  const [lifeStatus, setLifeStatus] = useState<boolean>(true);
  const [screenShotSrc, setScreenShotSrc] = useState<any>('');

  let camRef: Webcam;

  const windowWidth = window.innerWidth;

  const setCamRef = (webcam: Webcam) => {
    camRef = webcam;
  };

  const getCapture = () => {
    if (camRef) {
      const fd = new FormData();
      setScreenShotSrc(camRef.getScreenshot());
      const data = screenShotSrc.split(',')[1];
      if (!data) {
        return;
      }
      const byteNumbers = new Array(data.length);
      for (let i = 0; i < data.length; i++) {
        byteNumbers[i] = data.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'image/jpeg' });
      console.log(blob);
      fd.append('image', blob);
      fd.append('status', 'alive');
      fd.append('shelter', '4');

      victimUploadApi(fd);
    }
  };

  return (
    <Wrapper>
      <LifeToggle
        live={lifeStatus}
        onClick={() => {
          setLifeStatus(!lifeStatus);
        }}
      >
        {lifeStatus ? 'Alive' : 'Death'}
      </LifeToggle>
      <StyledWebcam ref={setCamRef} width={windowWidth} screenshotFormat="image/jpeg" />
      <ButtonBar>
        <Img src={screenShotSrc || DefaultSrc} alt="preview" />
        <CaptureOutBtn onClick={getCapture}>
          <CaptureInBtn />
        </CaptureOutBtn>
        <Empty />
      </ButtonBar>
    </Wrapper>
  );
};

export default VictimUploader;
