const plugin = require("tailwindcss/plugin");

const outlineSolid = plugin(function ({ addUtilities }) {
  addUtilities({
    ".outline-solid": {
      "outline-style": "solid",
    },
  });
});

//Peer is used to target the sibling of the element that has the class .peer
//Group is used to target the children of the element that has the class .group

module.exports = outlineSolid;
