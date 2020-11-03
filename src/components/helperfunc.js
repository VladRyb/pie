export function useDrillableData(data, useReducer) {
  const initialState = {
    renderData: data,
    stack: [],
    startAngle: 0,
  };

  return useReducer((state, action) => {
    switch (action.type) {
      case "drilldown":
        return {
          renderData: state.renderData[action.index],
          stack: [...state.stack, state.renderData],
          startAngle: action.startAngle,
        };
      case "drillup":
        if (state.stack.length > 0) {
          return {
            renderData: state.stack.slice(-1)[0],
            stack: state.stack.slice(0, -1),
            startAngle: state.startAngle,
          };
        } else {
          return state;
        }
      default:
        return state;
    }
  }, initialState);
}

export function colorSchema(index) {
  const color = ["#00e1ff", "#00cbf9", "#00b5f0", "#009fe3"];
  return color[index];
}
