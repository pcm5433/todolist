import './header.css'

const header = ()=>{
    let date = new Date();
    let today = date.toDateString();
    return(
        <header id="header">
            <h1>TODO LIST</h1>
            <h3>{today}</h3>
        </header>
    )
}

export default header;