import React from "react";
import SectionMessages from "./Messages";
import FormMessage from "./Form";

function Main(){
    return(
        <main>
            <h2>Messages</h2>
            <SectionMessages/>
            <FormMessage/>
        </main>
    );
}
export default Main;