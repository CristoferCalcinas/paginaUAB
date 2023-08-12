import { infoCarreras } from "../infoCarreras";
import { Carreras, Complementario, Escuelas, ExtensionSocial, Iglesia, Investigacion, Postgrado } from "../secondSideBar";

export const Elements = [
  { id: 1, title: "la uab", content: null, path: "/uab", selected: true, contentElements: null },
  { id: 2, title: "ventajas", content: null, path: "/ventajas", selected: false, contentElements: null },
  { id: 3, title: "carreras", content: Carreras, path: "/carreras", selected: false, contentElements: infoCarreras },
  { id: 4, title: "investigacion", content: Investigacion, path: "http://ojs.uab.edu.bo/ojs/", selected: false, contentElements: null },
  { id: 5, title: "postgrado", content: Postgrado, path: "/postgrado", selected: false, contentElements: null },
  { id: 6, title: "complementario", content: Complementario, path: "/complementario", selected: false, contentElements: null },
  { id: 7, title: "colegio", content: null, path: "https://ueab.educacionadventista.com/", selected: false, contentElements: null },
  { id: 8, title: "admisiones", content: null, path: "/admisiones", selected: false, contentElements: null },
  { id: 9, title: "reglamentos uab", content: null, path: "/reglamentos", selected: false, contentElements: null },
  { id: 10, title: "extensión social", content: ExtensionSocial, path: "/extensionSocial", selected: false, contentElements: null },
  { id: 11, title: "iglesia", content: null, path: "https://sva.adventistas.org/es/", selected: false, contentElements: null },
  { id: 12, title: "escuelas", content: Escuelas, path: "/escuelas", selected: false, contentElements: null },
  { id: 13, title: "crai", content: null, path: "https://crai.uab.edu.bo/", selected: false, contentElements: null },
  { id: 14, title: "sistema academico", content: null, path: "/login", selected: false, contentElements: null },
];

// MODULO FUNCIONAL
// export const Elements = [
//   { title: "la uab", content: [] },
//   { title: "ventajas", content: [] },
//   { title: "carreras", content: Carreras },
//   { title: "investigacion", content: Investigacion },
//   { title: "posgrado", content: Postgrado },
//   { title: "complementario", content: Complementario },
//   { title: "colegio", content: [] },
//   { title: "admisiones", content: [] },
//   { title: "reglamentos uab", content: [] },
//   { title: "extension social", content: ExtensionSocial },
//   { title: "iglesia", content: Iglesia },
//   { title: "escuelas", content: Escuelas },
//   { title: "crai", content: [] },
//   { title: "sistema academico", content: [] },
// ];