import style from "./Contact.module.css";
import {useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { Menu } from "./components/menu";

function Contact() {
  const position = [-25.412623,-49.281861917];
    const defaultPhoneNumber = "5541997636778" 
  
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
   
    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData({...formData, [name]: value})
    }
  
    const handleZap = () => {
      const {name, email, message} = formData;
  
      const urlZAPZAP = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
      Nome:%20${name}%0D%0A
      Email:%20${email}%0D%0A
      Mensagem:%20${message}%0D%0A`;
  
      window.open(urlZAPZAP, "_blank")
    }

  return (
  
    <>
    <section id = 's1'>
    <Menu option01='Voltar a página principal'/>
      <h2 className={style.tt}>Mapa</h2>
      <br />
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width: "100%", height: "500px"}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A casa do seth brians. <br /> ele não tem cavalo ele tem o voyage.
          </Popup>
        </Marker>
      </MapContainer>
      </section>
      <section className={style.formulario}>
        <h2>Contato</h2>
      <input placeholder='Insira seu nome' type="text" id='name' name='name' value={formData.name} onChange={handleChange} required/><br /><br />
          <input placeholder='Insira seu email' type="email" id='email' name='email' value={formData.email} onChange={handleChange} required/><br /><br />
          <textarea placeholder='Insira mensagem' id='message' name='message' value={formData.message} onChange={handleChange} cols="30" rows="10" required></textarea><br /><br />
          <button onClick={handleZap}>Enviar mensagem</button>
      </section><br /><br /><br /><br /><br /><br />
    </>


  );

}
export default Contact;
