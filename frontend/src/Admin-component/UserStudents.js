import React,{Component} from 'react';
import {
    faPlus,
    faEdit,
    faTrash,
  } from "@fortawesome/free-solid-svg-icons";
  import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from 'axios';
import {Redirect} from 'react-router';
import Tooltip from "@material-ui/core/Tooltip";

export default class Students extends Component{
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.state = {
            redirect: false,
            val:1
        }
    }
    delete(e) {
        if(window.confirm('Are you sure you want to DELETE?'))
        {
            fetch("http://localhost:80/Admin-backend/userstudentDelete.php?id="+this.props.obj.id,
            {
                method:'DELETE',
                header:{'Accept':'application/json',
                'Content-Type':'application/json'
                }
            })
            .then(res=>alert("Sucessfully Deleted!"))
            .catch(err=>console.log(err))
        }
        this.setState({redirect : true});
    }
    render(){
        const {redirect} = this.state;
        if(redirect){
            return <Redirect to={"/user-student"}/>
        }
        if(this.props.obj.Branch==="CIVIL" || this.props.obj.Branch==="Civil" || this.props.obj.Branch==="EEE"){
            return(
            <tr>
                <td>{this.props.obj.id}</td>
                <td align="left">{this.props.obj.fname} {this.props.obj.mname} {this.props.obj.lname}</td>
                <td>{this.props.obj.Branch}</td>
                <td>{this.props.obj.Branch}</td>
                <td>{this.props.obj.YOP}</td>
                <td>{this.props.obj.Faculty_Coordinator}</td>
                <td>
                    <Tooltip title="Delete" placement="right">
                        <FontAwesomeIcon icon={faTrash} onClick={this.delete} className="ml-2 p-1" style={{backgroundColor:'#2A324B',color:'white',fontSize:'20',borderRadius:'10'}}/>
                    </Tooltip>
                </td>
            </tr>
            );
        }
        else{
            return(
                <tr>
                    <td>{this.props.obj.id}</td>
                    <td align="left">{this.props.obj.fname} {this.props.obj.mname} {this.props.obj.lname}</td>
                    <td>{this.props.obj.Branch.slice(0,3)}</td>
                    <td>{this.props.obj.Branch.slice(3,5)}</td>
                    <td>{this.props.obj.YOP}</td>
                    <td>{this.props.obj.Faculty_Coordinator}</td>
                    <td>
                    <Tooltip title="Delete" placement="right">
                        <Link><FontAwesomeIcon icon={faTrash} onClick={this.delete} className="ml-2 p-1" style={{backgroundColor:'#2A324B',color:'white',fontSize:'20',borderRadius:'10'}}/></Link>
                    </Tooltip>
                </td>
                </tr>
            );
        }
    }
}