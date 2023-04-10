import search from "../../Assets/search-svgrepo-com.svg";
import React, { useState, useEffect } from "react";
import ViewAddressBook from "../ViewAddress/ViewAddress";
import {
  Input_text,
  Image,
  Button,
  Tablelist,
  Tablehead,
  Tableheader,
  Tablerow,
  Tabledata,
  Tablebody,
  DialogBox,
  Btn,
} from "./ListAddressBook.style";
import{
  addressBook, 
} from "../CreateAddressBook/CreateAddressBook";
import NumberCarousel from "../../Components/Carousel";
import {
  A_tag,
  Full_containercreate,
  Pagepath,
} from "../CreateAddressBook/CreateAddressBook.style";


const ListAddress = ({ item ,setShowCreateAddress, formData,setformData, setEditValue, setEditDataID ,setShowListAddress}: any,props:any) => {
  const [isSubmitted, setIsSubmitted] = useState(true);
  const [selectedData, viewSelectedData] = useState(item);
  const [viewAddress, setView] = useState(false);
  
  const handleViewClick = (data:any) => {
    viewSelectedData(data);
    setView(true);
  };

  const handleEdit = (item: addressBook, index:any) => {
    setEditValue(item);
    setIsSubmitted(false);
    setEditDataID(index)
    setShowCreateAddress(true);
    setShowListAddress(false);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const items = formData;
  const filteredData = items.filter((item:any) => item.name.includes(searchQuery));


  const handleDelete = (index: any) => {
    //Logic to delete the item

    return (event: React.MouseEvent) => {
      const dialog = document.getElementsByClassName(
        "dialogBox1"
      ) as HTMLCollectionOf<HTMLElement>;
      dialog[0].style.display = "block";
      const okButton = document.getElementById("okBtn") as HTMLDivElement;
      const cancelButton = document.getElementById(
        "cancelBtn"
      ) as HTMLButtonElement;
      okButton.addEventListener("click", () => {
        event.preventDefault();
        const items = formData;
        if (items.length > 0) {
          const Index = index;
          setformData(items.filter((item:any, index:number) => index !== Index));
        }
        dialog[0].style.display = "none";
      });

      cancelButton.addEventListener("click", () => {
        dialog[0].style.display = "none";
      });
    };
  }

    return (
      <React.Fragment>
          {viewAddress ? (
          <>
            <ViewAddressBook state={selectedData} />
          </>
        ) : (
          <>
            {!isSubmitted ? 
            ('')
            : (
              <>
                <Full_containercreate style={{ width: "100%"}}>
                  <Image src={search}></Image>
                  <Input_text
                    placeholder="Search..."
                    name="search"
                    id="search"
                    style={{ backgroundColor: "white" }}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  ></Input_text>
                  <button
                    style={{
                      height: "36px",
                      width: "69px",
                      fontSize: "15px",
                      marginLeft: "-90px",
                      border: "0px",
                      borderLeft: "1px solid black",
                    }}
                  >
                    Go
                  </button>
  
                  <Tablelist>
                    <Tablehead>
                      <Tablerow>
                        <Tableheader>Name</Tableheader>
                        <Tableheader>Phone Number</Tableheader>
                        <Tableheader>Email address</Tableheader>
                        <Tableheader>Address</Tableheader>
                        <Tableheader>Action</Tableheader>
                      </Tablerow>
                    </Tablehead>
                    <Tablebody>
                      {searchQuery.length !== 0 && (
                        <>
                          {filteredData.map(
                            (item:any, index:number) =>
                              // <tr key={index}>
                              //   <td>{item.name}</td>
                              //   <td>{item.phonenumber}</td>
                              //   <td>{item.email}</td>
                              ({
                                /* <td>{item.address[0].line1}</td> */
                              })
                            // </tr>
                          )}
                        </>
                      )}
                      {searchQuery.length === 0 && (
                        <>
                          {formData.map((item:any, index:number) => (
                            <Tablerow key={index}>
                              <Tabledata
                                style={{ cursor: "pointer" }}
                                onClick={() => handleViewClick(item)}
                              >
                                {item.name}
                                {item.lastname}
                              </Tabledata>
  
                              <Tabledata>
                                {item.phone.map(
                                  (phoneitem: any, phoneindex: number) => (
                                    <Tabledata key={phoneindex}>
                                      {phoneitem.phone}
                                    </Tabledata>
                                  )
                                )}</Tabledata>
                                <Tabledata>
                                  {item.email.map(
                                    (emailitem: any, emailindex: number) => (
                                      <Tabledata key={emailindex}>
                                        {emailitem.email}
                                      </Tabledata>
                                    )
                                  )}
                                </Tabledata>
                                <Tabledata>
                                  {item.address.map(
                                    (addressitem: any, addressindex: number) => (
                                      <Tabledata key={addressindex}>
                                        {addressitem.line1}{","}{addressitem.line2}{","}{addressitem.city}{","}{addressitem.state}{","}{addressitem.country}{","}{addressitem.zipcode}
                                      </Tabledata>
                                    )
                                  )}
                                </Tabledata>
                              <Tabledata>
                                {
                                  <div>
                                    <Btn onClick={() => handleEdit(item, index)}>
                                      Edit
                                    </Btn>
                                    <Btn onClick={handleDelete(index)}>
                                      Delete
                                    </Btn>
                                  </div>
                                }
                              </Tabledata>
                            </Tablerow>
                          ))}
                        </>
                      )}
                    </Tablebody>
                  </Tablelist>
                  {formData.length < 1 && (
                    <div
                      style={{
                        display: "flex",
                        width: "full",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "20px",
                        fontSize: "15px",
                      }}
                    >
                      No data
                    </div>
                  )}
                  {searchQuery.length !== 0 && filteredData.length === 0 && (
                    <>
                      <div
                        style={{
                          display: "flex",
                          width: "full",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: "20px",
                          fontSize: "25px",
                        }}
                      ></div>
                    </>
                  )}
  
                  <div
                    style={{
                      width: "full",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "auto",
                      display: "flex",
                    }}
                  >
                    {formData.length > 0 && <NumberCarousel />}
                  </div>
                </Full_containercreate>
                {/* </div> */}
              </>
            )}
          </>
        )}
  
        <DialogBox className="dialogBox1">
          <div>
            Are you sure you want to delete this item?
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "25px",
                  border: "1px solid gray",
                  cursor: "pointer",
                  textAlign: "center",
                  borderRadius: "4px",
                  backgroundColor: "#b32424",
                  color: "white",
                }}
                id="okBtn"
              >
                Ok
              </div>
              <div
                style={{
                  width: "60px",
                  height: "25px",
                  border: "1px solid gray",
                  cursor: "pointer",
                  textAlign: "center",
                  marginLeft: "27px",
                  borderRadius: "4px",
                  backgroundColor: "#94bac989",
                  color: "black",
                }}
                id="cancelBtn"
              >
                Cancel
              </div>
            </div>
          </div>
        </DialogBox>
      </React.Fragment>
    );


}
export default ListAddress;
