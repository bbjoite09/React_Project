// bucket.js

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";

// initialState
const initialState = {
    list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
};

//Action Creators - export default 는 파일당 1개만 가능하므로 그냥 export
export const loadBucket = (bucket) => {
    return {type: LOAD, bucket};
}

export const createBucket = (bucket) => {
    return {type: CREATE, bucket}
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "bucket/LOAD": {
            return state;
        }

        case "bucket/CREATE" : {
            const new_bucket_list = [...state.list, action.bucket];
            return {list: new_bucket_list};
        }

        default:
            return state;
        // do reducer stuff
    }
}


export function removeWidget(widget) {
    return {type: REMOVE, widget};
}
