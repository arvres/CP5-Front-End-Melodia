# Melodia: Sua Música, Sua Forma

Landing page do **Melodia**, um app de músicas, desenvolvida para o Check-Point 05 da disciplina de Front-end Design (Engenharia de Software, Prof. Lucas Sousa).


🔗 **Página publicada:** [LINK do SITE](https://arvres.github.io/CP5-Front-End-Melodia/)

## Sobre o projeto

O objetivo é apresentar o Melodia para amantes de música, jovens e pessoas que buscam novas descobertas musicais, com visual clean, minimalista e um estilo direto.

Diferenciais do app apresentados na página:

- Qualidade de som superior
- Criação de playlists personalizadas
- Descoberta de novos artistas, com recomendação inteligente
- Interface intuitiva

## Estrutura da página

| Seção | O que tem |
|---|---|
| Menu fixo | Links de navegação e botão "Ouvir Agora"; fica transparente no topo e ganha fundo ao rolar (JavaScript) |
| Hero | Título "Melodia: Sua Música, Sua Forma", descrição, botão de chamada para ação e um mockup da tela do app (imagem em destaque) |
| Benefícios | Quatro benefícios com ícones do Font Awesome |
| Funcionalidades | Cards com playlists inteligentes, radar de artistas e modo offline |
| Descubra | Seção de recomendação inteligente: como o app aprende com o usuário e sugere músicas novas todos os dias |
| Depoimentos | Citações de usuários com foto de perfil |
| Formulário | Captura de e-mail para campanhas futuras, com validação em JavaScript |
| Rodapé | Contato, redes sociais e política de privacidade |

## Tecnologias utilizadas

- **HTML5**: estrutura semântica da página
- **CSS3**: pequenos ajustes de acessibilidade (foco visível, `prefers-reduced-motion`) e a animação do equalizador, definida no CSS
- **Tailwind CSS** (via CDN): estilização e layout responsivo
- **Font Awesome 6**: ícones
- **Google Fonts**: Bricolage Grotesque (títulos) e DM Sans (textos)
- **JavaScript**: menu com efeito de transparência e validação do formulário
- **GitHub Pages**: publicação

## Identidade visual

| Cor | Hex | Uso |
|---|---|---|
| Preto | `#0F0F0F` | Fundo do hero e do rodapé, textos |
| Cinza | `#4B5563` | Seção de funcionalidades e detalhes |
| Cinza claro | `#E5E7EB` | Fundo de cards e contraste suave |
| Branco | `#FFFFFF` | Fundo geral da página |
| Verde | `#22C55E` | Único acento: botões, ícones e destaques |

## Organização dos arquivos

```
.
├── index.html   # página completa (HTML, Tailwind via CDN e JavaScript)
└── README.md
```

Todo o código fica em um único arquivo `index.html`, dividido em blocos comentados (menu, hero, benefícios, funcionalidades, descubra, depoimentos, formulário, rodapé), o que facilita encontrar e explicar cada parte.

## Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/arvres/CP5-Front-End-Melodia
   ```

   OU 

   ```bash
   git git@github.com:arvres/CP5-Front-End-Melodia.git
   ```
   
2. Abra o arquivo `index.html` no navegador. Não é preciso instalar nada, mas é necessário ter conexão com a internet para carregar Tailwind, Font Awesome e as fontes.

## Integrantes do grupo

- Pedro Henrique Alves 
- Caio Maluza
- Rafaella Pazannese
- Felipe Luan
- Anderson Marcolino

## Limitações conhecidas

- O Tailwind é carregado via CDN, o que exige internet e não é o ideal para um ambiente de produção. Em um projeto real, o CSS seria gerado em um build.
- O formulário de contato valida o formato do e-mail no navegador, mas não armazena os dados. Para isso, seria necessário um backend ou um serviço como o Formspree.
- Depoimentos, nomes e links de redes sociais são fictícios e servem apenas para demonstração.
- As fotos de perfil são carregadas do serviço pravatar.cc.

© 2026 Melodia. Projeto acadêmico.
