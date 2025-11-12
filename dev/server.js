const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// IMPORTANTE: Servir archivos desde la carpeta RAÍZ (un nivel arriba)
app.use(express.static(path.join(__dirname, "..")));

app.get("/", (req, res) => {
  // La ruta de index.html está un nivel arriba de dev/
  const indexPath = path.join(__dirname, "..", "index.html");
  res.sendFile(indexPath, err => {
    if (err) {
      console.error("Error al enviar index.html:", err);
      res.status(500).send("Error al cargar la página");
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📁 Sirviendo archivos desde: ${path.join(__dirname, "..")}`);
});

/*
### Explicación del cambio:

- `__dirname` apunta a la carpeta `dev/`
- `path.join(__dirname, '..')` sube un nivel a la carpeta raíz
- Ahora el servidor sirve archivos desde la raíz donde están `index.html`, `css/`, `js/`, etc.

## Estructura correcta:
*/
