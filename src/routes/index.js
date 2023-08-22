import detailsSitesControllers from "../controllers/detailsSitesControllers";
import realtimeControllers from "../controllers/realtimeControllers";
import realtimePmsControllers from "../controllers/realtimePmsControllers";
import realtimeSlaControllers from "../controllers/realtimeSlaControllers";
import prosesControllers from "../controllers/prosesControllers";
import ticketControllers from "../controllers/ticketControllers";
import problemController from "../controllers/problemController";
import solusiController from "../controllers/solusiController";

export default (app) => {
  //masterSiteConttroller
  app.get("/getAllSites", detailsSitesControllers.getAllSites);

  //realtimeControllers
  app.get("/getRealtime", realtimeControllers.getRealtime);
  app.get("/getWarning", realtimeControllers.getWarning);

  //realtimePmsControllers
  app.get("/getRealtimePms", realtimePmsControllers.getRealtimePms);

  //realtimeSlaControllers
  app.get("/getRealtimeSla", realtimeSlaControllers.getRealtimeSla);

  //prosesControllers
  app.get("/startProses", prosesControllers.startProses);

  //ticketControllers
  app.get("/getAllTicket", ticketControllers.getAllTicket);
  app.get("/getOpenTicket", ticketControllers.getOpenTicket);
  app.post("/createTicket", ticketControllers.createTicket);
  app.post("/checkTicket", ticketControllers.checkTicket);
  app.post("/updateResponse", ticketControllers.updateResponse);

  //problemController
  app.get("/getAllProblem", problemController.getAllProblem);
  app.post("/createProblem", problemController.createProblem);
  app.post("/checkProblemId", problemController.checkProblemId);

  //solusiController
  app.get("/getAllSolusi", solusiController.getAllSolusi);
  app.post("/createSolusi", solusiController.createSolusi);
  app.post("/checkSolusiId", solusiController.checkSolusiId);

  // Create a catch-all route for testing the installation.
  app.all("*", (req, res) =>
    res.status(200).send({
      message: "Hello World!",
    })
  );
};
