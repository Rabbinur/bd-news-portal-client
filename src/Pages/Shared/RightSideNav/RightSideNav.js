import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  IconName,
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BarndCarousel from "../BarndCarousel/BarndCarousel";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
const RightSideNav = () => {
  //get google
  const { providerLogin } = useContext(AuthContext);
  //set google Auth provider
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider) //call google provider
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleSignIn}
          className="mb-2"
          variant="outline-primary"
        >
          <FaGoogle></FaGoogle> Login With Google
        </Button>
        <Button variant="outline-dark">
          {" "}
          <FaGithub></FaGithub> Login With GitHub
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            {" "}
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            {" "}
            <FaWhatsapp></FaWhatsapp> WhatsApp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            {" "}
            <FaTwitch></FaTwitch>Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter></FaTwitter> FaTwitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BarndCarousel></BarndCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
