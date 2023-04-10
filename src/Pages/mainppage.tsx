import NavbarComponent from "../../Components/Navbar";
import SidebarComponent from "../../Components/Sidebar";
import ListAddress from '../../Container/ListAddressBook/ListAddressBook';
import React , {useState} from 'react';
import CreateAddressBook from "../../Container/CreateAddressBook/CreateAddressBook";
import {
  Page_content,
  Maincontent,
} from "../../Container/ListAddressBook/ListAddressBook.style";
import { A_tag, Pagepath } from "../../Container/CreateAddressBook/CreateAddressBook.style";




function Mainpage() {

  const [showCreateAddress, setShowCreateAddress] = useState(false);
  const [showListAddress, setShowListAddress] = useState(true);
  const [formData, setformData] = useState<any>([]);
  const [editValue, setEditValue] = useState<any>(
    {
      name: "",
      lastname: "",
      email: [{}],
      phone: [{}],
      address: [{}],
    }
  );
  
  const [editDataID, setEditDataID] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleFormDataChange = (data: any) => {
    const updatedData = editDataID !== null 
    ? [...formData.slice(0, editDataID), data, ...formData.slice(editDataID + 1)]
    : [...formData, data];
  
  setformData(updatedData);
  setEditDataID(null);
  setEditValue({});
  setShowListAddress(true);
  setShowCreateAddress(false);
  };

  const handleCreateAddress = () => {
    setShowCreateAddress(true);
    setIsSubmitted(false);
    setEditValue({});
    setEditDataID(null)
  };

  //Navigate - -age path
  const handleHomeClick = () => {
    setShowCreateAddress(false);
    setShowListAddress(true)
  }
  const handleCreateClick = () => {
    setShowCreateAddress(true);
    setShowListAddress(false)
  }
  return (
    <React.Fragment>
      <NavbarComponent setShowCreateAddress={setShowCreateAddress} setShowListAddress={setShowListAddress}  />
      <Page_content>
        <SidebarComponent setShowCreateAddress={setShowCreateAddress} setShowListAddress={setShowListAddress} />
        <Maincontent>
          <Pagepath>
            <A_tag onClick={(e)=>{handleHomeClick()}}>Home /</A_tag>
            <A_tag>Address Book /</A_tag>
            <A_tag  onClick={(e)=>{handleCreateClick()}}>Create /</A_tag>
          </Pagepath>
         {showListAddress&&<ListAddress setShowCreateAddress={setShowCreateAddress} formData={formData} setformData={setformData}setEditValue={setEditValue} setEditDataID={setEditDataID} handleCreateAddress={handleCreateAddress} editValue={editValue} setShowListAddress={setShowListAddress} />} 
          {showCreateAddress && !isSubmitted && <CreateAddressBook setShowCreateAddress={setShowCreateAddress} formData={formData} onFormDataChange={handleFormDataChange} toEdit={editValue}/>}
        </Maincontent>
      </Page_content>
    </React.Fragment>
  );
}

export default Mainpage;