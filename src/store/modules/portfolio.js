// Initializing the intial state of the portfolio module
const state = {
  funds: 10000,
  stocks: []
};

/**
 * Settings up the mutations in order to make changes
 * BUY_STOCK is used in order to buy stock
 * SELL_STOCK is used to sell the stock
 */
const mutations = {
  BUY_STOCK(state, { stockId, quantity, stockPrice }) {
    // We need to find the record that is going to be updated
    const record = state.stocks.find(element => element.id === stockId);
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity
      });
    }
    state.funds -= stockPrice * quantity;
  },
  SELL_STOCK(state, { stockId, quantity, stockPrice }) {
    // We need to find the record that is going to be updated
    const record = state.stocks.find(element => element.id === stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quantity;
  },
  SET_PORTFOLIO(state, portfolio) {
    state.funds = portfolio.funds;
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  }
};

/**
 * Setting up the actions to use on the stocks in the portfolio
 * sellStock is used to sell the stock
 * @param { commit is used from the context object to commit the action }
 * @param { order is the order being used }
 */
const actions = {
  sellStock({ commit }, order) {
    commit('SELL_STOCK', order);
  }
};

/**
 * Setting up the getters being used for the stocks in the portfolio
 * stockPortfolio gets the stocks from the portfolio and returns a new object with the id, quantity, name, and price
 */
const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id === stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };
    });
  },
  funds(state) {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
