import React, {useState, useEffect} from 'react';
import {DefaultPasswordInputProperties} from '../../types';
import {AppIcon} from '../../../../../types/iconsTypes/iconEnums';
import * as I from './styles';

/* Primarly used to take care of user password! */

export const DefaultPasswordInput = ({
  placeholder,
  handleChange,
  state,
  ...rest
}: DefaultPasswordInputProperties) => {
  const [value, setValue] = useState<string>('');
  const [type, setType] = useState<string>('password');
  const [icon, setIcon] = useState<AppIcon>(AppIcon.EyeVisibleOffIcon);

  const handleClick = () => {
    if (type === 'password' && icon === AppIcon.EyeVisibleOffIcon) {
      setType('text');
      setIcon(AppIcon.EyeVisibleOnIcon);
    } else {
      setType('password');
      setIcon(AppIcon.EyeVisibleOffIcon);
    }
  };

  useEffect(() => {
    handleChange(value);
  }, [value]);

  return (
    <React.Fragment>
      <I.InputContainer {...rest}>
        <I.StyledIcon name={AppIcon.KeyIcon} />
        <I.Input
          type={type}
          placeholder={placeholder}
          value={state}
          onChange={e => {
            setValue(e.target.value);
            handleChange(value);
          }}
        />
        <I.StyledIcon name={icon} onClick={() => handleClick()} />
      </I.InputContainer>
    </React.Fragment>
  );
};
