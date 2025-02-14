import Icon from "@mui/material/Icon";
import { FaWhatsapp } from "react-icons/fa";
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
                <Icon>mail</Icon>contacto.skytechapp@gmail.com
              </li>
            </ul>

            <ul>
            <li>
                {" "}
                <div className="icon-container">
                  <FaWhatsapp style={{ color: "#ffffff" }} />
                </div>
                +5491168221996
              </li>
            </ul>
            <div className="image-container">
              <img
                src="/skytech-logo2.png"
                alt="skytech-logo"
                style={{
                  width: "50%",
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
                <Icon>mail</Icon>contacto.skytech@gmail.com
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
                {" "}
                <div className="icon-container">
                  <FaWhatsapp style={{ color: "#ffffff" }} />
                </div>
                +549111233597
              </li>
            </ul>
          </section>
        </>
      )}
    </>
  );
}

export default Networks;
