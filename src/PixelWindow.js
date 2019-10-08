import React, { Component } from "react";
import PixelStreamingContext from "./lib/pixel-streaming-context";

class PixelWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // PixelStreamingのロード
    this.props.load();
}

  componentWillUnmount() {}

  render() {
    const webrtcState = this.props.webrtcState;
    return (
      <div style={style}>
        <div id="player" className="fixed-size">
          <PixelStreamingContext.Consumer>
            {context =>
              context.webrtcState
                ? PlayerComponent(context.webrtcState)
                : PlayerComponent(this.props.webrtcState)
            }
          </PixelStreamingContext.Consumer>
        </div>
      </div>
    );
  }
}

const style = {};

export default PixelWindow;

const PlayerComponent = webrtcState => {
  if (webrtcState === "connect") return <div>{webrtcState}</div>;
  if (webrtcState === "play") return <div>{webrtcState}</div>;
  if (webrtcState === "playing") return <div>{webrtcState}</div>;
  if (webrtcState === "stop") return <div>{webrtcState}</div>;
};
