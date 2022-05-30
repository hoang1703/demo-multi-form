import { useForm } from 'react-hook-form';
import { Button, Box, Heading } from '@chakra-ui/react';
import TextField from './FormFields/TextField';
import { SITE_FORM_DATA } from '../constants/formData';
import SelectField from './FormFields/Select';
import { submitForm } from '../helpers/handleSubmit';

const DemoForm = () => {
  const { form1, form2, form3, form4, form5 } = SITE_FORM_DATA;
  const {
    handleSubmit: handleSubmitForm1,
    register: registerForm1,
    formState: { errors: errorsForm1, isValid: isValidForm1 },
    getValues: getValuesForm1,
  } = useForm();
  const {
    handleSubmit: handleSubmitForm2,
    register: registerForm2,
    formState: { errors: errorsForm2, isValid: isValidForm2 },
    getValues: getValuesForm2,
  } = useForm();
  const {
    handleSubmit: handleSubmitForm3,
    register: registerForm3,
    formState: { errors: errorsForm3, isValid: isValidForm3 },
    getValues: getValuesForm3,
  } = useForm();
  const {
    handleSubmit: handleSubmitForm4,
    register: registerForm4,
    formState: { errors: errorsForm4, isValid: isValidForm4 },
    getValues: getValuesForm4,
  } = useForm();
  const {
    handleSubmit: handleSubmitForm5,
    register: registerForm5,
    formState: { errors: errorsForm5, isValid: isValidForm5 },
    getValues: getValuesForm5,
  } = useForm();

  const onSubmit = () => {
    if (
      isValidForm1 &&
      isValidForm2 &&
      isValidForm3 &&
      isValidForm4 &&
      isValidForm5
    ) {
      const valuesForm1 = getValuesForm1();
      const valuesForm2 = getValuesForm2();
      const valuesForm3 = getValuesForm3();
      const valuesForm4 = getValuesForm4();
      const valuesForm5 = getValuesForm5();

      // handle submit
      submitForm({
        valuesForm1,
        valuesForm2,
        valuesForm3,
        valuesForm4,
        valuesForm5,
      })
    } else {
      handleSubmitForm5()();
      handleSubmitForm4()();
      handleSubmitForm3()();
      handleSubmitForm2()();
      handleSubmitForm1()();
    }
  };

  const renderFormField = (field, register, errors) => {
    switch (field.type) {
      case 'text':
      case 'number':
      case 'tel':
        return <TextField errors={errors} register={register} {...field} />;
      case 'select':
        return <SelectField errors={errors} register={register} {...field} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Box p="10">
        <Heading>SITE</Heading>
        {/* Form 1 */}
        <Box boxShadow="xl" p="6" rounded="md" bg="white">
          <Heading size={'lg'}>{form1.name}</Heading>
          <form onSubmit={handleSubmitForm1(onSubmit)}>
            {form1.data.map(field => (
              <Box mb={2} key={field.name}>
                {renderFormField(field, registerForm1, errorsForm1)}
              </Box>
            ))}
          </form>
        </Box>

        {/* Form 2 */}
        <Box boxShadow="xl" p="6" rounded="md" bg="white">
          <Heading size={'lg'}>{form2.name}</Heading>
          <form onSubmit={handleSubmitForm2(onSubmit)}>
            {form2.data.map(field => (
              <Box mb={2} key={field.name}>
                {renderFormField(field, registerForm2, errorsForm2)}
              </Box>
            ))}
          </form>
        </Box>

        {/* Form 3 */}
        <Box boxShadow="xl" p="6" rounded="md" bg="white">
          <Heading size={'lg'}>{form3.name}</Heading>
          <form onSubmit={handleSubmitForm3(onSubmit)}>
            {form3.data.map(field => (
              <Box mb={2} key={field.name}>
                {renderFormField(field, registerForm3, errorsForm3)}
              </Box>
            ))}
          </form>
        </Box>

        {/* Form 4 */}
        <Box boxShadow="xl" p="6" rounded="md" bg="white">
          <Heading size={'lg'}>{form4.name}</Heading>
          <form onSubmit={handleSubmitForm4(onSubmit)}>
            {form4.data.map(field => (
              <Box mb={2} key={field.name}>
                {renderFormField(field, registerForm4, errorsForm4)}
              </Box>
            ))}
          </form>
        </Box>

        {/* Form 5 */}
        <Box boxShadow="xl" p="6" rounded="md" bg="white">
          <Heading size={'lg'}>{form5.name}</Heading>
          <form onSubmit={handleSubmitForm5(onSubmit)}>
            {form5.data.map(field => (
              <Box mb={2} key={field.name}>
                {renderFormField(field, registerForm5, errorsForm5)}
              </Box>
            ))}
          </form>
        </Box>

        <Button mt={4} colorScheme="teal" onClick={onSubmit}>
          Submit
        </Button>
      </Box>
    </>
  );
};

export default DemoForm;
