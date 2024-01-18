function hitungLuas() {
    // Mendapatkan nilai panjang sisi dari input
    var sisi = document.getElementById("sisi").value;

    // Menghitung luas persegi
    var luasPersegi = sisi * sisi;

    // Menampilkan hasilnya
    var hasilLuasElement = document.getElementById("hasilLuas");
    hasilLuasElement.innerHTML = "Luas persegi dengan sisi " + sisi + " adalah: " + luasPersegi;
}
function Reset() {
    var hasilLuasElement = document.getElementById("hasilLuas");
    // Menghapus isi elemen hasilLuas
    hasilLuasElement.innerHTML = "";
}