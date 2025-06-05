import { Toggle as ToggleUI } from "kit-components-ui"


export default function Toggle ():JSX.Element {

    const handleClick = () => alert("Hello world!")

    return (
        <section>
                <ToggleUI onClick={handleClick} />
        </section>
    )
}
