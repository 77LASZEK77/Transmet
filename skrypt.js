function loadPage(filename) {
    fetch(filename)
        .then(response => {
            if (!response.ok) throw new Error("Nie udało się załadować pliku");
            return response.text();
        })
        .then(html => {
            document.getElementById("content").innerHTML = html;
        })
        .catch(err => {
            document.getElementById("content").innerHTML = "<p>Błąd ładowania strony.</p>";
            console.error(err);
        });
}
let correctAnswer = null;

document.addEventListener('DOMContentLoaded', function() {
    // Dodanie efektu pojawiania się elementów podczas scrollowania
    const observerOptions = {
      threshold: 0.2
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);
  
    // Obserwuj wszystkie diagonalne elementy
    document.querySelectorAll('.diagonal-item').forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(50px)';
      item.style.transition = 'all 0.6s ease-out';
      observer.observe(item);
    });
  });
  