//Apa itu Javascript?
// Diciptakan oleh Brandon Eich pada tahun 1995.
// Merupakan Bahasa Interpreter
// Merupakan bahasa pemrograman yang digunakan
// unutk membangun aplikasi web yang lebih
// dinamis dan interaktif.
// Biasa digabungkan dengan HTML dan CSS.

//Fungsi Javascript?
// ● Membuat Aplikasi Mobile
// ● Mmebuat Aplikasi Desktop
// ● Mengembangkan Game
// ● Membuat Web Interaktif
// ● Back - End Development

//Kelebihan Javascript?
// ● Kecepatan dan Kesederhanaan
// ● Javascript Sangat Fleksibel
// ● Fitur yang Kaya dan Fungsi yang Luas

//KELEMAHAN Javascript?
// ● Keamanan
// ● Browser Support

//Menjalankan Javascript
// Untuk menjalankan Javascript terdapat dua cara:
// ● Melalui developer tool web browser
// ● Embed script pada file HTML

//DEVELOPER TOOL
//Untuk menjalankan melalui developer tool
// langkahnya:
// 1. Buka web browser
// 2. Buka menu developer tool(meyesuaikan
// browser)
// 3. Masuk ke tab console
// 4. Ketik script dan enter unutk menjalankan

//EMbed SCRIPT
// Untuk menjalankan script menggunakan embed
// script kita perlu bantuan HTML. Adapun
// langkahnya:
// 1. Buat sebuah file .HTML
// 2. Tambahkan tag <script
// src=“lokasi_file.js”></script>
// 3. Buka file HTML di browser



//FUNDAMENTAL of JAVASCRIPT


//1.Variabel dan Tipe Data:

// Deklarasi Variabel
var nama = "John";
let umur = 30;
const PI = 3.14;

// Tipe Data
let angka = 12; // Number
let teks = "Hello"; // String
let bool = true; // Boolean
let arr = [1, 2, 3, 4]; // Array
let obj = { nama: "John", umur: 30 }; // Object

// 2. Operator:
// Operator Aritmatika
let x = 10;
let y = 5;
let z = x + y; // Penjumlahan
let a = x - y; // Pengurangan
let b = x * y; // Perkalian
let c = x / y; // Pembagian
let d = x % y; // Modulus

// Operator Perbandingan
let i = 10;
let j = 5;
console.log(i > j); // true
console.log(i < j); // false
console.log(i >= j); // true
console.log(i <= j); // false
console.log(i == j); // false
console.log(i != j); // true

// Operator Logika
let k = true;
let l = false;
console.log(k && l); // false
console.log(k || l); // true
console.log(!k); // false

// 3.Pengkondisian:
let ax = 10;
if (ax > 5) {
    console.log("x lebih besar dari 5");
} else if (ax == 5) {
    console.log("x sama dengan 5");
} else {
    console.log("x lebih kecil dari 5");
}

// 4.Perulangan:

// For Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While Loop
let ia = 0;
while (i < 5) {
    console.log(i);
    ia++;
}

// Do-While Loop
let ja = 0;
do {
    console.log(ja);
    ja++;
} while (ja < 5);

// 5. Fungsi:

function tambah(xb, yb) {
    return xb + yb;
}

let hasil = tambah(3, 5);
console.log(hasil); // 8

// 6. Array:
let arry = [1, 2, 3, 4, 5];

// Mengakses Elemen Array
console.log(arry[0]); // 1
console.log(arry[2]); // 3

// Mengubah Elemen Array
arry[2] = 10;
console.log(arry); // [1, 2, 10, 4, 5]

// Menambah Elemen Array
arry.push(6);
console.log(arry); // [1, 2, 10, 4, 5, 6]

// Menghapus Elemen Array
arry.pop();
console.log(arry); // [1, 2, 10, 4, 5]


// 7. Object
let obja = {
    nama: "John",
    umur: 30,
    alamat: {
        jalan: "Jalan Raya",
        kota: "Jakarta"
    }
};

// Mengakses Properti Object
console.log(obja.nama); // John
console.log(obja.umur); // 30
console.log(obja.alamat.jalan); // Jalan

// 8.String
let teksa = "Hello World";

// Mendapatkan Panjang Teks
console.log(teksa.length); // 11

// Mengakses Karakter Teks
console.log(teksa[0]); // H
console.log(teksa[6]); // W

// Mengubah Teks menjadi Huruf Besar atau Kecil
console.log(teksa.toUpperCase()); // HELLO WORLD
console.log(teksa.toLowerCase()); // hello world

// Mengganti Karakter dalam Teks
console.log(teksa.replace("World", "Universe")); // Hello Universe

// Memotong Teks
console.log(teksa.slice(0, 5)); // Hello

// 9.Date 
let now = new Date();

// Mendapatkan Tanggal Sekarang
console.log(now); // Mon Mar 14 2023 12:42:28 GMT+0700 (Western Indonesia Time)

// Mendapatkan Tanggal dalam Bentuk Teks
console.log(now.toDateString()); // Mon Mar 14 2023

// Mendapatkan Waktu dalam Bentuk Teks
console.log(now.toLocaleTimeString()); // 12:42:28 PM

// 10.Try-Catch
try {
    // Kode yang mungkin menghasilkan Error
} catch (error) {
    // Kode untuk menangani Error
    console.log(error);
}


