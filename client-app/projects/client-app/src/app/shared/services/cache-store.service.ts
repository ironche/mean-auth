import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheStoreService {
  private readonly storage = sessionStorage;

  setItem(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    return JSON.parse(this.storage.getItem(key));
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  clear(): void {
    this.storage.clear();
  }
}
