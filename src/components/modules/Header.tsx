import * as React from "react";

interface Props {
  status: boolean;
  isShowBackButton: boolean;
}

const browserBack = () => {
  history.back();
}

const Header: React.StatelessComponent<Props> = ({ status, isShowBackButton }) => {
  return (
    <header className={status ? 'header-sleep' : 'header-stayup'}>
      {isShowBackButton ? (
        <div className="back-button" onClick={browserBack}>
          <i className="fas fa-angle-left" />
        </div>
      ) : null}
      <h1>nellow</h1>
    </header>
  );
}

export default Header;