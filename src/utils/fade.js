function fade(color, alpha) {
  if (parseFloat(alpha) > 1 || parseFloat(alpha) < 0) {
    throw new Error("alpha cannot be larger than 1 or less than 0");
  }
  if (color.startsWith("rgb")) {
    const rgbValues = color.match(/\d+/g);
    const [r, g, b] = rgbValues;
    rgbValues.forEach((rgbValue) => {
      if (parseInt(rgbValue) > 255 || parseInt(rgbValue) < 0) {
        throw new Error("rgb color cannot be out of 255 range or less than 0");
      }
    });
    return `rgba(${r},${g},${b},${alpha})`;
  } else if (color.startsWith("#")) {
    if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)) {
      throw new Error(`${color} is not valid hexadecimal color`);
    }
    const numericColor = parseInt(color.replace("#", ""), 16);
    const red = (numericColor >> 16) & 255;
    const green = (numericColor >> 8) & 255;
    const blue = numericColor & 255;
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  } else {
    const tempElement = document.createElement("div");
    tempElement.style.color = color;
    document.body.appendChild(tempElement);
    const computedColor = window.getComputedStyle(tempElement).color;
    document.body.removeChild(tempElement);
    const [red, green, blue] = computedColor.match(/\d+/g);
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }
}
export default fade;
