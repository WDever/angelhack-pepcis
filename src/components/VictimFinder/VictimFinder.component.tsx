import * as React from 'react';
import axios from 'axios';
import './style.css';

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
      victimStatus: '', // data.status: ready failed success
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
    const imageName = this.state.selectedImageFile.name;
    this.setState({
      debugContent: 'Submitting ' + imageName,
    });

    let formData = new FormData();
    formData.append('contact', '0');
    formData.append('image', this.state.selectedImageFile);
    axios({
      method: 'post',
      url:
        'https://oq2j9zaqcf.execute-api.ap-northeast-2.amazonaws.com/dev/find-request/',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(
        function(this: VictimFinder, resp: any) {
          console.log(resp);

          this.setState({
            victimStatus: resp.data.status,
          });
          if (this.state.victimStatus === 'failed') {
            alert(
              `
        The one you are looking for is currently not registered at any of our shelters
        We will contact you once we have an update
        `,
            );
          }
        }.bind(this),
      )
      .catch(
        function(this: VictimFinder, err: string) {
          console.log('Image Upload Failed. ' + err);
          this.setState({ debugContent: 'Image Upload Failed. ' + err });
        }.bind(this),
      );
  };

  render() {
    const { debugContent, selectedImageFileURL, victimStatus } = this.state;
    const { onImageSubmit, onImageChange, onImageSelectButtonClick } = this;

    let victimStatusString: string = '';
    if (victimStatus === '') {
      victimStatusString = ''; // 'Please upload a photo of the one you are looking for';
    } else if (victimStatus === 'failed') {
      victimStatusString = 'The one you are looking for is not registered';
    } else if (victimStatus === 'ready') {
      victimStatusString =
        'We are checking if the one is registered. Please check back later with the contact info you have provided.';
    } else {
      victimStatusString = 'The one you are looking for is registered';
    }
    return (
      <div id='VictimFinder'>
        ({debugContent})<h1>Finder</h1>
        <br />
        {victimStatusString}
        <br />
        <br />
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
            value='Find with image'
            onClick={onImageSelectButtonClick}
            className='solidWhiteButton'
          />
          <br />
          <br />
          <input
            type='submit'
            value='Submit'
            className='solidWhiteButton'
            hidden={selectedImageFileURL === ''}
          />
        </form>
        <br />
        <img src={selectedImageFileURL} alt='' style={{ maxWidth: '100%' }} />
      </div>
    );
  }
}

export default VictimFinder;
