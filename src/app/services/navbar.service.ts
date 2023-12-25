import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private _isVisible = new BehaviorSubject<boolean>(false)

  toggle() {
    this._isVisible.next(!this._isVisible.value)
  }

  get isVisible(): BehaviorSubject<boolean> {
    return this._isVisible;
  }
}
