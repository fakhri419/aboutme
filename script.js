document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Mobile Menu Toggle Logic ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            // Animasi Hamburger Icon menjadi X
            const spans = menuToggle.querySelectorAll('span');
            menuToggle.classList.toggle('open');
            
            if (menuToggle.classList.contains('open')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // --- 2. Scroll Animation (Intersection Observer) ---
    // Fungsi ini membuat elemen muncul perlahan saat di-scroll
    const observerOptions = {
        threshold: 0.2 // Elemen muncul saat 20% terlihat
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Hanya animasi sekali
            }
        });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.scroll-animate');
    scrollElements.forEach(el => observer.observe(el));


    // --- 3. Photo Reveal Logic (Fitur Tombol Buka Foto) ---
    const revealButtons = document.querySelectorAll('.reveal-btn');

    revealButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Mencari parent kartu terdekat
            const card = e.target.closest('.memory-card');
            
            // Menambahkan class untuk memicu animasi CSS
            if (card) {
                card.classList.add('revealed');
            }
        });
    });
    
    // Opsi tambahan: Menutup kembali jika foto diklik (agar interaktif)
    const images = document.querySelectorAll('.memory-inner img');
    images.forEach(img => {
        img.addEventListener('click', function(e) {
            const card = e.target.closest('.memory-card');
            if (card && card.classList.contains('revealed')) {
                // card.classList.remove('revealed'); // Hapus komentar ini jika ingin foto bisa ditutup lagi
            }
        });
    });
});
