import * as React from "react";
import { connect } from "react-redux";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";
import "url-search-params-polyfill";

import BasketSummary from "./BasketSummary";
import { IApplicationState } from "./store";

import logo from "./logo.svg";

interface IProps extends RouteComponentProps {
  title: string;
  basketCount: number;
}

const Header: React.FunctionComponent<IProps> = props => {
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    const searchParams = new URLSearchParams(props.location.search);
    setSearch(searchParams.get("search") || "");
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const handleSearchKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      props.history.push(`/products?search=${search}`);
    }
  };

  return (
    <header className="header">
      <div className="search-container">
        <input
          type="search"
          placeholder="search"
          value={search}
          onChange={handleSearchChange}
          onKeyDown={handleSearchKeydown}
        />
        <BasketSummary count={props.basketCount} />
      </div>
      <img src={logo} className="header-logo" alt="logo" />
      <h1 className="header-title">{props.title}</h1>
      <nav>
        <NavLink
          to="/products"
          className="header-link"
          activeClassName="header-link-active"
        >
          Products
        </NavLink>
        <NavLink
          to="/contactus"
          className="header-link"
          activeClassName="header-link-active"
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/admin"
          className="header-link"
          activeClassName="header-link-active"
        >
          Admin
        </NavLink>
      </nav>
    </header>
  );
};

const mapStateToProps = (store: IApplicationState) => {
  return {
    basketCount: store.basket.products.length
  };
};

export default connect(mapStateToProps)(withRouter(Header));
