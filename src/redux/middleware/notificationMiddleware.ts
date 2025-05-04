import {
    Middleware,
    UnknownAction,
    isFulfilled,
    isRejectedWithValue,
  } from '@reduxjs/toolkit';
  import i18n from 'i18next';
  import toast from 'react-hot-toast';
  
  interface ApiResponseMeta {
    baseQueryMeta?: {
      request?: {
        method?: string;
      };
    };
  }
  
  const noSuccessAlertIf = [
    '',
  ];

  const mutationMethods = ['PUT', 'POST', 'PATCH', 'DELETE'];
  
  const notificationMiddleware: Middleware = () => (next) => (action: unknown) => {
    if (isRejectedWithValue(action)) {
      console.log({ action });
      
      toast.error(i18n.t('alertNotifications.defaultFailureMessage'));
    }
  
    if (isFulfilled(action)) {
      const fulfilledAction = action as UnknownAction & { meta: ApiResponseMeta };
      const method = fulfilledAction.meta.baseQueryMeta?.request?.method;
  
      if (method && mutationMethods.includes(method)) {
        const endpointName = (action.meta?.arg as { endpointName: string })
          ?.endpointName;
  
        if (noSuccessAlertIf.includes(endpointName)) {
          return next(action);
        }
        let translationKey = `alertNotifications.${endpointName}`;
  
        const translationKeyExists = i18n.exists(translationKey);
        if (!translationKeyExists) {
          translationKey = 'alertNotifications.defaultSuccessMessage';
        }
  
        toast.success(i18n.t(translationKey));
      }
    }
  
    return next(action);
  };
  
  export default notificationMiddleware;
  