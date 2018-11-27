import * as React from "react";
import OnbordingSlider from "../modules/OnbordingSlider";
import http from "../../api/http";
import db from "../../lib/db";
import { withRouter } from "react-router-dom";
// import * as io from "socket.io-client";

interface Props {
  history;
}

interface State {
  currentView: number;
  name: string;
}

class OnBording extends React.Component<Props, State> {
  private reactSwipe;
  constructor(props) {
    super(props);

    this.state = {
      currentView: 0,
      name: "モモノスケ"
    }
  }

  componentWillMount() {
    if(db.getUser()) {
      location.href = "/";
    }
  }

  // public componentDidMount() {
  //   const socket = io("https://socket.patra.store", {
  //     transports: ["websocket"]
  //   });
  //   socket.on("hoge", (data) => {
  //     console.log(data);
  //   })
  // }
  public setReactSwipe = (reactSwipe) => {
    this.reactSwipe = reactSwipe;
  }

  public onInputChangeHandler = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  public onStartHandler = async () => {
    const res = await http.postCreateUser()
    db.setUser(res.data);
    this.props.history.push("/");
  }

  public onNextHandler = () => {
    this.reactSwipe.next()
    this.setState({
      currentView: this.state.currentView + 1
    })
  }

  public render() {
    return db.getUser() ? null : (
      <div className="guide-container">
        <OnbordingSlider setReactSwipe={this.setReactSwipe}>
          <div className="guide-view">
            <h2>ようこそ、nellowへ！</h2>
            <div className="img">
              <img src="https://images-na.ssl-images-amazon.com/images/I/61rA5FnfGLL._SY355_.jpg" alt=""/>
            </div>
            <p>
              このアプリでnellowと連携して寝ている間を有効活用することができます！<br/>
              まずはあなたのnellowに名前をつけてあげましょう！
            </p>
          </div>
          <div className="guide-view">
            <h2>名前をつけよう</h2>
            <input type="text" value={this.state.name} onChange={this.onInputChangeHandler} placeholder="モモノスケ" />
            <p>
              ニックネームはnellowを<br/>あなただけのものにするために重要なことです！
            </p>
          </div>
          <div className="guide-view">
            <h2>準備は整いました</h2>
            <div className="img" style={{ width: "60%", marginTop: "50px", marginBottom: "50px" }}>
              <img src="https://s3.amazonaws.com/brain-cloud-platform/bcp_logo.png" alt=""/>
            </div>
            <p>
              あなたの仕事は寝るだけです！<br/>
              睡眠を取るだけで世界に役立つ新感覚をぜひ体験してください。
            </p>
          </div>
        </OnbordingSlider>
        {this.state.currentView !== 2 ? (
          <button className="next-button" onClick={this.onNextHandler}>NEXT</button>
        ) : (
          <button className="start-button" onClick={this.onStartHandler}>START</button>
        )}
      </div>
    )
  }
}

export default withRouter(OnBording);