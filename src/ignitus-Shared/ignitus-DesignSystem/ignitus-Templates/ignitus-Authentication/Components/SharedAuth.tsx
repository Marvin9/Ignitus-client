import React, {FunctionComponent} from 'react';
import {Redirect} from 'react-router-dom';
import {Wrapper, SideWrapper, Form} from './SplittedComponents';
import {Props, userRole, authType} from '../types';
import {withErrorBoundary} from '../../../../ignitus-ErrorHandlingComponents/errorBoundary';

const SharedAuthComponent: FunctionComponent<Props> = (props: Props) => {
  const {role, authenticationType, authenticationData} = props;
  const alternateRole: userRole = role === 'Student' ? 'Professor' : 'Student';
  const alternateAuth: authType =
    authenticationType === 'LogIn' ? 'SignUp' : 'LogIn';
  const authRedirectText: string =
    authenticationType === 'LogIn'
      ? "Don't have an account?"
      : 'Already have an account?';
  const {success} = authenticationData;

  if (authenticationType === 'LogIn' && success) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Wrapper>
      <SideWrapper
        role={role}
        authenticationType={authenticationType}
        alternateRole={alternateRole}
      />
      <Form
        {...props}
        alternateAuth={alternateAuth}
        authRedirectText={authRedirectText}
      />
    </Wrapper>
  );
};

export const SharedAuthentication: FunctionComponent<Props> = withErrorBoundary(
  SharedAuthComponent,
);
