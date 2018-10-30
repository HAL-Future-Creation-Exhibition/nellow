import * as React from "react";

export default class Stayup extends React.Component {
  render() {
    return (
      <div className="stayup-container">

        <div className="head-content">
          <div className="names">
            <p className="name">Junya Kono</p>
            <p className="nellow-id">ID: asfoi</p>
          </div>
          <div className="icon">
            <img src="https://pbs.twimg.com/profile_images/1021820533946499072/bfHxPQ39_400x400.jpg" alt=""/>
          </div>
        </div>

        <div className="main-content">
          <p className="amount-title">残高</p>
          <p className="amount">¥<span>9,000</span></p>
          <p className="description">
            貢献して得たお金は月末に確定し<br/>
            売り上げとして反映されます。
          </p>

          <div className="setting-content">

            <div className="sales-manage" onClick={() => alert("saf")}>
              <div className="icon-wrapper">
                <i className="icon ion-logo-yen" />
              </div>
              <p>講座振込</p>
            </div>

            <div className="other-manage">
              <div className="icon-wrapper">
                <i className="icon ion-ios-list" />
              </div>
              <p>サービス</p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}