// bucket.js
import {firestore} from "../../firebase";

const bucket_db = firestore.collection("bucket");

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";
const UPDATE = "bucket/UPDATE";

const LOADED = "bucket/LOADED";

// initialState
const initialState = {
    // 상태 변화를 체크하기 위해 자료 형태 변경
    // list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
    list: [
        {text: "영화관 가기", completed: false},
        {text: "매일 책읽기", completed: false},
        {text: "수영 배우기", completed: false},
        {text: "춤 배우기", completed: false},
    ],
    is_loaded: false,
};

//Action Creators - export default 는 파일당 1개만 가능하므로 그냥 export
export const loadBucket = (bucket) => {
    return {type: LOAD, bucket};
}

export const createBucket = (bucket) => {
    return {type: CREATE, bucket}
}

export const deleteBucket = (bucket) => {
    return {type: DELETE, bucket};
}

export const updateBucket = (bucket) => {
    return {type: UPDATE, bucket};
}

export const isLoaded = (loaded) => {
    return {type: LOADED, loaded}
}

// 통신
export const loadBucketFB = () => {
    return function (dispatch) {
        bucket_db.get().then((docs) => {
            let bucket_data = [];
            docs.forEach((doc) => {

                if (doc.exists) {
                    bucket_data = [...bucket_data, {id: doc.id, ...doc.data()}];
                }
            })
            console.log(bucket_data);
            dispatch(loadBucket(bucket_data));
        });
    }
}

export const addBucketFB = (bucket) => {
    return function (dispatch) {
        dispatch(isLoaded(false));

        let bucket_data = {text: bucket, completed: false};

        bucket_db
            .add(bucket_data)
            .then((docRef) => {
                // id를 추가한다!
                bucket_data = {...bucket_data, id: docRef.id};

                // 성공했을 때는? 액션 디스패치!
                dispatch(createBucket(bucket_data));
                // 스피너도 다시 없애줘야죠!
                dispatch(isLoaded(true));
            })
            .catch((err) => {
                // 여긴 에러가 났을 때 들어오는 구간입니다!
                console.log(err);
                window.alert('오류가 났네요! 나중에 다시 시도해주세요!');
            });
    }
}

export const updateBucketFB = (bucket) => {
    return function (dispatch, getState) {
        dispatch(isLoaded(false));

        const _bucket_data = getState().bucket.list[bucket];
        console.log(_bucket_data);

        let bucket_data = {..._bucket_data, completed: true};

        if (!bucket_data.id) {
            return;
        }

        bucket_db
            .doc(bucket_data.id)
            .update(bucket_data)
            .then((res) => {
                dispatch(updateBucket(bucket));
                dispatch(isLoaded(true));
            }).catch(error => {
            console.log(error);
        })
    }
}

export const deleteBucketFB = (bucket) => {
    return function (dispatch, getState) {
        dispatch(isLoaded(false));

        const _bucket_data = getState().bucket.list[bucket];

        if (!_bucket_data.id) {
            return;
        }

        bucket_db.doc(_bucket_data.id).delete().then(docRef => {
            dispatch(deleteBucket(bucket));
            dispatch(isLoaded(true));
        }).catch(error => {
            console.log(error);
        });
    }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "bucket/LOAD": {
            if (action.bucket.length > 0) {
                return {list: action.bucket, is_loaded: true};
            }
            return state;
        }

        case "bucket/CREATE" : {
            const new_bucket_list = [...state.list, action.bucket,];
            return {list: new_bucket_list};
        }

        case "bucket/DELETE": {
            const bucket_list = state.list.filter((l, idx) => {
                if (idx !== action.bucket) {
                    return l;
                }
            });
            return {list: bucket_list};
        }


        case "bucket/UPDATE": {
            const bucket_list = state.list.map((l, idx) => {
                if (idx === action.bucket) {
                    return {...l, completed: true};
                }
                return l;
            });

            return {list: bucket_list};
        }

        case "bucket/LOADED": {
            return {...state, is_loaded: action.loaded};
        }

        default:
            return state;
    }
}


// export function removeWidget(widget) {
//     return {type: REMOVE, widget};
// }
