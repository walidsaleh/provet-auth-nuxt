import type { SignUpFormData } from '@/types/auth'

export const useRegistration = () => {
  const registrationData = useState<SignUpFormData | null>('registration-data', () => null)

  const setRegistrationData = (data: SignUpFormData) => {
    registrationData.value = data
  }

  return {
    registrationData,
    setRegistrationData,
  }
}
