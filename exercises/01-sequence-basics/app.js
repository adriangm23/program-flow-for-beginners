/*
Replace the contents of the `answer` string literal with your Mermaid diagram.

Keep this format: 
    const answer = `...`; 
    module.exports = answer.trim();
---
Reemplaza el contenido del literal de cadena `answer` con tu diagrama Mermaid.

Mantén este formato:
    const answer = `...`;
    module.exports = answer.trim();
*/

const answer = `
flowchart TD
    A("Coge vaso") --> B["Pon agua en la cafetera"]
    B["Pon agua en la cafetera"] --> C["Pon cápsula de café en la cafetera"]
    C["Pon cápsula de café en la cafetera"] --> D["Coloca el vaso en la salida del café"]
    D["Coloca el vaso en la salida del café"] --> E["Presiona hacer café"]
    E["Presiona hacer café"] --> G["Espera que el café se haga"]
    G["Espera que el café se haga"] --> F("bebe café")
`;

module.exports = answer.trim();