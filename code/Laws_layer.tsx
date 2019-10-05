import { Data, animate, Override, Animatable } from "framer"

const data = Data({
    currentTab: "layer_1",
    layer_1: true,
    layer_2: false,
    layer_3: false,
    layer_4: false,
    layer_5: false,
    notification_2: true,
    notification_1: true,
})

export const layer_1_btn: Override = props => {
    let tabOpacity = 0.5
    if (data.currentTab === null) data.currentTab = props.id
    if (data.currentTab === props.id) tabOpacity = 1
    return {
        opacity: tabOpacity,
        onTap() {
            data.layer_1 = true
            data.layer_2 = false
            data.layer_3 = false
            data.layer_4 = false
            data.layer_5 = false
            data.notification_2 = true
            data.notification_1 = true
            data.currentTab = props.id
        },
    }
}

export const layer_2_btn: Override = props => {
    let tabOpacity = 0.5
    if (data.currentTab === null) data.currentTab = props.id
    if (data.currentTab === props.id) tabOpacity = 1
    return {
        opacity: tabOpacity,
        onTap() {
            data.layer_1 = false
            data.layer_2 = true
            data.layer_3 = false
            data.layer_4 = false
            data.layer_5 = false
            data.notification_2 = false
            data.notification_1 = true
            data.currentTab = props.id
        },
    }
}

export const layer_3_btn: Override = props => {
    let tabOpacity = 0.5
    if (data.currentTab === null) data.currentTab = props.id
    if (data.currentTab === props.id) tabOpacity = 1
    return {
        opacity: tabOpacity,
        onTap() {
            data.layer_1 = false
            data.layer_2 = false
            data.layer_3 = true
            data.layer_4 = false
            data.layer_5 = false
            data.notification_2 = true
            data.notification_1 = true
            data.currentTab = props.id
        },
    }
}

export const layer_4_btn: Override = props => {
    let tabOpacity = 0.5
    if (data.currentTab === null) data.currentTab = props.id
    if (data.currentTab === props.id) tabOpacity = 1
    return {
        opacity: tabOpacity,
        onTap() {
            data.layer_1 = false
            data.layer_2 = false
            data.layer_3 = false
            data.layer_4 = true
            data.layer_5 = false
            data.notification_2 = true
            data.notification_1 = false
            data.currentTab = props.id
        },
    }
}

export const layer_5_btn: Override = props => {
    let tabOpacity = 0.5
    if (data.currentTab === null) data.currentTab = props.id
    if (data.currentTab === props.id) tabOpacity = 1
    return {
        opacity: tabOpacity,
        onTap() {
            data.layer_1 = false
            data.layer_2 = false
            data.layer_3 = false
            data.layer_4 = false
            data.layer_5 = true
            data.notification_2 = true
            data.notification_1 = true
            data.currentTab = props.id
        },
    }
}

export const layer_1_canvas: Override = () => {
    return {
        visible: data.layer_1,
    }
}

export const layer_2_canvas: Override = () => {
    return {
        visible: data.layer_2,
    }
}

export const layer_3_canvas: Override = () => {
    return {
        visible: data.layer_3,
    }
}

export const layer_4_canvas: Override = () => {
    return {
        visible: data.layer_4,
    }
}

export const layer_5_canvas: Override = () => {
    return {
        visible: data.layer_5,
    }
}

export const notification_1: Override = () => {
    return {
        visible: data.notification_1,
    }
}

export const notification_2: Override = () => {
    return {
        visible: data.notification_2,
    }
}
