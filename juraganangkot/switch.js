var item = prompt(
  "masukkan nama makanan: \n (contoh: nasi, susu, pizza, softdrink)"
);

switch (item) {
  case "nasi":
    console.log("makanan / minuman sehat");
    break;
  case "susu":
    console.log("makanan / minuman sehat");
    break;
  case "pizza":
    console.log("makanan / minuman tidak sehat");
    break;
  case "softdrink":
    console.log("makanan / minuman tidak sehat");
    break;
  default:
    console.log("makanan / minuman tidak terdaftar");
    break;
}
