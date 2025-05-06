
// ✅ Soal 1
// Buat variabel isRaining bernilai true. Tampilkan "Bawa payung!" jika isRaining adalah true.

let isRaining = true;

if (isRaining){
    console.log("bawa payung");
} 


// ✅ Soal 2
// Buat variabel nilai dan isi dengan angka. Tampilkan "Lulus" jika nilai lebih besar dari atau sama dengan 75. Jika tidak, tampilkan "Tidak Lulus".
let nilai = 80;
if (nilai >= 75) {
    console.log("lulus");
} else {
    console.log("tidak lulus");
}

// ✅ Soal 3
// Buat variabel umur dan beri nilai berapa pun. Jika umur kurang dari 17, tampilkan "Belum cukup umur". Jika tidak, tampilkan "Sudah cukup umur".
let umur = 15; 
if (umur < 17) {
    console.log("belum cukup umur");
} else {
    console.log("sudah cukup umur");
}

// ✅ Soal 4
// Buat variabel login yang bernilai false. Jika login adalah true, tampilkan "Selamat datang!". Jika tidak, tampilkan "Silakan login dulu".
let login = false;
if (login) {
    console.log("selamat datang");
}else {
    console.log("silakan login dulu")
}

// ✅ Soal 5
// Buat variabel passwordBenar yang bernilai true. Tampilkan "Akses diberikan" jika passwordBenar adalah true, jika tidak tampilkan "Password salah".
let passwordBenar = true;
if (passwordBenar) {
    console.log("Akses diberikan")
} else {
    console.log("Password salah")
}

// ✅ Soal 6
// Buat variabel nilaiUjian dengan angka. Jika nilai lebih dari 90, tampilkan "Nilai sangat baik". Jika tidak, tampilkan "Nilai perlu ditingkatkan".
let nilaiUjian = 20;
if (nilaiUjian > 90) {
    console.log("nilai sangat baik")
} else { 
    console.log("nilai perlu ditingkatkan")
}

// ✅ Soal 7
// Buat variabel stokBarang dengan nilai angka. Jika stokBarang sama dengan 0, tampilkan "Stok habis". Jika tidak, tampilkan "Stok tersedia".
let stokBarang = 40;
if(stokBarang = 0) {
    console.log("Stok habis");
} else {
    console.log("stok tersedia");
}

// ✅ Soal 8
// Buat variabel isMember bernilai false. Jika isMember adalah true, tampilkan "Diskon 10%". Jika tidak, tampilkan "Harga normal".
let isMember = false;
if (stokBarang){
    console.log("Diskon 10");
} else {
    console.log("Harga Normal")
}

// ✅ Soal 9
// Buat variabel angka1 dan angka2. Jika angka1 tidak sama dengan angka2, tampilkan "Angka berbeda". Jika sama, tampilkan "Angka sama".
let angka1 = 12;
let angka2 = 23;
if (angka1 == angka2) {
    console.log("angka berbeda")
} else {
    console.log("angka sama")
}

// ✅ Soal 10
// Buat variabel suhu dan beri angka. Jika suhu lebih dari 30, tampilkan "Cuaca panas". Jika tidak, tampilkan "Cuaca normal".
let suhu = 20;
if (suhu >= 30) {
    console.log("cuaca panas")
} else { 
    console.log("cuaca normal")
}


// Soal 11 (Operator &&)
// Buat variabel sudahBayar dan sudahDaftar, keduanya berupa boolean. Tampilkan "Boleh masuk kelas" jika keduanya true. Jika salah satu atau keduanya false, tampilkan "Belum bisa masuk kelas".
let sudahBayar = true;
let sudahDaftar = false;
 if (sudahBayar && sudahDaftar) {
    console.log("Boleh masuk kelas");
 } else { 
    console.log("Belum bisa masuk kelas")
 }

///  Soal 12 (Operator ||)
// Buat variabel punyaKTP dan punyaSIM, keduanya berupa boolean.Tampilkan "Boleh masuk area" jika salah satu dari dua variabel bernilai true. Jika keduanya false, tampilkan "Tidak boleh masuk area".
let punyaKTP = false;
let punyaSIM = false;
if (punyaKTP || punyaSIM) {
    console.log("Boleh masuk area");
} else {
    console.log("Tidak boleh masuk area");
}