import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { setPersonalInfo } from "../Redux/Formslice";
import { useNavigate } from "react-router-dom";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formData = useSelector((state) => state.form.personalInfo); 
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    emailAddress: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
  });

  const handleSubmit = (values) => {
    dispatch(setPersonalInfo(values)); 
    navigate("/select-your-plan"); 
  };

  return (
    <div className="p-10 m-7 flex-1">
      <h2 className="font-bold text-3xl text-blue-950">Personal Info</h2>
      <p className="text-lightgray mt-2">
        Please provide your name, email address, and phone number
      </p>
      <Formik
        initialValues={{
          name: formData.name || "",
          emailAddress: formData.emailAddress || "",
          phoneNumber: formData.phoneNumber || "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange }) => (
          <Form className="mt-6">
            {/* Name */}
            <div className="mb-4">
              <Label className="text-blue-950">Name</Label>
              <Field
                as={Input}
                type="text"
                name="name"
                placeholder="e.g. Stephen King"
                onChange={(e) => {
                  handleChange(e);
                  dispatch(
                    setPersonalInfo({
                      ...formData,
                      name: e.target.value,
                    })
                  );
                }}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-600 text-xs"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <Label className="text-blue-950">Email Address</Label>
              <Field
                as={Input}
                type="email"
                name="emailAddress"
                placeholder="e.g. stephenking@lorem.com"
                onChange={(e) => {
                  handleChange(e);
                  dispatch(
                    setPersonalInfo({
                      ...formData,
                      emailAddress: e.target.value,
                    })
                  );
                }}
              />
              <ErrorMessage
                name="emailAddress"
                component="div"
                className="text-red-600 text-xs"
              />
            </div>

            {/* Phone Number */}
            <div className="mb-6">
              <Label className="text-blue-950">Phone Number</Label>
              <Field
                as={Input}
                type="text"
                name="phoneNumber"
                placeholder="e.g. +1 234 567 890"
                onChange={(e) => {
                  handleChange(e);
                  dispatch(
                    setPersonalInfo({
                      ...formData,
                      phoneNumber: e.target.value,
                    })
                  );
                }}
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="text-red-600 text-xs"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-6 md:mt-10">
              <Button type="submit" variant="default" className="mt-4">
                Next Step
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInfo;
