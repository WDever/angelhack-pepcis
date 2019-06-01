import * as React from 'react';

interface Props {}

interface State {}

const VictimUploader: React.FC = ()
class VictimUploader extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  submitVictimImage = (e: any): void => {
    e.preventDefault();
    // send to photo to the server
  };

  victimImageChanged = (e: any): void => {
    // do something here
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitVictimImage}>
          <label>
            Take a picture
            <br />
            <input
              type="file"
              accept="image/*;capture=camera"
              onChange={this.victimImageChanged}
            />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default VictimUploader;
