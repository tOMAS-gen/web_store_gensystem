import config from "../config.js";

export const get404 = async (req, res) => {
  res.render('html', {
    title: `${config.NAME} | Error 404`,
    description: 'Página no encontrada',
    url: config.URL_DOMINIO,
    image: `${config.URL_DOMINIO}/assets/logo/daylight_logo_w.svg`,
    mainView: 'error/404',
  });
}