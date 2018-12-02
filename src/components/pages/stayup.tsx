import * as React from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3 } from "gsap";
import EditView from "../modules/EditView";
import { withRouter } from "react-router-dom";
import Header from "../modules/Header";
import db from "../../lib/db";
import { User } from "../../model/type";
import http from "../../api/http";
import ShareModal from "../modules/shareModal";
import * as io from "socket.io-client";

interface IState {
  amount: number;
  menuIn: boolean;
  user: User;
  isModalShow: boolean;
  shareImage: string;
}

interface IProps {
  history;
}

class Stayup extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      shareImage: "",
      isModalShow: false,
      amount: 0,
      menuIn: false,
      user: db.getUser()
    }
  }

  componentWillMount() {
    if(!this.state.user) {
      location.href = "/user/create";
    }
  }

  componentDidMount() {
    this.getUserInfo();

    const socket = io.connect("https://socket.patra.store", {
      transports: ["websocket"]
    });
    socket.on("nellow_wakeup", (res) => {
      console.log("nellow_wakeup")
      const response = JSON.parse(res);
      console.log(response.user.is_nellow)
      console.log(db.getUser().is_nellow);
      if(response.user.is_nellow && db.getUser().is_nellow) {
        this.getUserInfo();
      }
    })
  }

  onCloseMenu = () => {
    this.setState({
      menuIn: false
    })
  }

  getUserInfo = async () => {
    const { id } = this.state.user
    const res = await http.getUser(id);
    db.setUser(res.data);
    this.setState({ user: res.data });
    setTimeout(() => {
      const from = 0;
      const to = res.data.amount;
      let obj = {
        amount: from
      }

      TweenMax.to(obj, 3, {
        amount: to,
        ease: Power3.easeInOut,
        onUpdate: () => {
          this.setState({
            amount: Math.floor(obj.amount)
          })
        }
      })
    }, 200);
  }

  selectService = (service_id) => async () => {
    const { user } = this.state;
    const res = await http.patchUserInfo(user.id, user.name, service_id);
    db.setUser(res.data);
    this.setState({ user: res.data });
    this.onCloseMenu();
  }

  onTwitterShare = async () => {
    const { user } = this.state;
    this.onModalOpen();
    const res = await http.postTwitter(user.id, user.name, user.icon);
    this.setState({
      shareImage: res.data.url
    })
  }

  onModalOpen = () => {
    this.setState({ isModalShow: true })
  }
  onModalClose = () => {
    this.setState({ isModalShow: false })
  }

  render() {
    const { user } = this.state
    return (
      <>
        <Header isShowBackButton={location.pathname !== "/"} to={this.props.history.push} />
        <div className="stayup-container">

          <div className="head-content">
            <div className="names">
              <p className="name">{user.name}</p>
              <p className="nellow-id">ID: {user.id.slice(0, 8)}</p>
            </div>
            <div className="icon" style={{ backgroundImage: `url(${user.icon})` }} />
          </div>

          <div className="main-content">
            <p className="amount-title">残高</p>
            <p className="amount" id="amount">¥<span>{this.state.amount.toLocaleString()}</span></p>
            <p className="description">
              貢献して得たお金は月末に確定し<br/>
              売り上げとして反映されます。
            </p>

            <div className="setting-content">

              <div className="setting-top-contaienr">
                <div className="sales-manage">
                  <Link to="/bank" style={{ width: "100%", textDecoration: "none", color: "black", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div className="icon-wrapper">
                      <i className="fas fa-yen-sign" />
                    </div>
                    <p>口座振込</p>
                  </Link>
                </div>

                <div className="other-manage" onClick={() => this.setState({ menuIn: true })}>
                  <div className="icon-wrapper">
                    <i className="fas fa-list" style={{ fontSize: "16px" }} />
                  </div>
                  <p>サービス</p>
                </div>
              </div>

              <div className="setting-bottom-contaienr">
                <div className="user-manage">
                  <Link to="/settings" style={{ width: "100%", textDecoration: "none", color: "black", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div className="icon-wrapper">
                      <i className="fas fa-cog" />
                    </div>
                    <p>設定</p>
                  </Link>
                </div>

                <div className="twitter-share" onClick={this.onTwitterShare}>
                  <div className="icon-wrapper">
                    <i className="fab fa-twitter" style={{ fontSize: "16px" }} />
                  </div>
                  <p>シェア</p>
                </div>
              </div>
            </div>
          </div>

          <EditView onCloseMenu={this.onCloseMenu} in={this.state.menuIn} selectService={this.selectService} currentService={user.providing_destination.id} />
          <ShareModal onCloseMenu={this.onModalClose} in={this.state.isModalShow} image={this.state.shareImage} />
        </div>
      </>
    )
  }
}

export default withRouter(Stayup);