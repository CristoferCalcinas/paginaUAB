import { ButtonLogin } from "./ButtonLogin";
import bgImage from "/LoginImg/bakz.gif";

export const LoginPage = () => {
  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <section>
        <div className="flex min- overflow-hidden bg-gradient-to-r from-purple-300 to-indigo-400 rounded-2xl">
          <div className="flex flex-col justify-center flex-1 px-4 py-8 sm:px-6 lg:flex-none lg:px-20 xl:px-24 ">
            <div className="w-full max-w-xl mx-auto lg:w-96 ">
              <div>
                <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">
                  Datos de Acceso
                </h2>
              </div>

              <div className="mt-8">
                <div className="mt-6">
                  <form action="#" method="POST" className="space-y-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        Usuario
                      </label>
                      <div className="mt-1 flex items-center">
                        <div
                          className="w-8 h-8 bg-center bg-no-repeat mr-2"
                          style={{
                            backgroundImage: "url('LoginImg/anonimo.jpg')",
                          }}
                        />
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required=""
                          placeholder="Your Email"
                          className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        Clave
                      </label>
                      <div className="mt-1 flex items-center">
                        <div
                          className="w-8 h-8  bg-center bg-no-repeat bg-contain bg-transparent mr-2"
                          style={{
                            backgroundImage: "url('LoginImg/llave1.png')",
                          }}
                        />
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required=""
                          placeholder="Your Password"
                          className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-400 rounded-xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
                      >
                        INGRESAR
                      </button>
                    </div>
                  </form>

                  <ButtonLogin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
