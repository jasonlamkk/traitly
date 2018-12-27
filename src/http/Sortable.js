const Sortable = o => ({
  ...o,
  sortBy: null,
  sortDir: null,
  setSortBy(sortBy) {
    this.sortBy = sortBy;
    return this;
  },
  setSortDir(sortDir) {
    this.sortDir = sortDir;
    return this;
  },
});

export default Sortable;
