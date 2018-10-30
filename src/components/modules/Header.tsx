import * as React from "react";

interface Props {
  status: boolean;
}

const Header: React.StatelessComponent<Props> = ({ status }) => (
  <header className={status ? 'header-sleep' : 'header-stayup'}>
    <h1>nellow</h1>
  </header>
);

export default Header;