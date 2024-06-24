import Joi from "joi";

//registration
export const registrationSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9@]{3,30}$")).required(),
  phone: Joi.string()
    .length(10)
    .pattern(/[6-9]{1}[0-9]{9}/)
    .required(),
});

//login
export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const shopSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  city: Joi.string().required(),
  owner:Joi.string().required(),
  address:Joi.string().required(),
  phone:Joi.string().required(),
  email:Joi.string().email().required(),
  category:Joi.string().required()

});

export const updateShopStatusSchema = Joi.object({
status:Joi.bool().required()
})
