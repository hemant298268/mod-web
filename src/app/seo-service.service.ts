import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoServiceService {

  constructor(private title: Title, private meta: Meta) { }

  updateTitle(value: string) {
    this.title.setTitle(value);
  }

  updateDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc });
  }
}
