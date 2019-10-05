import { Override, Data } from "framer"

// Learn more: https://framer.com/docs/overrides/

const data = Data({
    text:
        "公司法已於 8/13 修正，牽涉公司治理實務守則第三十條，請因應修正該條內規。",
    text2: "儲存後更新",
    historyHeight: 0,
    sendHeight: 0,
    replyHeight: 0,
    doneHeight: 0,
    notibar: false,
})

export const textInput: Override = props => {
    return {
        onValueChange: (text: string) => {
            data.text = text
            // console.log("txt = " + data.text)
        },
    }
}

export const textOutput2: Override = props => {
    return {
        text: data.text2,
    }
}

export const textOutput1: Override = props => {
    return {
        text: data.text,
    }
}

export const bnSave: Override = props => {
    return {
        onTap: (text: string) => {
            data.text2 = data.text2 == "" ? "儲存後更新" : data.text
            data.historyHeight = 338
            data.sendHeight = 92
            // data.text = data.text == "" ? "即時更新" : data.text
            // console.log("txt1 = " + data.text)
            data.notibar = true
        },
    }
}

export const historyBody: Override = props => {
    return {
        height: data.historyHeight,
    }
}

export const sendBody: Override = props => {
    return {
        height: data.sendHeight,
    }
}

export const replyBody: Override = props => {
    return {
        height: data.replyHeight,
    }
}

export const doneBody: Override = props => {
    return {
        height: data.doneHeight,
    }
}

export const notibar: Override = props => {
    return {
        visible: data.notibar,
    }
}
