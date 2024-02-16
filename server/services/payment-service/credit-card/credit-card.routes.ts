import { Express, Request, Response } from "express";

import log from "@log";

import { CreditCard } from "./classes/credit-card.class";

class CreditCardRoutes {
  public CreditCardRoutes(app: Express): Express {
    app.post("/api/v1/validate-credit-card", (req: Request, res: Response) => {
      log.debug("/api/v1/validate-credit-card");
      const cc_number = Number(req.body?.cc_number);
      const exp_date = String(req.body?.exp_date);

      if (!cc_number || !exp_date) {
        res.status(422).send({ error: "Missing Parameters" });
        return;
      }

      const cc = new CreditCard(cc_number, exp_date);
      const isValid = cc.checkExpirationDate() && cc.checkCCNumber();

      if (isValid) {
        res.status(200).send({ response: "Yay you validated!" });
        return;
      }

      res.status(400).send({ response: "Oh no, something went wrong!" });
      return;
    });

    return app;
  }
}

export default new CreditCardRoutes();
