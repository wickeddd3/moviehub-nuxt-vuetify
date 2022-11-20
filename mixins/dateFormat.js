export default {
  methods: {
    formatDateToLongDate (date) {
      if (date) {
        const d = new Date(date);
        const month = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
        return `${month[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
      }
      return '';
    },
    getDateFullYear (date) {
      if (date) {
        const d = new Date(date);
        return d.getFullYear();
      }
      return '';
    },
    getMonthYear (date) {
      if (date) {
        const d = new Date(date);
        const month = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
        return `${month[d.getMonth()]} ${d.getFullYear()}`;
      }
      return '';
    },
  },
};
