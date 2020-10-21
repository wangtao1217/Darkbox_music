export default [
  { name: "discover", type: "item" ,url:'explore'},
  { name: "like", type: "item",url:'like' },
  {
    name: "专辑",
    type: "sub",
    child: [
      { name: "⭐", type: "item" },
      { name: "🌙", type: "item" },
      { name: "🧀", type: "item" }
    ]
  },
  // { name: "🤣", type: "item" }
];
