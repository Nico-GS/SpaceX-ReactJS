import { Component } from "react";
import CapsulesService from "../../services/CapsulesService";
import '../../css/index.css'
import Header from "../home/Header";


class ViewCapsules extends Component {

    constructor(props) {
        super(props);

        this.state = {
            capsules: []
        }
    }

    componentDidMount() {
        CapsulesService.getCapsules().then((reponse) => {
            this.setState({ capsules: reponse.data });
        })
    }

    render() {
        return (
            <div className="header">
                <Header />
                <br />
                <center>
                    <h2 className="text-center">List Capsules</h2>
                </center>
                <table className="table">
                    <thead>
                        <tr className="tab-name">
                            <td>Serial</td>
                            <td>Status</td>
                            <td>Type</td>
                            <td>Launches</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.capsules.map(capsule =>
                                <tr key={capsule.id}>
                                    <td>{capsule.serial}</td>
                                    <td>{capsule.status}</td>
                                    <td>{capsule.type}</td>
                                    <td>{capsule.launches}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>



        )
    }
}



export default ViewCapsules;