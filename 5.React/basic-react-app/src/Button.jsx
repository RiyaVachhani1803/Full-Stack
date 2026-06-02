function handleClick(event) {
    console.log("Hello");
    console.log(event);
}

function handleMouseOver() {
    console.log("Bye");
}

function handleDblClick() {
    console.log("Double Clicked");
}

export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            <p onMouseOver={handleMouseOver}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum eligendi cum fugit in iure! Vel aspernatur blanditiis, nihil ullam molestias tenetur quae totam magnam at, pariatur eum repudiandae vero cum.</p>
            <button onDoubleClick={handleDblClick}>Double Click me</button>
        </div>
    );
}