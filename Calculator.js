function kalkulator() {
  //variable angka satu
  var angkaSatu = parseInt(document.getElementById("angkaSatu").value);
  //variable angka dua
  var angkaDua = parseInt(document.getElementById("angkaDua").value);
  //variable angka Tiga
  var angkaTiga = parseInt(document.getElementById("angkaTiga").value);
  //variable operasi aritmatik
  var op = document.getElementById("op").value;
  //variable angka hasil
  var hasil = document.getElementById("hasil");
  //variable untuk total angka satu dan angka dua
  var total;
  if (isNaN(angkaSatu) || isNaN(angkaDua) || isNaN(angkaTiga)) {
    alert("Silahkan Masukkan Angka ");
  } else {
    if (op == "+") {
      total = angkaSatu + angkaDua + angkaTiga;
    } else if (op == "-") {
      total = angkaSatu - angkaDua - angkaTiga;
    } else if (op == "x") {
      total = angkaSatu * angkaDua * angkaTiga;
    } else {
      total = angkaSatu / angkaDua / angkaTiga;
    }
  }
  hasil.value = total;
}
