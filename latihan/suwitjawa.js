var tanya = true;
while (tanya) {
  // menangkap pilihan player
  var player = prompt("batu, gunting, kertas");

  // menangkap pilihan komputer
  // membangkitkan bilangan randoms
  var komputer = Math.random();

  if (komputer < 0.34) {
    komputer = "batu";
  } else if (komputer >= 0.34 && komputer <= 0.6) {
    komputer = "gunting";
  } else {
    komputer = "kertas";
  }

  // menentukan rules
  var hasil = "";
  if (player == komputer) {
    //   alert("hasilnya SERI");
    hasil = "SERI";
  } else if (player == "batu") {
    //   if (komputer == "gunting") {
    //     alert("Menang");
    //   } else {
    //     alert("KALAH");
    //   }
    // menggunakan operator ternary
    hasil = komputer == "gunting" ? "MENANG" : "KALAH";
  } else if (player == "gunting") {
    hasil = komputer == "kertas" ? "MENANG" : "KALAH";
  } else if (player == "kertas") {
    hasil = komputer == "batu" ? "MENANG" : "KALAH";
  } else {
    hasil = "Anda memasukkan pilihan yang salah!!";
  }

  // tampilkan hasilnya
  alert(
    "anda memilih : " +
      player +
      " Vs komputer memilih : " +
      komputer +
      "\nHasilnya anda : " +
      hasil
  );

  tanya = confirm("Lagi?");
}
alert("terima kasih telah bermain!! Sampai jumpa.");
