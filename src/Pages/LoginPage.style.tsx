import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  margin: auto;
  height: 100vh;
`;
export const H2=styled.h2`
  
  margin-left:-90px;
  @media (max-width: 320px) {
    margin-left: -40px;
  }
  /* margin-top:30px; */
`
export const Main_container = styled.div`
  width: 400px;
  height: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding-bottom: 0px;
  border-radius: 5px;
  background-color: white;
  @media (max-width: 425px) {
    width: 340px;
  }
  @media (max-width: 320px) {
    width: 300px;
  }
`;
export const Input_text = styled.input`
  height: 45px;
  width: 67%;
  border: 1px solid gray;
  border-radius: 2px;
  outline: none;
  font-size: larger;
  box-shadow: none;
  margin: 0px 0 0 23px;
  padding-left: 60px;
  padding-bottom: 2px;
  background-color:white;
  z-index: 10;
`;
export const Image=styled.img`
  width: 50px;
  height: 48px;
  position: relative;
  top: 55px;
  left: 24px;
  border-radius:2px;
  border-right:1px solid;
  background-color:#cccbcb;
`
export const Warning = styled.div`
  color: red;
  margin-left: 19px;
  font-size: 14px;
  /* margin-top: -19px; */
`

export const Button = styled.button.attrs((props: { color: string }) => props)`
  width: 41%;
  height: 35px;
  border: 1px solid rgba(0, 0, 0, 0.24);
  border-radius: 2px;
  color: white;
  font-size: large;
  margin: 10px;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;
export const Addressbkimg = styled.img`
  width: 35px;
  height: 35px;
  margin-top: 10px;
  margin-right: 5px;
`;
export const H1 = styled.h1`
  margin-top: 30px;
  
`;
export const Title_container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 400px;
`;
export const Inputcontainer1=styled.div`
  height: 60px;
  margin-top: -50px;
  z-index: 15;
`

export const Inputcontainer=styled.div`
  height: 60px;
  margin-top: 25px;
  z-index: 1;
`
export const Buttoncontainer=styled.div`
  height: 80px;
  align-items: center;
  margin: 70px 0 0 10px;
  width: 90%;
`

