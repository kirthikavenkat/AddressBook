const ViewAddressBook = ({state}:any) => {
  return (
    <div
      style={{
        marginTop: "100px",
        marginLeft: "20px",
        backgroundColor: "white",
        width: "90%",
        padding: "20px 0 40px 20px",
       
      }}
    ><>

      <div style={{ marginLeft: "50px" }}>
        <h1>
          {state.name} {state.lastname}
        </h1>
        <div>
        <h3>Addresses</h3><hr></hr>
        <div>
          {state.address.map((addressitem: any, addressindex: number) => (
            <h4 key={addressindex}>{addressitem.line1}{","}{addressitem.line2}{","}{addressitem.city}{","}{addressitem.state}{","}{addressitem.country}{","}{addressitem.zipcode}</h4>
          ))}
        </div>
        <h3>Phone Numbers</h3><hr></hr>
          {state.phone.map((phoneitem: any, phoneindex: number) => (
            
               
              <div key={phoneindex}>
           
            <h4>{phoneitem.phonetype}</h4>
            
           <h5>{phoneitem.phone}</h5> 
          </div>
            
          ))}
        </div>
        <h3>Email Addresses</h3><hr></hr>
        <div>
          {state.email.map((emailitem: any, emailindex: number) => (
            <div key={emailindex}>
              <h4>{emailitem.emailtype}</h4>
              
              <h5>{emailitem.email}</h5>
            </div>
          ))}
        </div>
      </div>
    
    </>
      
    </div>
  );
}

export default ViewAddressBook;
