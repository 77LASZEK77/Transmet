document.addEventListener('DOMContentLoaded', function() {
    // Animuj karty cenowe podczas przewijania
    const cards = document.querySelectorAll('.pricing-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.2
    });
  
    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'all 0.5s ease-out';
      observer.observe(card);
    });
  
    // Dodaj efekt najechania kursorem na karty cenowe
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
      });
  
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
      });
    });
  });
  