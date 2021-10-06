import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "absolute",
        top: "100vh",
        width: "100%"
    }
    return (
        <footer className="bg-dark text-light" style={footerStyle}>
            <p className="text-center my-4 py-3">
                Copyright &copy; MyTodoList.com
            </p>
        </footer>
    )
}
