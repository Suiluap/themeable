import SignUpForm from "@/components/form/sign-up-form"
import Link from "next/link"

export default function SignUp() {
  return (
    <div className='max-w-sm'>
      <h1 className="text-3xl text-center mb-4">
        Sign up
      </h1>
      <SignUpForm/>
      <p className="text-muted-foreground text-xs text-center mt-2">
        By clicking continue, you agree to our<br></br>
        <Link
          href="#"
          className="underline underline-offset-4 hover:text-primary"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="#"
          className="underline underline-offset-4 hover:text-primary"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  )
}