import React, { Fragment, useRef } from "react";
import AuthStyles from "./style/AuthenticationStyles";
import { userAuthActions } from "../../store/userAuth";
import { useDispatch, useSelector } from "react-redux";
import PostRequest from "../../helpers/validation/api/PostRequest";

const Authentication = (props) => {
    const classes = AuthStyles();
    const dispatch = useDispatch();
    const newAccount = useSelector(state => state.userAuth.newAccount);
    const emailValue = useRef();
    const passwordValue = useRef();

    let userData = {};

    const submitHandler = (event) => {
        event.preventDefault();

        userData = PostRequest(emailValue.current.value, passwordValue.current.value, newAccount);

        if (!!userData) {
            dispatch(userAuthActions.updateUser({
                id: userData.localId,
                email: emailValue.current.value,
                password: passwordValue.current.value
            }
            ));
        }

        emailValue.current.value = "";
        passwordValue.current.value = "";
    }

    const switchFormHandler = () => {
        dispatch(userAuthActions.switchButton());
    }

    return (
        <Fragment>
            <form autoComplete="on" className={classes.root} onSubmit={submitHandler} >
                <h1>{newAccount ? "Create new user account" : "Login"}</h1>
                <input
                    type="email"
                    placeholder={newAccount ? "input your email" : "bond@james.bond"}
                    ref={emailValue} required />
                <input
                    type="password"
                    placeholder={newAccount ? "input your password" : "007007"}
                    ref={passwordValue} required />
                <div className="wrapper">
                    <input type="submit" value={newAccount ? "CREATE ACCOUNT" : "LOG IN"} />
                </div>
                <div className="wrapper">
                    <input type="button" value={newAccount ? "LOG IN" : "CREATE ACCOUNT"} onClick={switchFormHandler} />
                </div>
            </form>
        </Fragment >
    )
}

export default Authentication;