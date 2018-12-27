import api from 'requests/ApiCaller';
// within this folder scope everything is about request, so just named Promiseable
const Promiseable = o => ({
  ...o,
  runWithPromise() {
    let payload = null;
    if (typeof this.getPayload === 'function') {
      payload = this.getPayload();
    }
    const url = this.buildUrl();
    if (this.isDebug) {
      console.debug('requestWithPromise -- start --');
      console.debug(`Method: ${this.method}`);
      console.debug(`Url: ${url}`);
      console.debug(`Payload: ${payload}`);
      console.debug('requestWithPromise -- end --');
    }

    return api(this.method, url, true, payload);
  },
});

export default Promiseable;
