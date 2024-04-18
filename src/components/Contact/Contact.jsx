import ButtonMailto from "./Email";
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact">
      <h2 className="contactHeading">Contact</h2>
      <div className="btn_container">
        <div className="btn">
          <ButtonMailto mailto="erkoabdu@gmail.com" label="email me!" />
        </div>
      </div>
    </div>
  )
}