/**
 * param
 * part of endpoint string
 * manage by setXxx(value)
 */

const ptnSearchParameter = /\{([\d\w]+)(:(\w+))?\}/g;

const WithAutoParameters = o => {
    o.require('requestable');
    o.provide('param');// may have other ways to work with path param
    
    const self = o;

    let arr;
    const pathParams = [];
    do {
        arr = ptnSearchParameter.exec(o.endPoint);
        if(arr !== null){
            const key = arr[1];
            pathParams.push(key);
            if(arr[3]){
                const val = arr[3];
                self.params[key] = val;
            }
            if(self[key]){
                const initType = typeof self[key];
                if(initType === 'string' || initType === 'number' || initType === 'boolean') {
                    self.params[key] = self[key];
                    delete self[key];
                }

                const setter = `set${key.charAt(0).toUpperCase() + key.slice(1)}`;
                self[setter] = (val) => {
                    self.params[key] = val;
                    return self;
                }
            }
        }
    }while(arr !== null);

    const prePath = (o, p) => pathParams.reduce((acc,k)=>{
        let value;
        switch(typeof o.params[k]){
            case 'undefined':
            case 'null':
                throw new Error(`missing parameter "${k}"`);
            case 'string':
                value = o.params[k];
                break;
            case 'number':
                value = `${  o.params[k]}`;
                break;
            case 'boolean':
                value = o.params[k] ? '1' : '0';
                break;
            default:
            throw new Error(`parameter "${k}" with unsupport type : "${typeof o.params[k]}"`);
        }
        
        return acc.replace(new RegExp(`{${k}(:(\\w+))?}`,'g'), `${value}`);
        }, p);
    

    o.prePathMiddlewares.push(prePath);
    return o;
};

export default WithAutoParameters;