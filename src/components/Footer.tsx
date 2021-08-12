import React from 'react'

export const Footer: React.FunctionComponent = () => {
    return (
        <footer className="page-footer green darken-2">
            <div className="footer-copyright green darken-2">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className="grey-text text-lighten-4 right"
                        href="https://andrey-golubenko.github.io/react-food/"
                        target="_blank"
                        rel="noreferrer"
                    >Repo</a>
                </div>
            </div>
        </footer>
    )
};