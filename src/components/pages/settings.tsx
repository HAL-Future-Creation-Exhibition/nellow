import * as React from "react";

export default class Settings extends React.Component {
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