import './Header.css'
import React from 'react';

const TableauHeader = <header>
    <table className="Table-header">
        <tr className="App-header">
            <td className="td1"><h2>DEMO Streaming</h2></td>
            <td className="td2"><p>Log in</p></td>
            <td className="td3"><button type="button" className="Button-start">Start your free trial</button></td>
        </tr>
        <tr className="App-banner">
        <h3>Popular Titles</h3>
        </tr>
    </table>
</header>

function Header() {
    return (
        TableauHeader
    )
}

export default Header
