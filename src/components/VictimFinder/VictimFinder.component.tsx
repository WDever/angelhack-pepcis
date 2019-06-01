import * as React from 'react';

interface Props {}

interface State {
  debugContent: string;
  selectedImageFileURL: string;
  selectedImageFile: any;
  victimStatus: any;
}

class VictimFinder extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      debugContent: '',
      selectedImageFileURL: '',
      selectedImageFile: null,
      victimStatus: { shelterName: '', registeredTime: '' },
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
    this.onResponseFromServer({
      shelterName: 'not registered',
      registeredTime: '',
    });
  };

  // call this when the response from server has arrived from onImageSubmit
  onResponseFromServer(resp = { shelterName: '', registeredTime: '' }) {
    this.setState({
      victimStatus: resp,
    });
    if (resp.shelterName === 'not registered') {
      alert(
        `
        The one you are looking for is currently not registered at any of our shelters.
        We will contact you once we have an update.
        `,
      );
    } else {
    }
  }

  render() {
    const { debugContent, victimStatus } = this.state;
    const { onImageSubmit, onImageChange, onImageSelectButtonClick } = this;

    let victimStatusString: string = '';
    if (victimStatus.shelterName === '') {
      victimStatusString =
        'Please upload a photo of the one you are looking for.';
    } else if (victimStatus.shelterName === 'not registered') {
      victimStatusString = 'The one you are looking for is not registered.';
    } else {
      victimStatusString = `The one you are looking for is registered at ${
        victimStatus.shelterName
      } (${victimStatus.registeredTime})`;
    }
    return (
      <div>
        ({debugContent})<h1>Finder</h1>
        <br />
        {victimStatusString}
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
        <img
          src={this.state.selectedImageFileURL}
          alt=''
          style={{ maxWidth: '100%' }}
        />
      </div>
    );
  }
}

export default VictimFinder;
