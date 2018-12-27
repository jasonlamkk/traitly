/**
 * query
 * dynamicly set, less limitation than param
 * @param defaultQueries 
 */
const WithQuery = (defaultQueries) => o => {
    o.require('requestable');
    o.provide('query');// may
    Object.assign(o.queries, defaultQueries);
    return {
        ...o,
        setQuery(key, val){
            this.queries[key] = val;
            return this;
        }
    };
}

export default WithQuery;