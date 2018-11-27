import * as React from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3 } from "gsap";
import EditView from "../modules/EditView";
import { withRouter } from "react-router-dom";
import Header from "../modules/Header";
import db from "../../lib/db";
import { User } from "../../model/type";
import http from "../../api/http";

interface IState {
  amount: number;
  menuIn: boolean;
  user: User;
}

interface IProps {
  history;
}

class Stayup extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
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
    setTimeout(() => {
      const from = 0;
      const to = 0;
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
    }, 1000);
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
  }

  selectService = (service_id) => async () => {
    const { user } = this.state;
    const res = await http.patchUserInfo(user.id, user.name, service_id);
    db.setUser(res.data);
    this.setState({ user: res.data });
    this.onCloseMenu();
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

                <div className="twitter-share disabled">
                  <div className="icon-wrapper">
                    <i className="fab fa-twitter" style={{ fontSize: "16px" }} />
                  </div>
                  <p>シェア</p>
                </div>
              </div>
            </div>
          </div>

          <EditView onCloseMenu={this.onCloseMenu} in={this.state.menuIn} selectService={this.selectService} currentService={user.providing_destination.id} />
        </div>
      </>
    )
  }
}

export default withRouter(Stayup);