import { useState } from "react";
import { userSchemaValidation } from "../Validations/UserValidation";
import { Form,  FormGroup,  Input,  Label,  Button,  Container,  Row,  Col,} from "reactstrap";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {useDispatch,useSelector} from "react-redux";
import { addUser } from "../Features/UserSlice";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [profileURL, setProfileURL] = useState("");
  
  const dispatch=useDispatch();
  const navigate =useNavigate();
  const msg=useSelector((state)=>state.counter.message);
 
  const {
    register,
    handleSubmit: submitForm, //submitForm will be called when the form is submitted
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation), //Associate your Yup validation schema using the resolver
  });

  const handleSubmit = (data) => {
    const user={uname:name,password:password,email:email,pic:profileURL};
    dispatch(addUser(user));
    //if(msg=="User Added..")
     // navigate("/");
  
  };

  return (
    <Container fluid>
      <Row className="div-row">
        <Col className="div-col" lg="6">
          <form className="div-form">
            <div className="appTitle"></div>
            <section className="form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name..."
                  //register this input to the react-hook
                  {...register("name", {
                    value: name,
                    onChange: (e) => setname(e.target.value),
                  })}
                />
              </div>
              <p className="error">{errors.name?.message}</p>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email..."
                  value={email}
                  {...register("email", {
                    value: email,
                    onChange: (e) => setemail(e.target.value),
                  })}
                />
              </div>
              <p className="error">{errors.email?.message}</p>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password..."
                  value={password}
                  //register this input to the react-hook
                  {...register("password", {
                    value: password,
                    onChange: (e) => setpassword(e.target.value),
                  })}
                />
              </div>
              <p className="error">{errors.password?.message}</p>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm your password..."
                  //register this input to the react-hook
                  {...register("confirmPassword", {
                    value: confirmPassword,
                    onChange: (e) => setconfirmPassword(e.target.value),
                  })}
                />
              </div>
              <p className="error">{errors.confirmPassword?.message}</p>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="profileURL"
                  placeholder="Paste Profile Picture URL"
                  onChange={(e) => setProfileURL(e.target.value)}  
                />
                <p></p>
              </div>
              <Button
                color="primary"
                className="form-control"
                onClick={submitForm(handleSubmit)} //Validate first the form data by invoking submitForm, if all is good execute handleSubmit
              >
                REGISTER
              </Button>
              <h5>{msg}</h5>
              <FormGroup>
                        <Label>Already have Account? 
                            <Link to='/login'> Login</Link>
                        </Label>
                    </FormGroup>
            </section>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
