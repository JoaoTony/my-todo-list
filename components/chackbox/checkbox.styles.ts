import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Checkbox = styled.input<{ bgColor: string}>`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all ease-out 0.5s;

  border: 1px solid #ccc;


  appearance: none;
  --webkit-appearance: none;
  background: #fff;
  border-radius: 3px;

  :checked{
    background: ${({ bgColor }) => bgColor || '#3E83F4'};
    border-color:${({ bgColor }) => bgColor || '#3E83F4'};


    &:after{
      content: "";
      width: 12px;
      height: 12px;
      position: absolute;

      background-image: url('/icons8-check-mark.png');
      background-size: 100%;
    }
  }
`;

export const Label = styled.label<{ color: string}>`
  font-size: 14px;

  color: ${({ color }) => color || '#9E9E9E'};
  opacity: ${({ color }) => (color ? 0.6 : 1)};

  margin-left: 4px;

`;
