import * as React from 'react';

interface Props {}

interface State {
  debugContent: string;
  selectedImageFileURL: string;
  selectedImageFile: any;
}

class VictimFinder extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      debugContent: '',
      selectedImageFileURL: '',
      selectedImageFile: null,
    };
  }

  componentDidMount() {
    this.setState({ debugContent: 'debug log will be shown here' });
  }

  onImageChange = (e: any): void => {
    e.preventDefault();
    // display selected image
    const imageName = e.target.files[0].name;
    this.setState({
      debugContent: imageName + ' selected',
      selectedImageFileURL: URL.createObjectURL(e.target.files[0]),
      selectedImageFile: e.target.files[0],
    });
  };

  onImageSelectButtonClick = (e: any): void => {
    const element = this.refs.imageInput as HTMLElement;
    element.click();
  };

  onImageSubmit = (e: any): void => {
    e.preventDefault();
    if (this.state.selectedImageFile === null) return;
    // send the photo to the server
    console.log(this.state.selectedImageFile);
    const imageName = this.state.selectedImageFile.name;
    this.setState({
      debugContent: 'Submitting ' + imageName,
    });
  };

  render() {
    const { debugContent } = this.state;
    const { onImageSubmit, onImageChange, onImageSelectButtonClick } = this;

    return (
      <div>
        ({debugContent})
        <br />
        <img
          src={this.state.selectedImageFileURL}
          alt=''
          style={{ maxWidth: '100%' }}
        />
        <hr />
        <form onSubmit={onImageSubmit}>
          <input
            ref='imageInput'
            type='file'
            accept='image/*'
            onChange={onImageChange}
            style={{ display: 'none' }}
          />
          <input
            type='button'
            value='Select Image'
            onClick={onImageSelectButtonClick}
          />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default VictimFinder;
