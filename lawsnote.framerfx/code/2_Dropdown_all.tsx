import { Data, animate, Override, useCycle } from "framer"
//第二層展開收合功能
const data = Data({
    rotation: 0,
    menuBodyHeight: 120,
    otherMenuTop: 172,
    number_1: false,
})

let isFolded = false
let isvisible = true

export const DropButton: Override = () => {
    return {
        animate: { rotate: data.rotation },
        transition: {
            duration: 0,
        },
        onTap() {
            data.rotation = isFolded ? 0 : -90
            data.menuBodyHeight = isFolded ? 120 : 0
            data.otherMenuTop = isFolded ? 172 : 52
            isFolded = !isFolded
            // console.log(isFolded)
            data.number_1 = isvisible
            isvisible = !isvisible
            transition: {
                duration: 0
            }
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

export const otherMenu: Override = () => {
    return {
        animate: { top: data.otherMenuTop },
        transition: {
            duration: 0,
        },
    }
}

export const number: Override = () => {
    return {
        visible: data.number_1,
        transition: {
            duration: 0,
        },
    }
}
