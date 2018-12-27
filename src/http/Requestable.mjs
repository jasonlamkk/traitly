/**
 * private function help convert object into query string
 * @param obj 
 * @param prefix 
 */
function serializeQueries(obj, prefix) {
  return Object.keys(obj).reduce((acc, p)=> {
    const k = prefix ? `${prefix  }[${  p  }]` : p;
    const v = obj[p];
    acc.push((v !== null && typeof v === "object") ?
    serializeQueries(v, k) :
    `${encodeURIComponent(k)  }=${  encodeURIComponent(v)}`);
    return acc;
  }, []).join('&');
};

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
    preQueryMiddlewares:[(o,q) => `${q}${serializeQueries(o.queries)}`],
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
