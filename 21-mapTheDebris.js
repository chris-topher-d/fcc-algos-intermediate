function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(item => {
    let time = (Math.PI * 2) * Math.sqrt(Math.pow(earthRadius + item['avgAlt'], 3) / GM);
    return {
      name: item.name,
      orbitalPeriod: Math.round(time)
    };
  });
}

let output = orbitalPeriod([
  {name: "iss", avgAlt: 413.6},
  {name: "hubble", avgAlt: 556.7},
  {name: "moon", avgAlt: 378632.553}
]); // [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]

console.log(output);
