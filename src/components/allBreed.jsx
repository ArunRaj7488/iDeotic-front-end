import React from "react";
import {ListGroup, Button}  from "react-bootstrap"
import axios from "axios";
import {Link} from "react-router-dom";

export default class AllBreeds extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data:[]
        }
    }
    async componentWillMount(){
        const {data} = await axios.get("https://dog.ceo/api/breeds/list/all");
        this.setState({data: Object.keys(data.message)})
    }
    handleClick = (item)=>{
        // alert(item);
        // <Link to="/">Home</Link>
        window.location.pathname="/img/"+item;
    }
    //for logout
    handleLogout = () =>{
        document.cookie="isLogin=";
        //alert(document.cookie);
        window.location.pathname='/'
    }
    render(){
        return (
            <div>
                <h1>All Breeds</h1>
                <a className="btn btn-danger m-2" onClick={()=>this.handleLogout()}>logout</a>

                <ListGroup>    
                    {this.state.data.map((item, i)=><ListGroup.Item key={i} onClick={()=>this.handleClick(item)}>{item}</ListGroup.Item>)}
                </ListGroup>
            </div>
        )
    }

}