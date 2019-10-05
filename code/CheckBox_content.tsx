import { Data, animate, Override } from "framer"

// Filter 功能
const data = Data({
    pHeight: 77,
    p2Height: 77,
    p3Height: 77,
    p4Height: 77,
    fwidth1: 0,
    fwidth2: 0,
    fwidth3: 0,
    fwidth4: 0,
    fwidth0: 91,
})

let isFilter1Checked = false
let isFilter2Checked = false
let isFilter3Checked = false
let isFilter4Checked = false

export const CheckBoxD1: Override = () => {
    return {
        onTap() {
            data.pHeight = !isFilter1Checked ? 0 : 77
            isFilter1Checked = !isFilter1Checked
            // console.log("C is " + isCChecked)
            data.fwidth1 = !isFilter1Checked ? 0 : 48
            data.fwidth0 =
                data.fwidth1 + data.fwidth2 + data.fwidth3 == 0 ? 91 : 0
        },
    }
}

export const CheckBoxD2: Override = () => {
    return {
        onTap() {
            data.p2Height = !isFilter2Checked ? 0 : 77
            isFilter2Checked = !isFilter2Checked
            // console.log("C is " + isCChecked)
            data.fwidth2 = !isFilter2Checked ? 0 : 48
            data.fwidth0 =
                data.fwidth1 + data.fwidth2 + data.fwidth3 == 0 ? 91 : 0
        },
    }
}

export const CheckBoxD3: Override = () => {
    return {
        onTap() {
            data.p3Height = isFilter3Checked ? 0 : 77
            isFilter3Checked = !isFilter3Checked
            // console.log("C is " + isCChecked)
            data.fwidth3 = !isFilter3Checked ? 0 : 72
            data.fwidth0 =
                data.fwidth1 + data.fwidth2 + data.fwidth3 == 0 ? 91 : 0
        },
    }
}

// export const CheckBoxD4: Override = () => {
//     return {
//         onTap() {
//             data.p4Height = isFilter4Checked ? 0 : 77
//             isFilter4Checked = !isFilter4Checked
//             // console.log("C is " + isCChecked)
//             data.fwidth1 = !isFilter4Checked ? 0 : 67
//             data.fwidth0 =
//                 data.fwidth1 + data.fwidth2 + data.fwidth3 == 0 ? 91 : 0
//         },
//     }
// }

export const CheckedObjectP: Override = () => {
    return {
        animate: { height: data.pHeight },
        transition: { duration: 0 },
    }
}

export const CheckedObjectP2: Override = () => {
    return {
        animate: { height: data.p2Height },
        transition: { duration: 0 },
    }
}

export const CheckedFilter1: Override = () => {
    return {
        animate: { width: data.fwidth1 },
        transition: { duration: 0 },
    }
}

export const CheckedFilter2: Override = () => {
    return {
        animate: { width: data.fwidth2 },
        transition: { duration: 0 },
    }
}

export const CheckedFilter3: Override = () => {
    return {
        animate: { width: data.fwidth3 },
        transition: { duration: 0 },
    }
}

export const CheckedFilter4: Override = () => {
    return {
        animate: { width: data.fwidth4 },
        transition: { duration: 0 },
    }
}

export const CheckedFilter0: Override = () => {
    return {
        animate: { width: data.fwidth0 },
        transition: { duration: 0 },
    }
}

export const iconP1: Override = () => {
    return {
        visible: isFilter1Checked,
    }
}

export const iconP2: Override = () => {
    return {
        visible: isFilter2Checked,
    }
}
export const iconP3: Override = () => {
    return {
        visible: isFilter3Checked,
    }
}
export const iconP4: Override = () => {
    return {
        visible: isFilter4Checked,
    }
}
