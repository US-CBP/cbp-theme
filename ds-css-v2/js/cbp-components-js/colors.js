const blue = [ "#e8f5ff", "#cfe8ff", "#a1d3ff", "#58b4ff", "#2491ff", "#0076d6", "#005ea2", "#0b4778", "#112f4e", ];
const blueCool = [ "#e1f3f8", "#c3ebfa", "#97d4ea", "#59b9de", "#28a0cb", "#0d7ea2", "#07648d", "#074b69", "#002d3f", ];
const blueWarm = [ "#edf5ff", "#d4e5ff", "#adcdff", "#81aefc", "#5994f6", "#2672de", "#0050d8", "#1a4480", "#162e51", ];
const cyan = [ "#e5faff", "#a8f2ff", "#52daf2", "#00bde3", "#009ec1", "#0081a1", "#00687d", "#0e4f5c", "#093b44", ];
const gold = [ "#fef0c8", "#ffe396", "#ffbe2e", "#e5a000", "#c2850c", "#936f38", "#7a591a", "#5c410a", "#3b2b15", ];
const gray = [ "#fcfcfc", "#f9f9f9", "#f6f6f6", "#f3f3f3", "#f0f0f0", "#e6e6e6", "#c9c9c9", "#adadad", "#919191", "#757575", "#5c5c5c", "#454545", "#2e2e2e", "#1b1b1b", ];
const grayCool = [ "#fbfcfd", "#f7f9fa", "#f5f6f7", "#f1f3f6", "#edeff0", "#dfe1e2", "#c6cace", "#a9aeb1", "#8d9297", "#71767a", "#565c65", "#3d4551", "#2d2e2f", "#1c1d1f", ];
const grayWarm = [ "#fcfcfb", "#f9f9f7", "#f6f9f7", "#f5f5f0", "#f0f0ec", "#e6e6e2", "#cac9c0", "#afaea2", "#929285", "#76766a", "#5d5d52", "#454540", "#2e2e2a", "#171716", ];
const green = [ "#ddf9c7", "#c5ee93", "#98d035", "#7fb135", "#719f2a", "#538200", "#466c04", "#2f4a0b", "#243413", ];
const greenWarm = [ "#f5fbc1", "#e7f434", "#c5d30a", "#a3b72c", "#7e9c1d", "#6a7d00", "#5a6613", "#4b4e10", "#38380b", ];
const greenCool = [ "#e3f5e1", "#b7f5bd", "#70e17b", "#21c834", "#00a91c", "#008817", "#216e1f", "#154c21", "#19311e", ];
const indigo = [ "#f0f0ff", "#e0e0ff", "#ccceff", "#a3a7fa", "#8289ff", "#656bd7", "#4a50c4", "#3333a3", "#212463", ];
const indigoCool = [ "#edf0ff", "#dee5ff", "#b8c8ff", "#94adff", "#628ef4", "#4866ff", "#3e4ded", "#222fbf", "#1b2b85", ];
const indigoWarm = [ "#f5f2ff", "#e4deff", "#cfc4fd", "#b69fff", "#967efb", "#745fe9", "#5942d2", "#3d2c9d", "#261f5b", ];
const magenta = [ "#fff2f5", "#ffddea", "#ffb4cf", "#ff87b2", "#fd4496", "#d72d79", "#ab2165", "#731f44", "#4f172e", ];
const mint = [ "#c9fbeb", "#83fcd4", "#0ceda6", "#04c585", "#00a871", "#008659", "#146947", "#0c4e29", "#0d351e", ];
const mintCool = [ "#d5fbf3", "#7efbe1", "#29e1cb", "#1dc2ae", "#00a398", "#008480", "#0f6460", "#0b4b3f", "#123131", ];
const orange = [ "#fef2e4", "#fce2c5", "#ffbc78", "#fa9441", "#e66f0e", "#c05600", "#8c471c", "#5f3617", "#352313", ];
const red = [ "#fff3f2", "#fde0db", "#fdb8ae", "#ff8d7b", "#fb5a47", "#e52207", "#b50909", "#8b0a03", "#5c1111", ];
const redWarm = [ "#fff5ee", "#fce1d4", "#f6bd9c", "#f39268", "#ef5e25", "#d54309", "#9c3d10", "#63340f", "#3e2a1e", ];
const redCool = [ "#fff2f5", "#f8dfe2", "#f8b9c5", "#fd8ba0", "#f45d79", "#e41d3d", "#b21d38", "#822133", "#4f1c24", ];
const violet = [ "#f7f2ff", "#ede3ff", "#d5bfff", "#c39deb", "#ad79e9", "#9355dc", "#783cb9", "#54278f", "#39215e", ];
const violetWarm = [ "#fef2ff", "#fbdcff", "#f4b2ff", "#ee83ff", "#d85bef", "#be32d0", "#93348c", "#711e6c", "#481441", ];
const yellow = [ "#fff5c2", "#fee685", "#face00", "#ddaa01", "#b38c00", "#947100", "#776017", "#5c4809", "#422d19", ];
const white = ["#ffffff"];
const black = ["#000000"];

const colors = {
  blue,
  "blue-cool": blueCool,
  "blue-warm": blueWarm,
  cyan,
  gold,
  gray,
  "gray-cool": grayCool,
  "gray-warm": grayWarm,
  green,
  "green-warm": greenWarm,
  "green-cool": greenCool,
  indigo,
  "indigo-cool": indigoCool,
  "indigo-warm": indigoWarm,
  magenta,
  mint,
  "mint-cool": mintCool,
  orange,
  red,
  "red-warm": redWarm,
  "red-cool": redCool,
  violet,
  "violet-warm": violetWarm,
  yellow,
  white,
  black
};

const createPalettte = (color) => {
  const palette = document.createElement("div");

  palette.className = "cbp-palette";
  palette.style.backgroundColor = color;

  palette.appendChild(createLabel(color));

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

const createLabel = (color) => {
  const label = document.createElement("div");
  const labelText = document.createElement("span");

  labelText.innerHTML = color;
  label.appendChild(labelText);

  return label;
}

for (const color in colors) {
  if (Object.hasOwnProperty.call(colors, color)) {
    const arr = colors[color];

    appendPalette(`palette-${color}`, arr);
  }
}
