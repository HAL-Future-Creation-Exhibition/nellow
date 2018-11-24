import * as React from "react";

interface Props {
  isShowBackButton: boolean;
  to;
}

const Header: React.StatelessComponent<Props> = ({ isShowBackButton, to }) => {
  return (
    <header className={isShowBackButton ? 'header-sleep' : 'header-stayup'}>
      {isShowBackButton ? (
        <div className="back-button" onClick={() => to("/")}>
          <i className="fas fa-angle-left" />
        </div>
      ) : null}
      <h1>nellow</h1>
    </header>
  );
}

export default Header;