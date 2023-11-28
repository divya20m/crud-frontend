import { useState,useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export function AddList({ lists, setLists }) {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [phone, setPhone] = useState("")
  const [website, setWebsite] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [catchPhrase, setCatchPhrase] = useState("")
  const [bs, setBs] = useState("")
const navigate=useNavigate()
const [newData, setNewData] = useState([])
useEffect(() => {
  if (newData) {
    console.log([...lists, newData]);
  }
}, [lists, newData]);


  const handleSubmit = (event) => {
   
    const newdata={
      id: lists.length + 1,
    name,
    username,
    email,
    street,
     city ,
      zipcode,
      latitude,
    longitude,
    phone,
        website ,
         companyName ,
       catchPhrase,
  bs} 
   
  
  setLists((prevLists) => [...prevLists, newdata]);

  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newdata),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Data added to the mock API:', data);
      
    })
    .catch((error) => {
      console.error('Error adding data to the mock API:', error);
    });

  
  navigate("/AllLists")
    
  
 // Clear the form data after submission
 setName("")
 setUsername("")
 setEmail("")
 setStreet("")
 setCity("")
 setZipcode("")
 setLatitude("")
 setLongitude("")
 setPhone("")
 setWebsite("")
 setCompanyName("")
 setCatchPhrase("")
 setBs("")
 navigate("/AllLists")
    }

  return (
    <div style={{ display: "grid", justifyItems: "stretch" }}>
       <TextField onChange={((e) => setName(e.target.value))} value={name} label="Name" variant="outlined" />
       <TextField onChange={(e) => setUsername(e.target.value)} value={username} label="Username" variant="outlined" />
       <TextField onChange={((e) => setEmail(e.target.value))} value={email} label="Email" variant="outlined" />
       <TextField onChange={((e) => setStreet(e.target.value))} value={street} label="Street" variant="outlined" />
       <TextField onChange={((e) => setCity(e.target.value))} value={city} label="City" variant="outlined" />
       <TextField onChange={((e) => setZipcode(e.target.value))} value={zipcode}  label="ZipCode" variant="outlined" />
       <TextField onChange={((e) => setLatitude(e.target.value))} value={latitude} label="Latitude" variant="outlined" />

      <div style={{display:"flex"}}>
      <TextField onChange={((e) => setLongitude(e.target.value))} value={longitude} label="Logitude" variant="outlined" />
      <TextField onChange={((e) => setPhone(e.target.value))} value={phone} label="Phone" variant="outlined" />
</div>
<TextField onChange={((e) => setWebsite(e.target.value))}value={website} label="Website" variant="outlined" />
<TextField onChange={((e) => setCompanyName(e.target.value))} value={companyName}label="Company Name" variant="outlined" />
      <div>
      <TextField onChange={((e) => setCatchPhrase(e.target.value))}value={catchPhrase} label="CatchPhrase" variant="outlined" />
      <TextField onChange={((e) => setBs(e.target.value))}value={bs} label="Bs" variant="outlined" />
      </div>
      <Button onClick={handleSubmit} variant="contained" color="primary">
        Add to List
      </Button>
    </div>
  );
}
