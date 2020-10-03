import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import TextFieldGroup from '../../../../helpers/commons/TextFieldGroup';
import { useTranslation } from "react-i18next";
import { useDispatch} from 'react-redux';
import { login } from '../../../services/components/auths/authAction';

const Login = (props) => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [isDisabled, setIsDisabled] = useState(true);
    const [remember, setRemember] = useState(false);
    useEffect(() => {
        checkDisable();

        return () => { };
    }, [formData.email, formData.password])


    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formData, props.children.props.history, remember));
    }

    const checkDisable = () => {
        if (formData.email && formData.password) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    }

    const rememberLogin = (e) => {
        setRemember(e.target.checked);
    }

    const { t } = useTranslation();
    return (
        <>
            <div uk-height-viewport className="uk-flex uk-flex-middle uk-grid-collapse uk-grid-match" uk-grid>
                <div className="form-media uk-width-2-3@m uk-width-1-2@s uk-visible@s uk-height-viewport uk-background-cover"
                    data-src="/assets/images/bg-form2.jpg" uk-img>

                    <div className="form-media-content uk-light">
                        <div className="logo"><img src="/assets/images/logo-light.png" alt="" /></div>

                        <h1> Start Your Own Social Network  <br /> with Socialte Template</h1>


                        <div className="form-media-footer">
                            <ul>
                                <li> <a href="#"> About </a></li><li> <a href="#"> Contact </a></li><li> <a href="#"> About </a></li><li> <a href="#"> Contact </a></li><li> <a href="#"> About </a></li><li> <a href="#"> Contact </a></li>
                            </ul>
                        </div>

                    </div>

                </div>
                <div className="uk-width-1-3@m uk-width-1-2@s uk-animation-slide-right-medium">

                    <div className="px-5">
                        <div className="my-4 uk-text-center">
                            <h1 className="mb-2"> {t('login')} </h1>
                            <p className="my-2">{t('noAccount')} <a href="/register"
                                className="uk-link text-primary"> {t('register')}</a> </p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <TextFieldGroup type="email" value={formData.email} placeholder="Your email" onChange={handleChange} name="email" />
                            <TextFieldGroup type="password" value={formData.password} placeholder="Your password" onChange={handleChange} name="password" />

                            <div className="form-group">
                                <label><input className="uk-checkbox mr-2" type="checkbox" onChange={rememberLogin} name="remeber" />{t('rememberLogin')}</label>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="button primary large block mb-4" type="password" disabled={isDisabled}>{t('login')}</button>
                            </div>

                            <a href="#" className="text-center uk-display-block">{t('forgetPass')}</a>
                        </form>
                    </div>

                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Login

