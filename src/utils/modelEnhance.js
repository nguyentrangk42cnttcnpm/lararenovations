import $$, { request } from 'cmn-utils';
import config from '../config';

const REQUEST = '@request';
const REQUEST_SUCCESS = '@request_success';
const REQUEST_ERROR = '@request_error';
const CHANGE_STATE = '@change';
const CHANGE_STATE_SUCCESS = '@change_success';

/**
 * @param {*} payload
 */
export async function asyncRequest(payload) {
  if (!payload || !payload.url)
    throw new Error('payload require contains url opt');

  const { url, ...other } = payload;


  const _promise = other.method
    ? request[other.method.toLowerCase()](url, other.data, other)
    : request.send(url, other);
  return _promise;

}

export const simpleModel = {
  namespace: $$.randomStr(4),
  enhance: true,
  state: {},
  effects: {},
  reducers: {}
};

export default model => {
  const { namespace, state, subscriptions, effects, reducers, enhance } = {
    ...simpleModel,
    ...model
  };

  if (!enhance) {
    return { namespace, state, subscriptions, effects, reducers };
  }
  return {
    namespace,
    state,
    subscriptions,
    effects: {
    
      ...effects,
      *[REQUEST]({ payload, success, error, afterResponse }, { call, put }) {
        let _payloads = [];
        if ($$.isObject(payload)) {
          _payloads.push(payload);
        } else if ($$.isArray(payload)) {
          _payloads = payload;
        }

        const resultState = {
          success: {},
          error: {}
        };

        for (let i = 0; i < _payloads.length; i += 1) {

          const { valueField, notice, actionType, ...otherPayload } = _payloads[i];

          try {
            let response = yield call(asyncRequest, otherPayload);  
            if ($$.isFunction(afterResponse)) {
              const _r = afterResponse(response);
              if (_r) response = _r;
            }

            if (otherPayload.success) {
              otherPayload.success(response);
            }

        
            if (notice) {
              config.notice.success(notice === true ? 'Successful operation' : notice[0]);
            }

            if (actionType) {
              yield put({
                type: `${actionType}_SUCCESS`,
                payload: response
              });
            } else {
           
              resultState.success[valueField || '_@fake_'] = response;
            }
          } catch (e) {
            resultState.error.error = e;

         
            if ($$.isFunction(otherPayload.error)) {
              otherPayload.error(e);
            } else if ($$.isFunction(error)) {
              error(e);
            }

         
            yield put({
              type: actionType ? `${actionType}_ERROR` : REQUEST_ERROR,
              payload: resultState.error
            });
            break;
          }
        }

        if (Object.keys(resultState.success).length) {
        
          if ($$.isFunction(success)) {
            success(resultState.success);
          }

          yield put({
            type: REQUEST_SUCCESS,
            payload: resultState.success
          });
        }
      },

      *[CHANGE_STATE]({ payload, success }, { put }) {
        yield put({
          type: CHANGE_STATE_SUCCESS,
          payload
        });

        if ($$.isFunction(success)) {
          success();
        }
      }
    },

    reducers: {
 
      ...reducers,
  
      [REQUEST_SUCCESS]: _changeState,
      [REQUEST_ERROR]: _changeState,
      [CHANGE_STATE_SUCCESS]: _changeState
    }
  };
};

const _changeState = (state, { payload }) => ({
  ...state,
  ...payload
});
