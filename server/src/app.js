import express from 'express';
import TradeService from './api/trade';
import DashboardService from './api/dashboard';
//stand up Server instance;
class Server {
  constructor(){
    this.app = express();
    this.APIS = {
      dashboard: new DashboardService(),
      trades: new TradeService()
    }
    this.PORT = process.env.PORT || 4100;
    this.createRoutes();
    this.startServer();
  }
  createRoutes(){
    let {APIS} = this
    this.app.use('/api/v1/', APIS.dashboard.router);
    this.app.use('/api/v1/trades', APIS.trades.router);
  }
  startServer(){
    this.app.listen(this.PORT, () => {
      console.log(`server running on port ${this.PORT}`);
    });
  }
}
new Server();
