const initialState = [
  {
    id: 0,
    name: "Chess",
    type: "IOS Application",
    teamNeeded: 3,
    location: "Riyadh",
    desc: "Phone Game",
    level: "Advance",
  },
];

export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      state = [...state, action.payload];
      return state;
    case "DELETE_PROJECT":
      const projectFilter = state.filter((project) =>
        project.id === action.payload ? null : project
      );
      state = projectFilter;
      return state;
    case "UPDATE_PROJECT":
      const projectUpdate = state.filter((project) =>
        project.id === action.payload.id
          ? Object.assign(project, action.payload)
          : project
      );
      state = projectUpdate;
      return state;
    case "RESET_PROJECT":
      state = [
        {
          name: null,
          type: null,
          teamNeeded: null,
          location: null,
          desc: null,
          level: null,
        },
      ];
      return state;
    default:
      return state;
  }
};
