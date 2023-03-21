import Button from '../../components/atoms/Button'
import Input from '../../components/atoms/Input'

export default function SignIn(): JSX.Element {
  return (
    <>
      <div className="flex min-h-full">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <picture>
                <img
                  className="h-12 w-auto"
                  src="https://cdn.vainapp.com.br/website/logo.png"
                  alt="Vain Logo"
                />
              </picture>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                Entre na sua conta
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Ou{' '}
                <a
                  href="#"
                  className="font-medium text-orange-600 hover:text-orange-500"
                >
                  Criar uma conta
                </a>
              </p>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      E-mail
                    </label>
                    <div className="mt-2">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Senha
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Manter-me conectado
                      </label>
                    </div>

                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-orange-600 hover:text-orange-500"
                      >
                        Esqueceu sua senha?
                      </a>
                    </div>
                  </div>

                  <div>
                    <Button
                      label="Entrar"
                      widthFull={false}
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-orange-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block min-h-screen">
          <picture>
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://cdn.vainapp.com.br/website/suporte.png"
              alt=""
            />
          </picture>
        </div>
      </div>
    </>
  )
}
