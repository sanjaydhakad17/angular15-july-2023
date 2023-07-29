import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor(private http: HttpClient) { }

  private empSubject = new Subject();
  empSubject$ = this.empSubject.asObservable();
  url = 'http://localhost:5000/employees/'
  changeData(data: any, changeFlag: boolean) {
    data.changeFlag = changeFlag;
    this.empSubject.next(data);
  }

  getEmpployeeDetails() {
    return this.http.get(this.url);
  }

  addEmpployeeDetails(inputJson:object) {
    return this.http.post(this.url, inputJson);
  }

  updateEmployeeDetails(id: string | null, inputJson: object) {
    // Put use to update whole set of data
    return this.http.put(this.url+id, inputJson);
    // Path use to update partial data 
    //return this.http.patch('http://localhost:5000/employees/'+id, inputJson);
  }

  deleteEmployeeDetails(id: number) {
    return this.http.delete(this.url+id);
  }
}
