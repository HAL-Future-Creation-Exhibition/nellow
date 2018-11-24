import * as React from "react";
import { withRouter } from "react-router-dom";
import Header from "../modules/Header";

interface IProps {
  history;
}

class Settings extends React.Component<IProps> {

  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <>
        <Header isShowBackButton={location.pathname !== "/"} to={this.props.history.push} />
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
      </>
    )
  }
}

export default withRouter(Settings);