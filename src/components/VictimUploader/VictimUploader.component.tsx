import * as React from 'react';

interface Props {}

interface State {}

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

  // autoClicke = (e: React.RefObject<HTMLInputElement>) => {
  //   e.current;
  // };

  componentDidMount(): void {
    let element: HTMLElement = this.refs.victimImageInput as HTMLElement;
    element.click();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitVictimImage}>
          <label>
            Take a picture
            <br />
            <input
              ref='victimImageInput'
              type='file'
              accept='image/*;capture=camera'
              onChange={this.victimImageChanged}
            />
          </label>
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default VictimUploader;
