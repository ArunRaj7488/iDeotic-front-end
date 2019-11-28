import React from "react";
import { Image, Button } from "react-bootstrap";
import Axios from "axios";
import "../style/imageView.css"

export  default class ImageView extends React.Component{
 
    constructor(props){
        super(props);
        this.state={
            cat:"",
            url:""
        }
    }
    componentDidMount() {
        const path = window.location.pathname;
        const cat = path.split("/")[2];
        let url = "";
        Axios.get(`https://dog.ceo/api/breed/${cat}/images/random`).then(data=>{
            url = data.data.message;
            // console.log(data)
            this.setState({url, cat})
        });
    }

    render() {
        return(
            <div className="img-bg">
                <div className="img-dis">
                <h1 style={{textAlign:"center"}}>{this.state.cat.toUpperCase()}</h1>
                <Image src={this.state.url}  className="img-src" alt="IMG" />
            </div>
            <Button variant="danger" onClick={(e)=>window.location.pathname = "/all"}>Back</Button>
            </div>
        ) 
    }
}