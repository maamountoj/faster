import axios from "axios";
import { isEmpty } from "lodash";
const getWithParamsUrl = (path, params) => {
  const regex = /\[(.*?)\]/g;
  let index = 0;
  let replacePath;
  if (!isEmpty(params)) {
    path.replace(regex, (match, name, surname) =>
      console.log(`${surname}, ${name}`)
    );
    replacePath = path.replace(regex, (match, name, surname) => {
      let replaceStr = `${params[name]}`;
      index = index + 1;
      return replaceStr;
    });
  } else {
    replacePath = path;
  }

  return replacePath;
};
const getApi = async ({ url, params, config }) => {
  let response = null;
  let path = getWithParamsUrl(url, params);
  let res = null;
  try {
    isEmpty(config)
      ? (res = await axios.put(path))
      : (res = await axios.put(path, config));
    response = res.data;
  } catch (err) {
    console.log(err);
  }
  return response;
};
const postApi = async ({ url, params, body, config }) => {
  console.log("postApi");
  let response = null;
  let path = getWithParamsUrl(url, params);
  let res = null;
  try {
    isEmpty(config)
      ? (res = await axios.post(path, body, config))
      : (res = await axios.post(path, body));
    response = res.data;
  } catch (err) {
    console.log(err);
  }
  return response;
};
const putApi = async ({ url, params, body, config }) => {
  let response = null;
  let path = getWithParamsUrl(url, params);
  let res = null;
  try {
    isEmpty(config)
      ? (res = await axios.put(path, body, config))
      : (res = await axios.put(path, body));
    response = res.data;
  } catch (err) {
    console.log(err);
  }
  return response;
};
const deleteApi = async ({ url, params, config }) => {
  let response = null;
  let path = getWithParamsUrl(url, params);
  let res = null;
  try {
    isEmpty(config)
      ? (res = await axios.delete(path))
      : (res = await axios.delete(path, config));
    response = res.data;
  } catch (err) {
    console.log(err);
  }
  return response;
};
const fetchApi = async ({ method, url, params, body, config }) => {
  method = method.toLowerCase();
  console.log({ method, url, params, body, config });
  let error = null;
  let response = null;
  let path = getWithParamsUrl(url, params);
  let res = null;
  try {
    if (method === "get" || method === "delete") {
      isEmpty(config)
        ? (res = await axios[method](path))
        : (res = await axios[method](path, config));
      response = res.data;
    } else if (method === "post" || method === "put") {
      isEmpty(config)
        ? (res = await axios[method](path, body, config))
        : (res = await axios[method](path, body));
      response = res.data;
    } else {
      console.error("Ensure your method please");
    }
  } catch (err) {
    error = err;
    console.log(err);
  }
  console.log("responseresponse", response);
  return response;
};
export { fetchApi, getApi, postApi, putApi, deleteApi };
