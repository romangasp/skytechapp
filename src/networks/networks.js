import Icon from "@mui/material/Icon";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useMediaQuery } from "@mui/material";
import "./networks.css";

function Networks() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      {isMobile ? (
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
            <div className="image-container">
              <img
                src="/skytech-logo2.png"
                alt="skytech-logo"
                style={{
                  width: "50%",
                  // height: "80%",
                  top: "105px",
                  gap: "0px",
                  opacity: "0px",
                }}
              />
            </div>
          </section>
        </>
      ) : (
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
                  width: "30%",
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
      )}
    </>
  );
}

export default Networks;
