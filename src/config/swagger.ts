import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Jenny API',
            version: '1.0.0',
            description: 'API documentation for the Jenny backend',
        },
        servers: [
            {
                url: 'http://localhost:5000',
                description: 'Development server',
            },
        ],
    },
    apis: ['./src/routes/*.ts', './src/controllers/*.ts'], // 👈 where Swagger will read JSDoc comments
};

const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app: Express) {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log('📘 Swagger docs available at http://localhost:5000/docs');
}
