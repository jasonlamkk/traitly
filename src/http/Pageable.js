const Pageable = ({paramPage,paramPerPage}) => o => {
  o.initializers.push((o)=>{
    if(o.url_builder) o.url_builder.push(o=>{
      let u = '';
      if(o.page !== null){
        u += `&${paramPage}=${o.page}`;
      }
      if(o.perPage !== null){
        u += `&${paramPerPage}=${o.perPage}`;
      }
      return u;
    })
  });
  return ({
    ...o,
    perPage: null,
    page: null,
    setPerPage(perPage) {
      this.perPage = parseInt(perPage, 10);
      this.log('setPerPage', this.perPage);
      return this;
    },
    setPage(page) {
      this.page = parseInt(page, 10);
      this.log('setPage', this.page);
      return this;
    },
  })
};
export default Pageable;
