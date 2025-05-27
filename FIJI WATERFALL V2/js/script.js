document.addEventListener("DOMContentLoaded", function() {
  const targets = document.querySelectorAll('.home-desc');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('pop-up-animate');
        entry.target.classList.remove('pop-out-animate');
      } else {
        entry.target.classList.remove('pop-up-animate');
        entry.target.classList.add('pop-out-animate');
      }
    });
  }, { threshold: 0.3 });

  targets.forEach(target => {
    // Hapus class pop-out-animate setelah animasi selesai agar bisa animasi ulang
    target.addEventListener('animationend', function(e) {
      if (e.animationName === 'fadeOutDown') {
        target.classList.remove('pop-out-animate');
      }
    });
    observer.observe(target);
  });
});