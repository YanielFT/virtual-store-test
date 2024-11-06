export type ApiResponse<T> = {
  data?: T;
  message?: string;
  error: boolean;
  status: number;
};
export type IQueryable = {
  sorts?: ISort[];
  search?: string;
};

export type ISort = {
  field: string;
  isAsc: boolean;
};

export const handleApiServerError = async <T>(
  response: Response
): Promise<ApiResponse<T>> => {
  try {
    const error = await response.json();
    return {
      data: undefined,
      error: true,
      message: error.message || "Unknown error",
      status: response.status,
    };
  } catch (e) {
    console.error(response.url, response, e);
    return {
      data: undefined,
      error: true,
      message: "Unknown error",
      status: 500,
    };
  }
};

export const buildApiResponseAsync = async <T>(
  awaitable: Promise<T>
): Promise<T> => {
  try {
    const data = await awaitable;
    return data;
  } catch (e) {
    console.log(e);
    throw new Error("Error fetching data");
  }
};
