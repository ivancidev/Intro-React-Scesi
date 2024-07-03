import { useState } from "react";

export default function useForm(initialState) {
  const [form, setForm] = useState(initialState);
  const { email, password, username } = form;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return {
    email,
    password,
    handleChange,
    handleSubmit,
    username
  };
}
