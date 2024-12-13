import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vet-resources',
  templateUrl: './vet-resources.component.html',
  styleUrls: ['./vet-resources.component.css']
})
export class VetResourcesComponent implements OnInit {

  vetResources: { name: string; link: string }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadResources();
  }

  loadResources(): void {
    this.vetResources = [
      { name: 'Kenya Veterinary Board (KVB)', link: 'https://www.kenyavetboard.or.ke' },
      { name: 'Kenya Veterinary Association (KVA)', link: 'https://kenyavetassociation.com' },
      { name: 'VSF Germany Kenya Projects', link: 'https://www.vsfg.org/kenya' },
      { name: 'Department of Veterinary Services', link: 'https://kilimo.go.ke' },
    ];
  }
}
