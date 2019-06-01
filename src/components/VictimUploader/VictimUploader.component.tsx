import * as React from 'react';

interface Props {}

interface State {}

class VictimUploader extends React.Component<Props, State> {
  state: State = {};

  inputRef = React.createRef<HTMLInputElement>();

  componentDidMount() {
    const inputNode = this.inputRef.current;

    if (inputNode) {
      inputNode.click();
    }
  }

  submitVictimImage = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // send to photo to the server
  };

  victimImageChanged = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // do something here
  };

  render() {
    const { submitVictimImage, victimImageChanged, inputRef } = this;

    return (
      <div>
        <form onSubmit={submitVictimImage}>
          <label id="label">
            Take a picture
            <br />
            <input
              type="file"
              accept="image/*;capture=camera"
              onChange={victimImageChanged}
              ref={inputRef}
            />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default VictimUploader;
