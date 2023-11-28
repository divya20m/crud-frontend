import { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export function EditList() {
  const { listid } = useParams();

  const [lists, setLists] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${listid}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setLists(data));
  }, [listid]);

  return lists ? <EditProductForm lists={lists} /> : "Loading...";}
  
  
  
  
  function EditProductForm({lists}){

    const navigate = useNavigate()

    const [name, setName] = useState(lists.name)
    const [username, setUsername] = useState(lists.username)
    const [email, setEmail] = useState(lists.email)
    const [street, setStreet] = useState(lists.street)
    const [city, setCity] = useState(lists.city)
    const [zipcode, setZipcode] = useState(lists.zipcode)
    const [latitude, setLatitude] = useState(lists.latitude)
    const [longitude, setLongitude] = useState(lists.longitude)
    const [phone, setPhone] = useState(lists.phone)
    const [website, setWebsite] = useState(lists.website)
    const [companyName, setCompanyName] = useState(lists.companyName)
    const [catchPhrase, setCatchPhrase] = useState(lists.catchPhrase)
    const [bs, setBs] = useState(lists.bs)

    const handleSave = () => {
      const updatedList = {
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
      bs
      };

      fetch(`https://jsonplaceholder.typicode.com/users/${lists.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedList),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => navigate("/AllLists"));
  };

  return (
    <div>
      <h2>Edit List Item</h2>
      
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
      <Button
        color="success"
        variant="contained"
        onClick={handleSave} 
      >
        SAVE
      </Button>
    </div>
    </div>
  );
}
