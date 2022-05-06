import React, {Component} from "react";
import CapsulesService from "../../services/CapsulesService";
import '../../css/index.css'
import Header from "../home/Header";


class ViewOneCapsule extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            capsule: {},
            capsuleId: '',
            reuseCount: '',
            waterLandings: '',
            landLandings: '',
            lastUpdate: ''
        }
    }

    componentDidMount() {
        CapsulesService.getCapsulesById(this.state.id).then(response => {
            this.setState({capsule: response.data});
        })
    }

    

    render() {
        return (
            <div className="header">
                <Header />
                <br />
                <center>
                    <h2 className="text-center">Capsule </h2>
                    
                </center>
                <table className="table">
                    <thead>
                        <tr className="tab-name">
                            <td>Last Update</td>
                            <td>Land Landings</td>
                            <td>Water Landings</td>
                            <td>Reuse count</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           <tr>
                                    <td>{this.state.lastUpdate}</td>
                                    <td>{this.state.landLandings}</td>
                                    <td>{this.state.waterLandings}</td>
                                    <td>{this.state.reuseCount}</td>
                                </tr>
    }
                        
                    </tbody>
                </table>

            </div>



        )
    }
}



export default ViewOneCapsule;