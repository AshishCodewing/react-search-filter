import "./recommended.css"
import Button from "../Components/Button"

function Recommended({handleClick}) {
    return (
        <>
            <div>
                <h2 className="recommended-title">Recommended</h2>
                <div className="recommended-flex">
                    <Button onClickHandler={handleClick} value="Nike"  title="Nike"/>
                    <Button onClickHandler={handleClick}  value="Addidas" title="Addidas"/>
                    <Button onClickHandler={handleClick} value="Puma" title="Puma"/>
                    <Button onClickHandler={handleClick} value="Vans" title="Vans"/>
                </div>
            </div>
        </>
    )
}

export default Recommended