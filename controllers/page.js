import config from "../config.js";

export const getIndex = async (req, res) => {
  res.render('html', {
    title: config.NAME,
    description: 'Distribuidor Mayorista y minorista productos informáticos al mejor precio.',
    url: config.URL_DOMINIO,
    image: config.IMAGE_OG,
    mainView: 'page/index',
  });
}

export const getQuienesSomos = async (req, res) => {
  res.render('html', {
    title: `${config.NAME} | Quienes somos`,
    description: 'Ventas de materiales eléctricos',
    url: config.URL_DOMINIO,
    image: config.IMAGE_OG,
    mainView: 'page/quienes_somos',
  });
}

export const getContacto = async (req, res) => {
  res.render('html', {
    title: `${config.NAME} | Contacto`,
    description: 'Ventas de materiales eléctricos',
    url: config.URL_DOMINIO,
    image: config.IMAGE_OG,
    mainView: 'page/contacto',
  });
}

export const getProductos = async (req, res) => {
  res.render('html', {
    title: `${config.NAME} | Productos`,
    description: 'Ventas de materiales eléctricos',
    url: config.URL_DOMINIO,
    image: config.IMAGE_OG,
    mainView: 'page/productos',
  });
}