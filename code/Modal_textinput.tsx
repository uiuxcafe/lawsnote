import { Override, Data } from "framer"

// Learn more: https://framer.com/docs/overrides/

const data = Data({
    text2: "",
    noti_status: true,
    shortcut: true,
    chatHeight: 236,
    noMessage: true,
})

export const textInput: Override = props => {
    return {
        onValueChange: (text: string) => {
            data.text2 = text
            // console.log("txt = " + data.text)
        },
    }
}

export const textOutput2: Override = props => {
    return {
        text: data.text2,
    }
}

// export const textOutput1: Override = props => {
//     return {
//         text: data.text,
//     }
// }

let isvisible = false

export const bnSave: Override = props => {
    return {
        onTap: (text: string) => {
            data.text2 = data.text2 == "" ? "儲存後更新" : data.text2
            // data.text = data.text == "" ? "即時更新" : data.text
            // console.log("txt1 = " + data.text)
            data.noti_status = isvisible
            isvisible = !isvisible
            data.shortcut = !isvisible
        },
    }
}

export const status: Override = () => {
    return {
        visible: data.noti_status,
        transition: {
            duration: 0,
        },
    }
}

export const shortcut: Override = () => {
    return {
        visible: data.shortcut,
        transition: {
            duration: 0,
        },
    }
}

// 對話 Modal

let isFolded = false

export const Send: Override = () => {
    return {
        onTap() {
            data.chatHeight = isFolded ? 236 : 0
            isFolded = !isFolded
            console.log(isFolded)
            data.noMessage = !isvisible
            isvisible = !isvisible
            transition: {
                duration: 0
            }
        },
    }
}

export const chatList: Override = () => {
    return {
        animate: { height: data.chatHeight },
        transition: {
            duration: 0,
        },
    }
}

export const noMessage: Override = () => {
    return {
        visible: data.noMessage,
        transition: {
            duration: 0,
        },
    }
}
