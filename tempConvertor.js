const calcTemp = () => {
  const temp = document.getElementById("temp").value;
  const unitsSelect = document.getElementById("unit");
  const Unitvalue = unit.options[unitsSelect.selectedIndex].value;
  let result;
  function celtofah(cel) {
    let Fah = Math.round((cel * 9) / 5 + 32);
    return Fah;
  }
  function fahtocel(fah) {
    let Cel = Math.round((fah - 32 * 5) / 9);
    return Cel;
  }

  if (Unitvalue == "cel") {
    result = celtofah(temp);
    document.getElementById("result").innerHTML = `= ${result}°Fahrenhiet`;
  } else {
    result = fahtocel(temp);
    document.getElementById("result").innerHTML = `= ${result}°Celsius`;
  }
};
