export default function SingnUp() {
  return (
    <>
      <div className="auth-main relative">
        <div className="auth-wrapper v1 flex items-center w-full h-full min-h-screen">
          <div className="auth-form flex items-center justify-center grow flex-col min-h-screen relative p-6 ">
            <div className="w-full max-w-[350px] relative">
              <div className="auth-bg ">
                <span className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] block rounded-full bg-theme-bg-1 animate-[floating_7s_infinite]"></span>
                <span className="absolute top-[150px] right-[-150px] w-5 h-5 block rounded-full bg-primary-500 animate-[floating_9s_infinite]"></span>
                <span className="absolute left-[-150px] bottom-[150px] w-5 h-5 block rounded-full bg-theme-bg-1 animate-[floating_7s_infinite]"></span>
                <span className="absolute left-[-100px] bottom-[-100px] w-[300px] h-[300px] block rounded-full bg-theme-bg-2 animate-[floating_9s_infinite]"></span>
              </div>
              <div className="card sm:my-12  w-full shadow-none">
                <div className="card-body p-10!">
                  <h4 className="text-center font-medium mb-4">Sign up</h4>
                  <div className="grid grid-cols-12 gap-3 mb-3">
                    <div className="col-span-12 sm:col-span-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="flex mt-1 justify-between items-center flex-wrap">
                    <div className="form-check">
                      <input
                        className="form-check-input input-primary"
                        type="checkbox"
                      />
                      <label className="form-check-label text-muted mx-1">
                        I agree to all the Terms &amp; Condition
                      </label>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      className="btn btn-primary mx-auto shadow-2xl"
                    >
                      Sign up
                    </button>
                  </div>
                  <div className="flex justify-between items-end flex-wrap mt-4">
                    <h6 className="font-medium mb-0">
                      Already have an Account?
                    </h6>
                    <a href="login-v1.html" className="text-primary-500">
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
