// Variabel Global
let numberToGuess;
let attempts;
const maxAttempts = 5;

// Elemen DOM (Document Object Model)
const guessInput = document.getElementById('guess-input');
const messageDisplay = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts-display');

// Fungsi untuk memulai atau mengatur ulang permainan
function initializeGame() {
    // 1. Menghasilkan Angka Acak dan Mengatur Percobaan
    // Math.random() menghasilkan (0 hingga <1). Kita kalikan 20, tambahkan 1, lalu dibulatkan ke bawah (floor)
    numberToGuess = Math.floor(Math.random() * 20) + 1; 
    attempts = maxAttempts;
    
    // Perbarui tampilan di website
    messageDisplay.textContent = "Masukkan tebakan Anda!";
    attemptsDisplay.textContent = `Percobaan tersisa: ${attempts}`;
    guessInput.value = ''; // Mengosongkan kolom input
    guessInput.disabled = false;
}

// Fungsi utama yang dipanggil saat tombol "Tebak" diklik
function checkGuess() {
    // Ambil nilai tebakan dari input dan konversi ke integer
    const guess = parseInt(guessInput.value);

    // 2. Memeriksa Masukan dan Batas Angka
    if (isNaN(guess) || guess < 1 || guess > 20) {
        messageDisplay.textContent = "Input tidak valid. Silakan masukkan angka bulat antara 1 dan 20.";
        return; // Hentikan fungsi
    }

    // 3. Memeriksa Tebakan
    if (guess === numberToGuess) {
        messageDisplay.textContent = `Selamat! Anda berhasil menebak angka (${numberToGuess})! 🎉`;
        guessInput.disabled = true; // Nonaktifkan input setelah menang
        attemptsDisplay.textContent = `Percobaan tersisa: ${attempts}`;
    } else {
        // Mengurangi Jumlah Percobaan
        attempts--;
        
        // Memberi petunjuk
        if (guess < numberToGuess) {
            messageDisplay.textContent = "Terlalu rendah! Coba lagi.";
        } else {
            messageDisplay.textContent = "Terlalu tinggi! Coba lagi.";
        }

        attemptsDisplay.textContent = `Percobaan tersisa: ${attempts}`;

        // 4. Mengakhiri Permainan jika Percobaan Habis
        if (attempts === 0) {
            messageDisplay.textContent = `Maaf, percobaan Anda habis! Angka rahasia adalah: ${numberToGuess}. 🙁`;
            guessInput.disabled = true; // Nonaktifkan input setelah kalah
        }
    }
}

// Fungsi untuk menghubungkan tombol "Ulangi Permainan"
function resetGame() {
    initializeGame();
}

// Mulai permainan saat halaman dimuat
document.addEventListener('DOMContentLoaded', initializeGame);
