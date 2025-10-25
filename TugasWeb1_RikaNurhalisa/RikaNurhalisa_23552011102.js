// Menambahkan 'pendengar acara' (event listener) saat formulir di-submit.
document.getElementById("RikaNurhalisa_23552011102").addEventListener("submit", function (e) {
  // Mencegah form dikirim secara default (agar JavaScript bisa memproses validasi).
  e.preventDefault();

  // Ambil nilai dari semua kolom input dan bersihkan spasi di awal/akhir (trim).
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const nim = document.getElementById("nim").value.trim();
  const telepon = document.getElementById("telepon").value.trim();
  // Ambil nilai dari dropdown
  const universitas = document.getElementById("universitas").value;
  const prodi = document.getElementById("prodi").value;
  // Cek status checkbox (true/false)
  const setuju = document.getElementById("setuju").checked;

  // Bersihkan semua pesan error lama dan hilangkan border merah pada semua input.
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  document.querySelectorAll("input, select").forEach((el) => el.classList.remove("input-error"));

  // Setel status validasi awal ke 'benar' (true)
  let valid = true;

  // Fungsi sederhana untuk menampilkan pesan kesalahan.
  function showError(elementId, message) {
    // Tampilkan pesan di elemen <small class="error"> yang sesuai
    document.getElementById(`error-${elementId}`).textContent = message;
    // Tambahkan kelas CSS untuk border merah
    document.getElementById(elementId).classList.add("input-error");
    // Ubah status validasi menjadi 'salah' (false)
    valid = false;
  }

  // --- Proses Validasi Setiap Kolom Dimulai ---

  // 1. Validasi Nama: Harus diisi.
  if (nama === "") {
    showError("nama", "Nama lengkap harus diisi");
  }

  // 2. Validasi Email: Harus diisi dan formatnya benar.
  if (email === "") {
    showError("email", "Email harus diisi");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError("email", "Format email harus sesuai");
  }

  // 3. Validasi NIM: Harus diisi dan hanya boleh angka.
  if (nim === "" || isNaN(nim)) {
    showError("nim", "Input harus berupa angka, bukan huruf atau simbol");
  }

  // 4. Validasi Telepon: Harus diisi dan hanya boleh angka.
  if (telepon === "" || isNaN(telepon)) {
    showError("telepon", "Input harus berupa angka, bukan huruf atau simbol");
  }

  // 5. Validasi Universitas: Harus dipilih (tidak boleh opsi default kosong).
  if (universitas === "") {
    showError("universitas", "Universitas harus dipilih");
  }

  // 6. Validasi Program Studi: Harus dipilih.
  if (prodi === "") {
    showError("prodi", "Program studi harus dipilih");
  }

  // 7. Validasi Checkbox: Harus dicentang.
  if (!setuju) {
    showError("setuju", "Harap setujui syarat dan ketentuan.");
  }

  // --- Aksi Setelah Validasi Selesai ---

  // Jika semua kolom valid (valid === true)
  if (valid) {
    // Tampilkan pesan sukses
    alert("Pendaftaran berhasil!");
    
    // Bersihkan (reset) semua input pada formulir.
    document.getElementById("RikaNurhalisa_23552011102").reset(); 
    
    // Pastikan border merah hilang dari semua input dan select (membersihkan sisa-sisa error).
    document.querySelectorAll("input, select").forEach((el) => el.classList.remove("input-error"));
  }
});