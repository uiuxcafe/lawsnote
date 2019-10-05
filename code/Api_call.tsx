import * as React from "react"
import { useState, useEffect } from "react"
import { Data, Override } from "framer"

const law = Data({
    date_0: "123",
    law_0: "...",
    date_1: "...",
    law_1: "...",
    date_2: "...",
    law_2: "...",
    date_3: "...",
    law_3: "...",
    date_4: "...",
    law_4: "...",
    date_5: "...",
    law_5: "...",
    date_6: "...",
    law_6: "...",
    date_7: "...",
    law_7: "...",
    date_8: "...",
    law_8: "...",
})

export const apiCall: Override = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch("https://api.realdata.dev/v1/lawsnote")
            .then(response => response.json())
            .then(data => {
                setData(data)
                law.date_0 = data.dateList[0].date
                console.log(data)
                law.law_0 = data.dateList[0].lawList[0]
                law.date_1 = data.dateList[1].date
                law.law_1 = data.dateList[1].lawList[0]
                law.date_2 = data.dateList[2].date
                law.law_2 = data.dateList[2].lawList[0]
                law.date_3 = data.dateList[3].date
                law.law_3 = data.dateList[3].lawList[0]
                law.date_4 = data.dateList[4].date
                law.law_4 = data.dateList[4].lawList[0]
                law.date_5 = data.dateList[5].date
                law.law_5 = data.dateList[5].lawList[0]
                law.date_6 = data.dateList[6].date
                law.law_6 = data.dateList[6].lawList[0]
                law.date_7 = data.dateList[7].date
                law.law_7 = data.dateList[7].lawList[0]
                law.date_8 = data.dateList[8].date
                law.law_8 = data.dateList[8].lawList[0]
            })
    }, [])
    return {
        // law.text = data.dateList[0].lawList[0]
        // console.log()
    }
}

export const date_0: Override = () => {
    return {
        text: law.date_0,
    }
}
export const law_0: Override = () => {
    return {
        text: law.law_0,
    }
}
export const date_1: Override = () => {
    return {
        text: law.date_1,
    }
}
export const law_1: Override = () => {
    return {
        text: law.law_1,
    }
}
export const date_2: Override = () => {
    return {
        text: law.date_2,
    }
}
export const law_2: Override = () => {
    return {
        text: law.law_2,
    }
}
export const date_3: Override = () => {
    return {
        text: law.date_3,
    }
}
export const law_3: Override = () => {
    return {
        text: law.law_3,
    }
}
export const date_4: Override = () => {
    return {
        text: law.date_4,
    }
}
export const law_4: Override = () => {
    return {
        text: law.law_4,
    }
}
export const date_5: Override = () => {
    return {
        text: law.date_5,
    }
}
export const law_5: Override = () => {
    return {
        text: law.law_5,
    }
}
export const date_6: Override = () => {
    return {
        text: law.date_6,
    }
}
export const law_6: Override = () => {
    return {
        text: law.law_6,
    }
}
export const date_7: Override = () => {
    return {
        text: law.date_7,
    }
}
export const law_7: Override = () => {
    return {
        text: law.law_7,
    }
}
export const date_8: Override = () => {
    return {
        text: law.date_8,
    }
}
export const law_8: Override = () => {
    return {
        text: law.law_8,
    }
}
