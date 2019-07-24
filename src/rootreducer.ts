const initstate: any = {
  slots: [
    { slotnumber: "1", slotavailable: true, id: 1 },
    { slotnumber: "2", slotavailable: true, id: 2 },
    { slotnumber: "3", slotavailable: true, id: 3 },
    { slotnumber: "4", slotavailable: true, id: 4 },
    { slotnumber: "5", slotavailable: true, id: 5 },
    { slotnumber: "6", slotavailable: true, id: 6 },
    { slotnumber: "7", slotavailable: true, id: 7 },
    { slotnumber: "8", slotavailable: true, id: 8 },
    { slotnumber: "9", slotavailable: true, id: 9 },
    { slotnumber: "10", slotavailable: true, id: 10 }
  ]
};

const RootReducer = (state = initstate, action: any) => {
  if (action.type === "modifyslot") {
    let modslots = state.slots;
    modslots.forEach((ele: any) => {
      if (ele.id == action.id) {
        ele.slotavailable = !ele.slotavailable;
      }
    });
    return {
      ...state,
      slots: modslots
    };
  }

  return state;
};
export default RootReducer;
