import { asyncHandler } from "../utils/asyncHandler";
import { contactSchema } from "../schema/contactSchema";
import { ApiError } from "../utils/ApiError";
import { formatValidationErrors } from "../utils/FormatValidationErrors";
import { ApiResponse } from "../utils/ApiResponse";
import { ContactModel } from "../models/contact.model";

export const saveContact = asyncHandler(async (req , res) =>{
    const result = contactSchema.safeParse(req.body)
    if(!result.success){
        const errors = formatValidationErrors(result.error)
        throw new ApiError(400, "Validation Error", errors)
    }
    const { fullname, email, subject ,phone, message } = result.data;

    const newContact = new ContactModel({
        fullname : fullname,
        email : email,
        emailSubject : subject,
        phone : phone,
        message : message
    })

     const savedContact =  await newContact.save()

        console.log(savedContact)

    
   

    // const {name, email, phone, message} = req.body;

    
    // if (!name || !email || !phone || !message) {
    //     return res.status(400).json({ message: "All fields are required" });
    // }
    // if (name.length < 3) {
    //     return res.status(400).json({ message: "Name must be at least 3 characters" });
    // }
    res.status(200).json(new ApiResponse(savedContact));
});

// const a : number = 10.1;

/* TypeScript Data Types Examples
 Basic Types:
 - number  
 - string
 - boolean
 - null
 - undefined
 - void
 - any
 - never
*/

// Number
// const integerNum: number = 42;
// const floatNum: number = 3.14;

// // String
// const message: string = "Hello TypeScript";

// // Boolean
// const isActive: boolean = true;

// // Array
// const numbers: number[] = [1, 2, 3, 4, 5];
// const strings: Array<string> = ["a", "b", "c"];

// // Tuple
// const tuple: [string, number] = ["age", 25];

// // Enum
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }

// // Object
// const person: { name: string; age: number } = {
//     name: "John",
//     age: 30
// };

// // Union Type
// let union: string | number = "text";
// union = 42; // valid

// // Type Alias
// type Point = {
//     x: number;
//     y: number;
// };