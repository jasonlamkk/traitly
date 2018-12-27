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

/**
 * query
 * dynamicly set, less limitation than param
 * @param defaultQueries 
 */
const WithQuery = (defaultQueries) => o => {
    o.require('requestable');
    o.provide('query');// may
    Object.assign(o.queries, defaultQueries)
    o.preQueryMiddlewares.push((o,q) => serializeQueries(o.queries));
    // Object.keys(o.queries).reduce((acc,k)=>`${acc}&${k}=${o.queries[k]}`,p));

    return {
        ...o,
        setQuery(key, val){
            this.queries[key] = val;
            return this;
        }
    };
}

export default WithQuery;