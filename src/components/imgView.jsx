import React from "react";
import { Image } from "react-bootstrap";
import Axios from "axios";

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
            <div className="container">
                <h1>{this.state.cat}</h1>
        {console.log(this.state.url)
    }
                <Image 
                src={this.state.url} fluid/>

                
                
            </div>
        ) 
    }
}