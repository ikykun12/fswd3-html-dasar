var tanya = true;
while (tanya) {

    //menangkap pilihan player
    alert('SELAMAT DATANG DI GAME SUIT');
    alert('TOLONG MEMAKAIN HURUF BESAR TERIMAKASH!');
    var suit = prompt('PILIHAN : BATU , KERTAS , GUNTING');

    //menangkap pilihan computer
    //membangkitkan bilangan random

    var computer = Math.random();

    if (computer < 0.34) {
        computer = 'BATU';
    } else if (computer >= 0.34 && computer < 0.67) {
        computer = 'KERTAS';
    } else {
        computer = 'GUNTING';
    }

    //menentukan rules
    var hasil = '';
    if (suit == computer) {
        hasil = 'SERI';
    } else if (suit == 'BATU') {
        hasil = (computer == 'KERTAS') ? 'MENANG' : 'KALAH!';
    } else if (suit == 'KERTAS') {
        hasil = (computer == 'GUNTING') ? 'MENANG' : 'KALAH!';
    } else if (suit == 'GUNTING') {
        hasil = (computer == 'BATU ') ? 'KALAH' : 'MENANG';
    } else {
        hasil = 'memasukan pilihan  yang salah!';
    }
    //tampilkan hasilnya

    alert('KAMU MEMILIH : ' + suit + '\nDAN KOMPUTER MEMILIH : ' + computer +
        '\nMAKA HASILNYA : KAMU ' + hasil);
    tanya = confirm('LAGI?');
}
alert('TERIMAKASIH SUDAH BERMAIN!!');