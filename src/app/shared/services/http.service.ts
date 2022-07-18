import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
	providedIn: 'root'
	})
export class HttpService {

	constructor(
    private _httpClient: HttpClient,
  ) {}

	getHeaders(headers: HttpHeaders| undefined): HttpHeaders | undefined {
    
		return new HttpHeaders({
      contentType: 'application/json',
      ...headers
    });
	}

	get(url: string, payload?: any, headers?: HttpHeaders): Observable<object> {
		return this._httpClient.get(url, { headers: this.getHeaders(headers), params: payload });
	}

	post(url: string, payload: any, headers?: HttpHeaders): Observable<object> {
		return this._httpClient.post(url, payload, { headers: this.getHeaders(headers) });
	}

	put(url: string, payload: any, headers?: HttpHeaders): Observable<object> {
		return this._httpClient.put(url, payload, { headers: this.getHeaders(headers) });
	}

	delete(url: string, headers?: HttpHeaders): Observable<object> {
		return this._httpClient.delete(url, { headers: this.getHeaders(headers) });
	}

}