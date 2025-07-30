for (let nilaiAwal = 1; nilaiAwal < 5; nilaiAwal++) {
  console.log("Hallo " + nilaiAwal);
}

// latihan 2 - looping menggunakan for dan while
// tampilkan "angkot no 1-6 beroperasi dengan baik" dan "angkot no 7-10 sedang tidak beroperasi."
// untuk angkot yang beroperasi dengan baik, gunakan while
// sedangkan untuk angkot yang tidak beroperasi, gunakan for
var noAngkot = 1;
var jmlAngkot = 10;
var AngkotBeroperasi = 3;
// perulangan while
while (noAngkot <= AngkotBeroperasi) {
  console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
  noAngkot++;
}
// perulangan for
for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi. ");
}
// NB: contoh lainnya
// for (noAngkot = AngkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
//   console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi. ");
// }
