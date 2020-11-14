import Head from 'next/head';
const { RFC_2822 } = require("moment");

/**
 * completed!
 */
const backDrop = (props) => {
    return (
        <React.Fragment>
            <div>
                <Head>
                    <link
                        rel="stylesheet"
                        href="/static/css/Header.css"
                    />
                </Head>
            </div>
            <div className="backdrop" onClick={props.click} />
        </React.Fragment>
    )
}
export default backDrop;