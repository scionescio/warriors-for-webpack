export default function reducer(
  state = {
    warriors: [],
    cool: true,
    supercool: false
  },
  action
) {
  switch (action.type) {
    case "CREATE_WARRIOR": {
      return {
        ...state,
        warriors: [...state.warriors, action.payload]
      };
    }
  }
}
