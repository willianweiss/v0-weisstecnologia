import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Bem-vindo</h1>
          <p className="mt-2 text-sm text-gray-600">Faça login ou crie uma conta para continuar</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
