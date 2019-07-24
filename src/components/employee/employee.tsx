import React from "react";
import { connect } from "react-redux";
interface IProps {
  // posts:any
  // afunction: Function;
  slots: any;
}
interface IState {
  count: any;
}
class Employee extends React.Component<IProps, IState> {
  state = {
    count: 0
  };
  slotdata: any;
  constructor(props: any) {
    super(props);
  }

  componentWillReceiveProps(nextProps: IProps) {
    console.log(nextProps);
  }
  componentWillMount() {
    console.log("Hi");
    this.slotdata = this.props.slots.slots;
  }
  render() {
    let count = 0;
    var classes: string = "col-1 carslot";
    var notclasses: string = "col-1 carslot booked";
    console.log(this.props);
    var data = this.slotdata.map((element: any) => {
      if (element.slotavailable) {
        count = count + 1;
        return (
          <div className={classes} key={element.id} id={element.id}>
            {element.slotnumber}
          </div>
        );
      } else {
        return (
          <div className={notclasses} key={element.id} id={element.id}>
            {element.slotnumber}
          </div>
        );
      }
    });
    console.log(data);
    return (
      <div>
        <div className="row">{data}</div>
        <strong>{count}</strong>
      </div>
    );
  }
}
const mapstatetoprops = (state: any) => {
  return {
    slots: state
  };
};
// const mapdispatchtoprops = (dispatch: any) => {
//   return {
//     afunction: () => {
//       dispatch({
//         type: ""
//       });
//     }
//   };
// };

export default connect(
  mapstatetoprops
  // mapdispatchtoprops
)(Employee);

// servercall() {
//     fetch("http://localhost:3000/slots")
//         .then(res => res.json())
//         .then(
//             (result) => {
//                 this.setState({

//                     data: result.date
//                 });
//             },
//             (error) => {
//                 this.setState({

//                     error
//                 });
//             }
//         )

// }
