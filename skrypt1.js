
console.log
// Zmienne globalne
let correctAnswer = null;
const toastDuration = 3000; // czas wyświetlania powiadomień w milisekundach

// Inicjalizacja po załadowaniu dokumentu
document.addEventListener('DOMContentLoaded', function() {
  // Elementy DOM
  const questionElement = document.getElementById('question');
  const userAnswerInput = document.getElementById('userAnswer');
  const checkButton = document.getElementById('checkButton');
  const userInputElement = document.getElementById('userInput');
  const userMessageElement = document.getElementById('userMessage');
  const sendButton = document.getElementById('sendBtn');
  
  // Inicjalizacja - wygenerowanie pytania matematycznego
  generateMathQuestion();
  
  // Nasłuchiwanie zdarzeń
  checkButton.addEventListener('click', checkAnswer);
  sendButton.addEventListener('click', sendMessage);
  
  // Obsługa naciśnięcia Enter w polu odpowiedzi
  userAnswerInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  });

  // Funkcja generująca pytanie matematyczne
  function generateMathQuestion() {
    
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    // Wyraźne ustawienie HTML z liczbami do działania
    const questionElement = document.getElementById('question');
    questionElement.innerHTML = `${num1} + ${num2} = ?`;

    console.log(`Wygenerowano pytanie: ${num1} + ${num2} = ${correctAnswer}`);
  } 

  generateMathQuestion();

  document.addEventListener("DOMContentLoaded", function() {
    generateMathQuestion();
  });

  // Funkcja sprawdzająca odpowiedź
  function checkAnswer() {
    const userAnswer = parseInt(userAnswerInput.value);
    
    if (userAnswer === correctAnswer) {
      // Poprawna odpowiedź
      enableMessageForm(true);
      showToast('Poprawna odpowiedź!', 'Możesz teraz wysłać wiadomość.', 'success');
    } else {
      // Niepoprawna odpowiedź
      enableMessageForm(false);
      generateMathQuestion();
      userAnswerInput.value = '';
      showToast('Niepoprawna odpowiedź', 'Spróbuj ponownie z nowym zadaniem.', 'error');
    }
  }

  // Funkcja włączająca/wyłączająca formularz wiadomości
  function enableMessageForm(enable) {
    userInputElement.disabled = !enable;
    userMessageElement.disabled = !enable;
    sendButton.disabled = !enable;
  }

  // Funkcja wysyłająca wiadomość
  function sendMessage() {
    const subject = userInputElement.value.trim();
    const message = userMessageElement.value.trim();
    
    if (subject && message) {
      // Tu można dodać kod do faktycznego wysyłania wiadomości
      console.log("Wysłany temat:", subject);
      console.log("Wysłana wiadomość:", message);
      
      // Resetowanie formularza
      userInputElement.value = '';
      userMessageElement.value = '';
      enableMessageForm(false);
      generateMathQuestion();
      userAnswerInput.value = '';
      
      showToast('Wiadomość wysłana!', 'Dziękujemy za kontakt.', 'success');
    } else {
      showToast('Błąd', 'Wypełnij obydwa pola wiadomości.', 'error');
    }
  }

  // Funkcja wyświetlająca powiadomienia
  function showToast(title, message, type) {
    const toastContainer = document.getElementById('toast-container');
    
    // Tworzenie elementu toast
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    // Tworzenie zawartości toast
    toast.innerHTML = `
      <div class="title">${title}</div>
      <div class="message">${message}</div>
    `;
    
    // Dodanie do kontenera
    toastContainer.appendChild(toast);
    
    // Animacja pojawienia się
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);
    
    // Automatyczne usunięcie po określonym czasie
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toastContainer.removeChild(toast);
      }, 300);
    }, toastDuration);
  }
});
