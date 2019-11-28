import React, {Component} from "react";
import {Form, Button} from "react-bootstrap";
import axios from "axios"
import {Redirect} from "react-router-dom";
import "../style/regForm.css";

export default class Registration extends Component {
    

    constructor(props){
        super(props);
        this.state = { 
            email:"",
            password:"",
            name:""
        };
    }
    
    handleChange = (e)=>{
        if(e.currentTarget.name == "email") this.setState({email:e.currentTarget.value});
        if(e.currentTarget.name == "password") this.setState({password:e.currentTarget.value})
        if(e.currentTarget.name == "name") this.setState({name:e.currentTarget.value})
    
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("https://arun-auth.herokuapp.com/api/registration", {
            email: this.state.email,
            password:this.state.password,
            name:this.state.password
        },
        {
         headers: {
                'Access-Control-Allow-Origin': "*",   
                'Content-Type': 'application/json',
            }
          }
        ).then(res=>{
            console.log(res);
            window.location.pathname = "/"
        }).catch(err=>{
            alert(err);
            console.log(err);
        })
        console.log({
                email: this.state.email,
                password:this.state.password,
                name:this.state.password
            })
    

    }
    
    render(){
        
        return (
            <div  className="rgs-style" >
                <div className="reg-bg" >
                <h1>Registration Form</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" onChange={(e)=>this.handleChange(e)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Enter Name"  onChange={(e)=>this.handleChange(e)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password"  onChange={(e)=>this.handleChange(e)} />
                    </Form.Group>

                    <Button variant="danger" className="m-2" type="submit" onClick={(e)=>this.handleSubmit(e)}>Create Account</Button>
                    <Button variant="dark" onClick={(e)=>window.location.pathname = "/"}>Login</Button>
                
                </Form>
            </div>
            </div>
        )
    }

}