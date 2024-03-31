import { Component } from '@angular/core';
import { singleSpaPropsSubject } from '../single-spa/single-spa-props';
import { first } from 'rxjs';

@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  props: any = null;
  time: number = Date.now();

  ngOnInit() {
    singleSpaPropsSubject
      .pipe(first())
      .subscribe((props) => {
        this.props = props;
      });

    setInterval(() => {
      this.time = Date.now();
    }, 1000);
  }
}
