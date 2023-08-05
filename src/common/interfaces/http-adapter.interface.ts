import { Observable } from 'rxjs';

export interface HttpAdapter {
  get<T>(url: string): Promise<T> | Observable<T>;
}
