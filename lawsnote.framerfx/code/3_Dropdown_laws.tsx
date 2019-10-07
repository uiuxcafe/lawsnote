import { Data, animate, Override, useCycle } from "framer"
//第三層展開收合功能
const data = Data({
    rotation: 0,
    menuBodyHeight: 320,
    otherMenuTop: 479 - 99,
    // scroll_show: false,
    // AHeight: 361,
})

let isFolded = false
// let isvisible = false

export const DropButton: Override = () => {
    return {
        animate: { rotate: data.rotation },
        transition: {
            duration: 0,
        },
        onTap() {
            data.rotation = isFolded ? 0 : -90
            data.menuBodyHeight = isFolded ? 320 : 0
            data.otherMenuTop = isFolded ? 479 - 99 : 159 - 99
            // data.AHeight = isFolded ? 361 : 830
            isFolded = !isFolded
            // console.log(isFolded)
            // data.scroll_show = isvisible
            // isvisible = !isvisible
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

// export const scroll: Override = () => {
//     return {
//         // visible: data.scroll_show,
//         animate: { height: data.AHeight },
//         transition: {
//             duration: 0,
//         },
//     }
// }
