import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { HttpAdapter } from '../interfaces/http-adapter.interface';

@Injectable()
export class HttpModuleAdapter implements HttpAdapter {
  constructor(private readonly httpService: HttpService) {}

  get<T>(url: string): Observable<T> {
    return this.httpService.get<T>(url).pipe(
      map((resp) => {
        return resp.data;
      }),
    );
  }
}
