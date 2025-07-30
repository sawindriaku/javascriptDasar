// var angka = prompt("Masukkan angka: ");
// if (angka % 2 == 0) {
//   console.log(angka + " adalah bilangan genap");
// } else {
//   console.log(angka + " adalah bilangan ganjil");
// }

// latihan 3 - looping menggunakan for saja
// tampilkan "angkot no 1-6 beroperasi dengan baik" dan "angkot no 7-10 sedang tidak beroperasi."
var noAngkot = 1;
var jmlAngkot = 10;
var AngkotBeroperasi = 6;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  // lakukan pengecekan menggunakan pengkondisin if else
  if (noAngkot >= AngkotBeroperasi + 1) {
    console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
  } else {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
  }
}
