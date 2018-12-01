import * as React from "react";
import db from "../../lib/db";

export default class Clear extends React.Component {
  componentDidMount() {
    db.clear();
    location.href = "/";
  }

  render() {
    return <h1>ユーザーを削除しました。ページ遷移します。</h1>
  }
}