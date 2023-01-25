import React, { useState } from 'react';

function Converter() {
  const [form, setForm] = useState({
    hex: '#34495e',
  });

  const handlerChange = (event) => {
    const { name } = event.target;
    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: event.target.value,
      };
    });
  };

  let hexCode = form.hex;
  let rgbArr = [];

  if (hexCode.length === 7) {
    if (/^#?[A-Fa-f0-9]{6}$/.test(hexCode)) {
      hexCode = hexCode.split('#')[1];
      for (let i = 0; i < hexCode.length; i += 2) {
        rgbArr.push(parseInt(hexCode[i] + hexCode[i + 1], 16));
      }
    }
  }

  let res = 'RGB(' + rgbArr[0] + ', ' + rgbArr[1] + ', ' + rgbArr[2] + ')';

  const containerStyle = {background:  hexCode}

  return (
    <div className="container" style={containerStyle}>
      <div className="wrapper">
        <input
          className="hex"
          id="hex"
          name="hex"
          placeholder="#34495e"
          onChange={handlerChange}
          value={form.hex}
        />
        <div className="rgb" id="rgb">
        {(form.hex.length < 7) ? "Ожидаю ввода" : (/^#?[A-Fa-f0-9]{6}$/.test(hexCode)) ? res : "Ошибка!"}
        </div>
      </div>
    </div>
  );
}

export default Converter;
