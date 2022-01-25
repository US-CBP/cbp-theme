const colors = [
  {
    blues: {
      "$cbp-blue-5": "#e8f5ff",
      "$cbp-blue-10": "#cfe8ff",
      "$cbp-blue-20": "#a1d3ff",
      "$cbp-blue-30": "#58b4ff",
      "$cbp-blue-40": "#2491ff",
      "$cbp-blue-50": "#0076d6",
      "$cbp-blue-60": "#005ea2",
      "$cbp-blue-70": "#0b4778",
      "$cbp-blue-80": "#112f4e",
    },
  },
  {
    coolBlues: {
      "$cbp-blue-cool-5": "#e1f3f8",
      "$cbp-blue-cool-10": "#c3ebfa",
      "$cbp-blue-cool-20": "#97d4ea",
      "$cbp-blue-cool-30": "#59b9de",
      "$cbp-blue-cool-40": "#28a0cb",
      "$cbp-blue-cool-50": "#0d7ea2",
      "$cbp-blue-cool-60": "#07648d",
      "$cbp-blue-cool-70": "#074b69",
      "$cbp-blue-cool-80": "#002d3f",
    },
  },
  {
    warmBlues: {
      "$cbp-blue-warm-5": "#edf5ff",
      "$cbp-blue-warm-10": "#d4e5ff",
      "$cbp-blue-warm-20": "#adcdff",
      "$cbp-blue-warm-30": "#81aefc",
      "$cbp-blue-warm-40": "#5994f6",
      "$cbp-blue-warm-50": "#2672de",
      "$cbp-blue-warm-60": "#0050d8",
      "$cbp-blue-warm-70": "#1a4480",
      "$cbp-blue-warm-80": "#162e51",
    },
  },
];

const createPalettte = (color) => {
  const palette = document.createElement("div");

  palette.className = "cbp-palette";
  palette.style.backgroundColor = color;

  return palette;
};

const appendPalette = (id, colorList) => {
  const wrapper = document.getElementById(id);

  for (const color in colorList) {
    if (Object.hasOwnProperty.call(colorList, color)) {
      const element = createPalettte(colorList[color]);

      wrapper.appendChild(element);
    }
  }
};

colors.forEach(color => {
  console.log(color);
})