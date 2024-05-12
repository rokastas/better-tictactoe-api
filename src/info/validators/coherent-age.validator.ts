// Purpose: this validator checks if the date of birth
// is coherent with the provided age.

import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'coherentAge', async: false })
export class CoherentAgeValidator implements ValidatorConstraintInterface {
  validate(dateOfBirth: string, args: ValidationArguments) {
    const age = args.object['age'];
    if (!dateOfBirth) return true;
    const dob = new Date(dateOfBirth);
    const today = new Date();
    const calculatedAge = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      return calculatedAge === age - 1;
    }
    return calculatedAge === age;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  defaultMessage(args: ValidationArguments) {
    return `The date of birth is not coherent with the provided age.`;
  }
}
