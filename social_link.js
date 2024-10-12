import config from "./config.js";

const phone = 'tel:+5492634406086';
const whatsapp = 'https://wa.me/5492634406086';
const whatsapp_send = `${whatsapp}?text=Hola%20${config.NAME}`;
const instagram = 'https://www.instagram.com/daylight__rivadavia/?hl=es-la';
const location = 'https://maps.app.goo.gl/8DN4XUagQaw8ShXc9';
const mail = 'tuemail@dominio.com'
const mail_send = `mailto:${mail}?subject=Consulta&body=Hola,%20quisiera%20hacer%20una%20consulta%20sobre...`

export default {
  phone,
  whatsapp,
  whatsapp_send,
  instagram,
  location,
  mail_send,
};