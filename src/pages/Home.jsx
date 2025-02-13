import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    instagram: "",
    phone: "",
    product: "",
    comments: "",
    balance: "",
    shipping: "",
    dayTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submittedData = { ...formData };
    for (let key in submittedData) {
      if (submittedData[key] === "") {
        submittedData[key] = "-";
      }
    }

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwTXiO8kG4RXKBdigyOGzrkYok4RAwFW2uQ9hKfP3bi/dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submittedData),
      });

      const result = await response.json();
      if (result.result === "success") {
        alert("Datos enviados con éxito!");
      }
    } catch (error) {
      console.error("Error al enviar los datos: ", error);
      alert("Hubo un problema al enviar los datos.");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="instagram">Instagram</label>
          <input
            type="text"
            id="instagram"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="phone">Celular</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]*"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="product">Pedido</label>
          <input
            type="text"
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="comments">Observaciones</label>
          <input
            type="text"
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="balance">Saldo</label>
          <input
            type="number"
            id="balance"
            name="balance"
            value={formData.balance}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="shipping">Retiro/Envío:</label>
          <select
            id="shipping"
            name="shipping"
            value={formData.shipping}
            onChange={handleChange}
          >
            <option value="">Selecciona una opción</option>
            <option value="Retira">Retira</option>
            <option value="PedidosYa">Pedidos Ya</option>
            <option value="Uber">Uber</option>
            <option value="Envío nuestro">Envío nuestro</option>
          </select>
        </div>

        <div>
          <label htmlFor="dayTime">Día y Hora:</label>
          <input
            type="datetime-local"
            id="dayTime"
            name="dayTime"
            value={formData.dayTime}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}