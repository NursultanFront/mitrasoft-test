import type { AxiosInstance, AxiosResponse } from 'axios';

interface AnyObj {
  [key: string]: unknown;
}

export abstract class BasicRest {
  protected updateAuthHeader(params: { token: string }) {
    this.endpoint.defaults.headers.common['Authorization'] = `Client-ID ${
      import.meta.env.VITE_API_KEY
    }`;
  }

  protected patchRequest<T = AnyObj>(url: string, params?: object) {
    return BasicRest.dataExtract<T>(this.endpoint.patch<T>(url, params));
  }

  protected putRequest<T = AnyObj>(url: string, params?: object) {
    return BasicRest.dataExtract<T>(this.endpoint.put<T>(url, params));
  }

  protected postRequest<T = AnyObj>(url: string, params?: object) {
    return BasicRest.dataExtract<T>(this.endpoint.post<T>(url, params));
  }

  protected getRequest<T = AnyObj>(url: string, params?: object) {
    return BasicRest.dataExtract<T>(this.endpoint.get<T>(url, { params }));
  }

  protected deleteRequest<T = AnyObj>(url: string, params?: object) {
    return BasicRest.dataExtract<T>(this.endpoint.delete<T>(url, { params }));
  }

  protected constructor(protected readonly endpoint: AxiosInstance) {}

  private static async dataExtract<T>(request: Promise<AxiosResponse<T>>) {
    const { data } = await request;
    return data;
  }
}
