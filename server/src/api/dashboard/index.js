import BaseService from '../base-service';
class DashboardService extends BaseService{
  createAPI(){
    this.router.get("/",this.getAll.bind(this));
  }
  getAll(req, res){
    if(!this.data || this.data.length === 0){
      res.status(404).send('trade data was not found');
    }
    res.status(200).send({dataLoaded:true});
  }
}

export default DashboardService;
