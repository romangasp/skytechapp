import Icon from "@mui/material/Icon";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function Networks () {

    return (
        <>
      <section className="networks-section" id="about">
        <ul>
          <li>
            <Icon>mail</Icon>skytech@gmail.com
          </li>
          <li>
            <Icon>location_on</Icon>Avenida xxxx, xxxx
          </li>
          <li>
            {" "}
            <div className="icon-container">
              <FaWhatsapp style={{ color: "#ffffff" }} />
            </div>
            +549111233597
          </li>
        </ul>
        <div className="image-container">
          <img
            src="/skytech-logo2.png"
            alt="skytech-logo"
            style={{
              width: "80%",
              height: "80%",
              top: "105px",
              gap: "0px",
              opacity: "0px",
            }}
          />
        </div>
        <ul>
          <li>
            <Icon>facebook</Icon>skytech
          </li>
          <li>
            {" "}
            <div className="icon-container">
              <FaInstagram style={{ color: "#ffffff" }} />
            </div>
            skytech.ar
          </li>
        </ul>
      </section>
        </>
        
    );

}

export default Networks;