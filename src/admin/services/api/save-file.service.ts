import { Injectable, QueryList } from '@angular/core';
import { api } from './axios.config.service';


@Injectable({
  providedIn: 'root'
})
export class SaveFileService {
  constructor() { }
  private nameURL: string = 'filedata';

  setCreate(body: any) {
    return api
      .post(this.nameURL, body)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data;
      });
  }

  getFindAll(body: any) {
    return api
      .get(this.nameURL, { params: body })
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data;
      });
  }

  getBYId(id: string) {
    return api
      .get(this.nameURL + '/' + id)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data;
      });
  }


  setEdit(id: string, body: any) {
    return api
      .put(this.nameURL + '/' + id, body)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data;
      });
  }


  setDelete(id: string) {
    return api
      .delete(this.nameURL + '/' + id)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data;
      });
  }
}
