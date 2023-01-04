import React from "react";
import { CSRFToken } from "../utils/csrf_token";

export default function Login() {
  return (
    <>
      <div class="container-ap py-5 h-100 ">
        <form method="POST" action="/auth/login/">
          <CSRFToken />
          {/* Email input */}
          <h2 className="header-ap mb-4">Login to your account</h2>
          <div class="form-outline mb-4">
            <input type="email" id="form2Example1" class="form-control" />
            <label class="form-label" for="form2Example1">
              Email address
            </label>
          </div>

          {/* Password input */}
          <div class="form-outline mb-4">
            <input type="password" id="form2Example2" class="form-control" />
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
            Sign in
          </button>

          {/* Register buttons */}
          <div class="text-center">
            <p>
              Not a member? <a href="/register">Register</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
