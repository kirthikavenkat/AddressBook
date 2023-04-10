import styled from "styled-components";

export const Container = styled.div`
   display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  margin: auto;
`;
export const Main_container = styled.div`
  width: 400px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  padding-bottom: 15px;
  border-radius: 5px;
  background-color: white;
  padding-top: 5px;
  @media (max-width: 425px) {
    width: 340px;
  }
  @media (max-width: 320px) {
    width: 300px;
  }
`;
export const H1 = styled.h1`
  margin-top: 30px;
`;
export const H2=styled.h2`
  height: 10px;
`
export const Input_text = styled.input`
  height: 35px;
  width: 85%;
  border: 1px solid gray;
  border-radius: 5px;
  outline: none;
  font-size: larger;
  box-shadow: none;
  /* margin: 20px; */
  padding-left: 36px;
  padding-bottom: 2px;
  background-color:#eeeeee90;
  @media (max-width: 713px) {
    width: 80%;
  }
`;
export const Image=styled.img`
  width: 30px;
  height: 30px;
  position: relative;
  top: 38px;
  left: 5px;
`
export const Warning = styled.div`
  color: red;
  margin-left: 5px;
  margin-top: 5px;
  font-size: smaller;
`
export const Button = styled.button.attrs((props: { color: string }) => props)`
  width: 100px;
  height: 35px;
  border: 1px solid rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  color: white;
  font-size: large;
  margin-top: 20px;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;
export const Addressbkimg = styled.img`
  width: 35px;
  height: 35px;
  margin-top: 10px;
  margin-right: 5px;
`;
export const Title_container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 400px;
`;
export const Inputcontainer=styled.div`
  height: 100px;
 
`
export const Maintext=styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 20px;
  margin-left: 20px;

`


