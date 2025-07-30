// alert
alert("Hello world!");

// prompt
prompt("masukkan nama anda: "); //contoh promt 1
// contoh prompt 2
var umur = prompt("masukkan umur anda: ");
console.log("Umur saya adalah " + umur);

// confirm -> mengembalikan nilai true atau false
confirm("Kamu yakin?"); // contoh confirm 1
// contoh confirm 2
var cek = confirm("apakah anda setuju?");
if (cek == true) {
  console.log("anda menekan tombol ok");
} else {
  console.log("anda menekan tombol cancel");
}

// contoh confirm 3
alert("selamat datang..");

var lagi = true;
while (lagi) {
  var nama = prompt("masukkan nama anda: ");
  alert("Halo " + nama);

  lagi = confirm("apakah anda ingin mengulang?");
}
alert("selamat tinggal");
