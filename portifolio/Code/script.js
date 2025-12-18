document.addEventListener('DOMContentLoaded', () => {
    
    // --- FUNÇÃO 1: EFEITO DE DIGITAÇÃO (Roda só na Home) ---
    const textElement = document.querySelector(".typing-effect");
    if (textElement) {
        const phrases = [
            "Ciência de Dados", "Big Data Analytics", 
            "Automação de Processos", "Business Intelligence"
        ];
        let phraseIndex = 0; 
        let charIndex = 0; 
        let isDeleting = false; 
        let typeSpeed = 100;

        function type() {
            const currentPhrase = phrases[phraseIndex];
            if (isDeleting) {
                textElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--; typeSpeed = 50;
            } else {
                textElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++; typeSpeed = 100;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true; typeSpeed = 2000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; typeSpeed = 500;
            }
            setTimeout(type, typeSpeed);
        }
        type();
    }

    // --- FUNÇÃO 2: PAGINAÇÃO DINÂMICA (Roda só em Projetos) ---
    const projectContainer = document.getElementById('project-list');
    const paginationContainer = document.getElementById('pagination-controls');

    if (projectContainer && paginationContainer) {
        const cardsPerPage = 3; // Mude aqui para exibir 3, 6 ou 9 por vez
        const cards = Array.from(projectContainer.getElementsByClassName('project-card'));

        // Só cria paginação se tiver cards suficientes
        if (cards.length > cardsPerPage) {
            const totalPages = Math.ceil(cards.length / cardsPerPage);
            let currentPage = 1;

            function displayPage(page) {
                const start = (page - 1) * cardsPerPage;
                const end = start + cardsPerPage;

                cards.forEach((card, index) => {
                    if (index >= start && index < end) {
                        card.style.display = 'flex';
                        // Efeito suave
                        card.style.opacity = '0';
                        setTimeout(() => card.style.opacity = '1', 100);
                    } else {
                        card.style.display = 'none';
                    }
                });
                updateButtons(page);
            }

            function updateButtons(activePage) {
                paginationContainer.innerHTML = '';
                for (let i = 1; i <= totalPages; i++) {
                    const btn = document.createElement('button');
                    btn.innerText = i;
                    btn.classList.add('page-btn');
                    if (i === activePage) btn.classList.add('active');
                    
                    btn.addEventListener('click', () => {
                        currentPage = i;
                        displayPage(currentPage);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    });
                    paginationContainer.appendChild(btn);
                }
            }

            // Inicia
            displayPage(1);
        }
    }
});

// --- MENU MOBILE ---
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.mobile-menu-icon i');

    // Troca a classe .active na lista (abre/fecha)
    navLinks.classList.toggle('active');

    // Troca o ícone: Se for 'fa-bars', vira 'fa-times' (X), e vice-versa
    if (navLinks.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
}

// Fecha o menu se clicar fora dele (Opcional, mas bom para UX)
document.addEventListener('click', (e) => {
    const navLinks = document.querySelector('.nav-links');
    const menuIconContainer = document.querySelector('.mobile-menu-icon');
    
    // Se o menu estiver aberto E o clique NÃO foi no menu NEM no ícone
    if (navLinks.classList.contains('active') && 
        !navLinks.contains(e.target) && 
        !menuIconContainer.contains(e.target)) {
        
        toggleMenu(); // Fecha o menu
    }
});