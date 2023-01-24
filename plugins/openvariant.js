const plugin = require("tailwindcss/plugin");

const openVariant = plugin(function ({ addVariant }) {
  addVariant("group-open", ":merge(.group).open &");
  addVariant("peer-open", ":merge(.peer).open ~ &");
});

//Peer is used to target the sibling of the element that has the class .peer
//Group is used to target the children of the element that has the class .group

module.exports = openVariant;
