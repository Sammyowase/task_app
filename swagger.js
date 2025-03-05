const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Task Management API',
            version: '1.0.0',
            description: 'API documentation for the Task Management API',
        },
        servers: [
            {
                url: 'http://localhost:5000/api',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: [
        './src/routes/authRoutes.js',
        './src/routes/taskRoutes.js',
        './src/routes/userRoutes.js',
        './src/routes/commentRoutes.js',
        './src/routes/inviteRoutes.js',
        './src/routes/setPasswordRoutes.js',
    ], // Path to the API routes
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};