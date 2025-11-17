// Variabel Global
let numberToGuess;
let attempts;
const maxAttempts = 5;

// Variabel untuk elemen DOM (akan diambil saat game dimulai)
let guessInput;
let messageDisplay;
let attemptsDisplay;
let guessButton;
let resetButton;

// Fungsi untuk memulai atau mengatur ulang permainan
function initializeGame() {
    // Ambil elemen DOM
    guessInput = document.getElementById('guess-input');
    messageDisplay = document.getElementById('message');
    attemptsDisplay.textContent = \Percobaan tersisa: ${attempts}`;`
    guessButton = document.getElementById('guess-button');
    resetButton = document.getElementById('reset-button');
    
    // 1. Menghasilkan Angka Acak dan Mengatur Percobaan
    numberToGuess = Math.floor(Math.random() * 20) + 1; // Angka 1-20
    attempts = maxAttempts;
    
    // Perbarui tampilan di website
    messageDisplay.textContent = "Masukkan tebakan Anda!";
    messageDisplay.classList.remove('correct', 'wrong');
    attemptsDisplay.textContent = Percobaan tersisa: ${attempts};
    
    // Reset status input/tombol
    guessInput.value = '';
    guessInput.disabled = false;
    guessButton.disabled = false;
    resetButton.style.display = 'none'; // Sembunyikan tombol reset
}

// Fungsi utama yang dipanggil saat tombol "Tebak" diklik
function checkGuess() {
    const guess = parseInt(guessInput.value);

    // 2. Memeriksa Masukan dan Batas Angka
    if (isNaN(guess) || guess < 1 || guess > 20) {
        messageDisplay.textContent = "Input tidak valid. Masukkan angka bulat antara 1 dan 20.";
        messageDisplay.classList.add('wrong');
        return; 
    }
    
    messageDisplay.classList.remove('wrong'); // Hapus kelas 'wrong' jika input sudah benar

    // 3. Memeriksa Tebakan
    if (guess === numberToGuess) {
        messageDisplay.textContent = \Selamat! Anda berhasil menebak angka (${numberToGuess})! 🎉`;`
        messageDisplay.classList.add('correct');
        endGame(true);
    } else {
        // Mengurangi Jumlah Percobaan
        attempts--;
        
        // Memberi petunjuk
        if (guess < numberToGuess) {
            messageDisplay.textContent = "Terlalu rendah! Coba lagi.";
        } else {
            messageDisplay.textContent = "Terlalu tinggi! Coba lagi.";
        }

        attemptsDisplay.textContent = Percobaan tersisa: ${attempts};
        messageDisplay.classList.add('wrong');


        // 4. Mengakhiri Permainan jika Percobaan Habis
        if (attempts === 0) {
          messageDisplay.textContent = \Maaf, percobaan Anda habis! Angka rahasia adalah: ${numberToGuess}. 🙁`;
            endGame(false);
        }
    }
}

// Fungsi untuk mengakhiri permainan (dipanggil saat menang/kalah)
function endGame(isWin) {
    guessInput.disabled = true;
    guessButton.disabled = true;
    resetButton.style.display = 'block'; // Tampilkan tombol reset
}

// Fungsi untuk menghubungkan tombol "Ulangi Permainan"
function resetGame() {
    initializeGame();
}

// Mulai permainan saat halaman dimuat
document.addEventListener('DOMContentLoaded', initializeGame);
