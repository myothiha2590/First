import { Results } from "./results";

export interface MovieResponse {
    date?: Date;
    page?: number;
    results?: Results[];
    total_pages?: number;
    total_results?: number;
}
