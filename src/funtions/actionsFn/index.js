import { createActions } from 'redux-actions'
import { keys, has, isEmpty } from 'lodash'
import { fetchApi } from '../apiFn'

export const prepareActions = (val) => {
  let dataActions = []
  const newVal = val.replace(/[A-Z]/g, (m) => '_' + m).toUpperCase()
  dataActions = [
    ...dataActions,
    `START_LOADING_${newVal}`,
    `${newVal}`,
    `STOP_LOADING_${newVal}`
  ]
  return createActions(...dataActions)
}
export const dispatchActions = (data) => {
  let dataFns = {}
  data?.map((val) => {
    const dispatchActions = prepareActions(val?.name)
    const slice = 3
    let index = 0
    while (index < keys(dispatchActions).length) {
      const partsKeys = keys(dispatchActions).splice(index, slice)
      dataFns = {
        ...dataFns,
        [`${val?.name}Action`]: (data = {}) => async (dispatch) => {
          console.log(data)
          /*  console.log(dispatchActions[partsKeys[0]](true));
          console.log(dispatchActions[partsKeys[1]](fn(data)));
          console.log(dispatchActions[partsKeys[2]](false)); */
          dispatch(dispatchActions[partsKeys[0]](true))
          has(val, 'fn')
            ? dispatch(dispatchActions[partsKeys[1]](val.fn(data)))
            : dispatch(dispatchActions[partsKeys[1]](data))
          dispatch(dispatchActions[partsKeys[2]](false))
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
    const dispatchActions = prepareActions(name)
    const slice = 3
    let index = 0
    //val = val.charAt(0).toUpperCase() + val.slice(1);
    while (index < keys(dispatchActions).length) {
      const partsKeys = keys(dispatchActions).splice(index, slice)
      dataFns = {
        ...dataFns,
        [`${name}Action`]: (data) => async (dispatch) => {
          let res
          dispatch(dispatchActions[partsKeys[0]](true))
          console.log(data)
          if (!isEmpty(api)) {
            has(data, 'params')
              ? (res = await fetchApi({
                  api: api,
                  method,
                  url,
                  params: data?.params,
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
            has(data, 'params')
              ? (res = await fetchApi({
                  method,
                  url,
                  params: data?.params,
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
          /* console.log(res1);
          const res = await api.post(urlApi, data); */
          has(val, 'fn')
            ? dispatch(dispatchActions[partsKeys[1]](val?.fn({ data, res })))
            : dispatch(dispatchActions[partsKeys[1]](res))

          dispatch(dispatchActions[partsKeys[2]](false))
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
