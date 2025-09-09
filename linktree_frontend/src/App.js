import React, { useState, useEffect } from "react";
import "./App.css";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

function App() {
  const [links, setLinks] = useState([]);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/links/")
      .then((response) => response.json())
      .then((data) => {
        setLinks(data);
        if (
          data.length > 0 &&
          data[0].user &&
          data[0].user.profile &&
          data[0].user.profile.profile_image
        ) {
          setProfileImage(data[0].user.profile.profile_image);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {profileImage && (
          <img src={profileImage} alt="Profile" className="profile-image" />
        )}
        <h1>Matheus Galiano</h1>
        <p>Gaúcho, desenvolvedor Full Stack</p>
        <div className="links-container">
          {links.length > 0 ? (
            links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                className="link-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.title}
              </a>
            ))
          ) : (
            <p>Carregando links...</p>
          )}
        </div>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/matheusgaliano/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} color="#fff" />
          </a>
          <a
            href="https://github.com/matheusgaliano"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} color="#fff" />
          </a>
          <a
            href="https://wa.me/5555999999999"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={30} color="#fff" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
