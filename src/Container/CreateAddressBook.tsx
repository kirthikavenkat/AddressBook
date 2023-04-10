import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactComponent as Cross } from "../../Assets/cross-svgrepo-com.svg";
import Select from "../../Components/Select/Select";
import {
  Title_container,
  Full_containercreate,
  Page_content,
  Maincontainercreate,
  Input_text,
  Getdetails1,
  Button,
  Add_plus_btn,
  Maincontent,
  H3,
  Heading_plusbtn,
  Detailscreate,
  SubmitForm,
  ValidateWarn,
  ContainerWarn,
  Inputname,
} from "./CreateAddressBook.style";

export interface addressBook {
  name: string;
  lastname: string;
  email: string[];
  address: newaddress[];
  phone: string[];
}
export interface newaddress {
  line1: string;
  line2: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
}

const data = {
  name: "",
  lastname: "",
  email: [{}],
  phone: [{}],
  address: [{}],
};

const EmailTypeOptions = [
  { value: "Personal", label: "Personal" },
  { value: "Work", label: "Work" },
  { value: "Alternate", label: "Alternate" },
];
const AddressTypeOptions = [
  { value: "Personal", label: "Personal" },
  { value: "Work", label: "Work" },
  { value: "Alternate", label: "Alternate" },
];
const PhoneTypeOptions = [
  { value: "Personal", label: "Personal" },
  { value: "Work", label: "Work" },
  { value: "Alternate", label: "Alternate" },
];
const CreateAddressBook = ({ onFormDataChange, toEdit ,formData}: any) => {
  //Set the data empty:initial toEdit:on edit click
  const [addressbook, setaddressbook] = useState<addressBook | any>(
    toEdit ? toEdit : data
  );
  console.log(addressbook)
  console.log(data)
  console.log(toEdit)
  //to iterate over the input field index
  const [indexOfAddress, setIndexAddress] = useState(0);
  const [indexOfEmail, setIndexEmail] = useState(0);
  const [indexOfPhone, setIndexPhone] = useState(0);

  //state to set the warning message if fields are empty
  const [warnings, setWarnings] = useState<any>({
    name: "",
    lastname: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
    email: "",
    emailtype: "",
    phone: "",
    phonetype: "",
  });

  //State to set the selected types
  const [selectedEmailType, setSelectedEmailType] = useState("");
  const [selectedAddressType, setSelectedAddressType] = useState("");
  const [selectedPhoneType, setSelectedPhoneType] = useState("");

  //Setting the email type
  const selectedEmailTypes = useRef<any>();
  const selectedAddressTypes = useRef<any>();
  const selectedPhoneTypes = useRef<any>();

  const emailRegex = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
  const nameRegex = /^([a-zA-Z]{1,29})+$/;
  const lastnameRegex = /^([a-zA-Z]{1,29})+$/;

  //Email validation
  const validateEmail = (event:any,index:any) => {
    const emailbox = document.getElementsByName("email")[index] as HTMLInputElement;
    const email = emailbox.value;
    const EmailWarn = document.getElementById("EmailWarn") as HTMLDivElement;
    if (emailRegex.test(email)) {
      emailbox.style.borderColor = "gray";
      EmailWarn.innerHTML = "";
    } else {
      EmailWarn.innerHTML = "Please enter a valid email";
      emailbox.style.borderColor = "red";
    }
  };

  //Name validation
  const validateName = (event: { target: { value: any } }) => {
    const namebox = document.getElementById("name") as HTMLInputElement;
    const name = event.target.value;
    const firstNameWarn = document.getElementById(
      "firstNameWarn"
    ) as HTMLDivElement;
    if (nameRegex.test(name)) {
      namebox.style.borderColor = "gray";
      firstNameWarn.innerHTML = "";
    } else {
      firstNameWarn.innerHTML = "Please enter a valid first name";
      namebox.style.borderColor = "red";
    }
  };

  const validateLastName = (event: { target: { value: any } }) => {
    const namebox = document.getElementById("lastname") as HTMLInputElement;
    const lastname = event.target.value;
    const lastNameWarn = document.getElementById(
      "lastNameWarn"
    ) as HTMLDivElement;
    if (lastnameRegex.test(lastname)) {
      namebox.style.borderColor = "gray";
      lastNameWarn.innerHTML = "";
    } else {
      lastNameWarn.innerHTML = "Please enter a valid last name";
      namebox.style.borderColor = "red";
    }
  };

  //Validating unique address type
  // const validateaddresstype = (event: any) => {
  //   const vari = event.target.value;
  //   const var1 = (document.getElementById("addresstype") as HTMLSelectElement)
  //     .value;
  //   const addressTypeWarn = document.getElementById(
  //     "addressTypeWarn"
  //   ) as HTMLDivElement;
  //   const inp = document.getElementById("Address_line1") as HTMLInputElement;
  //   if (vari == var1) {
  //     addressTypeWarn.innerHTML = "Please select an unique address type";
  //     inp.disabled = true;
  //   } else {
  //     addressTypeWarn.innerHTML = "";
  //     inp.disabled = false;
  //   }
  // };



  //Validating unique phone number type
  // const validateNumbertype = (event: any) => {
  //   const vari = event.target.value;
  //   console.log(vari);
  //   const var1 = (document.getElementById("numberType1") as HTMLSelectElement)
  //     .value;
  //   const numberTypeWarn = document.getElementById(
  //     "numberTypeWarn"
  //   ) as HTMLDivElement;
  //   const inp = document.getElementById("phone2") as HTMLInputElement;
  //   if (vari == var1) {
  //     numberTypeWarn.innerHTML = "Please select an unique number type";
  //     inp.disabled = true;
  //   } else {
  //     numberTypeWarn.innerHTML = "";
  //     inp.disabled = false;
  //   }
  // };

  //Function + button
  const handleClickAddress = (event: any) => {
    event.preventDefault();
    const addressWarn: any = document.getElementById("addressWarn");
    const line1: HTMLInputElement = document.getElementsByName("line1")[
      indexOfAddress
    ] as HTMLInputElement;
    const line1value: string = line1.value;
    if (line1value == "") {
      addressWarn.innerHTML =
        "Please complete the field before adding another address";
    } else if (addressbook.address.length >= 3) {
      addressWarn.innerHTML = "A maximum of only 3 addresses can be entered";
    } else {
      addressWarn.innerHTML = "";
      const address = [...addressbook.address];
      address.push({});
      setaddressbook({ ...addressbook, address });
      setIndexAddress(indexOfAddress + 1);
    }
  }

  const handleClickEmail = (event: any) => {
    event.preventDefault();
    const emailWarn: any = document.getElementById("emailWarning");
    const email: HTMLInputElement = document.getElementsByName("email")[
      indexOfEmail
    ] as HTMLInputElement;
    const emailvalue: string = email.value;
    if (emailvalue == "") {
      emailWarn.innerHTML =
        "Please complete the field before adding another email address";
    } else if (addressbook.email.length >= 3) {
      emailWarn.innerHTML =
        "A maximum of only 3 email addresses can be entered";
    } else {
      emailWarn.innerHTML = "";
      const email = [...addressbook.email];
      email.push({});
      setaddressbook({ ...addressbook, email });
      setIndexEmail(indexOfEmail + 1);
    }
  }

  function handleClickPhone(event: any) {
    event.preventDefault();
    const phoneWarn: any = document.getElementById("phonenoWarn");
    const phone: HTMLInputElement = document.getElementsByName("phone")[
      indexOfPhone
    ] as HTMLInputElement;
    const phonevalue: string = phone.value;
    if (phonevalue == "") {
      phoneWarn.innerHTML =
        "Please complete the field before adding another phone number";
    } else if (addressbook.phone.length >= 3) {
      phoneWarn.innerHTML = "A maximum of only 3 phone numbers can be entered";
    } else {
      phoneWarn.innerHTML = "";
      const phone = [...addressbook.phone];
      phone.push({});
      setaddressbook({ ...addressbook, phone });
      setIndexPhone(indexOfPhone + 1);
    }
  }

  //setting the value in their particular indexes on change (address,email,phone number)
  const handleInputChange1 = (index: any, event: any) => {
    const { name, value } = event.target;
    const address = [...addressbook.address];
    address[index][name] = value;
    setaddressbook({ ...addressbook, address });
    const selectedTypes:any ={...selectedAddressTypes};
    selectedTypes[index] = value;
    setSelectedAddressType(selectedTypes);
  };

  const handleInputChange2 = (index: any, event: any) => {
    const { name, value } = event.target;
    const email = [...addressbook.email];
    email[index][name] = value;
    setaddressbook({ ...addressbook, email });
    const selectedTypes:any ={...selectedEmailTypes};
    selectedTypes[index] = value;
    setSelectedEmailType(selectedTypes);
  };

  const handleInputChange3 = (index: any, event: any) => {
    const { name, value } = event.target;
    const phone = [...addressbook.phone];
    phone[index][name]=(value);
    setaddressbook({ ...addressbook, phone });
    const selectedTypes:any ={...selectedPhoneTypes};
    selectedTypes[index] = value;
    setSelectedPhoneType(selectedTypes);
  };

  //setting the value of firstname and lastname
  const handleInputChange = (event: any) => {
    setaddressbook({ ...addressbook, [event.target.name]: event.target.value });
  };

  //removing the fields
  const handleDiscardAddress = (indexToRemove: number, event: any) => {
    event.preventDefault();
    const addressWarn: any = document.getElementById("addressWarn");
    const address: any = [...addressbook.address];
    if (address.length > 1) {
      address.splice(indexToRemove, 1);
      setaddressbook({ ...addressbook, address });
      setIndexAddress(indexOfAddress - 1);
    } else {
      addressWarn.innerHTML = "Atleast 1 address is required";
    }
  };

  const handleDiscardEmail = (indexToRemove: number, event: any) => {
    event.preventDefault();
    const emailWarn: any = document.getElementById("emailWarning");
    const email: any = [...addressbook.email];
    if (email.length > 1) {
      email.splice(indexToRemove, 1);
      setaddressbook({ ...addressbook, email });
      setIndexEmail(indexOfAddress - 1);
    } else {
      emailWarn.innerHTML = "Atleast 1 address is required";
    }
  };

  const handleDiscardPhone = (indexToRemove: number, event: any) => {
    event.preventDefault();
    const phoneWarn: any = document.getElementById("phonenoWarn");
    const phone: any = [...addressbook.phone];
    if (phone.length > 1) {
      phone.splice(indexToRemove, 1);
      setaddressbook({ ...addressbook, phone });
      setIndexPhone(indexOfAddress - 1);
    } else {
      phoneWarn.innerHTML = "Atleast 1 address is required";
    }
  };

  const EmailTypeRef = useRef<HTMLSelectElement>(null);
  const AddressTypeRef = useRef<HTMLSelectElement>(null);
  const PhoneTypeRef = useRef<HTMLSelectElement>(null);
  //Submit - form

  const handleAddInfoSubmit = (e: any) => {
    // Checking if the fields are empty
    const {
      name,
      lastname,
      line1,
      line2,
      city,
      state,
      country,
      zipcode,
      addresstype,
      email,
      emailtype,
      phone,
      phonetype,
    } = e.target.elements;

    const warningMessage = "This field is required";
    const isWarningsEmpty =
      name.value &&
      lastname.value &&
      addressbook.address[indexOfAddress].line1 &&
      addressbook.address[indexOfAddress].line2 &&
      addressbook.address[indexOfAddress].city &&
      addressbook.address[indexOfAddress].state &&
      addressbook.address[indexOfAddress].country &&
      addressbook.address[indexOfAddress].zipcode &&
      // addresstype.value &&
      addressbook.email[indexOfEmail].email &&
      // emailtype.value&&
      addressbook.phone[indexOfPhone].phone;
      // phonetype.value;
      
    setWarnings({
      name: !name.value ? warningMessage : "",
      lastname: !lastname.value ? warningMessage : "",
      line1: !addressbook.address[indexOfAddress].line1 ? warningMessage : "",
      line2: !addressbook.address[indexOfAddress].line2 ? warningMessage : "",
      city: !addressbook.address[indexOfAddress].city ? warningMessage : "",
      state: !addressbook.address[indexOfAddress].state ? warningMessage : "",
      country: !addressbook.address[indexOfAddress].country ? warningMessage : "",
      zipcode: !addressbook.address[indexOfAddress].zipcode ? warningMessage : "",
      // addresstype: !AddressTypeRef.current?.value ? warningMessage : "",
      email: !addressbook.email[indexOfEmail].email ? warningMessage : "",
      // emailtype: !EmailTypeRef.current?.value ? warningMessage : "",
      phone: !addressbook.phone[indexOfPhone].phone ? warningMessage : "",
      // phonetype: !PhoneTypeRef.current?.value ? warningMessage : "",
    });
    console.log(addressbook.address[indexOfAddress].line1);
    console.log(warnings)
    console.log(isWarningsEmpty)
    if (isWarningsEmpty) {
      toast.success("Address book added successfully!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setTimeout(() => {
        onFormDataChange(addressbook);
      }, 3000);
    }

    e.preventDefault();
  };

  return (
    <SubmitForm onSubmit={handleAddInfoSubmit}>
      <Full_containercreate>
        <Page_content>
          <Maincontent>
            <Maincontainercreate>
              <Detailscreate>
                <Page_content>
                  <ContainerWarn>
                    <Inputname
                      type="text"
                      placeholder="First Name"
                      id="name"
                      value={addressbook.name}
                      name="name"
                      // onChange={(e) => inputChange(e.target.value, 'firstname')}
                      onChange={handleInputChange}
                      onBlurCapture={validateName}
                      // onChange={(e)=>setName(e.target.value)}
                    ></Inputname>
                    <ValidateWarn id="firstNameWarn">
                      {warnings.name && <span>{warnings.name}</span>}
                    </ValidateWarn>
                  </ContainerWarn>
                  <ContainerWarn>
                    <Inputname
                      type="text"
                      placeholder="Last Name"
                      id="lastname"
                      name="lastname"
                      value={addressbook.lastname}
                      onChange={handleInputChange}
                      onBlurCapture={validateLastName}
                    ></Inputname>
                    <ValidateWarn id="lastNameWarn">
                      {warnings.lastname && <span>{warnings.lastname}</span>}
                    </ValidateWarn>
                  </ContainerWarn>
                </Page_content>
              </Detailscreate>

              <Detailscreate>
                {/* address */}
                <Heading_plusbtn>
                  <H3>Address</H3>
                  <Add_plus_btn
                    onClick={(event) => handleClickAddress(event)}
                    className="addbtn"
                  >
                    +
                  </Add_plus_btn>
                </Heading_plusbtn>
                <ValidateWarn id="addressWarn"></ValidateWarn>

                {addressbook.address.map((address: any, index: any) => (
                  <Getdetails1
                    key={index}
                    style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}
                  >
                    <ContainerWarn>
                      <Input_text
                        id="line1"
                        name="line1"
                        placeholder="Line1"
                        value={address.line1}
                        onChange={(event) => handleInputChange1(index, event)}
                      ></Input_text>
                      <ValidateWarn>
                        {warnings.line1 && <span>{warnings.line1}</span>}
                      </ValidateWarn>
                    </ContainerWarn>
                    <ContainerWarn>
                      <Input_text
                        name="line2"
                        placeholder="Line2"
                        value={address.line2}
                        onChange={(event) => handleInputChange1(index, event)}
                      ></Input_text>
                      <ValidateWarn>
                        {warnings.line2 && <span>{warnings.line2}</span>}
                      </ValidateWarn>
                    </ContainerWarn>
                    <ContainerWarn>
                      <Input_text
                        name="city"
                        placeholder="City"
                        value={address.city}
                        onChange={(event) => handleInputChange1(index, event)}
                      />
                      <ValidateWarn>
                        {warnings.city && <span>{warnings.city}</span>}
                      </ValidateWarn>
                    </ContainerWarn>
                    <ContainerWarn>
                      <Input_text
                        name="state"
                        placeholder="State"
                        value={address.state}
                        onChange={(event) => handleInputChange1(index, event)}
                      />
                      <ValidateWarn>
                        {warnings.state && <span>{warnings.state}</span>}
                      </ValidateWarn>
                    </ContainerWarn>
                    <ContainerWarn>
                      <Input_text
                        name="country"
                        placeholder="Country"
                        value={address.country}
                        onChange={(event) => handleInputChange1(index, event)}
                      />
                      <ValidateWarn>
                        {warnings.country && <span>{warnings.country}</span>}
                      </ValidateWarn>
                    </ContainerWarn>
                    <ContainerWarn>
                      <Input_text
                        name="zipcode"
                        placeholder="Zipcode"
                        value={address.zipcode}
                        onChange={(event) => handleInputChange1(index, event)}
                      />
                      <ValidateWarn>
                        {warnings.zipcode && <span>{warnings.zipcode}</span>}
                      </ValidateWarn>
                    </ContainerWarn>
                    <ContainerWarn>
                      <Select
                        name="addresstype"
                        options={AddressTypeOptions}
                        value={address.addresstype}
                        ref={AddressTypeRef}
                        onChange={(event: any) => {
                          handleInputChange1(index, event);
                        }}
                        required={true}
                      />
                      <ValidateWarn></ValidateWarn>
                    </ContainerWarn>
                    <br></br>
                    <Button
                      color="transparent"
                      border="none"
                      width="50px"
                      onClick={(event) => handleDiscardAddress(index, event)}
                    >
                      <Cross />
                    </Button>
                  </Getdetails1>
                ))}
              </Detailscreate>

              {/* email */}
              <Detailscreate>
                <Heading_plusbtn>
                  <H3>Email</H3>
                  <Add_plus_btn onClick={handleClickEmail} className="addbtn">
                    +
                  </Add_plus_btn>
                </Heading_plusbtn>
                <ValidateWarn id="emailWarning"></ValidateWarn>
                {addressbook.email.map((email: any, index: any) => (
                  <Getdetails1
                    key={index}
                     style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}
                  >
                    <>
                      <ContainerWarn>
                        <Input_text
                          id="email"
                          name="email"
                          placeholder="Email Address"
                          value={email.email}
                          onChange={(event) => {
                            handleInputChange2(index, event)
                          }}
                          onBlurCapture={(event) => {validateEmail(index,event)}}
                        ></Input_text>
                        <ValidateWarn id="EmailWarn">
                          {warnings.email && <span>{warnings.email}</span>}
                        </ValidateWarn>
                      </ContainerWarn>
                      <ContainerWarn>
                        <Select
                          name="emailtype"
                          options={EmailTypeOptions}
                          value={email.emailtype}
                          onChange={(event: any) => {
                            handleInputChange2(index, event);
                            
                          }}
                          required={true}
                          ref={EmailTypeRef}
                        />
                        <ValidateWarn>
                          {warnings.emailtype && (
                            <span>{warnings.emailtype}</span>
                          )}
                        </ValidateWarn>
                      </ContainerWarn>
                    </>
                    <Button
                      color="transparent"
                      border="none"
                      width="50px"
                      onClick={(event) => handleDiscardEmail(index, event)}
                    >
                      <Cross />
                    </Button>
                  </Getdetails1>
                ))}
              </Detailscreate>

              {/* phone number */}
              <Detailscreate>
                <Heading_plusbtn>
                  <H3>Phone number</H3>
                  <Add_plus_btn onClick={handleClickPhone} className="addbtn">
                    +
                  </Add_plus_btn>
                </Heading_plusbtn>
                <ValidateWarn id="phonenoWarn"></ValidateWarn>
                {addressbook.phone.map((phone: any, index: any) => (
                  <Getdetails1
                    key={index}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      width: "100%",
                    }}
                  >
                    <ContainerWarn>
                      <Input_text
                        name="phone"
                        placeholder="Phone Number"
                        value={phone.phone}
                        onChange={(event) => handleInputChange3(index, event)}
                      />
                      <ValidateWarn>
                        {warnings.phone && <span>{warnings.phone}</span>}
                      </ValidateWarn>
                    </ContainerWarn>
                    <ContainerWarn>
                      <Select
                        name="phonetype"
                        options={PhoneTypeOptions}
                        value={phone.phonetype}
                        onChange={(event: any) => {
                          handleInputChange3(index, event);
                        }}
                        required={true}
                        ref={PhoneTypeRef}
                      />
                      <ValidateWarn>
                        {warnings.phonetype && (
                          <span>{warnings.phonetype}</span>
                        )}
                      </ValidateWarn>
                    </ContainerWarn>
                    <Button
                      color="transparent"
                      border="none"
                      width="50px"
                      onClick={(event) => handleDiscardPhone(index, event)}
                    >
                      <Cross />
                    </Button>
                  </Getdetails1>
                ))}
              </Detailscreate>

              {/* action buttons */}
              <Title_container>
                <Button color="#252d38" type="submit">
                  Save
                </Button>
                {/* <ToastContainer /> */}
                <Button color="#c96624">Cancel</Button>
                <ToastContainer
                  style={{ animationDuration: "10s", zIndex: "90" }}
                />
              </Title_container>
            </Maincontainercreate>
          </Maincontent>
        </Page_content>
      </Full_containercreate>
    </SubmitForm>
  );
}

export default CreateAddressBook;
