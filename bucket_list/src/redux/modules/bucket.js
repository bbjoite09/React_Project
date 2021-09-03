// bucket.js
import {firestore} from "../../firebase";

const bucket_db = firestore.collection("bucket");

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";
const UPDATE = "bucket/UPDATE";

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
        let bucket_data = {text: bucket, completed: false};

        bucket_db
            .add(bucket_data)
            .then((docRef) => {
                // id를 추가한다!
                bucket_data = {...bucket_data, id: docRef.id};
                dispatch(createBucket(bucket_data));
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
        const _bucket_data = getState().bucket.list[bucket];
        console.log(_bucket_data);

        let bucket_data = {..._bucket_data, completed: true};

        if(!bucket_data.id){
            return;
        }

        bucket_db
            .doc(bucket_data.id)
            .update(bucket_data)
            .then((res) => {
                dispatch(updateBucket(bucket));
            }).catch(error => {
            console.log(error);
        })
    }
}

export const deleteBucketFB = (bucket) => {
    return function (dispatch, getState) {
        const _bucket_data = getState().bucket.list[bucket];

        if(!_bucket_data.id){return;}

        bucket_db.doc(_bucket_data.id).delete().then(docRef => {
            dispatch(deleteBucket(bucket));
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
                return {list: action.bucket};
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

        default:
            return state;
    }
}


// export function removeWidget(widget) {
//     return {type: REMOVE, widget};
// }
