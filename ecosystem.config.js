module.exports = {
  apps: [
    {
      name: "fabrizioquispe", // Nombre del proceso
      script: "npm",
      args: "start", // o "run start" según tu proyecto
      cwd: "/var/www/fabrizioquispe", // ruta a tu proyecto
      instances: "max", // o un número fijo de instancias
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 3000, // el puerto interno de tu app
      },
    },
  ],
};
