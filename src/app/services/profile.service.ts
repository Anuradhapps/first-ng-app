import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Profile } from '../model/profile.type';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http = inject(HttpClient)

  getProfileFromApi(id: number): Promise<Profile> {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json());
  }

}
