import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../assets/css/Login.css"
import { toggleLoginScreen } from "../actions/AccountAction"
import Icon from "@identitybuilding/idb-react-iconlib";
import { Button, OsnInputDate, OsnInputText, OsnSelect } from "@identitybuilding/idb-react-ui-elements";
import axios from 'axios';

function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update state to force render
    // An function that increment 👆🏻 the previous state like here 
    // is better than directly setting `value + 1`
}


const Login = (props) => {
    const forceUpdate = useForceUpdate();

    const dispatch = useDispatch()
    const { translate, lang } = useSelector(state => state.general);
    const loginScreen = useSelector((state) => state.account.loginScreen);
    const [loginType, setLoginType] = useState('login');
    const [error, setError] = useState('');
    const [userType, setUserType] = useState('consumer');
    const [accountInformation, setAccountInformation] = useState(false);
    const [preferred_language, setPreferred_language] = useState(lang === 'nl' ? { id: 'nl', name: 'Nederlands' } : { id: 'fr', name: 'Français' });

    // login states
    const [LoginEmailUsername, setLoginEmailUsername] = useState('');
    const [LoginPassword, setLoginPassword] = useState('');

    // register states
    // consumer
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerRepeatPassword, setRegisterRepeatPassword] = useState('');
    // business
    const [registerEstablishmentNumber, setRegisterEstablishmentNumber] = useState('');
    const [registerEnterpriseNumber, setRegisterEnterpriseNumber] = useState('');
    const [registerOtp, setRegisterOtp] = useState('');

    // extra info register
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerFirstName, setRegisterFirstName] = useState('');
    const [registerLastName, setRegisterLastName] = useState('');
    const [registerDateOfBirth, setRegisterDateOfBirth] = useState('');
    const [registerTelephone, setRegisterTelephone] = useState('');


    const resetValues = () => {
        setRegisterEmail('')
        setRegisterPassword('')
        setRegisterRepeatPassword('')
        setRegisterEstablishmentNumber('')
        setRegisterEnterpriseNumber('')
        setRegisterOtp('')
    }

    const isUpper = (str) => {
        return /[A-Z]/.test(str);
    }
    const hasNumber = (str) => {
        return /[0-9]/.test(str);
    }

    const registerHandler = () => {
        if (userType === 'consumer') {
            if (registerEmail === '') { props.createNotification("warning", "Please fill in a email"); setError('email') }
            else if (!/\S+@\S+\.\S+/.test(registerEmail)) { props.createNotification("warning", "Not a valid email"); setError('email') }
            else if (registerPassword === "") { props.createNotification("warning", "Gelieve wachtwoord in te vullen"); setError('password') }
            else if (registerPassword.length < 8) { props.createNotification("warning", "Wachtwoord moet minstens 8 characters hebben!"); setError('password') }
            else if (!isUpper(registerPassword)) { props.createNotification("warning", "Gelieve minstens 1 hoofdletter gebruiken"); setError('password') }
            else if (!hasNumber(registerPassword)) { props.createNotification("warning", "Gelieve minstens 1 cijfer gebruiken"); setError('password') }
            else if (registerRepeatPassword === "") { props.createNotification("warning", "Gelieve Wachtwoord herhalen in te vullen"); setError('repeat_password') }
            else if (registerPassword !== registerRepeatPassword) { props.createNotification("warning", "Wachtwoorden komen niet overeen"); setError('repeat_password') }
            else {
                axios.post(`http://localhost:8000/core/api/catalogus/check/email/`, {
                    email: registerEmail,
                }).then((res) => {
                    if (res.data.status === 'Ok') { setAccountInformation(true) }
                    else { props.createNotification("warning", "Dit emailadres is al in gebruikt"); setError('email') }
                })
                // 
            }
        }
        else {
            if (registerEmail === '') { props.createNotification("warning", "Please fill in a email"); setError('email') }
            else if (!/\S+@\S+\.\S+/.test(registerEmail)) { props.createNotification("warning", "Not a valid email"); setError('email') }
            else if (registerPassword === "") { props.createNotification("warning", "Gelieve wachtwoord in te vullen"); setError('password') }
            else if (registerPassword.length < 8) { props.createNotification("warning", "Wachtwoord moet minstens 8 characters hebben!"); setError('password') }
            else if (!isUpper(registerPassword)) { props.createNotification("warning", "Gelieve minstens 1 hoofdletter gebruiken"); setError('password') }
            else if (!hasNumber(registerPassword)) { props.createNotification("warning", "Gelieve minstens 1 cijfer gebruiken"); setError('password') }
            else if (registerRepeatPassword === "") { props.createNotification("warning", "Gelieve Wachtwoord herhalen in te vullen"); setError('repeat_password') }
            else if (registerPassword !== registerRepeatPassword) { props.createNotification("warning", "Wachtwoorden komen niet overeen"); setError('repeat_password') }
            else if (registerEnterpriseNumber === "") { props.createNotification("warning", "Gelieve jouw ondernemings nummer in te vullen"); setError('enterprise') }
            else if (registerEstablishmentNumber === "") { props.createNotification("warning", "Gelieve jouw vestiging nummer in te vullen"); setError('establishment') }
            else if (registerOtp === "") { props.createNotification("warning", "Gelieve jouw OTP in te vullen"); setError('otp') }
            else {
                // controle op OTP en establishments + enterprise
                setAccountInformation(true)
            }
        }
    }

    const extraRegisterHandler = () => {
        if (registerUsername === '') { props.createNotification("warning", "Gelieve een username in te vullen"); setError('username') }
        else {
            axios.post(`http://localhost:8000/core/api/catalogus/register/`, {
                registerEmail: registerEmail,
                registerPassword: registerPassword,
                registerRepeatPassword: registerRepeatPassword,
                registerEstablishmentNumber: registerEstablishmentNumber,
                registerEnterpriseNumber: registerEnterpriseNumber,
                registerOtp: registerOtp,
                registerUsername: registerUsername,
                registerFirstName: registerFirstName,
                registerLastName: registerLastName,
                registerDateOfBirth: registerDateOfBirth,
                registerTelephone: registerTelephone,
                preferred_language: preferred_language,
                userType: userType
            })
                .then((res) => {
                    localStorage.setItem("promotoken", res.data.token);
                    window.location.reload(true);
                    console.log(res)
                })
                .catch((error) => console.error(error))
        }
    }

    const loginHandler = () => {
        axios.post(`http://localhost:8000/core/api/catalogus/login/`, {
            emailUsername: LoginEmailUsername,
            password: LoginPassword,
        })
            .then((res) => {
                localStorage.setItem("promotoken", res.data.token);
                window.location.reload(true);
            })
            .catch((error) => console.error(error))
    }

    // when pressing escape, this will close the login screen
    const keyDownHandler = (e) => {
        if (e.keyCode === 27) { dispatch(toggleLoginScreen(false)) }
    }

    useEffect(() => {
        document.addEventListener('keydown', keyDownHandler);
    }, [])


    return (
        <div id="login_wrapper">
            <div className="login_content">
                <Icon className="close_icon" name="Close" onClick={() => dispatch(toggleLoginScreen(false))} />
                <figure>
                    <img src={require("../assets/imgs/logos/cn/catalnetwerk-01.svg").default} alt="logo promonetwork" />
                </figure>
                {accountInformation ?
                    <h2>bedankt om <span style={{ "color": "var(--cn)" }}>&nbsp;jouw account&nbsp;</span>te bevestigen!</h2>
                    :
                    <h2>Welkom op het <span style={{ "color": "var(--cn)" }}>&nbsp;Catalogusnetwerk</span></h2>}
                {
                    accountInformation ?
                        <div className="login_extra_info">
                            <h2>Vul hieronder nog wat <span style={{ "color": "var(--cn)" }}>&nbsp;gegevens&nbsp;</span>van je aan</h2>
                            <div className="login_extra_info_fields">
                                <label className="pref_language">{translate('preferred_language')}</label>
                                <OsnSelect
                                    className="lang-select"
                                    onChange={(e) => { setPreferred_language(e) }}
                                    active={preferred_language.name}
                                    options={[
                                        { id: 'nl', name: 'Nederlands' },
                                        { id: 'fr', name: 'Français' },
                                    ]}
                                />
                                <OsnInputText error={error === 'username' ? true : false} className="username half" icon="Entrepreneur" title={`${translate('username')}*`} onChange={(e) => { setRegisterUsername(e.target.value); setError('') }} />
                                <OsnInputText className="firstname half" icon="Info" title={translate('ci_prename')} onChange={(e) => { setRegisterFirstName(e.target.value); setError('') }} />
                                <OsnInputText className="lastname half" icon="Info" title={translate('ci_name')} onChange={(e) => { setRegisterLastName(e.target.value); setError('') }} />
                                <OsnInputDate className="birthdate half" icon="Birthday" title={translate('date_of_birth')} onChange={(e) => { setRegisterDateOfBirth(e.target.value); setError('') }} />
                                <OsnInputText className="telephone half" icon="Phone" title={translate('phone')} onChange={(e) => { setRegisterTelephone(e.target.value); setError('') }} />
                                <div onClick={() => extraRegisterHandler()} className="login_button">Registreer</div>
                            </div>

                        </div>
                        :

                        <div className="innerLogin">
                            {loginType === 'login' ?
                                <div className="login">
                                    <OsnInputText className="email" icon="Mail" title={translate('email_or_username')} onChange={(e) => setLoginEmailUsername(e.target.value)} />
                                    <OsnInputText className="password" icon="Locked" title={translate('password')} type="password" onChange={(e) => setLoginPassword(e.target.value)} />
                                    <span className="forgot_password">wachtwoord vergeten?</span>
                                    <div className="login_button" onClick={() => loginHandler()}>{translate('log_in')}</div>
                                    <span className="already_account" onClick={() => setLoginType("register")}>Ik heb nog geen account</span>
                                </div>
                                :

                                <div className="login">
                                    <div className="login_type_buttons">
                                        <div onClick={() => { resetValues(); setUserType('consumer') }} className={`type_button ${userType === "consumer" ? 'active' : ''}`}>IK BEN CONSUMENT</div>
                                        <div onClick={() => { resetValues(); setUserType('business') }} className={`type_button ${userType === "business" ? 'active' : ''}`}>IK BEN ONDERNEMER</div>
                                    </div>

                                    {userType === 'consumer' ?
                                        <React.Fragment>
                                            <OsnInputText error={error === 'email' ? true : false} className="email" icon="Mail" title={translate('email')} onChange={(e) => { setRegisterEmail(e.target.value); setError('') }} />
                                            <OsnInputText error={error === 'password' ? true : false} className="password" icon="Locked" title={translate('password')} type="password" onChange={(e) => { setRegisterPassword(e.target.value); setError('') }} />
                                            <OsnInputText error={error === 'repeat_password' ? true : false} className="password" icon="Locked" title={translate('password_repeat')} type="password" onChange={(e) => { setRegisterRepeatPassword(e.target.value); setError('') }} />
                                            <div onClick={() => registerHandler()} className="login_button">Volgende</div>
                                            <span className="already_account" onClick={() => setLoginType("login")}>Ik heb al een account</span>
                                        </React.Fragment>
                                        :
                                        <React.Fragment>
                                            <OsnInputText error={error === 'email' ? true : false} className="email" icon="Mail" title={translate('email')} onChange={(e) => { setRegisterEmail(e.target.value); setError('') }} />
                                            <OsnInputText error={error === 'password' ? true : false} className="password" icon="Locked" title={translate('password')} type="password" onChange={(e) => { setRegisterPassword(e.target.value); setError('') }} />
                                            <OsnInputText error={error === 'repeat_password' ? true : false} className="password" icon="Locked" title={translate('password_repeat')} type="password" onChange={(e) => { setRegisterRepeatPassword(e.target.value); setError('') }} />
                                            <OsnInputText error={error === 'enterprise' ? true : false} className="" icon="Entrepreneur" title={translate('your_enterprise_number')} onChange={(e) => { setRegisterEnterpriseNumber(e.target.value); setError('') }} />
                                            <OsnInputText error={error === 'establishment' ? true : false} className="password" icon="Groups" title={translate('your_establishment_number')} onChange={(e) => { setRegisterEstablishmentNumber(e.target.value); setError('') }} />
                                            <OsnInputText error={error === 'otp' ? true : false} className="password" icon="Locked" title={translate('otp')} type="password" onChange={(e) => { setRegisterOtp(e.target.value); setError('') }} />
                                            <span className="forgot_password">ik heb geen OTP</span>
                                            <div onClick={() => registerHandler()} className="login_button">Volgende</div>
                                            <span className="already_account" onClick={() => setLoginType("login")}>Ik heb al een account</span>
                                        </React.Fragment>
                                    }
                                </div>

                            }
                        </div>
                }
            </div>
            <div className="login_bg" onClick={() => dispatch(toggleLoginScreen(false))}></div>
        </div>
    );
}

export default Login;
