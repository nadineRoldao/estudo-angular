import { Directive, HostBinding, HostListener } from "@angular/core";
import { ValidationService } from "../services/validation.service";

@Directive({
    selector: '[cpf-mask]'
})
export class CpfMaskDirective {

    constructor(private validationService: ValidationService) {}

    @HostBinding('style.border')
    border: string = ''

    @HostListener('input', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        const input = event.target as HTMLInputElement
        let value = input.value.replace(/\D/g, '')

        if (value.length > 3) {
          value = value.slice(0, 3) + '.' + value.slice(3);
        }

        if (value.length > 7) {
          value = value.slice(0, 7) + '.' + value.slice(7);
        }

        if (value.length > 11) {
          value = value.slice(0, 11) + '-' + value.slice(11, 13);
        }
    
        input.value = value

        this.border = ''

        if (!this.validationService.isCpfValid(input.value)) {
            this.border = '1px solid red'            
        }
    }

}
