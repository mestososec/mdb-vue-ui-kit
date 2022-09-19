declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            tag: string;
            wrap: boolean;
            white: boolean;
            isValidated: boolean;
            isValid: boolean;
            tooltipFeedback: boolean;
            formOutline: boolean;
            inputGroup: string | boolean;
            counter: boolean;
            maxlength: number;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            id: StringConstructor;
            label: StringConstructor;
            labelClass: StringConstructor;
            modelValue: (StringConstructor | DateConstructor | NumberConstructor)[];
            size: StringConstructor;
            formOutline: {
                type: BooleanConstructor;
                default: boolean;
            };
            wrapperClass: StringConstructor;
            inputGroup: {
                type: (BooleanConstructor | StringConstructor)[];
                default: boolean;
            };
            wrap: {
                type: BooleanConstructor;
                default: boolean;
            };
            formText: StringConstructor;
            white: BooleanConstructor;
            validationEvent: StringConstructor;
            isValidated: BooleanConstructor;
            isValid: BooleanConstructor;
            validFeedback: StringConstructor;
            invalidFeedback: StringConstructor;
            tooltipFeedback: {
                type: BooleanConstructor;
                default: boolean;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
            helper: StringConstructor;
            counter: BooleanConstructor;
            maxlength: {
                type: NumberConstructor;
                default: number;
            };
        }>> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
            "onOn-validate"?: (...args: any[]) => any;
            "onClick-outside"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "tag" | "wrap" | "white" | "isValidated" | "isValid" | "tooltipFeedback" | "formOutline" | "inputGroup" | "counter" | "maxlength">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: "update:modelValue" | "on-validate" | "click-outside", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            id: StringConstructor;
            label: StringConstructor;
            labelClass: StringConstructor;
            modelValue: (StringConstructor | DateConstructor | NumberConstructor)[];
            size: StringConstructor;
            formOutline: {
                type: BooleanConstructor;
                default: boolean;
            };
            wrapperClass: StringConstructor;
            inputGroup: {
                type: (BooleanConstructor | StringConstructor)[];
                default: boolean;
            };
            wrap: {
                type: BooleanConstructor;
                default: boolean;
            };
            formText: StringConstructor;
            white: BooleanConstructor;
            validationEvent: StringConstructor;
            isValidated: BooleanConstructor;
            isValid: BooleanConstructor;
            validFeedback: StringConstructor;
            invalidFeedback: StringConstructor;
            tooltipFeedback: {
                type: BooleanConstructor;
                default: boolean;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
            helper: StringConstructor;
            counter: BooleanConstructor;
            maxlength: {
                type: NumberConstructor;
                default: number;
            };
        }>> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
            "onOn-validate"?: (...args: any[]) => any;
            "onClick-outside"?: (...args: any[]) => any;
        }, {
            inputRef: import("vue").Ref<HTMLInputElement>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-validate" | "click-outside")[], string, {
            tag: string;
            wrap: boolean;
            white: boolean;
            isValidated: boolean;
            isValid: boolean;
            tooltipFeedback: boolean;
            formOutline: boolean;
            inputGroup: string | boolean;
            counter: boolean;
            maxlength: number;
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        id: StringConstructor;
        label: StringConstructor;
        labelClass: StringConstructor;
        modelValue: (StringConstructor | DateConstructor | NumberConstructor)[];
        size: StringConstructor;
        formOutline: {
            type: BooleanConstructor;
            default: boolean;
        };
        wrapperClass: StringConstructor;
        inputGroup: {
            type: (BooleanConstructor | StringConstructor)[];
            default: boolean;
        };
        wrap: {
            type: BooleanConstructor;
            default: boolean;
        };
        formText: StringConstructor;
        white: BooleanConstructor;
        validationEvent: StringConstructor;
        isValidated: BooleanConstructor;
        isValid: BooleanConstructor;
        validFeedback: StringConstructor;
        invalidFeedback: StringConstructor;
        tooltipFeedback: {
            type: BooleanConstructor;
            default: boolean;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
        helper: StringConstructor;
        counter: BooleanConstructor;
        maxlength: {
            type: NumberConstructor;
            default: number;
        };
    }>> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
        "onOn-validate"?: (...args: any[]) => any;
        "onClick-outside"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        inputRef: import("vue").Ref<HTMLInputElement>;
    }> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    id: StringConstructor;
    label: StringConstructor;
    labelClass: StringConstructor;
    modelValue: (StringConstructor | DateConstructor | NumberConstructor)[];
    size: StringConstructor;
    formOutline: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrapperClass: StringConstructor;
    inputGroup: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    wrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    formText: StringConstructor;
    white: BooleanConstructor;
    validationEvent: StringConstructor;
    isValidated: BooleanConstructor;
    isValid: BooleanConstructor;
    validFeedback: StringConstructor;
    invalidFeedback: StringConstructor;
    tooltipFeedback: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    helper: StringConstructor;
    counter: BooleanConstructor;
    maxlength: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    "onOn-validate"?: (...args: any[]) => any;
    "onClick-outside"?: (...args: any[]) => any;
}, {
    inputRef: import("vue").Ref<HTMLInputElement>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-validate" | "click-outside")[], "update:modelValue" | "on-validate" | "click-outside", {
    tag: string;
    wrap: boolean;
    white: boolean;
    isValidated: boolean;
    isValid: boolean;
    tooltipFeedback: boolean;
    formOutline: boolean;
    inputGroup: string | boolean;
    counter: boolean;
    maxlength: number;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
        prepend: (_: {}) => any;
    };
});
export default _default;