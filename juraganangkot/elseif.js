// var angka = prompt("Masukkan angka: ");

// if (angka % 2 == 0) {
//   console.log(angka + " adalah bilangan genap");
// } else if (angka % 2 == 1) {
//   console.log(angka + " adalah bilangan ganjil");
// } else {
//   console.log("Yang anda masukkan bukan angka");
// }

// latihan 4 - Pengkonsisian else if
// tampilkan "angkot no 1-6 beroperasi dengan baik" dan "angkot no 7-10 sedang tidak beroperasi."
// tapi tampilkan angkot no 8 sedang lembur
var noAngkot = 1;
var jmlAngkot = 10;
var AngkotBeroperasi = 6;
var angkotLembur = 8;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= AngkotBeroperasi) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
  } else if (noAngkot == angkotLembur) {
    console.log("Angkot No. " + noAngkot + " sedang lembur");
  } else {
    console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
  }
}
