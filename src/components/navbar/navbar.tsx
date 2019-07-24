import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import logo from "../../download.png";
import "./navbar.css";
interface IProps {}
interface IState {}
class Navs extends React.Component<IProps, IState> {
  render() {
    console.log(this.props);

    return (
      <div>
        <div className="header">
          <div className="row">
            <div className="col-4">
              <img src={logo} alt="Italian Trulli" />
            </div>
            <div className="col-6 data">Car Parking Slots</div>
            <div className="col-2">
              <NavLink to="/admin">Admin</NavLink>
              <NavLink to="/employee">Employee</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navs;
