import * as Yup from "yup";
export const AddUser = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is required")
    .min(3, "Minimum 3 character"),
  lastName: Yup.string()
    .required("Last Name is required")
    .min(3, "Minimum 3 character"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid phone number")
    .required("Phone number is required"),
  //   gender: Yup.string().required("Gender is required"),
  //   role: Yup.string().required("Role is required"),
  //   reportingTo: Yup.string(),
  email: Yup.string()
    .email("Invalid email format")
    .max(160, "Maximum 160 character")
    .required("Email is required")
    .typeError("Email must be valid"),
  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum")
    .max(64, "Password is too long - should be 64 chars maximun")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .required("Confrim password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  //   designation: Yup.string().required("Designation required"),

  //   team: Yup.array()
  //     // Validate minimum number of elements in the array
  //     .min(1, "At least one team  is required")
  //     // Validate maximum number of elements in the array
  //     .max(5, "Maximum five team  allowed"),
});
export const UpdateUser = Yup.object().shape({
  userName: Yup.string()
    .required("Username is required")
    .min(3, "Minimum 3 character"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid phone number")
    .required("Phone number is required"),
  gender: Yup.string().required("Gender is required"),
  role: Yup.string().required("Role is required"),
  reportingTo: Yup.string().required("Reporting is required"),
  email: Yup.string()
    .email("Invalid email format")
    .max(160, "Maximum 160 character")
    .required("Email is required"),
  team: Yup.array()
    // Validate minimum number of elements in the array
    .min(1, "At least one team member is required")
    // Validate maximum number of elements in the array
    .max(5, "Maximum five team members allowed"),
  designation: Yup.string().required("Designation required"),
});

export const LoginForm = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const AddSubcategoryValidation = Yup.object().shape({
  subcategoryName: Yup.string().required("Subcategory name is required"),
  category: Yup.string().required("Category is required"),
});

export const AddCategoryValidation = Yup.object().shape({
  title: Yup.string().required("Category Name is required"),
  categoryImage: Yup.mixed().required("Category Banner Image is required"),
});

export const AddBannerValidation = Yup.object().shape({
  bannerLink: Yup.string().required("Banner Link is required"),
  bannerImage: Yup.mixed().required("Banner Image is required"),
});

export const AddProductValidation = Yup.object().shape({
  productName: Yup.string().required("Product Name is required"),
  price: Yup.number().required("Price is required"),
  minBulkQuantity: Yup.number().required("Minimum Bulk Quantity is required"),
  category: Yup.string().required("Category is required"),
  subcategory: Yup.string().required("Subcategory is required"),
  description: Yup.string().required("Description is required"),
  productImages: Yup.array().of(Yup.mixed().required("Image is required")),
});

//Subscription Page
export const organizationForm = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "Min 3 characters")
    .max(30, "Max 30 characters allowed"),
  cost: Yup.number()
    .required("Required")
    .typeError("Must be a number")
    .test(
      "is-decimal",
      "Must be a valid decimal number with up to two decimal places",
      (value) =>
        value !== undefined && /^\d+(\.\d{1,2})?$/.test(value.toString())
    ), // Ensures cost is a number
  no_of_data: Yup.number().required("Required").typeError("Must be a number"), // Ensures no_of_data is a number
  no_of_subscription: Yup.number()
    .required("Required")
    .typeError("Must be a number"), // Ensures no_of_subscription is a number
  // payment_gateway: Yup.string().required("Required"),
  domain_setup: Yup.boolean().required("Required"), // Ensures domain_setup is a boolean
});
export const franchiseForm = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "Min 3 characters")
    .max(30, "Max 30 characters allowed"),
  cost: Yup.number()
    .required("Required")
    .typeError("Must be a number")
    .test(
      "is-decimal",
      "Must be a valid decimal number with up to two decimal places",
      (value) =>
        value !== undefined && /^\d+(\.\d{1,2})?$/.test(value.toString())
    ), // Ensures cost is a number
  no_of_data: Yup.number().required("Required").typeError("Must be a number"), // Ensures no_of_data is a number
  no_of_subscription: Yup.number()
    .required("Required")
    .typeError("Must be a number"), // Ensures no_of_subscription is a number
  // payment_gateway: Yup.string().required("Required"),
  domain_setup: Yup.boolean().required("Required"), // Ensures domain_setup is a boolean
});
export const ResetFormValidation = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum")
    .max(64, "Password is too long - should be 64 chars maximun")
    .required("Password is required"),
  // .matches(/[0-9]/, "Password requires a number")
  // .matches(/[a-z]/, "Password requires a lowercase letter")
  // .matches(/[A-Z]/, "Password requires an uppercase letter")
  // .matches(/[^\w]/, "Password requires a symbol"),
  confirmPassword: Yup.string()
    .required("Confrim password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
export const ProfileBasicDetails = Yup.object().shape({
  userName: Yup.string()
    .required("Username is required")
    .min(3, "Minimum 3 character"),
  gender: Yup.string().required("Gender is required"),
  dateOfBirth: Yup.date()
    .max(new Date(Date.now() - 86400000), "Please enter a valid date of birth")
    // .max(new Date(Date.now() - 1), "Date of birth can't be in current")
    .typeError("Please enter numeric value .")
    .required("Date of Birth required"),

  // .matches(/[0-9]/, "Password requires a number")
  // .matches(/[a-z]/, "Password requires a lowercase letter")
  // .matches(/[A-Z]/, "Password requires an uppercase letter")
  // .matches(/[^\w]/, "Password requires a symbol"),
});
export const ProfileContactDetails = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid phone number")
    .required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email format")
    .max(160, "Maximum 160 character")
    .required("Email is required"),
});
// Calculate the date 18 years ago from today
const eighteenYearsAgo = new Date();
eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);








