import CsvParser from 'csv-parser';
import fs from 'fs';
import NodeCache from 'node-cache';
class InMemoryDatabase{
  set model(model){
    this._model = model;
  }
  get model(){
    const {service, key} = this.cache
    return service.get(key) ? JSON.parse(service.get(key)) : this._model;
  }
  set row(r){
    this.model.push(r);
  }
  set filePath(path){
    this._filePath = path;
  }
  get filePath(){
    return this._filePath;
  }
  set cache(c){
    this._cache = c;
  }
  get cache(){
    return this._cache;
  }
  constructor(duration, cacheName){
    this._filePath = "./rawData/adata.csv";
    this._model = [];
    if(this.cache && this.cache.get(cacheName)) return;
    this._cache = {
      service:new NodeCache({stdTTL:duration}),
      key:cacheName
    };
    this.generateDB();
  }
  generateDB(){
    fs.createReadStream(this.filePath)
      .pipe(CsvParser())
      .on('data', (data) => this.row = data)
      .on('end', () => {
        this.createInMemoryCache();
      });
  }
  createInMemoryCache(){
    const {key} = this.cache;
    this.cache.service.set(key, JSON.stringify(this.model), (err,success)=>{
      console.log('success: '+success);
    })
  }
}
const tradeDB = new InMemoryDatabase(60*60*10, "tradeModel");
Object.freeze(tradeDB)
export default tradeDB;
