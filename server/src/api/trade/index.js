import BaseService from "../base-service";
class TradeService extends BaseService {
  consturctor() {}
  createAPI() {
    this.router.get("/", this.getAll.bind(this));
    this.router.get("/:lp", this.getByLp.bind(this));
  }
  getAll(req, res) {
    this.setQSParams(req);
    const data = this.getDataChunk(this.data);
    if (!data || data.length === 0) {
      return res.status(404).send("trade data was not found");
    }
    return res.status(200).send(this.formatData(data));
  }
  getByLp(req, res) {
    this.setRouteParams(req);
    this.setQSParams(req);
    const data = this.getDataChunk(this.filterData());
    if (!data || data.length === 0) {
      return res
        .status(404)
        .send("the LP data you were looking for was not found");
    }
    return res.status(200).send(this.formatData(data));
  }
  formatData(data) {
    return data.map(row => {
      let dt = new Date(row.ts.substring(0, row.ts.length - 1));
      row["formattedDate"] =
        dt.toDateString() + ", " + dt.toLocaleTimeString("en-US");
      return row;
    });
  }
}

export default TradeService;
