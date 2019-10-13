import {Inject, Injectable} from '@angular/core';
import {API_CONFIG, ServicesModule} from './services.module';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Banner} from './data-types/common.type';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: ServicesModule
})
export class HomeService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private uri: string) { }

  getBanners(): Observable<Banner[]> {
    return this.http.get(this.uri + 'banner')
      .pipe(map((res: {banners: Banner[]}) => res.banners));
  }
}
