export function DOCTYPE() {
  return `<!DOCTYPE html>`;
}

export function HTML(c: string) {
  return `<html>${c}</html>`
}

export function Title(c: string) {
  return `<title>${c}</title>`
}

export function Body(c: string) {
  return `<body>${c}</body>`;
}

export function H1(c: string) {
  return `<h1>${c}</h1>`;
}

export function H2(c: string) {
  return `<h2>${c}</h2>`;
}

export function H3(c: string) {
  return `<h3>${c}</h3>`;
}

export function H4(c: string) {
  return `<h4>${c}</h4>`;
}

export function H5(c: string) {
  return `<h5>${c}</h5>`;
}

export function H6(c: string) {
  return `<h6>${c}</h6>`;
}

export function P(c: string) {
  return `<p>${c}</p>`;
}

export function Div(c: string) {
  return `<div>${c}</div>`
}

export function render(c: string) {
  document.getElementById("app").innerHTML = c;
}