import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { HttpAdapter } from '../interfaces/http-adapter.interface';

@Injectable()
export class AxiosNestAdapter implements HttpAdapter {
  constructor(private readonly httpService: HttpService) {}

  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.httpService.axiosRef.get<T>(url);
      return data;
    } catch (error) {
      throw new Error('An error occurred. Please check logs');
    }
  }
}
