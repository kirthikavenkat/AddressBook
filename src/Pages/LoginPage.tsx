import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Main_container,
  Input_text,
  Addressbkimg,
  Title_container,
  Button,
  H1,
  Image,
  Warning,
  Inputcontainer,
  Inputcontainer1,
  H2,
  Buttoncontainer,
} from "./LoginPage.style";
import address_book_1 from "../../Assets/address_book_1.png";
import email from "../../Assets/email-svgrepo-com.svg";
import password from "../../Assets/password-svgrepo-com.svg";

const Login = () => {
  /*Sign in*/
  const signin = () => {
    const email = document.getElementById("email") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;
    const warning = document.getElementById("warning") as HTMLInputElement;
    if (
      email.value === "kirthikavenkat29@gmail.com" &&
      password.value === "kir29"
    ) {
      navigate("/home");
    }
    if (password.value === "" && email.value === "") {
      warning.innerText = "Password is required";
      setMessage("Email is required");
    } else if (password.value === "" && email.value !== "") {
      warning.innerText = "Password is required";
      setMessage("");
    } else if (password.value !== "" && email.value === "") {
      setMessage("Email is required");
      warning.innerText = "";
    } else if (email.value !== "" && password.value !== "") {
      password.style.borderColor = "red";
      email.style.borderColor = "red";
      setMessage("");
      warning.innerText = "Incorrect Email address or password!!";
    }
  };

  /*Reset function*/
  const reset = () => {
    const email = document.getElementById("email") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;
    email.value = "";
    password.value = "";
  };
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  /*Email validation*/
  const emailRegex = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
  const validateEmail = (event: { target: { value: any } }) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setMessage("");
    } else {
      setMessage("Please enter a valid email");
    }
  };

  return (
    <Container>
      <Title_container>
        <Addressbkimg src={address_book_1} />
        <H1>Address Book</H1>
      </Title_container>

      <Main_container>
        <H2>Login to your account</H2>
        <Inputcontainer1>
          <Image src={email}></Image>
          <Input_text
            id="email"
            placeholder="Email"
            onBlurCapture={validateEmail}
            required
          ></Input_text>
          {message ? <Warning>{message}</Warning> : " "}
        </Inputcontainer1>

        <Inputcontainer>
          <Image src={password}></Image>
          <Input_text
            id="password"
            placeholder="Password"
            type={"password"}
            required
          ></Input_text>
          <Warning id="warning"></Warning>
        </Inputcontainer>

        <Buttoncontainer>
          <Button color="#428bca" onClick={signin}>
            Sign In
          </Button>
          <Button color="#f0ad4e" onClick={reset}>
            Reset
          </Button>
        </Buttoncontainer>
      </Main_container>

      <Link
        to="/forgot"
        style={{ position: "relative", right: "-140px", top: "20px" }}
      >
        Forgot Password?
      </Link>
    </Container>
  );
};
export default Login;
