import Link from 'next/link';
import renderHTML from 'react-render-html';
import { useState, useEffect } from 'react';
import { listSearchAdmin } from '../../../actions/news.action'


const Search = () => {
    const [values, setValues] = useState({
        search: undefined,
        results: [],
        searched: false,
        message: ''
    });

    const { search, results, searched, message } = values;

    const seacrhSubmit = (e) => {
        e.preventDefault();
        listSearchAdmin({ search }).then(data => {
            setValues({ ...values, results: data, searched: true, message: `${data.length} News found` })
        })
    }

    const handleChange = (e) => {
        setValues({ ...values, search: e.target.value, searched: false, results: [] })
    }

    const SearchedBlogs = (results = []) => {
        return (
            <div className="jumbotron bg-white">
                {message && <p className="pt-4 text-muted font-italic">{message}</p>}
                {results.map((b, i) => {
                    return (<div key={i}>
                        <Link href={`/admin-panel/root-admin/news/${b.slug}`}>
                            <a className="tex-primary">{b.title}</a>
                        </Link>
                    </div>);
                })}
            </div>
        )
    }

    const seacrhForm = () => (
        <form onSubmit={seacrhSubmit}>
            <div className="row">
                <div className="col-md-8">
                    <input
                        type="search"
                        className="form-control"
                        placeholder="search news"
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-4">
                    <button className="btn btn-block btn-outline-primary" type="submit" >Search</button>
                </div>
            </div>
        </form>
    );

    return (
        <div className="container-fluid">
            <div className="pt-3 pb-5">{seacrhForm()}</div>
            {searched && <div style={{ marginTop: '-120px', marginBottom: '-80px' }}>{SearchedBlogs(results)}</div>}
        </div>
    )
}

export default Search;