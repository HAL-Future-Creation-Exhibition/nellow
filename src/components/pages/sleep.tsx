import * as React from "react";

interface IProps {
  sleep: boolean;
}

class Sleep extends React.Component<IProps> {
  public render() {
    return (
      <div className="sleep-container">
        <h1>Good Night</h1>
      </div>
    )
  }
}

export default Sleep;