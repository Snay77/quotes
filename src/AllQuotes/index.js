import Quote from "../Quote"


function AllQuotes(props){
    const listquote = props.quotes.map(quote=>
        <Quote key={quote.id} {...quote}/>
        )

    return (
        <div>
            {listquote}
        </div>
    )
}

export default AllQuotes