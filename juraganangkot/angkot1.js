// latihan 1
// buat looping/perulangan bertuliskan "Angkot No. 1-10 beroperasi dengan baik."
// sebelum memulai looping, tentukan nilai awalnya
var angkot = 1;
// cek kondisi apakah bernilai true atau benar
while (angkot <= 10) {
  // ekseksi baris kode ini apabila kondisi benar dan bernilai true
  console.log("Angkot No. " + angkot + " beroperasi dengan baik.");
  //   lakukan increment nilai awal di akhir untuk tiap-tiap akhir pengulangan/loop
  angkot++;
}

console.log("\n");
// perbaikan versi di atas

var noAwalAngkot = 1;
var jumlahAngkot = 10;
while (noAwalAngkot <= jumlahAngkot) {
  console.log("Angkot No. " + noAwalAngkot + " beroperasi dengan baik.");
  noAwalAngkot++;
}
