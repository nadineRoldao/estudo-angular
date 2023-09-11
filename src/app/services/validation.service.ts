import { Injectable } from "@angular/core";

 
 @Injectable({ providedIn: 'root' })
 export class ValidationService {

    isCpfValid(cpf: string): boolean {
        return false
    }
    
 }
 