import * as React from "react";

interface IProps {
  backButtonHandler: (show: boolean) => void;
}

export default class Bank extends React.Component<IProps> {

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
      <div className="bank-container">

        <div className="main-content">
          <p className="amount-title">残高</p>
          <p className="amount">¥<span>9,000</span></p>
          <p className="description">
            貢献して得たお金は月末に確定し<br/>
            売り上げとして反映されます。
          </p>
        </div>

        <button className="withdraw">引き出す</button>

        <div className="bank-setting">
          <ul>
            <li>
              <p>銀行</p>
              <input type="text" placeholder="○○銀行"/>
            </li>
            <li>
              <p>口座種別</p>
              <input type="text" value="普通"/>
            </li>
            <li>
              <p>支店コード</p>
              <input type="number" placeholder="001"/>
            </li>
            <li>
              <p>口座番号</p>
              <input type="number" placeholder="00000000"/>
            </li>
          </ul>
          <ul>
            <li>
              <p>口座名義（セイ）</p>
              <input type="text" placeholder="タナカ"/>
            </li>
            <li>
              <p>口座名義（メイ）</p>
              <input type="text" placeholder="タロウ"/>
            </li>
          </ul>
        </div>

        <button className="save" disabled>決定</button>

      </div>
    )
  }
}