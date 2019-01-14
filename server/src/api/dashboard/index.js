import BaseService from "../base-service";
class DashboardService extends BaseService {
  createAPI() {
    this.router.get("/", this.getAll.bind(this));
  }
  getAll(req, res) {
    if (!this.data || this.data.length === 0) {
      return res.status(404).send("trade data was not found");
    }
    return res.status(200).send({ dataLoaded: true });
  }
}

export default DashboardService;
