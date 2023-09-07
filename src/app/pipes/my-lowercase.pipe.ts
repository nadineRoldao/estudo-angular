import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'changecase'})
export class MyLowsercasePipe implements PipeTransform {

    transform(value: string, ...args: any[]) {
        return args[0] == 'upper' ? value.toUpperCase() : value.toLowerCase()
    }

}
