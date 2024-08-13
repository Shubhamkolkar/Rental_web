import "../styles/ContactComponent.css";
import { IoCall, IoLocation } from "react-icons/io5";
import { RiHomeOfficeFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

export default function ContactComponent() {
  return (
    <div className="contact-component">
      <div className="contact-box">
        <h4 className="number">
          <RiHomeOfficeFill className="icon" />
          Mumbai Office
        </h4>
        <p className="number">
          <IoCall className="icon" />
          1234567890
        </p>
        <p className="number">
          <MdEmail className="icon" />
          GovindSingh2001@gmail.com
        </p>
        <p className="number">
          <IoLocation className="icon" />
          Block-14, Kings Tower, Mumbai
        </p>
      </div>
      <div className="contact-box">
        <h4>
          <RiHomeOfficeFill className="icon" />
          Pune Office
        </h4>
        <p className="number">
          <IoCall className="icon" />
          1234567890
        </p>
        <p className="number">
          <MdEmail className="icon" />
         GovindSingh2001@gmail.com
        </p>
        <p>
          <IoLocation className="icon" />
          Area 52,Cirle Area, Pune
        </p>
      </div>
      <div className="contact-box">
        <h4>
          <RiHomeOfficeFill className="icon" />
          Hydrabad Office
        </h4>
        <p className="number">
          <IoCall className="icon" />
          1234567890
        </p>
        <p className="number">
          <MdEmail className="icon" />
          GovindSingh2001@gmail.com
        </p>
        <p>
          <IoLocation className="icon" />
          Khanji Road, Hydrabad
        </p>
      </div>
    </div>
  );
}
