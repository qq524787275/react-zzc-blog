import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// core components
import Button from "components/CustomButtons/Button.jsx";

import defaultImage from "assets/img/image_placeholder.jpg";
import defaultAvatar from "assets/img/placeholder.jpg";

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      imagePreviewUrl: this.props.avatar ? defaultAvatar : defaultImage
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
    if(this.props.onSelect){
      this.props.onSelect(file);
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    // this.state.file is the file/image uploaded
    // in this function you can save the image (this.state.file) on form submit
    // you have to call it yourself
  }
  handleClick() {
    var input = document.createElement("input");
    input.type = "file";
    input.onchange = this.handleImageChange;
    input.click();
  }
  handleRemove() {
    this.setState({
      file: null,
      imagePreviewUrl: this.props.avatar ? defaultAvatar : defaultImage
    });
  }
  render() {
    return (
      <div className="fileinput text-center">
        <div className={"thumbnail" + (this.props.avatar ? " img-circle" : "")}>
          <img src={this.state.imagePreviewUrl} alt="..." />
        </div>
        <div>
          {this.state.file === null ? (
            <Button round color="rose" onClick={() => this.handleClick()}>
              {this.props.avatar ? "Add Photo" : "选择图片"}
            </Button>
          ) : (
            <span>
              <Button round color="rose" onClick={() => this.handleClick()}>
                选择
              </Button>
              {this.props.avatar ? <br /> : null}
              <Button color="danger" round onClick={() => this.handleRemove()}>
                <i className="fa fa-times" /> 取消
              </Button>
            </span>
          )}
        </div>
      </div>
    );
  }
}

ImageUpload.propTypes = {
  avatar: PropTypes.bool
};

export default ImageUpload;
