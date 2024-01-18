export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function convertToCSV(objArray) {
  const array = typeof objArray !== "object" ? JSON.parse(objArray) : objArray;
  let str = "";

  // Extract headers
  let header = Object.keys(array[0]).join(",");
  str += header + "\r\n";

  // Extract data rows
  for (let i = 0; i < array.length; i++) {
    let line = "";
    for (let index in array[i]) {
      if (line !== "") line += ",";

      line += array[i][index];
    }

    str += line + "\r\n";
  }

  return str;
}

export function downloadCSV(array) {
  const csvStr = convertToCSV(array);
  const blob = new Blob([csvStr], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "export.csv");
  link.style.visibility = "hidden";
  document.body.appendChild(link);

  link.click();
  document.body.removeChild(link);
}

// Usage example
// Assuming newStatesBoxes is the array you want to export
// Add a button in your component and call this function onClick
