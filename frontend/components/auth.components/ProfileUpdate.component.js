import { useEffect, useState } from 'react';
import { getCookie, updateUser } from '../../actions/auth.action';
import { getProfile, update } from '../../actions/userProfile.action';
import { API } from '../../config';
import { Button } from 'reactstrap';
import { FaWindows } from 'react-icons/fa';

/**
 * completed!
 */
const ProfileUpdate = () => {
    const [values, setValues] = useState({
        username: '',
        user_name_for_photo: '',
        name: '',
        email: '',
        password: '',
        occupation:'',
        publishedEmail:'',
        error: false,
        success: false,
        loading: false,
        photo: '',
        userData: '',
        about: ''
    });

    const [imgBtn, setImgBtn] = useState(false);
    const [tempPhoto, setTempPhoto] = useState('')


    const token = getCookie('token');
    const { user_name_for_photo, username, name, email, password,occupation,publishedEmail, error, success, loading, about, photo, userData } = values;

    const init = () => {
        getProfile(token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                setValues({
                    ...values,
                    username: data.username,
                    name: data.name,
                    email: data.email,
                    about: data.about,
                    occupation: data.occupation,
                    publishedEmail:data.publishedEmail,
                    user_name_for_photo: data.username,
                    photo: data.photo
                })
            }
        })

    }

    useEffect(() => {
        init();
    }, []);


    const handleChange = (name) => (e) => {
        const value = name === 'photo' ? e.target.files[0] : e.target.value

        if (name === 'photo' && e.target.files[0]) {
            setImgBtn(true);
            setTempPhoto(e.target.files[0])
        }

        let userFormData = new FormData()
        userFormData.set(name, value)
        setValues({ ...values, [name]: value, userData: userFormData, error: false, success: false })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({ ...values, loading: true });
        update(token, userData).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false, loading: false })
            } else {
                updateUser(data, () => {
                    setValues({
                        ...values,
                        username: data.username,
                        name: data.name,
                        email: data.email,
                        about: data.about,
                        occupation: data.occupation,
                        publishedEmail:data.publishedEmail,
                        success: true,
                        loading: false,
                        photo: '',
                        user_name_for_photo: ''
                    });
                    setTempPhoto('');
                    setImgBtn(false);
                    window.location.reload(false);
                });
            }
        })

    }

    const profileUpdateForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className={imgBtn ? 'btn btn-danger disabled' : 'btn btn-outline-info'}>
                    {imgBtn ? 'image Uploaded' : 'Upload featured image'}
                    <input
                        onChange={handleChange('photo')}
                        type="file"
                        accept="image/*"
                        hidden
                    />
                </label>
                <small className="text-muted ml-3">Max size: 1mb</small>
                <div style={{ overflow: 'scroll' }}>
                    <p>{tempPhoto.name}</p>
                </div>
            </div>
            <div className="form-group">
                <label className="text-muted">Username</label>
                <input
                    onChange={handleChange('username')}
                    type="text"
                    value={username}
                    className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    onChange={handleChange('name')}
                    type="text"
                    value={name}
                    className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input
                    onChange={handleChange('email')}
                    type="text"
                    value={email}
                    className="form-control"
                    disabled />
            </div>
            <div className="form-group">
                <label className="text-muted">Published Email</label>
                <input
                    onChange={handleChange('publishedEmail')}
                    type="email"
                    value={publishedEmail}
                    pattern={'.+\@.+\..+'}
                    className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">About</label>
                <input
                    onChange={handleChange('about')}
                    type="text"
                    value={about}
                    className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">Occupation</label>
                <input
                    onChange={handleChange('occupation')}
                    type="text"
                    value={occupation}
                    className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input
                    onChange={handleChange('password')}
                    type="text"
                    value={password}
                    className="form-control" />
            </div>
            <Button type="submit" className="btn btn-block btn-lg">Submit</Button>
        </form>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-success" style={{ display: success ? '' : 'none' }}>
            profile updated
        </div>
    );

    const showLoading = () => (
        <div className="alert alert-info" style={{ display: loading ? '' : 'none' }}>
            loading...
        </div>
    );

    const showImage = () => (

        < img src={`${API}/user/photo/${user_name_for_photo}`}
            className="img img-fluid mb-3"
            style={{ maxWidth: '100%', maxHeight: 'auto' }}
            alt="user profile picture"
        />
    )

    return (
        <React.Fragment>
            <div className="container">
                <div className="row ml-0 mr-0">
                    <div className="col-md-4">
                        {photo && showImage()}
                    </div>
                    <div className="col-md-8 mb-5">
                        {showError()}
                        {showSuccess()}
                        {showLoading()}
                        {profileUpdateForm()}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );



};


export default ProfileUpdate;