// menampilkan 5 bintang
for (var i = 0; i < 5; i++) {
  console.log("*");
}

// menampilkan 5 bintang secara vertikal atau kesamping kanan
// *****
var s = "";
for (var x = 0; x < 5; x++) {
  s += "*";
}
console.log(s);

// menampilkan 5 bintang secara horizontal atau kebawah
// *
// *
// *
// *
// *
var s = "";
for (var y = 0; y < 5; y++) {
  s += "*";
  s += "\n";
}
console.log(s);

// menampilkan 7 bintang secara vertikal atau kanan dan 10 bintang ke bawah atau horizontal
// *******
// *******
// *******
// *******
// *******
// *******
// *******
// *******
// *******
// *******
// *******
var s = "";
for (var a = 0; a < 7; a++) {
  for (var b = 0; b < 10; b++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);

// meanpilkan bintang baris pertama 1 baris ke dua 2, hingga ke n
// *
// **
// ***
// ****
// *****
var s = "";
for (var a = 0; a < 5; a++) {
  for (var b = 0; b <= a; b++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);

// meanpilkan bintang baris pertama 5 baris ke dua 4, hingga ke n
// *****
// ****
// ***
// **
// *
var s = "";
for (var a = 5; a > 0; a--) {
  for (var b = 0; b < a; b++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);

// meanpilkan bintang baris pertama 5 baris ke dua 4, hingga ke n
// *****
//  ****
//   ***
//    **
//     *
