import stocks from '../../data/stocks';

// Initializing the state of the stocks in the form of an array
const state = {
  stocks: []
};

/**
 * Creating the mutations we are going to use on the stocks to change them
 * SET_STOCKS is a method that we use to set the stocks
 * RND_STOCKS is a method that we use to randomize the stock data
 */
const mutations = {
  SET_STOCKS(state, stocks) {
    state.stocks = stocks;
  },
  RND_STOCKS(state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  }
};

/**
 * Creating the actions we are going to use on the stocks
 * buyStock is a method that is used to buy stocks
 * @param { commit used to commit the action (from context object) }
 * @param { order is the order of the stock }
 * initStocks is a method used to set the initial stocks (Could be api call but comes from fake data)
 * @param { commit used to commit the action (from context object) }
 */
const actions = {
  buyStock: ({ commit }, order) => {
    commit('BUY_STOCK', order);
  },
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit('RND_STOCKS');
  }
};

/**
 * Creating the getters to get the data
 */
const getters = {
  stocks: state => {
    return state.stocks;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
