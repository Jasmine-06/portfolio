import { ApiError } from "./ApiError.js";

export class ApiResponse<T> {
    localDateTime: string;
    data: T | null;
    apiError: ApiError | null;

    constructor(data?: T, apiError?: ApiError) {
        this.localDateTime = new Date().toISOString();
        this.data = null;
        this.apiError = null;

        if (data) {   //agar data mil jata hai to me apiError null hoga
            this.data = data;
            this.apiError = null;
        } else if (apiError) {   // agar api error hai to ye data ko null kar dega
            this.apiError = apiError;
            this.data = null;
        }
    }
}