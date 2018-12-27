const Taggable = (tag) => o => {
    o.provide('taggable');
    return {
        ...o,
        getTag(){
            return tag;
        }
    };
}
export default Taggable;
