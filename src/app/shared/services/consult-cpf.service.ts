import { Injectable, Provider } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from './../../../environments/environment';
import { map, Observable } from 'rxjs';
import { ApimockService } from './apimock.service';

@Injectable({
	providedIn: 'root'
})
export class ConsultCpfService {
	API_URL: string = environment.API + "/consult-cpf";

	constructor(
		private _httpService: HttpService,
		private _mockService: ApimockService,
	) { }

	getAll(payload?: any): Observable<Provider[]> {
		const url = `${this.API_URL}`;
		return this._httpService.get(url, payload).pipe(map((result: any) => result));
	}

	getOne(id: number | string): Observable<any> {
		const url = `${this.API_URL}/${id}`;
		return this._mockService.getCPF().pipe(map((result: any) => result));
		// return this._httpService.get(url).pipe(map((result: any) => result));
	}

	create(payload: any): Observable<Provider> {
		const url = `${this.API_URL}`;
		return this._httpService.post(url, payload).pipe(map((result: any) => result));
	}

	update(id: number, payload: any): Observable<Provider> {
		const url = `${this.API_URL}/${id}`;
		return this._httpService.put(url, payload).pipe(map((result: any) => result));
	}

	delete(id: number): Observable<Provider> {
		const url = `${this.API_URL}/${id}`;
		return this._httpService.delete(url).pipe(map((result: any) => result));
	}

}
