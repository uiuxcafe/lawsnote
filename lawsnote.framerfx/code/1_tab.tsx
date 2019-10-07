import { Data, animate, Override } from "framer"

// Tab 切換 功能 + checkbox 功能
const data = Data({
    isTab1Selected: true,
    isTab2Selected: false,
    isTab3Selected: false,
    isTab4Selected: false,
    isTab5Selected: false,
    aWidth: 296,
    bWidth: 296,
    cWidth: 296,
    dWidth: 0,
    isAChecked: true,
    isBChecked: true,
    isCChecked: true,
    isDChecked: false,
    hideblock: false, // 隱藏 第三層 checkbox 區塊
    pHeight: 793,
    ABodyHeight_1: 30,
    ABodyHeight_2: 200,
    BBodyHeight_1: 30,
    BBodyHeight_2: 200,
    CBodyHeight_1: 30,
    CBodyHeight_2: 200,
    number_1: false,
    number_2: false,
    listnumber_1: false,
    listnumber_2: false,
})

// 以下是 checkBox 的功能
// let isFolded = false

export const bnTab1: Override = () => {
    return {
        onTap() {
            data.isTab1Selected = true
            data.isTab2Selected = false
            data.isTab3Selected = false
            data.isTab4Selected = false
            data.isTab5Selected = false
            // console.log("1 is " + data.isTab1Selected)
            data.isAChecked = true
            data.aWidth = 296
            data.isBChecked = true
            data.bWidth = 296
            data.isCChecked = true
            data.cWidth = 296
            data.isDChecked = false
            data.dWidth = 0
            data.hideblock = false
            data.ABodyHeight_1 = 30
            data.ABodyHeight_2 = 200
            data.BBodyHeight_1 = 30
            data.BBodyHeight_2 = 200
            data.CBodyHeight_1 = 30
            data.CBodyHeight_2 = 200
            ;(data.number_1 = false), (data.number_2 = false)
            data.listnumber_1 = false
            data.listnumber_2 = false
        },
    }
}
export const bnTab2: Override = () => {
    return {
        onTap() {
            data.isTab1Selected = false
            data.isTab2Selected = true
            data.isTab3Selected = false
            data.isTab4Selected = false
            data.isTab5Selected = false
            // console.log("2 is " + data.isTab2Selected)
            data.isAChecked = true
            data.aWidth = 296
            data.isBChecked = false
            data.bWidth = 0
            data.isCChecked = false
            data.cWidth = 0
            data.isDChecked = false
            data.dWidth = 0
            data.hideblock = true
            data.ABodyHeight_1 = 30
            data.ABodyHeight_2 = 200
            data.BBodyHeight_1 = 0
            data.BBodyHeight_2 = 0
            data.CBodyHeight_1 = 0
            data.CBodyHeight_2 = 0
            ;(data.number_1 = true), (data.number_2 = false)
            data.listnumber_1 = true
            data.listnumber_2 = false
        },
    }
}
export const bnTab3: Override = () => {
    return {
        onTap() {
            data.isTab1Selected = false
            data.isTab2Selected = false
            data.isTab3Selected = true
            data.isTab4Selected = false
            data.isTab5Selected = false
            // console.log("3 is " + data.isTab3Selected)
            data.isAChecked = false
            data.aWidth = 0
            data.isBChecked = true
            data.bWidth = 296
            data.isCChecked = false
            data.cWidth = 0
            data.isDChecked = false
            data.dWidth = 0
            data.hideblock = true
            data.ABodyHeight_1 = 30
            data.ABodyHeight_2 = 200
            data.BBodyHeight_1 = 30
            data.BBodyHeight_2 = 200
            data.CBodyHeight_1 = 0
            data.CBodyHeight_2 = 0
            ;(data.number_1 = false), (data.number_2 = true)
            data.listnumber_1 = false
            data.listnumber_2 = true
        },
    }
}
export const bnTab4: Override = () => {
    return {
        onTap() {
            data.isTab1Selected = false
            data.isTab2Selected = false
            data.isTab3Selected = false
            data.isTab4Selected = true
            data.isTab5Selected = false
            // console.log("4 is " + data.isTab4Selected)
            data.isAChecked = false
            data.aWidth = 0
            data.isBChecked = false
            data.bWidth = 0
            data.isCChecked = true
            data.cWidth = 296
            data.isDChecked = false
            data.dWidth = 0
            data.hideblock = true
            data.ABodyHeight_1 = 30
            data.ABodyHeight_2 = 200
            data.BBodyHeight_1 = 0
            data.BBodyHeight_2 = 0
            data.CBodyHeight_1 = 30
            data.CBodyHeight_2 = 200
            ;(data.number_1 = false), (data.number_2 = true)
            data.listnumber_1 = true
            data.listnumber_2 = false
        },
    }
}
export const bnTab5: Override = () => {
    return {
        onTap() {
            data.isTab1Selected = false
            data.isTab2Selected = false
            data.isTab3Selected = false
            data.isTab4Selected = false
            data.isTab5Selected = true
            // console.log("5 is " + data.isTab5Selected)
            data.isAChecked = false
            data.aWidth = 0
            data.isBChecked = false
            data.bWidth = 0
            data.isCChecked = false
            data.cWidth = 0
            data.isDChecked = true
            data.dWidth = 296
            data.hideblock = true
            data.ABodyHeight_1 = 30
            data.ABodyHeight_2 = 200
            data.BBodyHeight_1 = 30
            data.BBodyHeight_2 = 200
            data.CBodyHeight_1 = 30
            data.CBodyHeight_2 = 200
            ;(data.number_1 = false), (data.number_2 = true)
            data.listnumber_1 = false
            data.listnumber_2 = false
        },
    }
}

