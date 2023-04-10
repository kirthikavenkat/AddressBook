import React, { useState } from "react";
import address_book_1 from "../../Assets/address_book_1.png";
import {
  Button,
  H1,
  Image,
  H2,
  Maintext,
  Title_container,
  Warning,
  Inputcontainer,
  Addressbkimg,
  Input_text,
  Main_container,
  Container,
} from "./ForgotPasswordPage.style";
import email from "../../Assets/email-svgrepo-com.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ForgotPassword = () => {
  /*Validation*/
  const [message, setMessage] = useState("");
  const emailRegex = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
  const validateEmail = (event: { target: { value: any } }) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setMessage(" ");
    } else {
      setMessage("Please enter a valid email!");
    }
  };

  /*Send mail function*/
  const sendEmail = () => {
    const email = (document.getElementById("email") as HTMLInputElement).value;
    if (email === "") {
      setMessage("Email is required!");
    } else if (emailRegex.test(email)) {
      toast.success(
        "Email sent successfully! Please check yout inbox and follow the instructions.",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
    }
  }
  return (
    <Container>
      <Title_container>
        <Addressbkimg src={address_book_1} />
        <H1>Address Book</H1>
      </Title_container>

      <Main_container>
        <H2>Forgot Password?</H2>
        <Maintext>
          <div>
            Enter your email address or username associated to your account.
          </div>
          <div> We will email you a link to reset your password</div>
        </Maintext>

        <Inputcontainer>
          <Image src={email}></Image>
          <Input_text
            placeholder="Email"
            id="email"
            onChange={validateEmail}
          ></Input_text>
          <Warning>{message}</Warning>
          <Warning id="success"></Warning>
        </Inputcontainer>

        <Button color="#428bca" onClick={sendEmail}>
          Send
        </Button>
        <ToastContainer />
      </Main_container>
    </Container>
  );
};
export default ForgotPassword;
