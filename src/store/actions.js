import Vue from 'vue';

// Action that loads the data
export const loadData = ({ commit }) => {
  // Using the http get right off the the Vue instance
  Vue.http
    .get('data.json')
    .then(response => response.json())
    .then(data => {
      // Checking to see if there is data in the server already
      if (data) {
        const stocks = data.stocks;
        const funds = data.funds;
        const stockPortfolio = data.stockPortfolio;
        const portfolio = {
          funds,
          stockPortfolio
        };
        commit('SET_STOCKS', stocks);
        commit('SET_PORTFOLIO', portfolio);
      }
    });
};
