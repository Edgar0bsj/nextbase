export default function LoginPage() {
  return (
    <>
      <div className="auth-main relative">
        <div className="auth-wrapper v1 flex items-center w-full h-full min-h-screen">
          <div className="auth-form flex items-center justify-center grow flex-col min-h-screen relative p-6">
            <div className="w-full max-w-[350px] relative">
              <div className="auth-bg">
                <span className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] block rounded-full bg-theme-bg-1 animate-[floating_7s_infinite]"></span>
                <span className="absolute top-[150px] right-[-150px] w-5 h-5 block rounded-full bg-primary-500 animate-[floating_9s_infinite]"></span>
                <span className="absolute left-[-150px] bottom-[150px] w-5 h-5 block rounded-full bg-theme-bg-1 animate-[floating_7s_infinite]"></span>
                <span className="absolute left-[-100px] bottom-[-100px] w-[300px] h-[300px] block rounded-full bg-theme-bg-2 animate-[floating_9s_infinite]"></span>
              </div>
              <div className="card sm:my-12 w-full shadow-none">
                <div className="card-body p-10!">
                  <h4 className="text-center font-medium mb-4">Login</h4>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="flex mt-1 justify-between items-center flex-wrap">
                    <div className="form-check">
                      <input
                        className="form-check-input input-primary"
                        type="checkbox"
                        id="customCheckc1"
                        defaultChecked
                      />
                      <label
                        className="form-check-label text-muted mx-1"
                        htmlFor="customCheckc1"
                      >
                        Remember me?
                      </label>
                    </div>
                    <h6 className="font-normal text-primary-500 mb-0">
                      <a href="#"> Forgot Password? </a>
                    </h6>
                  </div>
                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      className="btn btn-primary mx-auto shadow-2xl"
                    >
                      Login
                    </button>
                  </div>
                  <div className="flex justify-between items-end flex-wrap mt-4">
                    <h6 className="font-medium mb-0">Don't have an Account?</h6>
                    <a href="register-v1.html" className="text-primary-500">
                      Create Account
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="floting-button fixed bottom-[50px] right-[30px] z-1030"></div>
    </>
  );
}
