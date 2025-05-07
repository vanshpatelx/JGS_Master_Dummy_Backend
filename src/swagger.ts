import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Demo Master API',
      version: '1.0.0',
      description: 'A simple Express API with Swagger and TypeScript',
    },
    servers: [
      {
        url: 'https://jgedemomaster.oceanlab.in',
      },
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Path to the API docs
};

export const swaggerSpec = swaggerJSDoc(options);
