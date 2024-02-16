import * as express from "express";
import CreditCard from "./credit-card/credit-card.routes";

class PaymentService {
  public PaymentServicePublicRoutes(app: express.Express): express.Express {
    app = CreditCard.CreditCardRoutes(app);
    return app;
  }
}

export default new PaymentService();
