import * as React from "react";

interface Props {
  in: boolean;
  onCloseMenu: () => void;
}

const EditView: React.SFC<Props> = (props) => {
  return (
    <>
      <div className={props.in ? 'shadow active' : 'shadow'} onClick={props.onCloseMenu}></div>
      <div className={props.in ? 'edit-view-container active' : 'edit-view-container'}>

        <ul className="service-list">
          <li>
            <div className="img">
              <img src="https://cloud.google.com/images/products/logos/compute-engine-symbol.png" alt=""/>
            </div>
            <p>サーバーを選択</p>
          </li>
          <li>
            <div className="img">
              <img src="https://cloud.google.com/images/products/logos/storage-symbol.png" alt=""/>
            </div>
            <p>ストレージを選択</p>
          </li>
          <li>
            <div className="img">
              <img src="https://cloud.google.com/images/products/logos/bigquery-symbol.png" alt=""/>
            </div>
            <p>演算を選択</p>
          </li>
          <li>
            <div className="img">
              <img src="https://cloud.google.com/images/products/logos/machine-learning-grey.png" alt=""/>
            </div>
            <p>人工知能・AIを選択</p>
          </li>
        </ul>

        <div className="actions">
          <button className="cancel" onClick={props.onCloseMenu}>キャンセル</button>
        </div>
      </div>
    </>
  );
}

export default EditView;