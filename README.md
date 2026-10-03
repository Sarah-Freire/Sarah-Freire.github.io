# Portfólio de Sarah Freire

Site estático (HTML, CSS e JavaScript puro), sem etapa de build. Funciona direto no GitHub Pages.

## Estrutura

| Arquivo | O que faz |
| ------- | --------- |
| `index.html` | Esqueleto das seções: topo, o que eu trago, casos, sobre, como eu trabalho, pesquisa e contato |
| `data.js` | **Todo o conteúdo**, em português (`pt`) e inglês (`en`), mais os dados comuns (`comum`: links, foto, dados do gráfico). É o único arquivo que você precisa editar no dia a dia |
| `foto-sarah.jpg` | Foto do topo |
| `style.css` | Visual: cores (claro e escuro automáticos), tipografia e layout responsivo |
| `main.js` | Monta as seções a partir de `data.js`, troca o idioma (botão PT/EN ou link com `#en`), desenha o gráfico do TCC e o Processo Gaussiano interativo |

## Como publicar no GitHub Pages

1. Crie um repositório chamado `Sarah-Freire.github.io`.
2. Envie os arquivos desta pasta para a branch `main`.
3. Em *Settings > Pages*, escolha *Deploy from a branch*, branch `main`, pasta `/ (root)`.
4. O site fica em `https://sarah-freire.github.io`.

## Como editar

- Textos: altere o mesmo trecho em `pt` e em `en` dentro de `data.js`.
- Link direto para a versão em inglês: `https://sarah-freire.github.io/#en`.
- Projetos não publicados: descreva só problema, papel e métodos gerais.

## Para rodar localmente

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```
