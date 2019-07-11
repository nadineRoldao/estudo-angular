import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: [
        'app.component.scss'
    ]
})
export class AppComponent{
    logar (userTagElement, emailTagElement){
        console.log(userTagElement.value);
        console.log(emailTagElement.value);
        
    }
}