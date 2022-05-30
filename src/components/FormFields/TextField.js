import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';

const TextField = ({
  errors,
  register,
  name,
  label,
  placeholder,
  required,
  type
}) => {
  return (
    <FormControl isInvalid={errors[name]}>
      <FormLabel htmlFor="name">{label}</FormLabel>
      <Input
        id={name}
        placeholder={placeholder}
        {...register(name, {
          required: required,
        })}
        type={type}
      />
      <FormErrorMessage>{errors[name] && 'This is required'}</FormErrorMessage>
    </FormControl>
  );
};

export default TextField;
