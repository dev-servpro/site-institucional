import { FieldValues, FormState } from "react-hook-form";

export function shouldSubmitBeDisabled<T extends FieldValues>(
  formState: FormState<T>
): boolean {
  const { isSubmitting, errors } = formState;
  const hasErrors = !!Object.keys(errors).find(
    (key) => errors[key as keyof typeof errors]
  );
  return !isSubmitting && hasErrors;
}
