import z from 'zod';

export const contactSchema = z.object({
    fullname: z
        .string()
        .min(3, { message: "Full name must be at least 3 characters long" })
        .max(50, { message: "Full name can't be longer than 50 characters" }),
    email: z
        .string()
        .email({ message: "Please enter a valid email address" }),
    phone: z
        .string()
        .min(10, { message: "Phone number must be at least 10 digits long" })
        .max(12, { message: "Phone number can't be longer than 12 digits" }),
    subject: z
        .string()
        .min(5, { message: "Subject must be at least 5 characters long" })
        .max(100, {message: "Subject can't be longer than 100 characters" }),
    message: z
        .string()
        .min(10, { message: "Message must be at least 10 characters long" })
        .max(500, { message: "Message can't be longer than 500 characters" }),
});

