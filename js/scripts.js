/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener("DOMContentLoaded", function() {
    // Tanggal awal Anda mengenal pacar (dalam milidetik)
    var startDate = new Date("2023-01-01").getTime();

    // Update timer setiap detik
    var timer = setInterval(function() {
        // Waktu saat ini (dalam milidetik)
        var now = new Date().getTime();

        // Selisih waktu antara sekarang dan tanggal awal (dalam milidetik)
        var timeDiff = now - startDate;

        // Menghitung jumlah hari, jam, menit, dan detik
        var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        // Menampilkan waktu di dalam elemen dengan id "timer"
        document.getElementById("timer").innerHTML = days + " hari " + hours + " jam " + minutes + " menit " + seconds + " detik ";
    }, 1000);
});
