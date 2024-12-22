import React, { useEffect, useState } from 'react';
import { Col, Container,FormGroup,Row,Form, Label, Input, Button } from 'reactstrap';
import LOGO from '../Images/logo-t.jpg';
import { UsersData } from '../ExampleData';
import { LoginValidation } from '../Validations/LoginValidation';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { getUser } from '../Features/UserSlice';
import { useDispatch, useSelector } from 'react-redux';

function Login(){
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let message=useSelector((state)=>state.counter.message);
    let user=useSelector((state)=>state.counter.user);
    let isSuccess=useSelector((state)=>state.counter.isSuccess);
    let isError=useSelector((state)=>state.counter.isError);
    let navigate=useNavigate();
    let dispatch=useDispatch();

    const {
        register,
        handleSubmit:submitForm,
        formState:{errors},
    }=useForm({resolver:yupResolver(LoginValidation)});

    const handleSubmit=()=>{
        const user={password:password,email:email};
        dispatch(getUser(user));
    }
    useEffect(()=>{
        if(user&&isSuccess)
            navigate("/BookStore")
        if(isError)
            navigate("/")
    },[isSuccess,isError,user]);

    return(
        <Container fluid>
           <Row className='div-row'>
            <Col className='div-col' md="6">
                <form className='div-form'>
                    <div className='div-logo'>
                        <img src={LOGO} width="200px" height="100px"/>
                        <h2>Book Library</h2>
    
                    </div>
                    <FormGroup>
                        <h6>Login to book library!</h6>
                       
                        <Label>No Account? 
                            <Link to='/register'> Sign Up Now</Link>
                        </Label>

                        </FormGroup>
                    
                    
                    <FormGroup>
                    <Label for="email">Email</Label>
                        <input 
                            type='email'
                            id="email"
                            className='form-control' 
                            {...register("email",{
                                value:email,
                                value:"abc123@gmail.com",
                                onChange:(e)=>setEmail(e.target.value)
                            })} 
                        />
                        <p className='error'>{errors.email?.message}</p>
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <input 
                            type='password'
                            id="password"  
                            className='form-control' 
                            {...register("password",{
                                value:password,
                                onChange:(e)=>setPassword(e.target.value)
                            })} 
                        />
                        <p className='error'>{errors.password?.message}</p>
                    </FormGroup>
                    <FormGroup>
                        <Input type='checkbox' className='form-control'/>
                        <Label>Remember Me</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>Forgot Password !</Label>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" className='form-control' onClick={submitForm(handleSubmit)}>SIGN IN</Button>
                    </FormGroup>
                    
                </form>
            </Col>
           </Row>
        </Container>
    );
}
export default Login;