function Quote(props) {
    return (
        <>
            <div>
                Texte : {props.text}
            </div>
            <div>
                Auteur : {props.author}
            </div>
        </>
    );
}

export default Quote;