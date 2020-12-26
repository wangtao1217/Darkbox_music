const author = (arr) => {
    if (!arr) return null;
    if (arr.length === 1) return arr[0].name;
    let list = [];
    arr.map((i) => list.push(i.name));

    return list.join("/");
  };

  export default author