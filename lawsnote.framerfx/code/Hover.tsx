import { Data, animate, Override, useCycle } from "framer"

const data = Data({
    text: "請指派部門",
    menuBodyHeight: 0,
})

export const textOutput: Override = props => {
    return {
        text: data.text,
    }
}

export function bn1(): Override {
    return {
        whileHover: { backgroundColor: "##F6F8F9" },
        transition: { duration: 0 },
        onTap() {
            data.text = "人力資源處"
            // console.log(data.text)
            data.menuBodyHeight = isFolded ? 0 : 156
            isFolded = !isFolded
        },
    }
}

export function bn2(): Override {
    return {
        whileHover: { backgroundColor: "##F6F8F9" },
        transition: { duration: 0 },
        onTap() {
            data.text = "稽核處"
            // console.log("txt1 = " + data.text)
            data.menuBodyHeight = isFolded ? 0 : 156
            isFolded = !isFolded
        },
    }
}

export function bn3(): Override {
    return {
        whileHover: { backgroundColor: "##F6F8F9" },
        transition: { duration: 0 },
        onTap() {
            data.text = "個人金融總處"
            // console.log("txt1 = " + data.text)
            data.menuBodyHeight = isFolded ? 0 : 156
            isFolded = !isFolded
        },
    }
}

export function bn4(): Override {
    return {
        whileHover: { backgroundColor: "##F6F8F9" },
        transition: { duration: 0 },
        onTap() {
            data.text = "數位金融總處"
            // console.log("txt1 = " + data.text)
            data.menuBodyHeight = isFolded ? 0 : 156
            isFolded = !isFolded
        },
    }
}

export function bn5(): Override {
    return {
        whileHover: { backgroundColor: "##F6F8F9" },
        transition: { duration: 0 },
        onTap() {
            data.text = "市場總處"
            // console.log("txt1 = " + data.text)
            data.menuBodyHeight = isFolded ? 0 : 156
            isFolded = !isFolded
        },
    }
}

let isFolded = false
// let isvisible = false

export const DropButton: Override = () => {
    return {
        onTap() {
            data.menuBodyHeight = isFolded ? 0 : 156
            isFolded = !isFolded
        },
    }
}

export const MenuBody: Override = () => {
    return {
        animate: { height: data.menuBodyHeight },
        transition: {
            duration: 0,
        },
    }
}
