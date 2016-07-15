'use strict';
import {Alert} from 'react-native';

import * as data from '../constants/VirtualData';
const noNetMessage = '没有网络连接';
const RequestUtils = {
  netState: 'none',
  request: function (url, method, body, headers) {
    console.log('url = ', url);
    var isOk;
    return new Promise((resolve, reject) => {
      // const timeoutId = setTimeout(() => reject(new Error('request timeout')), 30000);
      // fetch(url, {
      //     method: method,
      //     headers: headers,
      //     body: body,
      //   })
      //   .then((response) => {
      //     if (response.ok) {
      //       isOk = true;
      //     } else {
      //       isOk = false;
      //     }
      //     return response.json();
      //   })
      //   .then((responseData) => {
      //     clearTimeout(timeoutId);
      //     if (isOk) {
      //       console.log('responseData = ', responseData);
      //       resolve(responseData);
      //     } else {
      //       reject(responseData);
      //     }
      //   })
      //   .catch((error) => {
      //     clearTimeout(timeoutId);
      //     reject(error);
      //   });

      resolve(getResponseData(url));
    })
  },
  post: function (url, data) {
    var fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: querystring.stringify(data || {})
    };

    var timer = new Date().getTime();

    return new Promise(function (resolve, reject) {
      if (RequestUtils.netState.toUpperCase() === 'NONE') {
        Toast.show(noNetMessage)
        return reject(noNetMessage);
      }

      fetch(url, fetchOptions)
        .then((res) => {
          if (!res.ok) {
            reject(res.status);
          } else {
            return res.text();
          }
        })
        .then((text) => {
          var json;

          try {
            json = JSON.parse(text);
          } catch (e) {
            return reject('返回格式不是JSON: ' + text);
          }

          resolve(json);
        });

      // setTimeout(()=>{
      //     reject('状态：网络超时');
      // }, 10000);
    })
  },
  get: function (url) {
    return new Promise((resolve, reject) => {
      if (RequestUtils.netState.toUpperCase() === 'NONE') {
        return reject(noNetMessage);
      }

      fetch(url, {
        method: 'GET',
        timeout: 10
      })
        .then((res) => {
          if (!res.ok) {
            reject(res.status);
          } else {
            return res.text();
          }
        })
        .then((text) => {
          resolve(text);
        })
        .catch((error) => {
          //alert(error)
        });

      // setTimeout(()=>{
      //     reject('状态：网络超时');
      // }, 1000000);
    });
  },
}




function getResponseData(url) {
  if (url.indexOf("login") > 0)
    return data.LOGIN_DATA;
  else if (url.indexOf("personalTasksCount") > 0)
    return data.COUNT_DATA;
  else if (url.indexOf("newsData") > 0)
    return data.NEWS_DATA;
  else if (url.indexOf("findAllCmsArticle") > 0)
    return data.NOTICE_LIST_DATA;
  else if (url.indexOf("findAddressByUserName") > 0)
    return data.ADDRESS_DATA;
  else if (url.indexOf("personalTasks") > 0)
    return data.TASK_LIST_DATA;
  else if (url.indexOf("viewProcessTaskDeatil") > 0)
    return data.TASK_DETAIL_DATA;
  else if (url.indexOf("viewTaskForm") > 0)
    return data.TASK_LIST_APPROVE_DATA;
  else if (url.indexOf("processNodeButtons") > 0)
    return data.NODE_BUTTON_DATA;
  else if (url.indexOf("completeTask") > 0)
    return data.APPROVE_RESULT_DATA;
  else if (url.indexOf("bpmType") > 0)
    return data.OFFICE_ITEM_DATA;
  else if (url.indexOf("bpmProcess.do") > 0)
    return data.TASK_LIST_CONTENT_DATA;
  else if (url.indexOf("viewStartForm") > 0)
    return data.TASK_LIST_FORM_DATA;
  else if (url.indexOf("startProcessInstance") > 0)
    return data.TASK_LIST_FORM_COMMIT_DATA;
}

