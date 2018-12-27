const dummies = o => {
    o.provide('dummies')
    return {
        ...o,
        initializers:[],
        log() {},
        warn() {},
        error() {},
    };
};

export default dummies;