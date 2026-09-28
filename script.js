    // ----------------------------------------------------------
    // Menu fixo: fica transparente no topo e ganha fundo sólido
    // (com leve desfoque) depois que a página rola mais de 40px.
    // ----------------------------------------------------------
    const menu = document.getElementById('menu');

    function atualizaMenu() {
      // toggle(classe, condição): adiciona a classe se a condição for
      // verdadeira e remove se for falsa — sem precisar de if/else
      menu.classList.toggle('bg-preto/90', scrollY > 40);
    }

    menu.classList.add('backdrop-blur');
    addEventListener('scroll', atualizaMenu);
    atualizaMenu(); // roda uma vez ao carregar, caso a página já abra rolada

    // ----------------------------------------------------------
    // Formulário de e-mail: valida o formato no navegador e mostra
    // uma mensagem de sucesso ou erro. Não envia nem armazena o e-mail
    // (para isso seria preciso um backend ou um serviço como o Formspree).
    // ----------------------------------------------------------
    const form = document.getElementById('form');

    form.addEventListener('submit', (evento) => {
      evento.preventDefault(); // evita recarregar a página

      const email = document.getElementById('email').value.trim();
      const mensagem = document.getElementById('msg');

      // regex simples: texto + @ + domínio + ponto
      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      mensagem.textContent = emailValido
        ? 'Pronto! Seu e-mail foi cadastrado.'
        : 'Digite um e-mail válido, como nome@exemplo.com.';

      if (emailValido) {
        form.reset();
      }
    });