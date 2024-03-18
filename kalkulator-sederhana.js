function tambah(angka1, angka2) {
    return angka1 + angka2;
}
var hasilTambah = tambah(10, 20);
console.log("Hasil penambahan: " + hasilTambah);

function kurang(angka1, angka2) {
    return angka1 - angka2;
}
var hasilKurang = kurang(10, 3);
console.log("Hasil pengurangan: " + hasilKurang);

function kali(angka1, angka2) {
    return angka1 * angka2;
}
var hasilKali = kali(5, 3);
console.log("Hasil perkalian: " + hasilKali);

function bagi(angka1, angka2) {
    // Periksa apakah angka2 adalah nol
    if (angka2 === 0) {
        return "Tidak bisa dibagi dengan nol";
    } else {
        return angka1 / angka2;
    }
}
var hasilBagi = bagi(10, 2);
console.log("Hasil pembagian: " + hasilBagi);

function modulus(angka1, angka2) {
    return angka1 % angka2;
}
var hasilModulus = modulus(11, 2);
console.log("Hasil modulus: " + hasilModulus);
