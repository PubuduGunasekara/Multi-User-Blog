import { useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import Layout from '../../../../../components/Layout';
import { withRouter } from 'next/router';
import { signup } from '../../../../../actions/auth.action';
import Link from 'next/link';


/** 
 * completed!
*/
const ActivateAccount = ({ router }) => {
    const [values, setValues] = useState({
        name: '',
        token: '',
        error: '',
        loading: false,
        showButton: true,
        message: '',
        signInButton: false
    });

    const { name, token, error, loading, showButton, message, signInButton } = values;

    useEffect(() => {
        let token = router.query.id
        if (token) {
            const { name } = jwt.decode(token)
            setValues({ ...values, name, token })
        }
    }, [router])

    const clickSubmit = (e) => {
        e.preventDefault();
        setValues({ ...values, loading: true, error: false })
        signup({ token }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false, showButton: false, signInButton: false })
            } else {
                setValues({ ...values, loading: false, message: data.message, showButton: false, signInButton: true })
            }
        })
    };

    const showLoading = () => (loading ? <div>loading...</div> : '')

    const showMessage = () => (
        message ? <div className="alert alert-info mt-5">{message}</div>
            : ''
    )

    const showError = () => (
        error ? <div className="alert alert-danger mt-5">{error}</div>
            : ''
    )

    return (
        <Layout>
            <div className="container">
                <div className="row mr-0 ml-0">
                    <div className="col-md-6 offset-md-3 text-center">
                        <h3 className="mt-5 mb-3">Hey {name}, Ready to activate your account?</h3>
                        {showLoading()}
                        {showError()}
                        {showMessage()}
                        {
                            showButton &&
                            <button className="btn btn-primary btn-lg btn-block mt-5 mb-3" onClick={clickSubmit}>
                                Activate account
                            </button>

                        }
                        {
                            signInButton &&
                            <Link href={`/admin-panel/user-signin`}>
                                <a className="btn btn-primary btn-lg btn-block mt-2 mb-3">Sign in</a>
                            </Link>
                        }
                    </div>
                </div>

            </div>
        </Layout>
    )

}

export default withRouter(ActivateAccount);

