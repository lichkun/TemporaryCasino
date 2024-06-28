import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private apiUrl = 'https://localhost:7105'; // Исправленный URL

  constructor(private http: HttpClient) {}

  uploadFile(file: File, userId: string): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post(`${this.apiUrl}/api/FileUpload/upload/${userId}`, formData);
  }

  getFile(filename: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/api/FileUpload/files/${filename}`, { responseType: 'blob' });
  }
}
