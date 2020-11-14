import { useState } from 'react';
import Layout from '../../../../components/Layout';
import { forgotPassword } from '../../../../actions/auth.action';


/** 
 * completed!
*/
const ForgotPasswordPage = () => {
    const [values, setValues] = useState({
        email: '',
        message: '',
        error: '',
        showForm: true
    });

    const { email, message, error, showForm } = values;

    const handleChange = (name) => (e) => {
        setValues({ ...values, message: '', error: '', [name]: e.target.value })
    }

    const hanldeSubmit = (e) => {
        e.preventDefault();
        setValues({ ...values, message: '', error: '' })
        forgotPassword({ email }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                setValues({ ...values, message: data.message, email: '', error: '', showForm: false })
            }
        })
    }

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

    const passwordForgotForm = () => (
        <div>
            <form onSubmit={hanldeSubmit}>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="email"
                        onChange={handleChange('email')}
                        value={email}
                        placeholder="Type your email"
                        required />
                </div>
                <div>
                    <button className="btn btn-primary btn-block btn-lg">send password reset link</button>
                </div>
            </form>
        </div>
    )

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h2 className="text-center pt-5 pb-5">Forgot password</h2>
                        {showError()}
                        {showMessage()}
                        {showForm && passwordForgotForm()}
                    </div>
                </div>

            </div>
        </Layout>
    )


}

export default ForgotPasswordPage;