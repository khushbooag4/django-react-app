import React from "react";
import { getCookie, CSRFToken } from "../utils/csrf_token";

function Register() {
  return (
    <div class="container-ap py-5 h-100">
      <form method="POST" action="/auth/register/">
        <CSRFToken />

        <h2 className="mb-4">Register to your account</h2>
        {/* Username input */}
        <div class="form-outline mb-4">
          <input
            type="text"
            id="form2Example1"
            class="form-control"
            name="username"
          />
          <label class="form-label" for="form2Example1">
            Username
          </label>
        </div>

        {/* Email input */}
        <div class="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            class="form-control"
            name="email"
          />
          <label class="form-label" for="form2Example1">
            Email address
          </label>
        </div>

        {/* Password input */}
        <div class="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            class="form-control"
            name="password"
          />
          <label class="form-label" for="form2Example2">
            Password
          </label>
        </div>

        {/* 2 column grid layout for inline styling */}
        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            {/* Checkbox */}
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                checked
              />
              <label class="form-check-label" for="form2Example31">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>
        </div>

        {/* Submit button */}
        <button type="submit" class="btn btn-primary btn-block mb-4">
          Sign Up
        </button>

        {/* Register buttons */}
        <div class="text-center">
          <p>
            Already a member? <a href="/login">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
