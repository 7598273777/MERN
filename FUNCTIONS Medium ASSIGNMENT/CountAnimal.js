function CountAnimals(tur, horse, pigs) {
  let turleg = tur * 2;
  let horseleg = horse * 4;
  let pigsleg = pigs * 4;
  let Totallegs = turleg + horseleg + pigsleg;
  console.log(Totallegs);
}
var legs = CountAnimals(2, 3, 5);
//output : 36