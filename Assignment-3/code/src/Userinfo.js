import React from "react";

class Userinfo extends React.Component {
    render() {
        return (
            <div>
                <div id="first">
                    <div id="name">{this.props.data.name}</div><br></br>
                    <div id="employeeid">{this.props.data.EmployeeId}</div>
                    <button id="btn">Print</button>
                    <br></br>
                </div>
                <br></br>
                <div className="customer-info">
                    <div><b>Appointment on</b> {this.props.data.Appointment}</div>
                    <div><b>Email:</b> {this.props.data.Email}</div>
                    <div><b>Phone:</b> {this.props.data.Phone}</div>
                    <br></br>

                </div>
                <br></br>
                <div className="order-info">
                    {/* <div id="status">Status</div><br></br>
                   <span>{this.props.data.status}</span>
                   <div id="Door">Door</div><br></br>
                   <span>{this.props.data.Door}</span>
                   <div id="Time">Time</div><br></br>
                   <span>{this.props.data.Time}</span> */}
                    <table id="tbl">
                        <br></br>
                        <tr>
                            <th>Status</th>
                            <th>Door</th>
                            <th>Time</th></tr>
                        <tr id="tr">
                            <td>{this.props.data.status}</td>
                            <td>{this.props.data.Door}</td>
                            <td>{this.props.data.Time}</td>
                        </tr>
                    </table>


                </div>
                <br></br>
                <div className="product-list">

                    <img src="https://www.w3schools.com/howto/img_avatar.png" id="pic" width={150} alt="employee" />
                    <div>
                        <div id="test"><b>Boltart Bosemman</b></div>
                        <div>oljematert Boltart will de ven the Bosemman</div>
                    </div>


                </div>

            </div>

        )
    }
}
export default Userinfo;