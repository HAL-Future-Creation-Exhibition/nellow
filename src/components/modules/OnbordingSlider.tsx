import * as React from "react";
import * as ReactSwipe from "react-swipe";

interface Props {
  setReactSwipe: (el) => void;
}

interface State {
  windowWidth: number;
}

class OnbordingSlider extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth
    }
  }

  public render() {
    const { children } = this.props;
    const options = {
      continuous: false,
      disableScroll: true,
      startSlide: 0
    }

    return (
      <ReactSwipe
        className="carousel"
        swipeOptions={options}
        ref={reactSwipe => (this.props.setReactSwipe(reactSwipe))}
      >
        {children}
      </ReactSwipe>
    )
  }
}

export default OnbordingSlider;