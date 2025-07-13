document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const header = document.querySelector('.main-header'); // Dapatkan elemen header

    // Pastikan semua elemen yang dibutuhkan ada
    if (!menuToggle || !mainNav || !header) {
        console.error("Elemen menu, navigasi, atau header tidak ditemukan!");
        return; // Hentikan eksekusi jika ada elemen yang hilang
    }

    // Fungsi untuk membuka atau menutup menu
    function toggleMenu() {
        const isMenuOpen = mainNav.classList.toggle('active');
        // Update atribut ARIA untuk aksesibilitas
        menuToggle.setAttribute('aria-expanded', isMenuOpen);
    }

    // 1. Event listener untuk tombol menu (toggle)
    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation(); // Mencegah event 'click' menyebar ke document
        toggleMenu();
    });

    // 2. Event listener untuk menutup menu saat mengklik di luar area menu dan header
    document.addEventListener('click', function(event) {
        // Cek jika menu sedang terbuka dan klik terjadi di luar navigasi dan di luar header
        if (mainNav.classList.contains('active') && !mainNav.contains(event.target) && !header.contains(event.target)) {
            toggleMenu();
        }
    });

    // 3. Event listener untuk menutup menu saat salah satu link navigasi diklik
    mainNav.addEventListener('click', function(event) {
        // Cek jika yang diklik adalah sebuah link (tag 'A') di dalam navigasi
        if (event.target.tagName === 'A' && mainNav.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Bonus: Mencegah menu menutup saat diklik di dalam area menu itu sendiri
    mainNav.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
