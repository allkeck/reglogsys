import { debouncedInputHOC } from '../hoc/debouncedInput';
import { Input } from '../components/Input';

export const LoginInput = debouncedInputHOC(Input, 700);
