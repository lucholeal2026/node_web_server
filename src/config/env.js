//configuramos nuestras variables de entorno
//require("dotenv").config(); //sirve para mostrar las variables de entorno q se encuentran en el archivo .env
//const { get } = require("env-var"); //libreria que le da formato a las variables de entorno. ej que el puerto sea numerico
import env from "dotenv";
import envvar from "env-var";
env.config();

export const envs = {
  PORT: envvar.get("PORT").required().asPortNumber(),
  PUBLIC_PATH: envvar.get("PUBLIC_PATH").default("public").asString(),
};

// module.exports = { envs };
