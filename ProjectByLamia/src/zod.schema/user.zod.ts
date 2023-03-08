import { z,TypeOf } from "zod";

export const userVaild = z.object({
    body:z.object({
  


        password :z.string({
            required_error: "password is required",
            invalid_type_error: "password must be a Number and String",
    })
  .min(5, { message: "Must be 5 or more characters long" }),
  


  email :z.string({
    required_error: "email is required",
    
})
.email({ message: "Invalid email address" })






}),
});
export const userlogin = z.object({
    body:z.object({
        password :z.string({
            required_error: "password is required",
            invalid_type_error: "password must be a Number and String",
    })
  .min(5, { message: "Must be 5 or more characters long" }),
  


  email :z.string({
    required_error: "email is required",
    
})
.email({ message: "Invalid email address" })






}),
});






export type userlogin = TypeOf<typeof userlogin>["body"];