import "./legend.css"
import { Link } from "react-router-dom";

function Legend () {
    return(
        <section className="legend-section" id="about">
        <div className="image-container">
        <Link to={"/"}>
        <img
            src="/skytech-logo2.png"
            alt="skytech-logo"
          />
              </Link>

        </div>
        <h2>Somos tu MEJOR aliado tecnológico</h2>
        <div></div>
      </section>
    )
}

export default Legend;