import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { IPost, IPostResp } from '../models';

/**
 * This service tries to emulate a real-time streamer
 */
@Injectable()
export class DataStreamServiceEmuService {

  constructor(private http: HttpClient) {
    this.totalPages = 0;
    this.currentPage = 0;
  }

  /**
   * Stores data from api
   */
  acummulatedData: any = [];

  /**
   * Total pages retrieved by the api
   */
  totalPages: number;

  /**
   * Current page of data
   */
  currentPage: number;

  /**
   * Interval flag control
   */
  intervalRef: any;


  //#region The following methods are trying to emulated the behaviour of a real-time stream api

  /**
   * Calculates the total pages and current page by using the api response
   * @param data Data from api
   */
  private calculatePage(data: IPostResp): void {
    this.totalPages = Math.floor(data.total / data.limit);
    if (this.currentPage <= this.totalPages) {
      this.currentPage += 1;
    } else {
      clearInterval(this.intervalRef);
    }
  }

  /**
   * Retrieves data from api
   *
   * @param page The number of page to retrieve the data
   * @returns 
   */
  private getData(page: number): Observable<IPostResp> {
    return this.http.get<IPostResp>(`${environment.baseUrlApi}${this.currentPage}`);
  }

  /**
   * This method retrieves data every 5 seconds to emulate the real-stream
   * @returns Observable
   */
  getDataObservable(): Observable<IPost[]> {
    return new Observable<IPost[]>(observer =>{
      this.intervalRef = setInterval(()=>{
                            this.getData(this.currentPage).subscribe((resp: IPostResp) => {
                              // this.acummulatedData = [...resp.data, ...this.acummulatedData];
                              this.acummulatedData = [...resp.data];
                              this.calculatePage(resp);
                              observer.next(this.acummulatedData);
                            });
                          },environment.timeInterval);
    });
  }
  //#endregion
}
