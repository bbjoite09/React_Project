// bucket.js

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";

const initialState = {
    list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
};


// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
      default: return state;
      // do reducer stuff
  }
}


export function removeWidget(widget) {
  return { type: REMOVE, widget };
}
