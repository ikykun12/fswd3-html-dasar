var tanya = true;
while (tanya) {

    //menangkap pilihan player
    alert('SELAMAT DATANG DI GAME SUIT');
    alert('TOLONG MEMAKAIN HURUF BESAR TERIMAKASH!');
    var suit = prompt('PILIHAN : BATU , KERTAS , GUNTING');

    //menangkap pilihan computer
    //membangkitkan bilangan random

    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'BATU';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'KERTAS';
    } else {
        comp = 'GUNTING';
    }

    //menentukan rules
    var hasil = '';
    if (suit == comp) {
        hasil = 'SERI';
    } else if (suit == 'BATU') {
        hasil = (comp == 'KERTAS') ? 'MENANG' : 'KALAH!';
    } else if (suit == 'KERTAS') {
        hasil = (comp == 'GUNTING') ? 'MENANG' : 'KALAH!';
    } else if (suit == 'GUNTING') {
        hasil = (comp == 'BATU ') ? 'KALAH' : 'MENANG';
    } else {
        hasil = 'memasukan pilihan  yang salah!';
    }
    //tampilkan hasilnya

    alert('KAMU MEMILIH : ' + suit + '\nDAN KOMPUTER MEMILIH : ' + comp +
        '\nMAKA HASILNYA : KAMU ' + hasil);
    tanya = confirm('LAGI?');
}
alert('TERIMAKASIH SUDAH BERMAIN!!');