// MY Segement
export const CheckoutFormValidation = Yup.object().shape({
  // fname: Yup.string()
  //   .min(2, 'Too Short!')
  //   .max(50, 'Too Long!')
  //   .required('Name is required'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^\+?[0-9]{10,15}$/, 'Invalid phone number')
    .required('Phone number is required'),
  country: Yup.string()
    .required('Country is required'),
  address: Yup.string()
    .min(5, 'Address is too short')
    .required('Address is required'),
  city: Yup.string()
    .required('City is required'),
  state: Yup.string()
    .required('State is required'),
  zip: Yup.string().required('ZIP code is required').min(2, 'Too Short!').max(8, 'Too Long!'),
});

export const ProfileUpdateFormValidation = Yup.object().shape({
  fname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  lname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^\+?[0-9]{10,15}$/, 'Invalid phone number')
    .required('Phone number is required'),
});
export const ProfileUpdateAddressFormValidation = Yup.object().shape({
  addressname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  addressphone: Yup.string()
    .matches(/^\+?[0-9]{10,15}$/, 'Invalid phone number')
    .required('Phone number is required'),
  country: Yup.string()
    .required('Country is required'),
  address: Yup.string()
    .min(5, 'Address is too short')
    .required('Address is required'),
  city: Yup.string()
    .required('City is required'),
  state: Yup.string()
    .required('State is required'),
  zip: Yup.string().required('ZIP code is required').min(2, 'Too Short!').max(8, 'Too Long!'),
});





export const EmployeeFormValidation = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .min(3, "First Name must be at least 3 characters")
    .max(50, "First Name cannot exceed 50 characters")
    .required("First Name is required"),
  lastName: Yup.string()
    .trim()
    .min(3, "Last Name must be at least 3 characters")
    .max(50, "Last Name cannot exceed 50 characters")
    .required("Last Name is required"),
  designation: Yup.string()
    .trim()
    .min(2, "Designation must be at least 2 characters")
    .max(50, "Designation cannot exceed 50 characters")
    .required("Designation is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email Address is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone Number must be 10 digits")
    .required("Phone Number is required"),
  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum")
    .max(64, "Password is too long - should be 64 chars maximun")
    .required("Password is required"),
});