// script.js
function tambahReview() {
    let input = document.getElementById("review-input");
    let reviewContainer = document.getElementById("review-container");
    
    if (input.value.trim() !== "") {
        let newReview = document.createElement("p");
        newReview.textContent = input.value;
        reviewContainer.appendChild(newReview);
        input.value = "";
    } else {
        alert("Masukkan review terlebih dahulu!");
    }
}

function hitungCicilan() {
    let harga = parseFloat(document.getElementById("harga").value);
    let dp = parseFloat(document.getElementById("dp").value);
    let tenor = parseInt(document.getElementById("tenor").value);
    
    if (isNaN(harga) || isNaN(dp) || isNaN(tenor) || tenor <= 0) {
        alert("Masukkan angka yang valid!");
        return;
    }
    
    let sisaPembayaran = harga - dp;
    let bunga = 0.05; // 5% per tahun
    let totalBunga = sisaPembayaran * bunga * (tenor / 12);
    let totalPembayaran = sisaPembayaran + totalBunga;
    let cicilanBulanan = totalPembayaran / tenor;
    
    document.getElementById("hasil-simulasi").textContent = `Cicilan Bulanan: Rp ${cicilanBulanan.toLocaleString("id-ID", {minimumFractionDigits: 2})}`;
}