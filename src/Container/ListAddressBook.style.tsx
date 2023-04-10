import styled,{keyframes} from "styled-components";

export const Table=styled.table`

`
export const animatedDialog=keyframes`
  0% { top: 0%; left:40%; }
 100% { top: 20%; left: 40%;}
`
export const Input_text = styled.input`
  height: 35px;
  width: 300px;
  border: 1px solid gray;
  outline: none;
  font-size: larger;
  box-shadow: none;
  margin: 20px 20px 20px -45px;
  padding-left: 50px;
  background-color:#eeeeee90;
  @media (max-width: 730px) {
    width: 60%;
  }
`;
export const Page_content = styled.div`
  display: flex;
  flex-direction: row;
  width: full;
 
`;
export const Maincontent = styled.div`
  z-index:1;
  width: 90%;
  margin-top : -10px;
  padding-left: 15%;
  @media (max-width: 776px) {
    padding-left: 2%;
  }
`;

export const Image=styled.img`
  width: 30px;
  height: 30px;

  position: relative;
  /* left: 50px; */
  top:8px;
 
`
export const Btn=styled.button`
   width: 50px;
  height: 35px;
  border: 1px solid rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  color: black;
  font-size: small;
  margin: 10px;
  cursor: pointer;
`
export const Button = styled.button.attrs((props: { color: string }) => props)`
  width: 100px;
  height: 35px;
  border: 1px solid rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  color: white;
  font-size: large;
  margin: 10px;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;
export const Tablelist=styled.table`
  width: 99%;
  margin-left: -1.5%;
  border-collapse: collapse;

`
export const Tablehead=styled.thead`


`
export const Tablebody=styled.tbody`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left:20px;
  
`
export const Tableheader=styled.th`
  /* border: 1px solid gray; */
  background-color: #cccccc;
  color: black;
  height: 50px;
`
export const Tablerow=styled.tr`
height: 40px;
background-color: #33394126;

:nth-of-type(odd) {
      background-color:white;
    }
    :nth-of-type(even) {
      background-color: #ececec;
    }
:hover {

 background-color: white;

}
`
export const Tabledata=styled.td`
 /* border: 1px solid gray; */

 
  
`
export const DialogBox=styled.div`
display: none;
width: 280px;
height: 80px;
padding: 25px;
border: 1px solid gray;
background-color: #fffffff6;
position: absolute;
left: 40%;
top: 20%;
box-shadow: 3px 3px 3px 3px black;
z-index: 40;
border-radius:25px;
animation-name: ${animatedDialog};
animation-duration: 0.1s;
`


export const NumberButton=styled.div`
position: relative;
 margin-top: 1rem;
 width: full;
/* margin: 100px; */
`
export const ButtonContainer=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  padding: 0.5rem 0;
`
export const BtnCarousel=styled.button.attrs((props: { color: string }) => props)`
display: flex;
width: 100%;
color: lightseagreen;
padding: 0.3rem 0.6rem;
border: 1px solid #ccc;
cursor: pointer;
background-color: ${(props) => props.color};
/* background-color: #fff; */
color: #141414;
  
 
  `
