import Head from "next/head";
import React from "react";

const Meta = ({title, description}: any) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="theme-color" content="#e0e7ff" />
            <meta name="msapplication-navbutton-color" content="#e0e7ff" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="#e0e7ff"
            ></meta>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
        </Head>
    );
};

Meta.defaultProps = {
    title: "Share 3D",
    description: "Welcom, Start to share your assets",
};

export default Meta;
