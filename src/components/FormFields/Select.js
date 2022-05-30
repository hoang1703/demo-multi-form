import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from '@chakra-ui/react';

const SelectField = ({
  errors,
  register,
  name,
  label,
  placeholder,
  required,
  options,
}) => {
  return (
    <FormControl isInvalid={errors[name]}>
      <FormLabel htmlFor="name">{label}</FormLabel>

      <Select
        id={name}
        placeholder={placeholder}
        {...register(name, {
          required: required,
        })}
      >
        {options?.map(option => (
          <option value={option.value}>{option.label}</option>
        ))}
      </Select>

      <FormErrorMessage>{errors[name] && 'This is required'}</FormErrorMessage>
    </FormControl>
  );
};

export default SelectField;
