import { Component, OnInit } from '@angular/core';
import { faCoffee, faSearch, faStar, faCommentDots, faSlidersH, faLandmark, faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  faCoffee = faCoffee;
  faSearch = faSearch;
  faStar = faStar;
  faCommentDots = faCommentDots;
  faSlidersH = faSlidersH;
  faLandmark = faLandmark
  faBars = faBars
  

  ngOnInit(): void {
  }

}
