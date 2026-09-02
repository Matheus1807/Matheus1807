// Pac-Man Ghost Extension
// Este arquivo adiciona os fantasmas ao SVG gerado.

// Sprites simples em SVG.
// Não existem bolinhas/pellets extras: o Pac-Man continua
// consumindo somente as células do gráfico de contribuições.

export const ghosts = [
  {
    name: "blinky",
    color: "#ff0000",
    delay: 0
  },
  {
    name: "pinky",
    color: "#ffb8ff",
    delay: 0.8
  },
  {
    name: "inky",
    color: "#00ffff",
    delay: 1.6
  },
  {
    name: "clyde",
    color: "#ffb852",
    delay: 2.4
  }
];

function ghostShape(color) {
  return `
    <g>
      <path
        d="
          M2 18
          V9
          C2 4 5.5 1 10 1
          C14.5 1 18 4 18 9
          V18
          L15.5 15.5
          L13 18
          L10 15.5
          L7 18
          L4.5 15.5
          Z
        "
        fill="${color}"
      />

      <circle cx="7" cy="8" r="2.3" fill="white"/>
      <circle cx="13" cy="8" r="2.3" fill="white"/>

      <circle cx="7.6" cy="8" r="1" fill="#1d2b53"/>
      <circle cx="13.6" cy="8" r="1" fill="#1d2b53"/>
    </g>
  `;
}

export function createGhost({
  color,
  path,
  duration,
  begin = "0s"
}) {
  return `
    <g>
      ${ghostShape(color)}

      <animateMotion
        dur="${duration}s"
        begin="${begin}"
        repeatCount="indefinite"
        rotate="auto"
        path="${path}"
      />
    </g>
  `;
}

export function createGhosts(path, duration) {
  return ghosts.map((ghost) => {
    return createGhost({
      color: ghost.color,
      path,
      duration,
      begin: `-${ghost.delay}s`
    });
  }).join("\\n");
}
