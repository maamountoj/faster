import { createActions } from 'redux-actions'
import { keys, has, isEmpty } from 'lodash'
import { fetchApi } from '../apiFn'

export const prepareActions = (val) => {
  const newVal = val.replace(/[A-Z]/g, (m) => '_' + m).toUpperCase()
  return createActions(
    `START_LOADING_${newVal}`,
    `${newVal}`,
    `STOP_LOADING_${newVal}`,
    `ERROR_${newVal}`
  )
}
export const dispatchActions = (data) => {
  let dataFns = {}
  data?.map((val) => {
    const dispatchPrepareActions = prepareActions(val?.name)
    const slice = 4
    let index = 0
    while (index < keys(dispatchPrepareActions).length) {
      const partsKeys = keys(dispatchPrepareActions).splice(index, slice)
      dataFns = {
        ...dataFns,
        [`${val?.name}Action`]: (data = {}) => async (dispatch) => {
          dispatch(dispatchPrepareActions[partsKeys[0]](true))
          try {
            has(val, 'setPayload')
              ? dispatch(
                  dispatchPrepareActions[partsKeys[1]](val.setPayload(data))
                )
              : dispatch(dispatchPrepareActions[partsKeys[1]](data))
            dispatch(dispatchPrepareActions[partsKeys[2]](false))
          } catch (error) {
            dispatch(dispatchPrepareActions[partsKeys[2]](false))
            dispatch(dispatchPrepareActions[partsKeys[3]](error))
          }
        }
      }
      index = index + slice
    }
  })

  return dataFns
}
export const dispatchActionsWithApi = (data) => {
  let dataFns = {}
  data?.map((val) => {
    const { api, name, url, method, config } = val
    const dispatchPrepareActions = prepareActions(name)
    const slice = 4
    let index = 0
    //val = val.charAt(0).toUpperCase() + val.slice(1);
    while (index < keys(dispatchPrepareActions).length) {
      const partsKeys = keys(dispatchPrepareActions).splice(index, slice)
      dataFns = {
        ...dataFns,
        [`${name}Action`]: (data) => async (dispatch) => {
          let res
          dispatch(dispatchPrepareActions[partsKeys[0]](true))
          try {
            if (!isEmpty(api)) {
              has(data, 'paramsUrl')
                ? (res = await fetchApi({
                    api: api,
                    method,
                    url,
                    paramsUrl: data?.paramsUrl,
                    body: has(data, 'body') && method == 'get' ? '' : data.body,
                    config
                  }))
                : (res = await fetchApi({
                    api: api,
                    method,
                    url,
                    body: method == 'get' ? '' : data,
                    config
                  }))
            } else {
              has(data, 'paramsUrl')
                ? (res = await fetchApi({
                    method,
                    url,
                    paramsUrl: data?.paramsUrl,
                    body: has(data, 'body') && method == 'get' ? '' : data.body,
                    config
                  }))
                : (res = await fetchApi({
                    method,
                    url,
                    body: method == 'get' ? '' : data,
                    config
                  }))
            }
            has(val, 'setPayload')
              ? dispatch(
                  dispatchPrepareActions[partsKeys[1]](
                    val?.setPayload({ data, res })
                  )
                )
              : dispatch(dispatchPrepareActions[partsKeys[1]](res.data))

            dispatch(dispatchPrepareActions[partsKeys[2]](false))
          } catch (error) {
            dispatch(dispatchPrepareActions[partsKeys[2]](false))
            dispatch(dispatchPrepareActions[partsKeys[3]](error))
          }
        }
      }
      index = index + slice
    }
  })
  return dataFns
}

/* export const dispatchActionsWithGet = (data, API_URL) => {
  const dispatchActions = prepareActions(data);
  let dataFns = {};
  const slice = 3;
  data.map((val) => {
    let index = 0;
    let array = [];
    val.split("_").map((val) => {
      array = [...array, val.charAt(0).toUpperCase() + val.slice(1)];
    });
    //val = val.charAt(0).toUpperCase() + val.slice(1);
    while (index < keys(dispatchActions).length) {
      const partsKeys = keys(dispatchActions).splice(index, slice);
      dataFns = {
        ...dataFns,
        [`fetch${array.join("")}`]: () => async (dispatch) => {
          dispatch(dispatchActions[partsKeys[0]]());
          await api
            .get(API_URL)
            .then((res) => {
              console.log(res.data);
              dispatch(dispatchActions[partsKeys[1]](res.data));
            })
            .catch((err) => {
              dispatch(dispatchActions[partsKeys[2]](err.message));
            });
        },
      };
      index = index + slice;
    }
  });

  console.log(dataFns, "fffffffffff");
  return dataFns;
}; */
/* export const dispatchActionsWithGetById = (data) => {
  const dispatchActions = prepareActions(data);
  let dataFns = {};
  const slice = 3;
  data.map((val) => {
    let index = 0;
    let array = [];
    val.split("_").map((val) => {
      array = [...array, val.charAt(0).toUpperCase() + val.slice(1)];
    });
    //val = val.charAt(0).toUpperCase() + val.slice(1);
    while (index < keys(dispatchActions).length) {
      const partsKeys = keys(dispatchActions).splice(index, slice);
      dataFns = {
        ...dataFns,
        [`fetch${array.join("")}`]: (API_URL) => async (dispatch) => {
          dispatch(dispatchActions[partsKeys[0]]());
          await api
            .get(API_URL)
            .then((res) => {
              dispatch(dispatchActions[partsKeys[1]](res.data));
            })
            .catch((err) => {
              dispatch(dispatchActions[partsKeys[2]](err.message));
            });
        },
      };
      index = index + slice;
    }
  });
  return dataFns;
};
 */
