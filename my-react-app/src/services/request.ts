import { IQueryable } from "./api";

export class QueryParamsURLFactory {
  private query: IQueryable;

  private baseUrl?: string;

  constructor(query: IQueryable, baseUrl?: string) {
    this.query = query;
    this.baseUrl = baseUrl;
  }

  build(): string {
    const queryParams = new URLSearchParams();
    const { search, sorts } = this.query;

    // Add sorts
    if (sorts) {
      sorts.forEach((sort) => {
        if (sort.field) {
          queryParams.append("sorts", `${sort.isAsc ? "+" : "-"}${sort.field}`);
        }
      });
    }

    // Add search
    if (search) {
      queryParams.append("query", search);
    }

    // Generate complete URL if baseUrl is provided
    if (this.baseUrl) {
      const url = new URL(this.baseUrl);
      url.search = queryParams.toString();
      return url.toString();
    }

    return queryParams.toString();
  }
}


