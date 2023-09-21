import "./styles.css";

import { useState, useEffect } from "react";

import getCW from "../../utils/fetch/codewars";

export default function AboutMe({stats}) {

    if (stats) {
        return(
            <section>
                <p>stats</p>
            </section>

        )
    }
    else{
        return (
            <section>
                <p>no stats</p>
            </section>
        )
    }
}
