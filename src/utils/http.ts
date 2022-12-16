import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";
import { ElMessage } from "element-plus";
axios.defaults.baseURL = localStorage.getItem("BASE_URL")?.toString();
axios.defaults.timeout = 20 * 1000;
axios.defaults.maxBodyLength = 5 * 1024 * 1024;
axios.defaults.withCredentials = true;
axios.interceptors.request.use(
  (config: AxiosRequestConfig | any) => {
    config = {
      ...config,
      t: Date.now(),
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  //@ts-ignorex
  (response: AxiosResponse) => {
    if (response.status == 200) {
      return response;
    } else {
      ElMessage.error(response.data.code + "");
      throw Error(response.data.code);
    }
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

const _download = (url: string) => {
  let iframe = document.createElement("iframe");
  iframe.style.display = "none";
  iframe.src = url;
  iframe.onload = function () {
    document.body.removeChild(iframe);
  };
  document.body.appendChild(iframe);
};

const _upload = (url: string, params: unknown) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const _get = (url: string, params?: unknown) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
const _post = (url: string, params?: unknown) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, JSON.stringify(params))
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
const _put = (url: string, params: unknown) => {
  return new Promise((resolve, reject) => {
    axios
      .put(url, JSON.stringify(params))
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
};
const _delete = (url: string, params: unknown) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, { params })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
};
interface Http {
  get<T>(url: string, params?: unknown): Promise<T>;
  put<T>(url: string, params?: unknown): Promise<T>;
  delete<T>(url: string, params?: unknown): Promise<T>;
  post<T>(url: string, params?: unknown): Promise<T>;
  download(url: string): void;
  upload<T>(url: string, params: unknown): Promise<T>;
}

const http: Http = {
  get<T>(url: string, params?: unknown): T {
    return _get(url, params) as T;
  },
  put<T>(url: string, params?: unknown): T {
    return _put(url, params) as T;
  },
  delete<T>(url: string, params?: unknown): T {
    return _delete(url, params) as T;
  },
  post<T>(url: string, params?: unknown): T {
    return _post(url, params) as T;
  },
  download(url: string): void {
    return _download(url);
  },
  upload<T>(url: string, params: unknown): T {
    return _upload(url, params) as T;
  },
};

export default http;
