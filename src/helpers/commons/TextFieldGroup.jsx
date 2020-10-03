import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
    name,
    placeholder,
    value,
    label,
    error,
    info,
    type,
    onChange,
    disabled,
    classname,
    classnameGroup,
    id,
    isRequired

}) => {

    return (
        <div className={classnames('uk-form-group', classnameGroup)}>
            {label && <label className="label-bold">{label} {isRequired ? <span className="text-danger"> (*) </span> : ''}</label>}
            <div className="uk-position-relative">
                {isRequired ?
                    <input type={type} id={id} placeholder={placeholder} name={name} value={value} onChange={onChange} disabled={disabled}
                        className={classnames('uk-input bg-light cus-dropdown', classname, { 'is-invalid': error })} />
                    :
                    <input required type={type} id={id} placeholder={placeholder} name={name} value={value} onChange={onChange} disabled={disabled}
                        className={classnames('uk-input bg-light cus-dropdown', classname, { 'is-invalid': error })} />
                }

                {info && <small className="form-text text-muted">{info}</small>}
                {error && <div className="invalid-feedback d-block">{error}</div>}
            </div>
        </div>
    );

};

TextFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    classname: PropTypes.string,
    classnameGroup: PropTypes.string,
    id: PropTypes.string,
    isRequired: PropTypes.bool
};


TextFieldGroup.defaultProps = {
    type: 'text'
};

export default TextFieldGroup;