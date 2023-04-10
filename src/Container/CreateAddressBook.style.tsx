import styled from "styled-components";
import { Link } from "react-router-dom";

export const Input_text = styled.input`
  height: 35px;
  width: 80%;
  border: 1px solid gray;
  border-radius: 2px;
  outline: none;
  font-size: medium;
  box-shadow: none;
  margin: 20px;
  &.disabled{
    border:1px solid red;
  }
  &.enabled{
    border:1px solid gray;
  }
  /* background-color:#eeeeee90; */
  @media (max-width: 713px) {
    width: 85%;
  }
`;

export const Select_tag=styled.select`
 height: 35px;
  width: 82%;
  border: 1px solid gray;
  border-radius: 5px;
  outline: none;
  font-size: medium;
  box-shadow: none;
  margin: 20px;
 
  background-color:#eeeeee90;
  @media (max-width: 713px) {
    width: 85%;
  }

`
export const Button = styled.button.attrs((props: { color: string,border:string,width:string }) => props)`
  width: 100px;
  width: ${(props) => props.width};
  height: 35px;
  border: 1px solid rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  color: white;
  font-size: large;
  margin: 20px;
  background-color: ${(props) => props.color};
  border: ${(props) => props.border};
  cursor: pointer;
`;
export const Addressbkimg = styled.img`
  width: 35px;
  height: 35px;
  padding-left: 20px;
`;
export const Title_container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
`;
export const Full_containercreate = styled.div`
  width: 100%;
  align-items: center;
  top:55%;
  /* margin: 0 auto; */
  justify-content: center;
  position: relative;
@media (max-width: 768px) {
  width: 70%;
  margin-left: 20%;
  top: 35%;
}
@media (max-width: 425px) {
  width: 100%;
  margin-left: 5%
}
 /* background-color: #dbdbdb; */
`;
export const Image=styled.img`
 width: 20px;
 height: 20px;
 position:fixed;
 right: 190px;

 @media (max-width: 425px) {
  right: 37%;
 }
 @media (max-width: 375px) {
  right: 37%;
 }
 @media (max-width: 320px) {
  right: 44%;
  top: 85px;
 }
`
export const SubmitForm=styled.form`
   @media (max-width: 425px) {
    
  }
  margin-top: 10%;
  
`
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: 12%;
  position: fixed;
  top:0px;
  border:2px solid black;
  box-shadow: 0px 0px 3px black;
  width: 100%;
  align-items: center;
  background-color: white;
  z-index:4;

 @media (max-width: 350px) {
  height:20%;
 }
`
export const Page_content = styled.div`
  display: flex;
  flex-direction: row;
  width: full;
  @media (max-width: 776px) {
    flex-direction: column;
   
  }
`;
export const Sidebar = styled.div`
  width: 150px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: fixed;
  border:2px solid black;
  background-color: white;
  z-index: 3;
  top:12.5%;
  @media (max-width: 600px) {
    width:100%;
    height: 80px;
    flex-direction: row;
    top:10%;
}
  @media (max-width: 425px) {
    top: 12.5%;
  }
  @media (max-width:350px) {
    top:20%
  }
`;
export const Maincontent = styled.div`
  z-index:1;
  width: 91%;
  margin-top : 60px;
  @media (max-width:768px) {
    width:80%;
    margin-left:20%;
    margin-top: 75px;
  }
  @media (max-width: 425px) {
    width: 100%;
    margin-left: 0px;
  }

`;
export const Pagepath = styled.div`
  height: 25px;
  width: 88%;
  margin: 10px 10px 10px 20px;
  /* margin-left: 20px; */
  position: relative;
  top:130px;
  z-index: 20;
  /* padding-top: 18px; */
  display: flex;
  padding: 15px;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  background-color: #f5f5f5;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 75%;
    margin-left: 22%;
  }
  @media (max-width: 425px) {
    margin-top:100px;
    width: 75%;
    margin-left:15px;
  }
  @media (max-width: 375px) {
    margin-top:60px;
    width: 75%;
    margin-left:15px;
  }
`;
export const Maincontainercreate = styled.div`
  width: 100%;
  height: fit-content;
 box-shadow : 0px 0px 3px black;
  /* margin: 10px; */
  padding-bottom: 10px;
  background-color: white;
  margin-left: 2%;
  margin-bottom : 20px;
  @media (max-width: 425px) {
    margin-left:3px
  }
`;
export const Detailscreate = styled.div`
  box-shadow : 0px 0px 2px black;
 /* padding-left: 10px; */
 padding-bottom: 20px;
 padding-left: 20px;
 @media (max-width: 425px) {
  padding-left: 0px;
 }
 /* display: flex; */
`;

export const Heading_plusbtn = styled.div`
  display: flex;
`;
export const Getdetails = styled.div`
  /* display: none;
  grid-template-columns:1fr 1fr;
  width:100%; */

`;

export const Getdetails1 = styled.div`

 width: "100%";
 @media (max-width: 425px) {
  grid-template-columns: 1fr;
  
}
@media (max-width: 768px) {
  grid-template-columns: 1fr;
}
`;
export const Inputname=styled.input`
  height: 35px;
  width: 80%;
  border: 1px solid gray;
  border-radius: 2px;
  outline: none;
  font-size: medium;
  box-shadow: none;
  margin:20px;
  @media (max-width: 713px) {
    width: 85%;
  }
`
export const Inputlname=styled.input`
  height: 35px;
  width: 80%;
  border: 1px solid gray;
  border-radius: 2px;
  outline: none;
  font-size: medium;
  box-shadow: none;
  margin:20px;
  @media (max-width: 713px) {
    width: 85%;
  }
`

export const ContainerWarn=styled.div`
display:flex;
flex-direction: column;
width: 100%;
`
export const EmailWarn=styled.div`
  display: flex;
  width: 100%;
`
export const ValidateWarn = styled.div`
  width: 100%;
  /* display:flex; */
  gap: 65px;
  padding-left: 18px;
  font-size: small;
  color: red;
  margin-top: -15px;
`
export const DialogBox=styled.div`
display: none;
width: 33%;
height: 10%;
/* margin: auto;
justify-content: center;
align-items: center; */
border: 1px solid gray;
background-color: gray;
position: absolute;
left: 40%;
top:65%;
z-index: 40;
`
export const Add_plus_btn = styled.button`
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  margin-top: 3px;
`;
export const H2 = styled.h2`
  position: fixed;
  color: black;
  right: 25px;
  @media (max-width: 485px) {
    font-size: large;
  }
  @media (max-width:320px) {
    font-size: medium;
    top: 70px;
  }
`;
export const H1 = styled.h1`
  position: relative;
  left: 2%;
  color: black;
  @media(max-width: 485px){
    height: full;
    font-size: x-large;
  }
  @media (max-width: 350px) {
    font-size: large;
  }
`;
export const H3 = styled.h3`
  margin-left: 15px;
`;
export const A_tag = styled.a`
  color: blue;
  padding-left: 12px;
  text-decoration: none;

  justify-content: center;
  
`;
export const LinkRoute=styled(Link)`
  color: blue;
  padding-left: 20px;
  text-decoration: none;
  height: 50px;
  justify-content: center;
  padding-top: 18px;
  :hover{
    text-decoration: underline;
  }
`
