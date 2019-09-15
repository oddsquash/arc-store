import React, { Component } from "react";

import ReactBnbGallery from "react-bnb-gallery";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { galleryOpened: false };
    this.toggleGallery = this.toggleGallery.bind(this);
  }

  toggleGallery() {
    this.setState(prevState => ({
      galleryOpened: !prevState.galleryOpened
    }));
  }

  render() {
    return (
      <>
        <div>
          <button
            className="button pt-1 shadow-sm my-1 border-0 alt-button dark-mode-text"
            onClick={this.toggleGallery}
          >
            [ More photos ]
          </button>
        </div>
        <ReactBnbGallery
          show={this.state.galleryOpened}
          photos={this.props.images}
          onClose={this.toggleGallery}
        />
      </>
    );
  }
}

export { Gallery };
