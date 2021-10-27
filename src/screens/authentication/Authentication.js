import React, { Fragment, useRef } from "react";
import AuthStyles from "./style/AuthenticationStyles";
import { userAuthActions } from "../../store/userAuth";
import { useDispatch, useSelector } from "react-redux";

const Authentication = (props) => {
    const classes = AuthStyles();
    const dispatch = useDispatch();
    const newAccount = useSelector(state => state.userAuth.newAccount);
    const nameValue = useRef();
    const passwordValue = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        dispatch(userAuthActions.verificateUser({
            inputName: nameValue.current.value,
            inputPassword: passwordValue.current.value
        }));
        nameValue.current.value = "";
        passwordValue.current.value = "";
    }

    const createAccountHandler = () => {

    }

    return (<Fragment>
        {!newAccount && (<form className={classes.root} onSubmit={submitHandler} >
            <h1>Login</h1>
            <input type="text" placeholder="Bond" ref={nameValue} />
            <input type="password" placeholder="007" ref={passwordValue} />
            <div className="wrapper">
                <input type="submit" value="LOG IN" />
            </div>
            <div className="wrapper">
                <input type="button" value="CREATE ACCOUNT" onClick={createAccountHandler} />
            </div>
        </form>
        )}

        {newAccount && (
            <form className={classes.root} onSubmit={submitHandler} >
                <h1>Create new user account</h1>
                <input type="text" placeholder="input your name" ref={nameValue} />
                <input type="password" placeholder="input your password" ref={passwordValue} />
                <div className="wrapper">
                    <input type="submit" value="CREATE ACCOUNT" />
                </div>
                <div className="wrapper">
                    <input type="button" value="Log in" onClick={createAccountHandler} />
                </div>
            </form>


        )}


    </Fragment>





    )
}

export default Authentication;