export const tab1: Override = () => {
    return {
        visible: data.isTab1Selected,
    }
}

export const tab2: Override = () => {
    return {
        visible: data.isTab2Selected,
    }
}

export const tab3: Override = () => {
    return {
        visible: data.isTab3Selected,
    }
}

export const tab4: Override = () => {
    return {
        visible: data.isTab4Selected,
    }
}
export const tab5: Override = () => {
    return {
        visible: data.isTab5Selected,
    }
}

export const hide: Override = () => {
    return {
        visible: data.hideblock,
    }
}

export const CheckBoxA: Override = () => {
    return {
        onTap() {
            data.aWidth = data.isAChecked ? 0 : 296
            data.isAChecked = !data.isAChecked
            // console.log("A is " + isAChecked)
        },
    }
}

export const CheckBoxB: Override = () => {
    return {
        onTap() {
            data.bWidth = data.isBChecked ? 0 : 296
            data.isBChecked = !data.isBChecked
            // console.log("B is " + isBChecked)
        },
    }
}

export const CheckBoxC: Override = () => {
    return {
        onTap() {
            data.cWidth = data.isCChecked ? 0 : 296
            data.isCChecked = !data.isCChecked
            // console.log("C is " + isCChecked)
        },
    }
}

export const CheckedObjectA: Override = () => {
    return {
        animate: { width: data.aWidth },
        transition: { duration: 0 },
    }
}

export const CheckedObjectB: Override = () => {
    return {
        animate: { width: data.bWidth },
        transition: { duration: 0 },
    }
}

export const CheckedObjectC: Override = () => {
    return {
        animate: { width: data.cWidth },
        transition: { duration: 0 },
    }
}

export const CheckedObjectD: Override = () => {
    return {
        animate: { width: data.dWidth },
        transition: { duration: 0 },
    }
}

export const ABody_1: Override = () => {
    return {
        animate: { height: data.ABodyHeight_1 },
        transition: {
            duration: 0,
        },
    }
}
export const ABody_2: Override = () => {
    return {
        animate: { height: data.ABodyHeight_2 },
        transition: {
            duration: 0,
        },
    }
}

export const BBody_1: Override = () => {
    return {
        animate: { height: data.BBodyHeight_1 },
        transition: {
            duration: 0,
        },
    }
}

export const BBody_2: Override = () => {
    return {
        animate: { height: data.BBodyHeight_2 },
        transition: {
            duration: 0,
        },
    }
}

export const CBody_1: Override = () => {
    return {
        animate: { height: data.CBodyHeight_1 },
        transition: {
            duration: 0,
        },
    }
}

export const CBody_2: Override = () => {
    return {
        animate: { height: data.CBodyHeight_2 },
        transition: {
            duration: 0,
        },
    }
}
// 卡片 數字
export const number1: Override = () => {
    return {
        visible: data.number_1,
    }
}

export const number2: Override = () => {
    return {
        visible: data.number_2,
    }
}
// 相關內規 數字
export const listnumber1: Override = () => {
    return {
        visible: data.listnumber_1,
    }
}

export const listnumber2: Override = () => {
    return {
        visible: data.listnumber_2,
    }
}

export const iconA: Override = () => {
    return {
        visible: data.isAChecked,
    }
}

export const iconB: Override = () => {
    return {
        visible: data.isBChecked,
    }
}

export const iconC: Override = () => {
    return {
        visible: data.isCChecked,
    }
}

export const iconD: Override = () => {
    return {
        visible: data.isDChecked,
    }
}

// 以下是 Filter 功能

// import { Data, animate, Override } from "framer"

// const data = Data({
//     pHeight: 793,
// })

let isFilter1Checked = false
let isFilter2Checked = false
let isFilter3Checked = false
let isFilter4Checked = false

export const CheckBoxD1: Override = () => {
    return {
        onTap() {
            data.pHeight = isFilter1Checked ? 0 : 793
            isFilter1Checked = !isFilter1Checked
            // console.log("C is " + isCChecked)
        },
    }
}

export const CheckBoxD2: Override = () => {
    return {
        onTap() {
            data.pHeight = isFilter2Checked ? 0 : 793
            isFilter2Checked = !isFilter2Checked
            // console.log("C is " + isCChecked)
        },
    }
}

export const CheckBoxD3: Override = () => {
    return {
        onTap() {
            data.pHeight = isFilter3Checked ? 0 : 793
            isFilter3Checked = !isFilter3Checked
            // console.log("C is " + isCChecked)
        },
    }
}

export const CheckBoxD4: Override = () => {
    return {
        onTap() {
            data.pHeight = isFilter4Checked ? 0 : 793
            isFilter4Checked = !isFilter4Checked
            // console.log("C is " + isCChecked)
        },
    }
}

// export const CheckedObjectP: Override = () => {
//     return {
//         animate: { Height: data.pHeight },
//         transition: { duration: 0 },
//     }
// }

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

// export const otherMenu: Override = () => {
//     return {
//         animate: { top: data.otherMenuTop },
//         transition: {
//             duration: 0,
//         },
//     }
// }
