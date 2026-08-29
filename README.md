# Mukanda Tec — Página de Manutenção

Página estática de "site em atualização" da [Mukanda Tec](https://mukandatec.co.ao/), exibida enquanto o site principal está a ser reconstruído. Não é o site completo — é apenas esta página avulsa, isolada numa branch própria.

## Estrutura

```
.
├── index.html
└── assets/
    ├── css/
    │   └── main.css        # estilos da página (secção error-404 reaproveitada como aviso de manutenção)
    ├── js/
    │   └── main.js          # preloader + inicialização do AOS
    ├── img/
    │   ├── favicon.png
    │   └── apple-touch-icon.png
    └── vendor/
        ├── bootstrap/css/bootstrap.min.css
        ├── bootstrap-icons/bootstrap-icons.css
        └── aos/
            ├── aos.css
            └── aos.js
```

> **Nota:** o `<meta property="og:image">` no `<head>` aponta para `/img/og-image.jpg` (raiz), enquanto o favicon usa `assets/img/`. Confirma se esse ficheiro existe nesse caminho antes do deploy — são pastas diferentes.

## Tecnologias

- HTML5 + CSS3 (sem pré-processador, sem build step)
- [Bootstrap 5](https://getbootstrap.com/) — apenas o grid/utilitários CSS (o bundle JS não é usado nesta página: não há modais, dropdowns nem carrosséis)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [AOS](https://michalsnik.github.io/aos/) — animações fade ao carregar a página
- Google Fonts: Roboto (texto) e Ubuntu (títulos)
- Base no template **Orbit**, da [BootstrapMade](https://bootstrapmade.com/orbit-bootstrap-template/) (ver licença abaixo)

## Como visualizar localmente

Não há dependências nem build. Basta abrir o `index.html` num browser, ou servir a pasta com um servidor estático simples:

```bash
npx serve .
# ou
python3 -m http.server
```

## Comportamento responsivo

- Em ecrãs ≤576px, a animação contínua de rotação dos círculos decorativos é desligada (`animation: none` em `main.css`), mantendo os círculos visíveis mas parados.
- Em telemóveis, o AOS é desativado por completo via `disable: 'phone'` no `AOS.init()` (`main.js`). Para incluir tablets também, mudar para `disable: 'mobile'`.

## Personalização

- **Cores/tipografia:** variáveis CSS no topo do `main.css` (`--accent-color`, `--heading-color`, `--default-font`, etc.).
- **Contacto (WhatsApp/telefone):** editar os links `href="https://wa.me/244922570275"` e `href="tel:+244922570275"` diretamente no `index.html`.
- **Texto do aviso:** dentro de `<div class="error-content">` no `index.html`.

## Licença

O layout tem por base o template Orbit da BootstrapMade, sob a [licença da BootstrapMade](https://bootstrapmade.com/license/) — mantém a atribuição no comentário do topo do `main.js` conforme os termos da licença.