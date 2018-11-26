import * as React from "react";
import * as ReactSwipe from "react-swipe";

interface State {
  windowWidth: number;
}

class OnbordingSlider extends React.Component<any, State> {
  private reactSwipe;
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth
    }
  }

  public onHandleNext = () => {
    this.reactSwipe.next();
  };

  public render() {
    const { children } = this.props;
    const options = {
      continuous: false,
      disableScroll: true,
      startSlide: 2
    }

    return (
      <ReactSwipe
        className="carousel"
        swipeOptions={options}
        ref={reactSwipe => (this.reactSwipe = reactSwipe)}
      >
        {children}
      </ReactSwipe>
    )
  }
}

export default OnbordingSlider;