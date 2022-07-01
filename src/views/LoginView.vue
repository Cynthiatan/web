<template>
  <div class="d-flex justify-content-center container-log">
    <div class="container container-fluid my-auto p-4 container-log-inside">
      <div class="row">
        <div
          class="col-md-4 justify-content-center my-auto mx-auto"
          style="background: white"
        >
          <img src="./assets/images/login.png" alt="" class="img-fluid" />
        </div>
        <div class="col-md-8 contents">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="mb-4 row">
                <div class="col-lg-10 col-sm-9 col-md-9 col-8">
                  <h3>Log In</h3>
                  <p class="mb-4">Welcome back!</p>
                </div>
              </div>

              <form class="justify-content-center p-2">
                <div class="form-outline mb-4">
                  <label class="form-label" htmlFor="email">
                    Email
                    <input
                      type="text"
                      id="email"
                      name="email"
                      class="form-control"
                      placeholder="email"
                    />
                  </label>
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" htmlFor="password">
                    Password
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="password"
                      class="form-control"
                    />
                  </label>
                </div>
                <button id="submit" class="btn btn-dark">Log In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "../index.css";
</style>
