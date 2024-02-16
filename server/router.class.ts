import express from "express";
import compression from "compression";
import listEndpoints from "express-list-endpoints";
import cookieParser from "cookie-parser";
import swaggerUi = require("swagger-ui-express");
import fs = require("fs");

import log from "@log";
import PaymentService from "./services/payment-service/payment.service";

import cors from "cors";
import bodyParser from "body-parser";

class Router {
  public build(): express.Express {
    // eslint-disable-next-line prefer-const
    let app = express();

    app.get("/healthz", (req, res) => {
      log.debug("Health Check", "verbose");
      const data = {
        uptime: process.uptime(),
        message: "Ok",
        date: new Date()
      };

      res.status(200).send(data);
    });

    app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, X-Access-Token"
      );
      next();
    });

    app.use(
      cors({
        origin: "http://localhost:5173",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204,
        exposedHeaders: ["X-Access-Token"]
      })
    );
    app.use(compression({}));
    app.use(cookieParser());
    app.use(bodyParser({ limit: "50mb" }));
    app.use(bodyParser.json());
    app.use(
      bodyParser.urlencoded({
        extended: true
      })
    );

    const swaggerFile = process.cwd() + "/swagger/swagger.json";
    const swaggerData = fs.readFileSync(swaggerFile, "utf8");
    // const customCss: any = fs.readFileSync((process.cwd()+"/swagger/swagger.css"), 'utf8');
    const swaggerDocument = JSON.parse(swaggerData);

    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    // ROUTES GO HERE
    PaymentService.PaymentServicePublicRoutes(app);

    log.verbose(listEndpoints(app));

    return app;
  }
}

export default new Router();
