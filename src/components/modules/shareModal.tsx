import * as React from "react";

interface Props {
  onCloseMenu: () => void;
  in: boolean;
  image: string;
}

export default class ShareModal extends React.Component<Props> {

  getShareLink = (): string => {
    const text = "nellowの公式ユーザーになったよ！"
    const hashtags = "未来創造展,HAL大阪,nellow"
    return `https://twitter.com/share?text=${text}&hashtags=${hashtags}`
  }
  render() {
    return (
      <div className={this.props.in ? 'share-modal-container active' : 'share-modal-container'}>
        <div className="share-container">

          <h1>OFFICIAL NELLER</h1>
          {this.props.image === "" ? (
            <p>画像を生成中...</p>
          ) : (
            <div className="img">
              <img src={this.props.image} alt="neller 認定証"/>
            </div>
          )}

          <p>
            上の画像を長押しして保存してね！<br/>
            Twitterに画像をシェアしちゃおう！
          </p>

          <div className="actions">
            <a href={this.getShareLink()} target="_blank" >シェアする</a>
            <button className="cancel" onClick={this.props.onCloseMenu}>キャンセル</button>
          </div>
        </div>
      </div>
    )
  }
}