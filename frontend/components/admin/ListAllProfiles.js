import { useState, useEffect } from 'react';
import { isAuth } from '../../actions/auth.action';
import { listProfiles } from '../../actions/userProfile.action';
import { API } from '../../config';
import moment from 'moment';

/**
 * completed!
 */
const ListAllProfiles = () => {

    const [profile, setProfile] = useState([]);

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = () => {
        listProfiles().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setProfile(data);
            }
        });
    };



    const showAllProfiles = () => {
        return profile.map((p, i) => {
            return (
                <div key={i} className="mb-5 row inline-flex">
                    {p.role === 1 ?
                        <React.Fragment>
                            {isAuth()._id === p._id ?
                                <React.Fragment>
                                    <div className="col-md-10">
                                        <h3>{p.name}</h3>
                                        <p className="mark">
                                            Username : {p.username} ,
                                    Joined : {moment(p.updatedAt).fromNow()} ,
                                    Email : {p.email} ,
                                    Role: <code> Admin</code>
                                            <kbd>(me)</kbd>
                                        </p>
                                    </div>

                                    <div className="col-md-2">
                                        < img src={`${API}/user/photo/${p.username}`}
                                            className="img img-fluid"
                                            style={{ maxWidth: '100%', maxHeight: '100px' }}
                                            alt="user profile picture"
                                        />
                                    </div>
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <div className="col-md-10">
                                        <h3>{p.name}</h3>
                                        <p className="mark">
                                            Username : {p.username} ,
                                            Joined : {moment(p.updatedAt).fromNow()} ,
                                            Email : {p.email} ,
                                            Role: <code> Admin</code>
                                        </p>
                                    </div>

                                    <div className="col-md-2">
                                        < img src={`${API}/user/photo/${p.username}`}
                                            className="img img-fluid"
                                            style={{ maxWidth: '100%', maxHeight: '100px' }}
                                            alt="user profile picture"
                                        />
                                    </div>
                                </React.Fragment>}
                        </React.Fragment>
                        :
                        <React.Fragment>
                            {isAuth()._id === p._id ?
                                <React.Fragment>
                                    <div className="col-md-10">
                                        <h3>{p.name}</h3>
                                        <p className="mark">
                                            Username : {p.username} ,
                                            Joined : {moment(p.updatedAt).fromNow()} ,
                                            Email : {p.email} ,
                                            Role: <code> Moderator</code>
                                            <kbd>(me)</kbd>
                                        </p>
                                    </div>

                                    <div className="col-md-2">
                                        < img src={`${API}/user/photo/${p.username}`}
                                            className="img img-fluid"
                                            style={{ maxWidth: '100%', maxHeight: '100px' }}
                                            alt="user profile picture"
                                        />
                                    </div>
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <div className="col-md-10">
                                        <h3>{p.name}</h3>
                                        <p className="mark">
                                            Username : {p.username} ,
                                            Joined : {moment(p.updatedAt).fromNow()} ,
                                            Email : {p.email} ,
                                            Role: <code> Moderator</code>
                                        </p>
                                    </div>

                                    <div className="col-md-2">
                                        < img src={`${API}/user/photo/${p.username}`}
                                            className="img img-fluid"
                                            style={{ maxWidth: '100%', maxHeight: '100px' }}
                                            alt="user profile picture"
                                        />
                                    </div>
                                </React.Fragment>}
                        </React.Fragment>
                    }
                </div >

            )
        })
    }

    return (
        <React.Fragment>
            <div className="container">
            <div className="row ml-0 mr-0">
                <div className="col-md-12">
                    {!profile && <div className="alert alert-warning">"Error"</div>}
                    {showAllProfiles()}
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}

export default ListAllProfiles;
