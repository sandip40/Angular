import { Component } from '@angular/core';
import{Router} from '@angular/router';
import { RouterModule } from '@angular/router'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Activity Stream';
constructor(private router:Router)
{

}
  click(){
this.router.navigate(['/home']);
location.reload()
//return false;
  }
}
