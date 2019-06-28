import { Injectable } from '@angular/core';
import { CacheStoreService } from './cache-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {
  private readonly key = 'authorisation';

  constructor(private cacheStoreService: CacheStoreService) { }

  setUser(value: any): void {
    this.cacheStoreService.setItem(this.key, value);
  }

  getUser(): any {
    return this.cacheStoreService.getItem(this.key);
  }

  removeUser(): void {
    this.cacheStoreService.removeItem(this.key);
  }
}
