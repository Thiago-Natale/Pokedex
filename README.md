# Pokédex

Uma aplicação web responsiva desenvolvida como parte do desafio técnico do DevQuest, com o objetivo de explorar informações sobre Pokémon utilizando a PokéAPI.

## 📖 Descrição

A Pokédex permite aos usuários navegar por uma lista de Pokémon e visualizar uma página detalhada para cada um, incluindo habilidades, movimentos e tipos.

O projeto conta com um design retrô e criativo, totalmente responsivo, e inclui um seletor de tema claro/escuro controlado pelos ícones de sol 🌞 e lua 🌙.

## 📸 Prévia do Projeto
![alt text](Animação.gif)

## 🚀 Funcionalidades

- **Listagem paginada:** Visualização de Pokémon com um botão "Carregar Mais" para uma navegação paginada.
- **Página de Detalhes:** Cada Pokémon é clicável e leva a uma página dedicada com informações detalhadas.
- **Seletor de Tema:** Um botão permite ao usuário alternar instantaneamente entre um tema claro (light) e escuro (dark).
- **Design Responsivo:** A interface se adapta perfeitamente a diferentes tamanhos de tela, de desktops a dispositivos móveis.

## 🛠️ Tecnologias Utilizadas

- **React 18 + JS:** Para a construção de uma interface de usuário reativa.
- **Vite:** Ferramenta de build moderna que proporciona um ambiente de desenvolvimento extremamente rápido com Hot Module Replacement (HMR).
- **Styled Components:** Utilizado para a estilização via CSS-in-JS, permitindo a criação de componentes com escopo de estilo e um sistema de temas dinâmico.
- **React Router DOM:** Para o gerenciamento de rotas e navegação, criando uma experiência de Single Page Application (SPA).
- **PokéAPI:** A fonte de todos os dados sobre os Pokémon.

## 💡 Decisões Técnicas e de Arquitetura

- **Componente Pokedex com props dinâmicas:** O componente principal recebe duas props que definem quais componentes serão renderizados em cada lado da interface, permitindo a criação de novas telas reutilizando a mesma estrutura.
- **Context API para Gerenciamento de Tema:** O estado do tema (light/dark) é gerenciado globalmente pela Context API do React. Isso evita "prop drilling" e permite que qualquer componente acesse e modifique o tema de forma limpa e centralizada.
- **Context API para Pokémon Selecionado:** O Pokémon escolhido na Home também é armazenado em um contexto global, facilitando o acesso nas rotas de detalhes.
- **Estrutura Modular de Componentes:** Cada componente possui sua própria pasta, contendo seus arquivos de lógica e estilo, garantindo organização e escalabilidade.
- **Carregamento Assíncrono com Feedback Visual:** Um estado de loading é exibido tanto na Home quanto na tela de detalhes, melhorando a UX durante o carregamento da API.
- **Design com CSS Grid para listagem dos Pokemons:** A listagem dos Pokémon na página inicial utiliza CSS Grid, permitindo um layout flexível e facilmente ajustável para futuras expansões.

## ⚙️ Como Executar o Projeto

```bash
# 1. Clone o repositório
git clone https://github.com/Thiago-Natale/Pokedex.git

# 2. Acesse o diretorio clonado
cd Pokedex

# 3. instale as dependências
npm install

# 4. Execute o projeto em modo de desenvolvimento
npm run dev

# 5. Abra seu navegador em: http://localhost:5173/