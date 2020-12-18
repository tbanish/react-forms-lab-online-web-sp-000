import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  maxCharCount = () => {
    return this.props.maxChars - this.state.message.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" onChange={event => this.handleChange(event)} value={this.state.message} id="message" />
        <p>{this.maxCharCount()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
