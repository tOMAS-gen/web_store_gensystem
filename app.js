import express from 'express'
import path from 'path'

import indexRoutes from './routes/index.js'
import social_link from './social_link.js';

function checkPath(filePath) {
  if (process.platform === 'win32') {
    filePath = filePath.substring(1);
  }
  return filePath
}

const app = express()

// Define la ruta de las vistas
const appDirname = checkPath(path.dirname(new URL(import.meta.url).pathname))
app.set('views', path.join(appDirname, 'views'))
app.set('view engine', 'ejs');
app.use(express.static(path.join(appDirname, 'public')));

// social enlaces
app.use((req, res, next) => {
  res.locals.social_links = social_link;
  next();
});

// Rutas
app.use('/', indexRoutes)

// Iniciar
const port = process.env.PORT || 3000;
app.listen(3000)
console.log(`Server on port http://localhost:${port}`)

export default app;