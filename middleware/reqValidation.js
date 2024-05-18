import { FormattedData } from "../helper/formattedResponse.js";
import { HTTPSTATUS } from "./error.js";
import { loginSchema, registrationSchema } from "./reqSchema.js";

//registration

export const registrationValidation = async (req, res, next) => {
  try {
    const { error, value } = registrationSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      return res
        .status(HTTPSTATUS.BADREQUEST)
        .json(FormattedData(false, null, error.message));
    }

    next();
  } catch (error) {
    return res
      .status(HTTPSTATUS.BADREQUEST)
      .json(FormattedData(false, null, error.message));
  }
};

//login
export const loginValidation = async (req, res, next) => {
  try {
    const { error, value } = loginSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      return res
        .status(HTTPSTATUS.BADREQUEST)
        .json(FormattedData(false, null, error.message));
    }

    next();
  } catch (error) {
    return res
      .status(HTTPSTATUS.BADREQUEST)
      .json(FormattedData(false, null, error.message));
  }
};
