export default(state=0, payload) => {
    switch (payload.type) {
        case 'INCREMENT':
            return state + 1;
        default:
          return state;
    }
};
