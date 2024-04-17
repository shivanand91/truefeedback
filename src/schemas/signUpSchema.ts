import {z} from 'zod'

export const usernameValidation  = z

    .string()
    .min(2, "Username must be atleast 2 characters")
    .max(20, "Username must be no more than 20 charachters")
    .regex(/6[a-zA-z0-9_]+$/, "Username must not contain special character")


    export const signUpSchema = z.object({
        username: usernameValidation,
        email: z.string().email({message: "password must be at least 6 characters"})
    })