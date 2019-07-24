import React from "react";
import './admin.css'
import { connect } from 'react-redux'
interface IState {
    count: any;
}
interface IProps {
    history: any;
    slots: any;
    modifyslots: Function;
}
class admin extends React.Component<IProps, IState> {
    slots: any;
    count: any;
    constructor(props: IProps) {
        super(props);
        this.state = ({
            count: 10
        })
        console.log(this.props.slots.slots.length);
    }
    componentWillMount() {
        console.log(this.props);
        this.slots = this.props.slots.slots
    }
    render() {

        let classes: any = "col-1 carslot";
        let notclasses: string = 'col-1 carslot booked';
        let slotarr: any[] = this.slots.map((obj: any) => {

            if (obj.slotavailable) {
                return (<div className={classes} key={obj.id} id={obj.id} onClick={e => this.onclick(e)}>{obj.slotnumber}
                </div>)
            }
            else {
                return (<div className={notclasses} key={obj.id} id={obj.id} onClick={e => this.onclick(e)}>{obj.slotnumber}
                </div>)
            }

        })


        return (
            <div><div className="row">
                {slotarr}
            </div>
                <strong>{this.state.count}</strong>
                <button onClick={this.changeroute}>admin</button>
            </div>

        );


    }
    changeroute = () => {
        this.props.history.push('/employee')
    }
    onclick(eve: any) {
        this.props.modifyslots(eve.target.id);
        let counts = this.state.count
        if (eve.currentTarget.className === "col-1 carslot") {
            this.setState({
                count: counts - 1
            })

            eve.currentTarget.className = "col-1 carslot booked"
        } else {

            this.setState({
                count: counts + 1
            })
            eve.currentTarget.className = "col-1 carslot"
        }

    }
}
const mapstate = (state: any) => {
    return {
        slots: state
    }
}
const propsfunct = (dispatch: any) => {

    return {
        modifyslots: (id: any) => {
            dispatch({ type: "modifyslot", id: id });
        }
    }
}
export default connect(mapstate, propsfunct)(admin)
/// api call


// interface IState{
//     error:any;
//     isLoaded:boolean;
//     items:any;

// }
// interface IProps{

// }

// export class MyComponent extends React.Component<IProps, IState> {
//     constructor(props:any) {
//       super(props);
//       this.state = {
//         error: null,
//         isLoaded: false,
//         items: []
//       };
//     }

//     componentDidMount() {
//       fetch("http://127.0.0.1:3000/parking")
//         .then(res => res.json())
//         .then(
//           (result) => {
//             this.setState({
//               isLoaded: true,
//               items: result.items
//             });
//           },
//           (error) => {
//             this.setState({
//               isLoaded: true,
//               error
//             });
//           }
//         )
//     }

//     render() {
//       const { error, isLoaded, items } = this.state;
//       if (error) {
//         return <div>Error: {error.message}</div>;
//       } else if (!isLoaded) {
//         return <div>Loading...</div>;
//       } else {
//         return (
//           <ul>
//             {items.map((item:any) => (
//               <li key={item.name}>
//                 {item.name} {item.price}
//               </li>
//             ))}
//           </ul>
//         );
//       }
//     }
//   }