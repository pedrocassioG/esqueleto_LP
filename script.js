// Ativa o Carrossel de Depoimentos
const swiper = new Swiper('.testimonial-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,

  // Ativa a paginação (as bolinhas)
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Torna o carrossel um loop infinito
  loop: true,

  // === ADICIONE ESTE BLOCO ABAIXO ===
  autoplay: {
    delay: 5000, // Tempo em milissegundos (3000ms = 3 segundos)
    disableOnInteraction: false, // Continua girando mesmo depois que o usuário interage
  },
  // ===================================

  // Configurações para diferentes tamanhos de tela (responsividade)
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

// =================================================
// =========== LÓGICA DO ACCORDION (FAQ) ===========
// =================================================
const faqItems = document.querySelectorAll('.faq-question');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        // Pega o painel de resposta correspondente
        const answer = item.nextElementSibling;
        
        // Alterna a classe 'active' no botão clicado
        item.classList.toggle('active');

        // Abre ou fecha a resposta
        if (answer.style.maxHeight) {
            // Se já tiver uma altura, fecha (zera a altura)
            answer.style.maxHeight = null;
        } else {
            // Se estiver fechado, abre (define a altura para o tamanho do conteúdo)
            answer.style.maxHeight = answer.scrollHeight + "px";
        } 
    });
});

document.querySelectorAll('a[href="#offer-section"]').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#offer-section').scrollIntoView({
      behavior: 'smooth'
    });
  });
});