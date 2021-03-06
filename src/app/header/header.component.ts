import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.scss']
})

export class HeaderComponent {
    public collapsed = true;

    @Output() featureSelected = new EventEmitter<string>() ;

    onSelected(feature:string){
        this.featureSelected.emit(feature);
    }
}