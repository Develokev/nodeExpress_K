##NodeExpress - Entrega

**crear un archivo a priber nivel ".ENV" que contenga lo siguiente:**

    PORT = 3000
    URI_CONNECT = mongodb+srv://admin:admin@develokev.gl0pbua.mongodb.net/proyecto1?retryWrites=true&w=majority
    URLBASE = localhost:3000/api/v1/
    JWT_SECRET_KEY= todo_esto_va_junto_y_es_super_seguro

***

**Instalaciones dependencies:**
    "bcryptjs"
    "cors"
    "dotenv"
    "ejs"
    "express"
    "express-validator"
    "jsonwebtoken"
    "mongoose"

**En las dependencias[scripts], crear:**
    "start": "node app.js",
    "dev": "nodemon app js"

Una vez instaladas las dependencias, inicializar en la terminal con
**"npm run dev"**

**Rutas del admin**
"admin/services/show-services" --> Dashboard
"admin/services/form" --> Formulario para crear servicio
"admin/services/update-service-form/:id" --> Formulario para actualizar Servicio

**LOGIN CREDENTIALS**
+ email = admin@admin.uk
+ password = administrador

Para la siguiente versión viene:
+ scrapping
+ protección URL

***
Espero que lo disfruten.