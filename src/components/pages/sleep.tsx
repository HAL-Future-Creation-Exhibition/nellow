import * as React from "react";

interface IProps {
  backButtonHandler: (show: boolean) => void;
}

export default class Sleep extends React.Component<IProps> {
  render() {
    return (
      <div className="sleep-container">
        <h1>Good Night</h1>
      </div>
    )
  }
}