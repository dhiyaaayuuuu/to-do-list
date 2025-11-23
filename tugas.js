let daftarTugas = [];

// MEMBACA TUGAS AWAL (ULTRA PENDEK)
window.onload = () => {
    document.querySelectorAll("#tugasTable tbody tr").forEach(r => {
        const t = { nama: r.cells[0].textContent, status: r.cells[1].textContent };
        daftarTugas.push(t);
        r.cells[1].style.color = "blue";
        r.cells[1].style.cursor = "pointer";
        r.cells[1].onclick = () => r.cells[1].textContent = t.status = t.status === "Belum" ? "Selesai" : "Belum";
    });
};

document.getElementById("btnTambah").addEventListener("click", tambahTugas);
document.getElementById("btnConsole").addEventListener("click", tampilkanConsole);

function tambahTugas() {
    const input = document.getElementById("inputTugas");
    const namaTugas = input.value.trim();

    if (!namaTugas) {
        alert("Isi Terlebih Dahulu Tugasnya");
        return;
    }

    const tugasBaru = { nama: namaTugas, status: "Belum" };
    daftarTugas.push(tugasBaru);
    tambahKeTabel(tugasBaru);

    input.value = "";
}

function tambahKeTabel(tugas) {
    const tbody = document.querySelector("#tugasTable tbody");
    const baris = document.createElement("tr");

    const kolomNama = document.createElement("td");
    kolomNama.textContent = tugas.nama;

    const kolomStatus = document.createElement("td");
    kolomStatus.textContent = tugas.status;
    kolomStatus.style.cursor = "pointer";
    kolomStatus.style.color = "blue";

    kolomStatus.addEventListener("click", () => {
        tugas.status = tugas.status === "Belum" ? "Selesai" : "Belum";
        kolomStatus.textContent = tugas.status;
    });

    baris.appendChild(kolomNama);
    baris.appendChild(kolomStatus);
    tbody.appendChild(baris);
}

function tampilkanConsole() {
    console.log("Daftar Tugas:");
    daftarTugas.forEach((tugas, index) => {
        console.log(`${index + 1}. ${tugas.nama} - ${tugas.status}`);
    });
}
