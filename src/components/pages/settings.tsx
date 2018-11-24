import * as React from "react";

interface IProps {
  backButtonHandler: (show: boolean) => void;
}

export default class Settings extends React.Component<IProps> {

  constructor(props) {
    super(props);
  }

  public componentDidMount() {
    this.props.backButtonHandler(true);
  }

  public componentWillUnmount() {
    this.props.backButtonHandler(false);
  }

  public render() {
    return (
      <div className="settings-container">

        <div className="main-content">
          <div className="icon">
            <img src="https://pbs.twimg.com/profile_images/1021820533946499072/bfHxPQ39_400x400.jpg" alt=""/>
            <div className="camera-icon">
              <i className="fas fa-camera" />
            </div>
          </div>
          <div className="input-area">
            <p>ニックネーム</p>
            <input type="text" placeholder="ふわっち" />
            <i className="fas fa-times-circle" />
          </div>
        </div>

        <div className="actions">
          <button className="cancel">キャンセル</button>
          <button className="save">保存する</button>
        </div>
      </div>
    )
  }
}