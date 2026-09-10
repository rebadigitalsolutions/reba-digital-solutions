export const limits = {
  name: 100,
  email: 254,
  service: 100,
  description: 5000,
  phone: 40,
  budget: 100,
};
export type ContactFields = {
  name: string;
  email: string;
  service: string;
  description: string;
  phone: string;
  budget: string;
  website: string;
};
export function validateContact(
  data: ContactFields,
  allowedServices: string[],
) {
  const errors: Record<string, string> = {};
  if (!data.name.trim()) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!allowedServices.includes(data.service))
    errors.service = "Please select a service, or choose ‘Not sure yet’.";
  if (data.description.trim().length < 10)
    errors.description =
      "Please tell us a little more (at least 10 characters).";
  for (const [key, max] of Object.entries(limits)) {
    if (data[key as keyof ContactFields].length > max)
      errors[key] = `Please use ${max} characters or fewer.`;
  }
  return errors;
}
