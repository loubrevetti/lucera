import tradeDB from '../db';
import express from 'express';
class BaseService{
  set data(db){
    this._data = db;
  }
  get data(){
    return this._data;
  }
  set router(r){
    this._router = r;
  }
  get router(){
    return this._router;
  }
  set chunk(c){
    this._chunk = c;
  }
  get chunk(){
    return this._chunk;
  }
  set filters(f){
    this._filters = f;
  }
  get filters(){
    return this._filters
  }

  constructor(){
    this._data = tradeDB.model;
    this._chunk = {
      start:0,
      end:500
    }
    this._filters = {};
    this._router = express.Router();
    this.router.use(function timeLog (req, res, next) {
      console.log('Time: ', Date.now())
      next()
    });
    this.createAPI();
  }
  createAPI(){
    throw new Error('you must implement this method onto the service instance');
  }
  setQSParams(req){
    this.chunk.start = parseInt(req.query.start) || parseInt(this.chunk.start);
    this.chunk.end = parseInt(req.query.end) || parseInt(this.chunk.end);
  }
  setRouteParams(req){
    Object.keys(req.params).forEach((param)=> this.filters[param] = req.params[param]);
  }
  filterData(){
    return this.data.filter((row) =>{
      let hasFilter;
      Object.keys(this.filters).forEach((filter)=>{
        hasFilter = row[filter] === this.filters[filter]
      })
      return hasFilter ? row : null;
    })
  }
  getDataChunk(d){
    return d.slice(this.chunk.start,this.chunk.end).map((row,idx)=>{
      row['UUID'] = 'data-itm-' + (this.chunk.start+idx);
      return row;
    });
  }
}
export default BaseService;
