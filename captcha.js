const { createCanvas } = require("canvas");
const alternateCapitals = str => [...str].map((char, i) => char[`to${i % 2 ? "Upper" : "Lower"}Case`]()).join("");

const randomText = () =>
  alternateCapitals(
    Math.random()
      .toString(36)
      .substring(2, 8)
  );

const FONTBASE = 200;
const FONTSIZE = 35;

const relativeFont = width => {
  const ratio = FONTSIZE / FONTBASE;
  const size = width * ratio;
  return `${size}px serif`;
};

const arbitraryRandom = (min, max) => Math.random() * (max - min) + min;

const randomRotation = (degrees = 15) => (arbitraryRandom(-degrees, degrees) * Math.PI) / 180;

const configureText = (ctx, width, height) => {
    ctx.font = relativeFont(width);
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    const text = randomText();
    ctx.fillText(text, width / 2, height / 2);
    return text;
  };
  
  const generate = (width, height) => {
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");
    ctx.rotate(randomRotation());
    const text = configureText(ctx, width, height);
    console.log(text)
    return {
      image: canvas.toDataURL(),
      text: text
    };
  };

  module.exports = generate;