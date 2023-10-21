// import { toast } from "react-toastify";

// const errorToastId = "session-expired";

const options = {
  interceptors: {
    // request: [
    //   ({ getState }: any, config: any) => {
    //     const store = getState();
    //     const token = store?.auth?.auth0?.accessToken;
    //     if (token && !config.headers.Authorization) {
    //       // eslint-disable-next-line no-param-reassign
    //       config.headers.Authorization = token ? `Bearer ${token}` : null;
    //     }
    //     return config;
    //   },
    // ],
    // response: [
    //   {
    //     success: function (_props: any, response: any) {
    //       return response;
    //     },
    //     error: function ({ dispatch }: any, error: any) {
    //       if (error.response.status === 401) {
    //         dispatch(updateIsAuthorized({ status: false }));
    //         dispatch(clearAuthData());
    //         if (!toast.isActive(errorToastId))
    //           toast.warn("Session expired! Please re-login.", { toastId: errorToastId });
    //         return;
    //       }
    //       return Promise.reject(error);
    //     },
    //   },
    // ],
  },
};

export default options;
