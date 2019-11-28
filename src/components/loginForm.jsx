import React from "react";
import {Form, Button} from "react-bootstrap"
import axios from "axios";
import {Link} from "react-router-dom"
import "../style/loginForms.css"


export default class LoginForm extends React.Component {

    constructor(props){
        super(props);
        this.state = { 
            email:"",
            password:"",
            data:[]
         };
        console.log(`document.cookie`, document.cookie)
        if(document.cookie.length>8){
             document.location.pathname="/all"
        }
    }

    handleChange = (e)=>{
        if(e.currentTarget.name == "email") this.setState({email:e.currentTarget.value});
        if(e.currentTarget.name == "password") this.setState({password:e.currentTarget.value})
    }
    handleSubmit = async (e)=>{
        e.preventDefault();
        axios.post("https://arun-auth.herokuapp.com/api/login", {
            email: this.state.email,
            password:this.state.password,
        },
        {
         headers: {
                'Access-Control-Allow-Origin': "*",
                'Content-Type': 'application/json',
            }
          }
        ).then(res=>{
            console.log(res.data);

            if(res.data.status){
                document.cookie = "isLogin=true";
                window.location.pathname = "/all"
                
            }else{
                alert("error")
            }
        }).catch(err=>{
            console.log(err);
            alert("User not found")
        })
       
    }

    render(){
        const { formTitle } = this.props;
        return (
            <div className="log-dis"> 
                <div className="log-bg">
                  <h1>Login Form</h1>
                   <h1>{formTitle}</h1>
                   <Form >
                     <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" onChange={(e)=>this.handleChange(e)} />
                     </Form.Group>

                     <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password"  onChange={(e)=>this.handleChange(e)} />
                     </Form.Group>

                   <Button variant="danger" type="submit" onClick={(e)=>this.handleSubmit(e)}>Submit</Button>
                    <a className="btn btn-dark m-2" href="/signup">signup</a>
                </Form>
                </div>    
            </div>
        )
    }
}