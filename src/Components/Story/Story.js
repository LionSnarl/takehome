export default function Story({allState}) {

    // Dynamic ideas: Create state to decide which story is displayed based on how many items are in each parent key of the form state.
    console.log(allState)
    

    return(
        <>
            <h2> Madlibs story componenet </h2>
            <p>
                {/* For sake of not generating a ton of stories, we're just going to display our passed state object down to the child.*/}
                <h2> State object passed into child:</h2>
                {JSON.stringify(allState)}
            </p>
        </>
    )
}