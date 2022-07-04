import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px;
  gap: 8px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;
  background: ${({ checked }) => (checked ? '#0dbdbd' : '#fff')};
  border: 2px solid #0dbdbd;
  border-radius: 2px;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.checked ? 1 : 0)};
  }
`;

export const Label = styled.span`
  display: inline-block;
  font-family: 'Nunito';
  font-size: 16px;
  line-height: 18px;
`;
