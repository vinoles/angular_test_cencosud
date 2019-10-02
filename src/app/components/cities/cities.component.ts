import { Component, OnInit, HostBinding } from '@angular/core';
import { AppDataService } from 'src/app/services/app-data'
import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  public cities: any = [];
  public city:any;
  public showCity: Boolean= false;
  public statusLoading: Boolean= false;
  public noInfo = false;
  constructor(private appService: AppDataService ) { }


  ngOnInit() {
    // timer(0, 10000).pipe(
    //   switchMap(
    //     () => this.appService.getCities()
    //     )
    // ).subscribe(res => {
    //   this.statusLoading= true;
    //   this.cities = res;
    // });
    this.getCities();

    
  }

  getCities() {
    this.statusLoading = false;
    this.showCity = false;
    this.appService.getCities()
      .subscribe(
        res => {
          this.statusLoading = true;
          this.cities = res;
          if(this.cities.length == 0) {
            this.noInfo =  true;
          }
        },
        err => console.error(err)
      );
  }

  getCitiy(lat, long ) {
   this.showCity = true;
   this.city = this.cities.find(
      city => city.latitude == lat && city.longitude == long
    );
    console.log('dddd')
    console.log(this.city)
  }

}