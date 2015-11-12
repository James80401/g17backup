var animals = {
    dog: bark,
    cat: meow,
    fish: blub,
    bird: caw,
    cow: moo

}
  var body = document.getElementsByTagName("body")[0]);

  var table =  document.createElement("table");
  var tablebody = document.createElement("tbody")
  table.appendChild(tablebody);
  body.appendChild(table);
  for (name in animals) {
    var row =  document.createElement("tr");
    tablebody.appendChild(row);
    var cellText = document.createTextNode(name);
    row.appendChild(cellText);
    var cell =  document.createElement("td");
    row.appendChild(cell);
    var cellText2 = document.createTextNode(animal[name]);
    cell.appendChild(cellText2);
  };
