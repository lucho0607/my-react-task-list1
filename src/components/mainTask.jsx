import React from "react";
import { Form, useForm } from "react-hook-form";

export default function MainTask() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h3>Main task</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label> Name </label>
          <input
            type="text"
            {...register("Name", {
              minLength: 3,
            })}
          />
          {errors.Name?.type === "minLength" && <p>more than 3 characters</p>}
        </div>
        <div>
          <label> Description</label>
          <input type="text" {...register("Description")} />
        </div>
        <input type="submit" value="Save" />
      </form>
    </div>
  );
}
