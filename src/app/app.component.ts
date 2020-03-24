import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the beach',
      url: 'assets/beach.jpeg'
    },
    {
      title: 'At the mountain',
      url: 'assets/mountain.jpeg'
    },
    {
      title: 'Swimming Pool',
      url: 'assets/pool.jpeg'
    },
    {
      title: 'Volcano',
      url: 'assets/volcano.jpeg'
    },
    {
      title: 'At the beach',
      url: 'assets/beach.jpeg'
    },
    {
      title: 'At the mountain',
      url: 'assets/mountain.jpeg'
    },
    {
      title: 'Swimming Pool',
      url: 'assets/pool.jpeg'
    },
    {
      title: 'Volcano',
      url: 'assets/volcano.jpeg'
    },
    {
      title: 'At the beach',
      url: 'assets/beach.jpeg'
    },
    {
      title: 'At the mountain',
      url: 'assets/mountain.jpeg'
    },
    {
      title: 'Swimming Pool',
      url: 'assets/pool.jpeg'
    },
    {
      title: 'Volcano',
      url: 'assets/volcano.jpeg'
    },
    {
      title: 'At the beach',
      url: 'assets/beach.jpeg'
    },
    {
      title: 'At the mountain',
      url: 'assets/mountain.jpeg'
    },
    {
      title: 'Swimming Pool',
      url: 'assets/pool.jpeg'
    },
    {
      title: 'Volcano',
      url: 'assets/volcano.jpeg'
    }
  ];

  onPageChange(page: number) {
    this.currentPage = page;
  }

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
