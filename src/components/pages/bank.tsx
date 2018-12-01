import * as React from "react";
import { withRouter } from "react-router-dom";
const BANK_INFO_STORAGE_KEY = "_bNkINfo"
import Header from "../modules/Header";
import db from "../../lib/db";
import { User } from "../../model/type";

interface IState {
  bank: {
    name: string;
    type: string;
    code: string;
    number: string;
    name_first: string;
    name_last: string;
  }
  user: User;
}

interface IProps {
  history;
}

class Bank extends React.Component<IProps, IState> {

  constructor(props) {
    super(props);
    const defaultValue = {
      name: "",
      type: "普通",
      code: "",
      number: "",
      name_first: "",
      name_last: ""
    };
    const bank = JSON.parse(localStorage.getItem(BANK_INFO_STORAGE_KEY)) || defaultValue;

    this.state = {
      bank,
      user: db.getUser()
    }
  }

  public update = (key: string) => (e) => {
    const { bank } = this.state;
    bank[key] = e.target.value;
    this.setState({ bank });
  }

  public save = () => {
    const { bank } = this.state;
    localStorage.setItem(BANK_INFO_STORAGE_KEY, JSON.stringify(bank));
    this.props.history.push("/");
  }

  public render() {
    return (
      <>
        <Header isShowBackButton={location.pathname !== "/"} to={this.props.history.push} />
        <div className="bank-container">

          <div className="main-content">
            <p className="amount-title">残高</p>
            <p className="amount">¥<span>{this.state.user.amount.toLocaleString()}</span></p>
            <p className="description">
              貢献して得たお金は月末に確定し<br/>
              売り上げとして反映されます。
            </p>
          </div>

          <button className="withdraw" disabled>引き出す</button>

          <div className="bank-setting">
            <ul>
              <li>
                <p>銀行</p>
                <input type="text" placeholder="○○銀行"  value={this.state.bank.name} onChange={this.update("name")}/>
              </li>
              <li>
                <p>口座種別</p>
                <input type="text" placeholder="普通" value={this.state.bank.type} onChange={this.update("type")} />
              </li>
              <li>
                <p>支店コード</p>
                <input type="number" placeholder="001" value={this.state.bank.code} onChange={this.update("code")} max="3" />
              </li>
              <li>
                <p>口座番号</p>
                <input type="number" placeholder="00000000" value={this.state.bank.number} onChange={this.update("number")}/>
              </li>
            </ul>
            <ul>
              <li>
                <p>口座名義（セイ）</p>
                <input type="text" placeholder="タナカ" value={this.state.bank.name_first} onChange={this.update("name_first")}/>
              </li>
              <li>
                <p>口座名義（メイ）</p>
                <input type="text" placeholder="タロウ" value={this.state.bank.name_last} onChange={this.update("name_last")}/>
              </li>
            </ul>
          </div>

          <button className="save" onClick={this.save}>決定</button>

        </div>
      </>
    )
  }
}

export default withRouter(Bank);