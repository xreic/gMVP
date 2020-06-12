// Dependencies
import Link from 'next/link';
import { auth, createUserProfileDocument } from '../utils/firebase.js';

// Chakra + Forms
import { Formik, Form } from 'formik';
import { Button, useToast, Flex, Box, Image } from '@chakra-ui/core';
import ValidatorField from '../utils/ValidatorField';
import { registerValid } from '../utils/ValidationSchema';

const Registration = () => {
  const toast = useToast();

  return (
    <Box padding={2} h="100%">
      <Image
        rounded="full"
        width="220px"
        marginLeft="15%"
        marginBottom="10%"
        src="https://mvp2020.s3-us-west-1.amazonaws.com/blueemail2.png"
      />

      <Formik
        initialValues={{ email: '', password: '', displayName: '' }}
        validationSchema={registerValid}
        onSubmit={async (data, { resetForm }) => {
          try {
            const { user } = await auth.createUserWithEmailAndPassword(
              data.email,
              data.password
            );

            createUserProfileDocument(user, {
              displayName: data.displayName
            });

            resetForm();
          } catch (error) {
            toast({
              title: 'An error occurred.',
              description: 'Email already in use.',
              status: 'error',
              duration: 9001,
              isClosable: true
            });
          }
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <ValidatorField
              placeholder="Email Address"
              name="email"
              value={values.email}
              type="input"
            />

            <Box paddingTop="10%">
              <ValidatorField
                placeholder="Password"
                name="password"
                value={values.password}
                type="password"
              />
            </Box>

            <Box paddingTop="10%">
              <ValidatorField
                placeholder="Display Name"
                name="displayName"
                value={values.displayName}
                type="input"
              />
            </Box>

            <Button
              background="#FFB6BA"
              variant="solid"
              rounded="20px"
              width="100%"
              height="40px"
              marginTop="18%"
              isDisabled={isSubmitting}
              isLoading={isSubmitting}
              type="submit"
            >
              Register
            </Button>

            <Link href="/">
              <a>
                <Button
                  background="#F7EEC7"
                  variant="solid"
                  rounded="20px"
                  width="100%"
                  height="40px"
                  marginTop="10%"
                  isDisabled={isSubmitting}
                  isLoading={isSubmitting}
                >
                  Cancel
                </Button>
              </a>
            </Link>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Registration;
