import React, { useState } from "react";
import "./form.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast } from "react-toastify";

function Form() {
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${API_BASE_URL}api/sendEmail`,
        formData
      );

      if (response.status === 200) {
        toast.success("Correo enviado exitosamente");
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      const errorMessage =
        error.response?.data?.error || "Error interno del servidor";
      toast.error(`Hubo un problema al enviar el formulario: ${errorMessage}`);
    }
  };

  return (
    <div className="form-background">
      <div className="title-container">
        <h2>¡Contáctanos!</h2>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <TextField
          label="Nombre y Apellido"
          variant="filled"
          size="small"
          fullWidth
          margin="dense"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Teléfono"
          variant="filled"
          size="small"
          fullWidth
          margin="dense"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <TextField
          label="E-mail"
          variant="filled"
          size="small"
          fullWidth
          margin="dense"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Asunto"
          variant="filled"
          size="small"
          fullWidth
          margin="dense"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <TextField
          label="Mensaje"
          variant="filled"
          multiline
          rows={4}
          fullWidth
          margin="dense"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <div className="container-button">
          <Button
            variant="contained"
            type="submit"
            sx={{
              width: "50%",
              backgroundColor: "#062137",
              color: "#ffffff",
              "&:hover": { backgroundColor: "#30628B}" },
            }}
          >
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
