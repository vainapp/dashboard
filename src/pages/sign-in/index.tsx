import Button from '../../components/atoms/Button'
import Input from '../../components/atoms/Input'

export default function SignIn(): JSX.Element {
  return (
    <div className="bg-white py-24 px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Sign In
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          This is the sign in page.
        </p>
        <Input
          type="text"
          name="first-name"
          id="first-name"
          autoComplete="given-name"
        />

        <Button label="Sign In" widthFull />
      </div>
    </div>
  )
}
