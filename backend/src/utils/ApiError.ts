export class ApiError {
    status : number
    message : string
    subErrors? : string[]
   constructor(status: number , message: string , subErrors?: string[]) {
       this.status = status;  
       this.message = message;  
       this.subErrors = subErrors;  
   }
}
