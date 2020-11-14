import { useState } from 'react';
import Layout from '../../../../../components/Layout';
import { withRouter } from 'next/router';
import { resetPassword } from '../../../../../actions/auth.action';
import Link from 'next/link';


/** 
 * completed!
*/
const ResetPassword = ({ router }) => {
    const [values, setValues] = useState({
        newPassword: '',
        message: '',
        error: '',
        showForm: true,
        signInButton: false
    });

    const {newPassword, message, error, showForm, signInButton } = values;


    const hanldeSubmit = (e) => {
        e.preventDefault();
        resetPassword({
            newPassword,
            resetPasswordLink: router.query.id
        }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, showForm: true, newPassword: '', signInButton: false })
            } else {
                setValues({ ...values, message: data.message, error: '', newPassword: '', showForm: false, signInButton: true })
            }
        })
    }

    const passwordResetForm = () => (
        <div className="container">
            <form onSubmit={hanldeSubmit}>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="password"
                        onChange={e => setValues({ ...values, newPassword: e.target.value })}
                        value={newPassword}
                        placeholder="Type new password"
                        required />
                </div>
                <div>
                    <button className="btn btn-primary btn-block btn-lg">change password</button>
                </div>
            </form>
        </div>
    )

    const showError = () => {
        return (
            error ? <div className="alert alert-danger">{error}</div> : ''
        )
    }

    const showMessage = () => {
        return (
            message ? <div className="alert alert-success">{message}</div> : ''
        )
    }


    return (
        <Layout>
            <div className="container">
                <div className="row ml-0 mr-0">
                    <div className="col-md-12">
                        <h2 className="text-center pt-5 pb-5">Reset password</h2>
                        {showError()}
                        {showMessage()}
                        {showForm && passwordResetForm()}
                        {
                            signInButton &&
                            <Link href={`/admin-panel/user-signin`}>
                                <a className="btn btn-primary btn-lg btn-block mt-2 mb-5">Sign in</a>
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )

}

export default withRouter(ResetPassword);