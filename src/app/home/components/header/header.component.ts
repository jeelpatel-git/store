import { Component} from '@angular/core';
import { faBell, faGlobe} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faBell = faBell;
  faGlobe = faGlobe;
  userImage:string = "../../../../assets/images/user.jpg"
  constructor () {}


}
