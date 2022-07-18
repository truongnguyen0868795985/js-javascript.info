function parse() {
  const regexp = /(?<a>-?\d+(\.\d+)?)\s*(?<op>[-+*\/])\s*(?<b>-?\d+(\.\d+)?)/;
  let groups = "1.2 * 3.4".match(regexp).groups;
  alert(groups.a);
  alert(groups.op);
  alert(groups.b);

  // for (let result of results) {
  //   let { a, op, b } = result.groups;
  //   alert(`${a}.${op}`);
  // }
}

parse();
