import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }
// CRUD methods for managing users, it acts as the interface between the Angular application and the backend api.
    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/users/` + id);
    }
/*
users:
localStorage.setItem('users',
JSON.stringify(
[{"firstName":"jin","lastName":"x","username":"jin","password":"111111","id":1},
{"firstName":"jin","lastName":"x","username":"jin2","password":"111111","id":2},
{"firstName":"jin","lastName":"x","username":"jin3","password":"111111","id":3}
]))

*/
    register(user: User) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${environment.apiUrl}/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/users/` + id);
    }
}
