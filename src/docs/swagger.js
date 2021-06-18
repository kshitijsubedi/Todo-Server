export const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Todo App Swagger Docs",
        version: "0.1.0",
        description:
          "This is a simple To-Do application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Kshitij Subedi",
          email: "2subedikshitij@gmail.com",
        },
      },
      servers: [
        {
          url: `${process.env.APP_HOST}:${process.env.APP_PORT}/api`,
        },
      ],
    },
    apis: ["./routes/*.js"],
  };
