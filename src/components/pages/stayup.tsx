import * as React from "react";
import { Link } from "react-router-dom";
import { TweenMax, Power3 } from "gsap";
import EditView from "../modules/EditView";

interface IState {
  amount: number;
  menuIn: boolean;
}

export default class Stayup extends React.Component<any, IState> {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      menuIn: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      const from = 0;
      const to = 99000;
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
    }, 1000)
  }

  onCloseMenu = () => {
    this.setState({
      menuIn: false
    })
  }

  render() {
    return (
      <div className="stayup-container">

        <div className="head-content">
          <div className="names">
            <p className="name">オタクくん</p>
            <p className="nellow-id">ID: asfoi</p>
          </div>
          <div className="icon">
            <img src="https://pbs.twimg.com/profile_images/1021820533946499072/bfHxPQ39_400x400.jpg" alt=""/>
          </div>
        </div>

        <div className="main-content">
          <p className="amount-title">残高</p>
          <p className="amount" id="amount" data-from={0} data-to={10000}>¥<span>{this.state.amount.toLocaleString()}</span></p>
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

        <EditView onCloseMenu={this.onCloseMenu} in={this.state.menuIn}/>
      </div>
    )
  }
}