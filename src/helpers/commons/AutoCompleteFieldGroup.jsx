import React, {useState} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { AutoComplete } from 'antd';
import './AutoComplete.scss';
import {getUsersInSystem} from "../../home/services/components/common/commonAction";
import {useDispatch, useSelector} from "react-redux";

const { Option } = AutoComplete;
const AutoCompleteFieldGroup = ({
    data,
    placeholder,
    label,
    error,
    onChange,
    disabled,
    value,
    classname,
    t
}) => {

    const dispatch = useDispatch();

    const suggest_user_in_systems = useSelector(state => state.commonReducer.getUsersInSystemRes);

    const [options, setOptions] = useState(null);

    const onKeyUp = e => {
        const [q, page] = [e.target.value, 1];
        /*When user input nothing*/
        if (q.length === 0){
            setOptions([]);
            return;
        }

        dispatch(getUsersInSystem(q, page));

        let userOptions = [];
        for (const user of suggest_user_in_systems) {
            userOptions.push({
                id: user["id"],
                value: user["username"]
            });
        }
        setOptions(userOptions);
    }

    return (
        <div className={classnames('uk-form-group', classname)}>
            {label && <label className="label-bold">{label}</label>}
            <AutoComplete
                key={data}
                style={{ width: '100%' }}
                options={options}
                allowClear={true}
                disabled={disabled}
                value={value}
                placeholder={placeholder}
                notFoundContent={t("notFound")}
                onKeyUp={onKeyUp}
                onChange={onChange}
                dropdownClassName={"cus-dropdown"}
            />
            {error && <div className="invalid-feedback d-block">{error}</div>}
        </div>
    )
}


AutoCompleteFieldGroup.propTypes = {
    data: PropTypes.any.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string,
    label: PropTypes.string,
    classname: PropTypes.string
};

export default AutoCompleteFieldGroup
