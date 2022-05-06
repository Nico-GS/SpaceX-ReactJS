import { Component } from "react";
import LaunchService from "../../services/LaunchService";
import '../../css/index.css'
import Header from "../home/Header";


class ViewLaunches extends Component {

    constructor(props) {
        super(props);

        this.state = {
            launches: []
        }
    }

    componentDidMount() {
        LaunchService.getLaunches().then((response) => {
            this.setState({ launches: response.data });
        })
    }

    render() {
        return (
            <div className="header">
                <Header />
                <br />
                <center>
                    <h2 className="text-center">List Launches</h2>
                </center>
                <table className="table">
                    <thead>
                        <tr className="tab-name">
                            <td>Name</td>
                            <td>Flight Number</td>
                            <td>Capsules</td>
                            <td>Details</td>
                            <td>Date UTC</td>
                            <td>Success</td>
                            <td>Static Fire Date UTCs</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.launches.map(launch =>
                                <tr key={launch.id}>
                                    <td>{launch.name}</td>
                                    <td>{launch.flight_number}</td>
                                    <td>{launch.capsules}</td>
                                    <td>{launch.details}</td>
                                    <td>{launch.date_utc}</td>
                                    <td>{launch.success}</td>
                                    <td>{launch.static_fire_date_utc}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        )
    }
}



export default ViewLaunches;