
const Requestable = ({ base, endPoint, method }) => o => {
  o.provide('requestable');
  
  return ({
    ...o,
    method,
    endPoint,
    params:{},
    queries:{},
    prePathMiddlewares:[],
    postPathMiddlewares:[],
    preQueryMiddlewares:[],
    postQueryMiddlewares:[],
    preBodyMiddlewares:[],
    postBodyMiddlewares:[],
    buildUrl() {
      const self = this;
      
      let path = self.prePathMiddlewares.reduce((path, f)=>f(self,path),endPoint);
      path = self.postPathMiddlewares.reduce((path, f)=>f(self, path), path);

      const pq = path.split(/\?/);
      let query;
      if(pq.length > 1){
        path = `${pq[0]}`;
        query = `?${  pq[1]}`;
      } else {
        query = '?';
      }

      query = self.preQueryMiddlewares.reduce((query, f)=>f(self, query), query);
      query = self.postQueryMiddlewares.reduce((query, f)=>f(self, query), query);

      const url = base + path + query;
      
      return url;
    },
    buildBody(){
      
    }
  });
};

export default Requestable;
