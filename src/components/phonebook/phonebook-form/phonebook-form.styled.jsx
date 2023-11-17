import styled from 'styled-components';

import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border: 1px solid black;
`;

export const AddButton = styled.button`
  display: block;
  width: 100px;
`;
