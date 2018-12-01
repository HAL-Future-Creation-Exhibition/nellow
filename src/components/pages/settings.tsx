import * as React from "react";
import { withRouter } from "react-router-dom";
import Header from "../modules/Header";
import db from "../../lib/db";
import { User } from "../../model/type";
import http from "../../api/http";
import ReactLoading from "react-loading";

interface Props {
  history;
}

interface State {
  user: User;
  iconLoading: boolean;
  userLoading: boolean;
}

class Settings extends React.Component<Props, State> {

  constructor(props) {
    super(props);

    this.state = {
      user: db.getUser(),
      iconLoading: false,
      userLoading: false
    }
  }

  public onChangeInput = (e) => {
    const { user } = this.state;
    user.name = e.target.value;
    this.setState({ user })
  }

  public cancel = () => {
    this.props.history.push("/");
  }

  public save = async () => {
    this.setState({ userLoading: true });
    const { id, name, providing_destination } = this.state.user
    const res = await http.patchUserInfo(id, name, providing_destination.id);
    db.setUser(res.data);
    this.setState({ userLoading: false });
    this.props.history.push("/");
  }

  public fileUpload = async (e) => {
    this.setState({ iconLoading: true });
    const file = e.target.files[0]
    const res = await http.patchIcon(this.state.user.id, file);
    const mergeUser = {...res.data, ...{name: this.state.user.name}};
    db.setUser(mergeUser);
    this.setState({ user: mergeUser, iconLoading: false });
  }

  public clearName = () => {
    const { user } = this.state;
    user.name = "";
    this.setState({ user });
  }

  public render() {
    const { user } = this.state;
    return (
      <>
        <Header isShowBackButton={location.pathname !== "/"} to={this.props.history.push} />
        <div className="settings-container">
          <div className="main-content">

            {this.state.iconLoading ? (
              <div className="icon-loading">
                <ReactLoading type="bubbles" color="#29B6F6" />
              </div>
            ) : (
              <label className="icon" htmlFor="file-upload">
                <input type="file" id="file-upload" style={{ display: "none" }} onChange={this.fileUpload} />
                <div className="icon-img" style={{ backgroundImage: `url(${user.icon})` }}></div>
                <div className="camera-icon">
                  <i className="fas fa-camera" />
                </div>
              </label>
            )}

            <div className="input-area">
              <p>ニックネーム</p>
              <input type="text" placeholder={user.name} value={user.name} onChange={this.onChangeInput} />
              <i className="fas fa-times-circle" onClick={this.clearName} />
            </div>
          </div>

          <div className="actions">
            {this.state.userLoading ? (
              <ReactLoading type="bubbles" color="#29B6F6"/>
            ) : (
              <>
                <button className="cancel" onClick={this.cancel}>キャンセル</button>
                <button className="save" disabled={this.state.user.name.length === 0 || this.state.user.name.length >= 15} onClick={this.save}>保存する</button>
              </>
            )}
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(Settings);