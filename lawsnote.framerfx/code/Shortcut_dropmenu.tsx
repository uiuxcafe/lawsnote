//研究中
import { Data, animate, Override, useCycle } from "framer"
//第三層展開收合功能
const data = Data({
    rotation: 0,
    menuBodyHeight: 0,
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
            data.menuBodyHeight = isFolded ? 0 : 232
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
