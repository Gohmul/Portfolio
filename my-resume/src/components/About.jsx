import photoOfMe from './photos/me.jpeg'

export default function About () {
    return(
<div className="about">
    <div className="photoOfMe-container">
        <img className="photoOfMe"src={photoOfMe}/>
        </div>
        <div className="section1">
            <h1>Section 1</h1>
            <p>About</p>
        </div>
</div>
    )
}