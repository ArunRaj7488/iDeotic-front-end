import React from "react";
import {ListGroup, Button}  from "react-bootstrap"
import axios from "axios";
import {Link} from "react-router-dom";
import "../style/allBreads.css";

export default class AllBreeds extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data:[]
        }
        if(document.cookie.length<8){
            document.location.pathname="/"
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
                <div className="allBreads-bg">  
                    <div className="container">
                        <div className="allBreads-dis">            
                            <h1 style={{color:"#fff"}}>All Breeds</h1>            
                            <a style={{color:"#fff", cursor:"pointer"}} className="btn btn-danger m-2" onClick={()=>this.handleLogout()}>logout</a>
                        </div>
                        <ListGroup className="m-2">    
                            {this.state.data.map((item, i)=><ListGroup.Item 
                            className="list-item"
                            style={{
                                cursor:"pointer"
                            }}                                                                                                      
                            key={i} onClick={()=>this.handleClick(item)}>{item}</ListGroup.Item>)}
                        </ListGroup>
                                                                                    
                    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                </div>
        )
    }

}