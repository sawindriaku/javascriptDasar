// latihan 5 - Pengkonsisian else if
// tampilkan "angkot no 1-6 beroperasi dengan baik" dan "angkot no 7-10 sedang tidak beroperasi."
// tapi tampilkan angkot no 8 dan 10 sedang lembur
var noAngkot = 1;
var jmlAngkot = 10;
var AngkotBeroperasi = 6;
var angkotLembur1 = 8;
var angkotLembur2 = 10;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= AngkotBeroperasi) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
  } else if (noAngkot == angkotLembur1) {
    console.log("Angkot No. " + noAngkot + " sedang lembur");
  } else if (noAngkot == angkotLembur2) {
    console.log("Angkot No. " + noAngkot + " sedang lembur");
  } else {
    console.log("Angkot No. " + noAngkot + " sedang tidak dapat beroperasi");
  }
}
