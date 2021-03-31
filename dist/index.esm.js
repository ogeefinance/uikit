import React, { isValidElement, cloneElement, Children, useRef, useEffect, useState, useMemo, useReducer, useCallback, createContext, useContext } from 'react';
import styled, { keyframes, css, useTheme, createGlobalStyle } from 'styled-components';
import { space, typography, variant as variant$1, layout, background, border, position, flexbox } from 'styled-system';
import get from 'lodash/get';
import noop from 'lodash/noop';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import { Link as Link$1, NavLink, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) { return get(theme, path, fallback); }; };

var rotate = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled.svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1, templateObject_2, templateObject_3;

var Icon = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$2 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$3 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, space, typography);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$1;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var scales = {
    MD: "md",
    SM: "sm",
    XS: "xs",
};
var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var _a, _b;
var scaleVariants = (_a = {},
    _a[scales.MD] = {
        height: "48px",
        padding: "0 24px",
    },
    _a[scales.SM] = {
        height: "32px",
        padding: "0 16px",
    },
    _a[scales.XS] = {
        height: "20px",
        fontSize: "12px",
        padding: "0 8px",
    },
    _a);
var styleVariants = (_b = {},
    _b[variants.PRIMARY] = {
        backgroundColor: "primary",
        color: "white",
    },
    _b[variants.SECONDARY] = {
        backgroundColor: "transparent",
        border: "2px solid",
        borderColor: "primary",
        boxShadow: "none",
        color: "primary",
        ":disabled": {
            backgroundColor: "transparent",
        },
    },
    _b[variants.TERTIARY] = {
        backgroundColor: "tertiary",
        boxShadow: "none",
        color: "primary",
    },
    _b[variants.SUBTLE] = {
        backgroundColor: "textSubtle",
        color: "white",
    },
    _b[variants.DANGER] = {
        backgroundColor: "failure",
        color: "white",
    },
    _b[variants.SUCCESS] = {
        backgroundColor: "success",
        color: "white",
    },
    _b[variants.TEXT] = {
        backgroundColor: "transparent",
        color: "primary",
        boxShadow: "none",
    },
    _b);

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.ogeefinance-button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.ogeefinance-button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
var getOpacity = function (_a) {
    var _b = _a.$isLoading, $isLoading = _b === void 0 ? false : _b;
    return $isLoading ? ".5" : "1";
};
var StyledButton = styled.button(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  border-radius: 24px;\n  box-shadow: rgba(75, 75, 88 , 0.2) 0px 2px 20px 0px, rgba(14, 14, 19, 0.1) 0px 2px 10px 0px;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s;\n\n  &:hover:not(:disabled):not(.ogeefinance-button--disabled):not(.ogeefinance-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.ogeefinance-button--disabled):not(.ogeefinance-button--disabled) {\n    opacity: 0.85;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  border: 0;\n  border-radius: 24px;\n  box-shadow: rgba(75, 75, 88 , 0.2) 0px 2px 20px 0px, rgba(14, 14, 19, 0.1) 0px 2px 10px 0px;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s;\n\n  &:hover:not(:disabled):not(.ogeefinance-button--disabled):not(.ogeefinance-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.ogeefinance-button--disabled):not(.ogeefinance-button--disabled) {\n    opacity: 0.85;\n  }\n\n  ", "\n  ",
    "\n  ",
    "\n  ", "\n  ", "\n"])), getOpacity, getDisabledStyles, variant$1({
    prop: "scale",
    variants: scaleVariants,
}), variant$1({
    variants: styleVariants,
}), layout, space);
var templateObject_1$2;

var Button = function (props) {
    var startIcon = props.startIcon, endIcon = props.endIcon, external = props.external, className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, rest = __rest(props, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    var classNames = className ? [className] : [];
    if (isLoading) {
        classNames.push("ogeefinance-button--loading");
    }
    if (isDisabled && !isLoading) {
        classNames.push("ogeefinance-button--disabled");
    }
    return (React.createElement(StyledButton, __assign({ "$isLoading": isLoading, className: classNames.join(" "), disabled: isDisabled }, internalProps, rest),
        React.createElement(React.Fragment, null,
            isValidElement(startIcon) &&
                cloneElement(startIcon, {
                    mr: "0.5rem",
                }),
            children,
            isValidElement(endIcon) &&
                cloneElement(endIcon, {
                    ml: "0.5rem",
                }))));
};
Button.defaultProps = {
    isLoading: false,
    external: false,
    variant: variants.PRIMARY,
    scale: scales.MD,
    disabled: false,
};

var IconButton = styled(Button)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return (scale === "sm" ? "32px" : "48px");
});
var templateObject_1$3;

var Icon$4 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$5 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$6 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$7 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$8 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$9 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" })));
};

var Icon$a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z" })));
};

var Icon$b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$c = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("path", { d: "M128,64a63.85,63.85,0,0,1-6.63,28.41.25.25,0,0,0,0,.07A64,64,0,0,1,64,128H64A64,64,0,0,1,6.67,92.48a.25.25,0,0,0,0-.07A64,64,0,0,1,64,0H64A64,64,0,0,1,128,64Z", fill: "#282e5b" }),
        React.createElement("path", { d: "M73.79,45.54c0-13.76-6.63-25.62-11.71-29.5,0,0-.35-.21-.35.35C61.3,43,47.82,50.26,40.34,59.93c-17.14,22.44-1.2,47,15,51.52,9.1,2.54-2.12-4.52-3.53-19.34-1.7-18,21.94-31.68,21.94-46.57", fill: "#fff" }),
        React.createElement("path", { d: "M82.68,54.64a.31.31,0,0,0-.35,0l-.07.07c-.28,3.32-4,10.51-8.54,17.08-15.59,22.3-6.7,33-1.69,38.81,2.89,3.39,0,0,7.27-3.46.56-.28,14.11-7.48,15.59-23.78,1.48-15.88-8.61-25.83-12.21-28.72", fill: "#fff" })));
};

var Icon$d = function (props) {
    var theme = useTheme();
    theme.isDark ? "#3C3742" : "#e9eaeb";
    theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("defs", null,
            React.createElement("mask", { id: "mask", x: "3.33", y: "3.33", width: "57.33", height: "57.33", maskUnits: "userSpaceOnUse" },
                React.createElement("g", { transform: "translate(0 0)" },
                    React.createElement("g", { id: "A" },
                        React.createElement("path", { d: "M60.67,32A28.67,28.67,0,1,1,32,3.33,28.68,28.68,0,0,1,60.67,32Z", fill: "#c4c4c4" }))))),
        React.createElement("circle", { cx: "32", cy: "32", r: "32", fill: "#cbcbd1" }),
        React.createElement("path", { d: "M60,32A28,28,0,1,1,32,4,28,28,0,0,1,60,32Z", transform: "translate(0 0)", fill: "#ededef" }),
        React.createElement("g", { mask: "url(#mask)" },
            React.createElement("g", null,
                React.createElement("g", null,
                    React.createElement("path", { id: "C", d: "M28.52,50.92c0,2.06-1.11,3.73-2.48,3.73S23.55,53,23.55,50.92s1.11-3.73,2.49-3.73S28.52,48.86,28.52,50.92Z", transform: "translate(0 0)", fill: "#cbcbd1" }),
                    React.createElement("path", { d: "M39.3,50.92c0,2.06-1.11,3.73-2.48,3.73S34.33,53,34.33,50.92s1.12-3.73,2.49-3.73S39.3,48.86,39.3,50.92Z", transform: "translate(0 0)", fill: "#cbcbd1" }),
                    React.createElement("path", { d: "M30.36,17.76v-.44a3,3,0,0,1,.37-1.53,6,6,0,0,1,1-1.22,10.94,10.94,0,0,1,1.17-1,4.41,4.41,0,0,0,.94-.87,1.63,1.63,0,0,0,.37-1.08,1.36,1.36,0,0,0-.64-1.26A4.14,4.14,0,0,0,31.51,10a7.62,7.62,0,0,0-1.9.25,7,7,0,0,0-1.61.6V7.73a9.38,9.38,0,0,1,2-.66,11.87,11.87,0,0,1,2.54-.26A6.16,6.16,0,0,1,36.6,8,3.89,3.89,0,0,1,38,11.15a3.76,3.76,0,0,1-.53,2.09,7.75,7.75,0,0,1-1.53,1.6l-1.43,1.23a1.76,1.76,0,0,0-.57,1.38v.3H30.36Zm-.16,4.06V19.16h3.88v2.66Z", transform: "translate(0 0)", fill: "#cbcbd1" })),
                React.createElement("path", { d: "M56,54.7V55H52.66l-3.16,0h-.37v-.36a9.93,9.93,0,0,0-.69-3.49,9.49,9.49,0,0,0-1.77-2.94,9.94,9.94,0,0,0-3.54-2.51,30.57,30.57,0,0,1-6.41-3.48A21.09,21.09,0,0,1,32,37.38a20.87,20.87,0,0,1-4.74,4.93,30.09,30.09,0,0,1-6.41,3.49,9.94,9.94,0,0,0-3.54,2.51,9.56,9.56,0,0,0-1.77,2.93,10,10,0,0,0-.69,3.5v.36H14.5l-3.16,0H8v-.34a16.9,16.9,0,0,1,2.82-9.42,14.73,14.73,0,0,1,7.24-6,17.68,17.68,0,0,0,3.57-1.76,17,17,0,0,0,2.49-2,13.78,13.78,0,0,0,1.94-2.28L32,23.1l5.94,10.21a13.78,13.78,0,0,0,1.94,2.28,17,17,0,0,0,2.49,2,17.68,17.68,0,0,0,3.57,1.76,14.78,14.78,0,0,1,7.24,6A16.9,16.9,0,0,1,56,54.7Z", transform: "translate(0 0)", fill: "#cbcbd1" })))));
};

var Icon$e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.0967 17.8521L7.87565 20.2891C6.91907 20.8414 5.69589 20.5136 5.1436 19.557L0.999729 12.3796C0.447444 11.4231 0.775193 10.1999 1.73178 9.64759L6.31754 7C6.53486 6.87453 6.76593 6.79448 6.99977 6.75691V6C6.99977 4.89543 7.8952 4 8.99977 4H14.9998C16.1043 4 16.9998 4.89543 16.9998 6V6.73545C17.299 6.75379 17.5986 6.83993 17.8759 7L22.4616 9.64759C23.4182 10.1999 23.746 11.4231 23.1937 12.3796L19.0498 19.557C18.4975 20.5136 17.2743 20.8414 16.3178 20.2891L12.0967 17.8521ZM8.99977 6L14.9998 6L14.9998 7.98154L11.2363 14.5H8.99977L8.99977 6ZM6.99977 14.5L6.99977 8.91551L2.73178 11.3796L6.87565 18.557L10.4386 16.5H8.99977C7.8952 16.5 6.99977 15.6046 6.99977 14.5ZM16.8759 8.73205L21.4616 11.3796L17.3178 18.557L12.732 15.9094L16.8759 8.73205Z" })));
};

var Icon$f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" }),
        React.createElement("path", { d: "M11.25 7.72H6.25V9.22H11.25V7.72Z" }),
        React.createElement("path", { d: "M18 15.75H13V17.25H18V15.75Z" }),
        React.createElement("path", { d: "M18 13.25H13V14.75H18V13.25Z" }),
        React.createElement("path", { d: "M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z" }),
        React.createElement("path", { d: "M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z" })));
};

var Icon$h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React.createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$k = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$l = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$o = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$p = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 18" }, props),
        React.createElement("path", { d: "M16 2H14C14 0.895431 13.1046 0 12 0H6C4.89543 0 4 0.895431 4 2H2C0.9 2 0 2.9 0 4V5C0 7.55 1.92 9.63 4.39 9.94C5.02 11.44 6.37 12.57 8 12.9V16H5C4.44772 16 4 16.4477 4 17C4 17.5523 4.44772 18 5 18H13C13.5523 18 14 17.5523 14 17C14 16.4477 13.5523 16 13 16H10V12.9C11.63 12.57 12.98 11.44 13.61 9.94C16.08 9.63 18 7.55 18 5V4C18 2.9 17.1 2 16 2ZM2 5V4H4V7.82C2.84 7.4 2 6.3 2 5ZM9 11C7.35 11 6 9.65 6 8V2H12V8C12 9.65 10.65 11 9 11ZM16 5C16 6.3 15.16 7.4 14 7.82V4H16V5Z" })));
};

var Icon$r = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$s = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" })));
};

var Icon$t = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z" })));
};

var Icon$u = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M4.68179 7.04592C5.06573 7.78505 5.47899 8.47752 5.91436 9.12605C4.76866 8.20293 3.15483 7.94918 1.72791 8.60664L0.865295 9.00408L0.949991 9.1879C1.87444 11.1943 4.25037 12.0714 6.25678 11.147L7.1194 10.7495C7.7588 11.5306 8.42708 12.2337 9.10661 12.8671C7.54917 12.0868 5.60297 12.3946 4.36752 13.7424L4.07604 14.0604L5.17158 15.0646C6.8001 16.5573 9.33037 16.4472 10.8231 14.8187L11.0984 14.5183C11.8534 15.0744 12.6001 15.5528 13.3138 15.9628C13.5418 16.0939 13.7667 16.218 13.9874 16.3354C12.2933 15.9571 10.485 16.7202 9.6092 18.3189L9.47337 18.5669L10.514 19.137C12.4515 20.1983 14.8825 19.4881 15.9439 17.5507L16.0715 17.3177C16.4836 17.4877 16.862 17.6297 17.1977 17.747C17.6961 17.9213 18.1016 18.0417 18.3855 18.1191L18.8453 18.2339C19.2507 18.3192 19.6484 18.0598 19.7338 17.6545C19.819 17.2494 19.56 16.8519 19.1551 16.7662L19.1524 16.7657C19.1551 16.7662 19.0729 16.7518 18.7802 16.6719C18.527 16.6029 18.1551 16.4928 17.6927 16.3311C17.1224 16.1317 16.416 15.8546 15.6253 15.4802L15.9997 14.8317C17.1043 12.9186 16.4488 10.4722 14.5356 9.36762L13.8989 9.00001L13.4324 9.80801C12.4895 11.4411 12.8291 13.4627 14.1387 14.7066C14.1128 14.6919 14.0869 14.6771 14.0609 14.6622C12.797 13.9361 11.4285 12.9847 10.1078 11.7498L10.5391 11.324C12.1111 9.77192 12.1274 7.23931 10.5753 5.66723L9.93826 5.02195L9.41242 5.5411C8.11055 6.82638 7.87565 8.78411 8.71479 10.3119C7.73795 9.1976 6.82187 7.90232 6.03634 6.39938C7.08943 4.4961 6.42732 2.09216 4.53566 1.00001L3.4039 0.346588L2.82248 1.35364C1.71791 3.26682 2.37341 5.71318 4.28658 6.81775L4.68179 7.04592Z" })));
};

var Icon$v = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M15.3182 7.04592C14.9343 7.78505 14.521 8.47752 14.0856 9.12605C15.2313 8.20293 16.8452 7.94918 18.2721 8.60664L19.1347 9.00408L19.05 9.1879C18.1256 11.1943 15.7496 12.0714 13.7432 11.147L12.8806 10.7495C12.2412 11.5306 11.5729 12.2337 10.8934 12.8671C12.4508 12.0868 14.397 12.3946 15.6325 13.7424L15.924 14.0604L14.8284 15.0646C13.1999 16.5573 10.6696 16.4472 9.17692 14.8187L8.90162 14.5183C8.1466 15.0744 7.39992 15.5528 6.68625 15.9628C6.45816 16.0939 6.23335 16.218 6.01259 16.3354C7.70668 15.9571 9.51501 16.7202 10.3908 18.3189L10.5266 18.5669L9.486 19.137C7.54854 20.1983 5.11749 19.4881 4.05611 17.5507L3.92849 17.3177C3.51637 17.4877 3.13804 17.6297 2.80235 17.747C2.30389 17.9213 1.89839 18.0417 1.61448 18.1191L1.15466 18.2339C0.749332 18.3192 0.351572 18.0598 0.26624 17.6545C0.180958 17.2494 0.440012 16.8519 0.844932 16.7662L0.847556 16.7657C0.844932 16.7662 0.927067 16.7518 1.21981 16.6719C1.47301 16.6029 1.84485 16.4928 2.30733 16.3311C2.87756 16.1317 3.58397 15.8546 4.3747 15.4802L4.0003 14.8317C2.89573 12.9186 3.55123 10.4722 5.4644 9.36762L6.10112 9.00001L6.56763 9.80801C7.51049 11.4411 7.1709 13.4627 5.86133 14.7066C5.88719 14.6919 5.9131 14.6771 5.93906 14.6622C7.20296 13.9361 8.57146 12.9847 9.89223 11.7498L9.46094 11.324C7.88886 9.77192 7.87263 7.23931 9.42468 5.66723L10.0617 5.02195L10.5876 5.5411C11.8895 6.82638 12.1243 8.78411 11.2852 10.3119C12.2621 9.1976 13.1781 7.90232 13.9637 6.39938C12.9106 4.4961 13.5727 2.09216 15.4643 1.00001L16.5961 0.346588L17.1775 1.35364C18.2821 3.26682 17.6266 5.71318 15.7134 6.81775L15.3182 7.04592Z" })));
};

var Icon$w = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$x = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("path", { d: "M128,95.59l0,.93h-8.9l-8.42,0h-1l0-1a26.73,26.73,0,0,0-1.84-9.3,25.45,25.45,0,0,0-4.73-7.83A26.3,26.3,0,0,0,93.7,71.8c-7.54-3.24-12.65-6-17.09-9.31A56.1,56.1,0,0,1,64,49.42,56.53,56.53,0,0,1,51.39,62.57c-4.44,3.29-9.55,6.07-17.09,9.3a26.44,26.44,0,0,0-9.44,6.69,25.4,25.4,0,0,0-4.73,7.82,26.8,26.8,0,0,0-1.84,9.31l0,1h-1l-8.42,0H0l0-.92A45.27,45.27,0,0,1,7.52,70.55c5-7.61,11.83-13.25,19.3-15.89A45.29,45.29,0,0,0,36.34,50,45.69,45.69,0,0,0,43,44.71a35.72,35.72,0,0,0,5.17-6.08L64,11.33,79.85,38.55A34.61,34.61,0,0,0,85,44.63a45,45,0,0,0,6.64,5.26,44.81,44.81,0,0,0,9.52,4.69c7.47,2.64,14.33,8.28,19.3,15.89A45.27,45.27,0,0,1,128,95.59Z", transform: "translate(0 -11.33)", fill: "#4444c6" })));
};

var Icon$y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "New_Gradient_Swatch_3", "data-name": "New Gradient Swatch 3", x1: "96.01", y1: "119.43", x2: "31.99", y2: "8.57", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { offset: "0", "stop-color": "#76a4ff" }),
                React.createElement("stop", { offset: "1", "stop-color": "#d7e7ff" })),
            React.createElement("linearGradient", { id: "linear-gradient", x1: "92.8", y1: "113.89", x2: "35.2", y2: "14.11", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { offset: "0", "stop-color": "#9fc2ff" }),
                React.createElement("stop", { offset: "1", "stop-color": "#d7e7ff" }))),
        React.createElement("circle", { cx: "64", cy: "64", r: "64", fill: "url(#New_Gradient_Swatch_3)" }),
        React.createElement("path", { d: "M121.6,64a57.43,57.43,0,0,1-6,25.57l0,.06A57.61,57.61,0,0,1,64,121.6H64a57.61,57.61,0,0,1-51.57-32l0-.06A57.63,57.63,0,0,1,64,6.4H64A57.6,57.6,0,0,1,121.6,64Z", fill: "url(#linear-gradient)" }),
        React.createElement("path", { d: "M112,88.79v.7h-.7c-3.93,0-5.06,0-5.49,0h-.49l-6.32,0h-.73l0-.73a20.2,20.2,0,0,0-1.38-7A19.06,19.06,0,0,0,93.36,76a19.77,19.77,0,0,0-7.09-5,61.7,61.7,0,0,1-12.81-7A41.94,41.94,0,0,1,64,54.16,42.39,42.39,0,0,1,54.54,64a61.26,61.26,0,0,1-12.81,7,19.8,19.8,0,0,0-7.09,5,18.87,18.87,0,0,0-3.54,5.87,20.2,20.2,0,0,0-1.38,7l0,.73H29l-6.32,0H16v-.7A34,34,0,0,1,21.64,70,29.56,29.56,0,0,1,36.12,58.09a34.47,34.47,0,0,0,7.13-3.51,34,34,0,0,0,5-3.95,26.11,26.11,0,0,0,3.88-4.56L64,25.6,75.89,46a26.11,26.11,0,0,0,3.88,4.56A33.63,33.63,0,0,0,91.88,58,29.61,29.61,0,0,1,106.36,70,34,34,0,0,1,112,88.79Z", fill: "#4444c6" }),
        React.createElement("path", { d: "M115.63,89.57l0,.06H12.4l0-.06Z", fill: "#4444c6" }),
        React.createElement("rect", { x: "63.97", y: "6.4", width: "0.06", height: "115.2", fill: "#4444c6" })));
};

var Icon$z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 35 33" }, props),
        React.createElement("path", { d: "m32.9582 1-13.1341 9.7183 2.4424-5.72731z", fill: "#e17726", stroke: "#e17726" }),
        React.createElement("g", { fill: "#e27625", stroke: "#e27625" },
            React.createElement("path", { d: "m2.66296 1 13.01714 9.809-2.3254-5.81802z" }),
            React.createElement("path", { d: "m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z" }),
            React.createElement("path", { d: "m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z" }),
            React.createElement("path", { d: "m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z" }),
            React.createElement("path", { d: "m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z" }),
            React.createElement("path", { d: "m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z" }),
            React.createElement("path", { d: "m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z" })),
        React.createElement("path", { d: "m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React.createElement("path", { d: "m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React.createElement("path", { d: "m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z", fill: "#233447", stroke: "#233447" }),
        React.createElement("path", { d: "m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z", fill: "#233447", stroke: "#233447" }),
        React.createElement("path", { d: "m10.8733 28.8721.6495-5.3386-4.13117.1167z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m24.0982 23.5335.6366 5.3386 3.4946-5.2219z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m8.392 17.6507 3.1049 6.0513-.1039-3.0062z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z", fill: "#c0ac9d", stroke: "#c0ac9d" }),
        React.createElement("path", { d: "m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z", fill: "#161616", stroke: "#161616" }),
        React.createElement("path", { d: "m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z", fill: "#763e1a", stroke: "#763e1a" }),
        React.createElement("path", { d: "m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z", fill: "#763e1a", stroke: "#763e1a" }),
        React.createElement("path", { d: "m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z", fill: "#f5841f", stroke: "#f5841f" })));
};

var Icon$A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$B = function (props) {
    var theme = useTheme();
    theme.isDark ? "#3C3742" : "#e9eaeb";
    theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("defs", null,
            React.createElement("mask", { id: "mask", x: "3.33", y: "5.33", width: "57.33", height: "57.33", maskUnits: "userSpaceOnUse" },
                React.createElement("g", { transform: "translate(0 0)" },
                    React.createElement("g", { id: "A" },
                        React.createElement("path", { d: "M60.67,34A28.67,28.67,0,1,1,32,5.33,28.68,28.68,0,0,1,60.67,34Z", fill: "#c4c4c4" }))))),
        React.createElement("circle", { cx: "32", cy: "32", r: "32", fill: "#cbcbd1" }),
        React.createElement("path", { d: "M60,32A28,28,0,1,1,32,4,28,28,0,0,1,60,32Z", transform: "translate(0 0)", fill: "#ededef" }),
        React.createElement("g", { mask: "url(#mask)" },
            React.createElement("g", null,
                React.createElement("path", { id: "C", d: "M29.09,41.27C29.09,43.33,28,45,26.61,45s-2.49-1.67-2.49-3.73,1.12-3.73,2.49-3.73S29.09,39.21,29.09,41.27Z", transform: "translate(0 0)", fill: "#4444c6" }),
                React.createElement("path", { d: "M39.88,41.27c0,2.06-1.12,3.73-2.49,3.73s-2.49-1.67-2.49-3.73,1.12-3.73,2.49-3.73S39.88,39.21,39.88,41.27Z", transform: "translate(0 0)", fill: "#4444c6" }),
                React.createElement("path", { d: "M56,44.6v.34H52.66L49.5,45h-.37V44.6a10,10,0,0,0-.69-3.49,9.56,9.56,0,0,0-1.77-2.93,9.94,9.94,0,0,0-3.54-2.51,30.09,30.09,0,0,1-6.41-3.49A20.84,20.84,0,0,1,32,27.28a20.87,20.87,0,0,1-4.74,4.93,30.09,30.09,0,0,1-6.41,3.49,9.94,9.94,0,0,0-3.54,2.51,9.56,9.56,0,0,0-1.77,2.93,10,10,0,0,0-.69,3.49V45H14.5l-3.16,0H8v-.34a16.9,16.9,0,0,1,2.82-9.42,14.73,14.73,0,0,1,7.24-6,17.68,17.68,0,0,0,3.57-1.76,16.4,16.4,0,0,0,2.49-2,13.51,13.51,0,0,0,1.94-2.27L32,13l5.94,10.21a13.78,13.78,0,0,0,1.94,2.28,17,17,0,0,0,2.49,2,17.68,17.68,0,0,0,3.57,1.76,14.73,14.73,0,0,1,7.24,6A16.9,16.9,0,0,1,56,44.6Z", transform: "translate(0 0)", fill: "#4444c6" })))));
};

var Icon$C = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$D = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("path", { d: "M128,95.59l0,.93h-8.9l-8.42,0h-1l0-1a26.73,26.73,0,0,0-1.84-9.3,25.45,25.45,0,0,0-4.73-7.83A26.3,26.3,0,0,0,93.7,71.8c-7.54-3.24-12.65-6-17.09-9.31A56.1,56.1,0,0,1,64,49.42,56.53,56.53,0,0,1,51.39,62.57c-4.44,3.29-9.55,6.07-17.09,9.3a26.44,26.44,0,0,0-9.44,6.69,25.4,25.4,0,0,0-4.73,7.82,26.8,26.8,0,0,0-1.84,9.31l0,1h-1l-8.42,0H0l0-.92A45.27,45.27,0,0,1,7.52,70.55c5-7.61,11.83-13.25,19.3-15.89A45.29,45.29,0,0,0,36.34,50,45.69,45.69,0,0,0,43,44.71a35.72,35.72,0,0,0,5.17-6.08L64,11.33,79.85,38.55A34.61,34.61,0,0,0,85,44.63a45,45,0,0,0,6.64,5.26,44.81,44.81,0,0,0,9.52,4.69c7.47,2.64,14.33,8.28,19.3,15.89A45.27,45.27,0,0,1,128,95.59Z", transform: "translate(0 -11.33)", fill: "#4444c6" })));
};

var Icon$E = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "New_Gradient_Swatch_3", "data-name": "New Gradient Swatch 3", x1: "96.01", y1: "119.43", x2: "31.99", y2: "8.57", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { offset: "0", "stop-color": "#76a4ff" }),
                React.createElement("stop", { offset: "1", "stop-color": "#d7e7ff" })),
            React.createElement("linearGradient", { id: "linear-gradient", x1: "92.8", y1: "113.89", x2: "35.2", y2: "14.11", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { offset: "0", "stop-color": "#9fc2ff" }),
                React.createElement("stop", { offset: "1", "stop-color": "#d7e7ff" }))),
        React.createElement("circle", { cx: "64", cy: "64", r: "64", fill: "url(#New_Gradient_Swatch_3)" }),
        React.createElement("path", { d: "M121.6,64a57.43,57.43,0,0,1-6,25.57l0,.06A57.61,57.61,0,0,1,64,121.6H64a57.61,57.61,0,0,1-51.57-32l0-.06A57.63,57.63,0,0,1,64,6.4H64A57.6,57.6,0,0,1,121.6,64Z", fill: "url(#linear-gradient)" }),
        React.createElement("path", { d: "M112,88.79v.7h-.7c-3.93,0-5.06,0-5.49,0h-.49l-6.32,0h-.73l0-.73a20.2,20.2,0,0,0-1.38-7A19.06,19.06,0,0,0,93.36,76a19.77,19.77,0,0,0-7.09-5,61.7,61.7,0,0,1-12.81-7A41.94,41.94,0,0,1,64,54.16,42.39,42.39,0,0,1,54.54,64a61.26,61.26,0,0,1-12.81,7,19.8,19.8,0,0,0-7.09,5,18.87,18.87,0,0,0-3.54,5.87,20.2,20.2,0,0,0-1.38,7l0,.73H29l-6.32,0H16v-.7A34,34,0,0,1,21.64,70,29.56,29.56,0,0,1,36.12,58.09a34.47,34.47,0,0,0,7.13-3.51,34,34,0,0,0,5-3.95,26.11,26.11,0,0,0,3.88-4.56L64,25.6,75.89,46a26.11,26.11,0,0,0,3.88,4.56A33.63,33.63,0,0,0,91.88,58,29.61,29.61,0,0,1,106.36,70,34,34,0,0,1,112,88.79Z", fill: "#4444c6" }),
        React.createElement("path", { d: "M115.63,89.57l0,.06H12.4l0-.06Z", fill: "#4444c6" }),
        React.createElement("rect", { x: "63.97", y: "6.4", width: "0.06", height: "115.2", fill: "#4444c6" })));
};

var Icon$F = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9 14.7902C9 15.555 9.82366 16.0367 10.4903 15.6617L15.4505 12.8716C16.1302 12.4893 16.1302 11.5107 15.4505 11.1284L10.4903 8.33827C9.82366 7.96331 9 8.44502 9 9.20985V14.7902ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$G = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 19 23" }, props),
        React.createElement("path", { d: "M1.18731 5.68438C0.449932 5.52604 0.449934 4.47393 1.18731 4.31559L3.3203 3.85755C3.58957 3.79973 3.79991 3.58939 3.85774 3.32012L4.31577 1.18713C4.47411 0.449748 5.52622 0.449751 5.68457 1.18713L6.1426 3.32012C6.20042 3.58939 6.41076 3.79973 6.68003 3.85755L8.81302 4.31559C9.5504 4.47393 9.5504 5.52604 8.81302 5.68438L6.68003 6.14241C6.41076 6.20024 6.20042 6.41058 6.1426 6.67985L5.68457 8.81284C5.52622 9.55022 4.47411 9.55022 4.31577 8.81284L3.85774 6.67985C3.79991 6.41058 3.58957 6.20024 3.3203 6.14241L1.18731 5.68438Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10 2.99998C13.866 2.99998 17 6.13399 17 9.99998C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 9.99998C3 9.4477 2.55228 8.99998 2 8.99998C1.44772 8.99998 1 9.4477 1 9.99998C1 12.8894 2.36163 15.4608 4.47822 17.1075L3.58579 18C3.21071 18.3751 3 18.8838 3 19.4142V21.5C3 22.3284 3.67157 23 4.5 23H15.5C16.3284 23 17 22.3284 17 21.5V19.4142C17 18.8838 16.7893 18.3751 16.4142 18L15.5218 17.1075C17.6384 15.4608 19 12.8894 19 9.99998C19 5.02942 14.9706 0.999985 10 0.999985C9.44771 0.999985 9 1.4477 9 1.99998C9 2.55227 9.44771 2.99998 10 2.99998ZM10 19C8.6564 19 7.38156 18.7056 6.23649 18.1777L5 19.4142L5 21H15V19.4142L13.7635 18.1777C12.6184 18.7056 11.3436 19 10 19Z" })));
};

var Icon$H = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$I = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$J = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$K = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("path", { id: "C", d: "M28.13,48.36c0,2.75-1.49,5-3.32,5s-3.31-2.22-3.31-5,1.48-5,3.31-5S28.13,45.61,28.13,48.36Z", transform: "translate(0 -10.67)", fill: "#4444c6" }),
        React.createElement("path", { d: "M42.5,48.36c0,2.75-1.48,5-3.31,5s-3.32-2.22-3.32-5,1.49-5,3.32-5S42.5,45.61,42.5,48.36Z", transform: "translate(0 -10.67)", fill: "#4444c6" }),
        React.createElement("path", { d: "M64,52.79v.47H59.54l-4.21,0h-.49v-.49a13.53,13.53,0,0,0-.91-4.66,12.83,12.83,0,0,0-2.37-3.91,13.09,13.09,0,0,0-4.72-3.34,41,41,0,0,1-8.54-4.65A28.31,28.31,0,0,1,32,29.71a27.74,27.74,0,0,1-6.32,6.57,40.49,40.49,0,0,1-8.54,4.66,13.09,13.09,0,0,0-4.72,3.34,12.71,12.71,0,0,0-2.37,3.91,13.5,13.5,0,0,0-.91,4.66v.48H8.67l-4.21,0H0v-.47A22.66,22.66,0,0,1,3.76,40.27a19.7,19.7,0,0,1,9.65-7.94A22.42,22.42,0,0,0,18.17,30a22.18,22.18,0,0,0,3.32-2.63,16.73,16.73,0,0,0,2.58-3Q28,17.5,32,10.67l7.92,13.61a17.29,17.29,0,0,0,2.58,3,22.25,22.25,0,0,0,8.08,5,19.7,19.7,0,0,1,9.65,7.94A22.68,22.68,0,0,1,64,52.79Z", transform: "translate(0 -10.67)", fill: "#4444c6" })));
};

var Icon$L = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7.75C12.5 7.33579 12.1642 7 11.75 7C11.3358 7 11 7.33579 11 7.75V13L15.5537 15.8022C15.9106 16.0219 16.3781 15.9106 16.5978 15.5537C16.8192 15.1938 16.7041 14.7225 16.3419 14.5051L12.5 12.2V7.75Z" })));
};

var Icon$M = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React.createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#739FFF" }),
            React.createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#739FFF" }),
            React.createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#739FFF" }),
            React.createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#6060d8" }),
            React.createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React.createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React.createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#6060d8" }),
            React.createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#739FFF" }),
                React.createElement("stop", { offset: "1", stopColor: "#4372E8" })),
            React.createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#739FFF" }),
                React.createElement("stop", { offset: "1", stopColor: "#4372E8" })),
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$N = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 16" }, props),
        React.createElement("path", { d: "M10.0002 7.33L15.0002 14H3.00018L8.00018 7.33V2H10.0002V7.33ZM12.9602 0H5.04018C4.62018 0 4.39018 0.48 4.65018 0.81L6.00018 2.5V6.67L0.200175 14.4C-0.289825 15.06 0.180175 16 1.00018 16H17.0002C17.8202 16 18.2902 15.06 17.8002 14.4L12.0002 6.67V2.5L13.3502 0.81C13.6102 0.48 13.3802 0 12.9602 0Z" })));
};

var Icon$O = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("path", { d: "M5.86,82.16a3.75,3.75,0,0,1-.42-4.79A292.23,292.23,0,0,1,75.16,7L77.3,5.5a3.93,3.93,0,0,1,5.07.42L92,15.55A15,15,0,0,0,113.25,36.8l8.86,8.85a3.85,3.85,0,0,1-.49,5.86L119.48,53a284.83,284.83,0,0,0-68,68.64,3.67,3.67,0,0,1-5.1.89,4.63,4.63,0,0,1-.48-.4l-9-9A15,15,0,0,0,15.61,91.91L5.87,82.16Z", transform: "translate(0 0)", fill: "#6060d8" }),
        React.createElement("path", { d: "M1.6,79.5,36,35.93,80.51,2.24l8.56,8.62,3.09,3.75-3.09,4.46L88,23.54l.6,4.77,1.78,4.47,3,3.57,3.58,2.38,3.87,1.19h4.76l5.06-1.78,3-2.69,7.15,8.64-11.63,1.74a212.61,212.61,0,0,0-99,42.29L1.6,79.5Z", transform: "translate(0 0)", fill: "#7c7cf2" }),
        React.createElement("g", null,
            React.createElement("path", { d: "M125.48,42.28,116.21,33h0a4.75,4.75,0,0,0-6.73,0h0A10.26,10.26,0,0,1,94.93,18.52v0a4.74,4.74,0,0,0,1.41-3.37h0A4.8,4.8,0,0,0,95,11.75l-9.2-9.2a8.71,8.71,0,0,0-11.22-.93L72.39,3.14A297.11,297.11,0,0,0,1.54,74.63a8.51,8.51,0,0,0,1,10.9l9.67,9.67,0,0a4.76,4.76,0,0,0,6.73-.07l.08-.07A10.26,10.26,0,0,1,33.52,109.6l-.07.08,0,0a4.77,4.77,0,0,0,0,6.74l9.09,9.09a8.46,8.46,0,0,0,12.85-1.13,280.44,280.44,0,0,1,66.9-67.49l2.14-1.53a9.29,9.29,0,0,0,1.08-.91A8.62,8.62,0,0,0,125.48,42.28Zm-3.86,9.23L119.48,53h0a285,285,0,0,0-52.63,48.6l.5.5A2.38,2.38,0,0,1,64,105.51l-.18-.18q-6.46,7.94-12.35,16.35a3.65,3.65,0,0,1-5.58.49l-9.08-9.09.21-.21A15,15,0,0,0,15.75,91.61l-.21.22L5.87,82.16a3.75,3.75,0,0,1-.42-4.8q6.23-8.89,13.09-17.29l-.47-.47a2.38,2.38,0,0,1,3.37-3.37l.16.16A292.28,292.28,0,0,1,75.17,7L77.31,5.5a3.93,3.93,0,0,1,5.07.42l9.21,9.2,0,.05A15,15,0,0,0,112.82,36.4l0,0,9.27,9.27A3.85,3.85,0,0,1,121.62,51.51Z", transform: "translate(0 0)", fill: "#303060", "fill-rule": "evenodd" }),
            React.createElement("path", { d: "M21.44,56.23l.16.16c-1,1.22-2.06,2.44-3.06,3.68l-.47-.47a2.38,2.38,0,0,1,3.37-3.37Z", transform: "translate(0 0)", fill: "#303060", "fill-rule": "evenodd" }),
            React.createElement("path", { d: "M67.35,105.51a2.38,2.38,0,0,1-3.37,0l-.18-.18q1.5-1.86,3-3.69l.5.5A2.38,2.38,0,0,1,67.35,105.51Z", transform: "translate(0 0)", fill: "#303060", "fill-rule": "evenodd" }),
            React.createElement("path", { d: "M67.35,105.51a2.38,2.38,0,0,1-3.37,0l-.18-.18-1.92-1.92A2.38,2.38,0,1,1,65.25,100l1.6,1.6.5.5A2.38,2.38,0,0,1,67.35,105.51Z", transform: "translate(0 0)", fill: "#303060", "fill-rule": "evenodd" }),
            React.createElement("path", { d: "M55.14,96.67,53,94.56a2.38,2.38,0,0,1,3.37-3.37l2.11,2.11a2.38,2.38,0,1,1-3.37,3.37Z", transform: "translate(0 0)", fill: "#303060", "fill-rule": "evenodd" }),
            React.createElement("path", { id: "B", d: "M44.18,82.35a2.39,2.39,0,0,1,3.37,0h0l2.53,2.52a2.38,2.38,0,1,1-3.37,3.37l-2.53-2.52a2.38,2.38,0,0,1,0-3.37Z", transform: "translate(0 0)", fill: "#303060", "fill-rule": "evenodd" }),
            React.createElement("path", { d: "M35.33,73.5a2.38,2.38,0,0,1,3.37,0h0L41.23,76a2.38,2.38,0,1,1-3.37,3.37l-2.53-2.53a2.38,2.38,0,0,1,0-3.37Z", transform: "translate(0 0)", fill: "#303060", "fill-rule": "evenodd" }),
            React.createElement("path", { d: "M29,70.55l-2.11-2.1a2.38,2.38,0,1,1,3.37-3.37l2.11,2.1A2.38,2.38,0,1,1,29,70.55Z", transform: "translate(0 0)", fill: "#303060", "fill-rule": "evenodd" }),
            React.createElement("path", { d: "M23.54,61.7a2.38,2.38,0,0,1-3.37,0l-1.63-1.63-.47-.47a2.38,2.38,0,0,1,3.37-3.37l.16.16,1.94,1.94A2.38,2.38,0,0,1,23.54,61.7Z", transform: "translate(0 0)", fill: "#303060", "fill-rule": "evenodd" }),
            React.createElement("path", { d: "M94.53,49.07l.25.26-.26.26-2,2a1.53,1.53,0,0,0-.18.18L90,54.11l-.27.27-.26-.28a10.49,10.49,0,0,0-3.06-2.05A9.88,9.88,0,0,0,83,51.2a10.22,10.22,0,0,0-4.43.76,32.15,32.15,0,0,1-7.24,2.14,22.08,22.08,0,0,1-7-.14A21.71,21.71,0,0,1,64.42,61a32.21,32.21,0,0,1-2.14,7.25,10.37,10.37,0,0,0-.76,4.43,10.1,10.1,0,0,0,.85,3.45,10.4,10.4,0,0,0,2.06,3.06l.27.26-.27.27L62.1,82.05a1.53,1.53,0,0,1-.18.18c-.15.16-.57.57-2,2l-.25.25-.26-.25a17.49,17.49,0,0,1-4.84-9,15.28,15.28,0,0,1,.94-9.66,17.19,17.19,0,0,0,1.7-7.17A14.26,14.26,0,0,0,57,55.36q-1.58-5.93-3.14-11.85l11.82,3.12a13.17,13.17,0,0,0,3.09.25A17.26,17.26,0,0,0,72,46.5a17.44,17.44,0,0,0,3.9-1.33,15.29,15.29,0,0,1,9.66-.93A17.62,17.62,0,0,1,94.53,49.07Z", transform: "translate(0 0)", fill: "#303060" }))));
};

var Icon$P = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "New_Gradient_Swatch_3", "data-name": "New Gradient Swatch 3", x1: "96.01", y1: "119.43", x2: "31.99", y2: "8.57", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { offset: "0", "stop-color": "#76a4ff" }),
                React.createElement("stop", { offset: "1", "stop-color": "#d7e7ff" })),
            React.createElement("linearGradient", { id: "linear-gradient", x1: "92.8", y1: "113.89", x2: "35.2", y2: "14.11", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { offset: "0", "stop-color": "#9fc2ff" }),
                React.createElement("stop", { offset: "1", "stop-color": "#d7e7ff" }))),
        React.createElement("circle", { cx: "64", cy: "64", r: "64", fill: "url(#New_Gradient_Swatch_3)" }),
        React.createElement("path", { d: "M121.6,64a57.43,57.43,0,0,1-6,25.57l0,.06A57.61,57.61,0,0,1,64,121.6H64a57.61,57.61,0,0,1-51.57-32l0-.06A57.63,57.63,0,0,1,64,6.4H64A57.6,57.6,0,0,1,121.6,64Z", fill: "url(#linear-gradient)" }),
        React.createElement("path", { d: "M27.67,75.35a2.34,2.34,0,0,1-.27-3A182.85,182.85,0,0,1,71,28.39l1.33-.95a2.46,2.46,0,0,1,3.17.26l6,6A9.39,9.39,0,0,0,94.78,47l5.54,5.53a2.41,2.41,0,0,1-.31,3.66l-1.34,1a177.83,177.83,0,0,0-42.51,42.9,2.29,2.29,0,0,1-3.19.55,1.42,1.42,0,0,1-.3-.25L47,94.72A9.39,9.39,0,0,0,33.76,81.44l-6.09-6.09Z", fill: "#6060d8" }),
        React.createElement("path", { d: "M25,73.69,46.51,46.46,74.32,25.4l5.35,5.39,1.93,2.34-1.93,2.79L79,38.71l.38,3,1.11,2.79,1.86,2.24,2.24,1.49L87,49h3l3.16-1.12L95,46.16l4.47,5.4L92.2,52.64A133,133,0,0,0,30.35,79.07L25,73.69Z", fill: "#7c7cf2" }),
        React.createElement("g", null,
            React.createElement("path", { d: "M102.42,50.43l-5.79-5.8h0a3,3,0,0,0-4.21,0h0a6.41,6.41,0,0,1-9.07-9.06v0a3,3,0,0,0,.88-2.1h0a3,3,0,0,0-.87-2.12l-5.75-5.75a5.45,5.45,0,0,0-7-.58L69.24,26A186,186,0,0,0,25,70.64a5.33,5.33,0,0,0,.6,6.82l6,6,0,0a3,3,0,0,0,4.2,0l.05,0A6.42,6.42,0,0,1,45,92.5l0,0,0,0a3,3,0,0,0,0,4.21l5.68,5.68a5,5,0,0,0,.7.59,5.27,5.27,0,0,0,7.33-1.29A175.38,175.38,0,0,1,100.4,59.58l1.34-1a6,6,0,0,0,.68-.57A5.39,5.39,0,0,0,102.42,50.43ZM100,56.19l-1.34,1h0A177.92,177.92,0,0,0,65.78,87.53l.31.31a1.48,1.48,0,0,1,0,2.1,1.47,1.47,0,0,1-2.1,0l-.12-.11q-4,5-7.71,10.22a2.48,2.48,0,0,1-.25.3,2.29,2.29,0,0,1-3.24,0L47,94.68l.14-.13A9.4,9.4,0,0,0,33.84,81.26l-.13.13-6-6a2.34,2.34,0,0,1-.26-3q3.89-5.56,8.18-10.81l-.3-.29a1.49,1.49,0,0,1,2.11-2.11l.1.1A182.6,182.6,0,0,1,71,28.39l1.34-.95a2.46,2.46,0,0,1,3.17.26l5.75,5.75,0,0a9.39,9.39,0,0,0,13.3,13.27h0l5.8,5.79A2.41,2.41,0,0,1,100,56.19Z", fill: "#303060", "fill-rule": "evenodd" }),
            React.createElement("path", { d: "M37.4,59.14l.1.1c-.65.77-1.29,1.53-1.91,2.3l-.3-.29a1.49,1.49,0,0,1,2.11-2.11Z", fill: "#303060", "fill-rule": "evenodd" }),
            React.createElement("path", { d: "M66.09,89.94a1.47,1.47,0,0,1-2.1,0l-.12-.11c.63-.77,1.27-1.54,1.91-2.3l.31.31A1.48,1.48,0,0,1,66.09,89.94Z", fill: "#303060", "fill-rule": "evenodd" }),
            React.createElement("path", { d: "M66.09,89.94a1.47,1.47,0,0,1-2.1,0l-.12-.11-1.2-1.2a1.49,1.49,0,0,1,2.11-2.1l1,1,.31.31A1.48,1.48,0,0,1,66.09,89.94Z", fill: "#303060", "fill-rule": "evenodd" }),
            React.createElement("path", { d: "M58.46,84.42,57.14,83.1A1.49,1.49,0,0,1,59.25,81l1.32,1.31a1.49,1.49,0,1,1-2.11,2.11Z", fill: "#303060", "fill-rule": "evenodd" }),
            React.createElement("path", { id: "B", d: "M51.61,75.47a1.48,1.48,0,0,1,2.11,0h0l1.58,1.58a1.49,1.49,0,0,1-2.11,2.1l-1.58-1.58a1.48,1.48,0,0,1,0-2.1Z", fill: "#303060", "fill-rule": "evenodd" }),
            React.createElement("path", { d: "M46.08,69.94a1.5,1.5,0,0,1,2.11,0h0l1.58,1.58a1.49,1.49,0,0,1-2.11,2.1L46.08,72a1.48,1.48,0,0,1,0-2.1Z", fill: "#303060", "fill-rule": "evenodd" }),
            React.createElement("path", { d: "M42.14,68.09l-1.32-1.31a1.49,1.49,0,1,1,2.11-2.11L44.24,66a1.49,1.49,0,0,1-2.1,2.11Z", fill: "#303060", "fill-rule": "evenodd" }),
            React.createElement("path", { d: "M38.71,62.56a1.48,1.48,0,0,1-2.1,0l-1-1-.3-.29a1.49,1.49,0,0,1,2.11-2.11l.1.1,1.21,1.22A1.48,1.48,0,0,1,38.71,62.56Z", fill: "#303060", "fill-rule": "evenodd" }),
            React.createElement("path", { d: "M83.08,54.67l.15.16-.15.16-1.26,1.26-.11.11-1.44,1.46-.16.17-.17-.18A6.42,6.42,0,0,0,78,56.53,6.12,6.12,0,0,0,75.88,56a6.28,6.28,0,0,0-2.77.47,20.09,20.09,0,0,1-4.53,1.34,14,14,0,0,1-4.41-.08,13.47,13.47,0,0,1,.09,4.42,19.35,19.35,0,0,1-1.33,4.53,6.47,6.47,0,0,0-.48,2.77A6.07,6.07,0,0,0,63,71.6a6.65,6.65,0,0,0,1.29,1.92l.17.16-.17.17c-1.09,1.08-1.36,1.34-1.46,1.43l-.11.12c-.1.09-.35.35-1.25,1.25l-.16.16-.17-.16a11,11,0,0,1-3-5.6,9.57,9.57,0,0,1,.59-6,11.15,11.15,0,0,0,.83-2.44,10.81,10.81,0,0,0,.23-2,8.23,8.23,0,0,0-.15-1.93c-.66-2.47-1.31-4.94-2-7.41l7.4,2A8.53,8.53,0,0,0,67,53.3a10.06,10.06,0,0,0,2-.24,10.65,10.65,0,0,0,2.44-.83,9.63,9.63,0,0,1,6-.58A10.93,10.93,0,0,1,83.08,54.67Z", fill: "#303060" }))));
};

var Icon$Q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.0701 1.01H9.07007V3.01H15.0701V1.01ZM11.0701 14.01H13.0701V8.01H11.0701V14.01ZM19.1001 7.39L20.5201 5.97C20.0901 5.46 19.6201 4.98 19.1101 4.56L17.6901 5.98C16.1401 4.74 14.1901 4 12.0701 4C7.10007 4 3.07007 8.03 3.07007 13C3.07007 17.97 7.09007 22 12.0701 22C17.0501 22 21.0701 17.97 21.0701 13C21.0701 10.89 20.3301 8.94 19.1001 7.39ZM12.0701 20.01C8.20007 20.01 5.07007 16.88 5.07007 13.01C5.07007 9.14 8.20007 6.01 12.0701 6.01C15.9401 6.01 19.0701 9.14 19.0701 13.01C19.0701 16.88 15.9401 20.01 12.0701 20.01Z" })));
};

var Icon$R = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$S = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$T = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$U = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M3.63 3.63C3.24 4.02 3.24 4.65 3.63 5.04L7.29 8.7L7 9H4C3.45 9 3 9.45 3 10V14C3 14.55 3.45 15 4 15H7L10.29 18.29C10.92 18.92 12 18.47 12 17.58V13.41L16.18 17.59C15.69 17.96 15.16 18.27 14.58 18.5C14.22 18.65 14 19.03 14 19.42C14 20.14 14.73 20.6 15.39 20.33C16.19 20 16.94 19.56 17.61 19.02L18.95 20.36C19.34 20.75 19.97 20.75 20.36 20.36C20.75 19.97 20.75 19.34 20.36 18.95L5.05 3.63C4.66 3.24 4.03 3.24 3.63 3.63ZM19 12C19 12.82 18.85 13.61 18.59 14.34L20.12 15.87C20.68 14.7 21 13.39 21 12C21 8.17 18.6 4.89 15.22 3.6C14.63 3.37 14 3.83 14 4.46V4.65C14 5.03 14.25 5.36 14.61 5.5C17.18 6.54 19 9.06 19 12ZM10.29 5.71L10.12 5.88L12 7.76V6.41C12 5.52 10.92 5.08 10.29 5.71ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V9.76L16.48 12.24C16.49 12.16 16.5 12.08 16.5 12Z" })));
};

var Icon$V = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M3 10V14C3 14.55 3.45 15 4 15H7L10.29 18.29C10.92 18.92 12 18.47 12 17.58V6.41C12 5.52 10.92 5.07 10.29 5.7L7 9H4C3.45 9 3 9.45 3 10ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 4.45V4.65C14 5.03 14.25 5.36 14.6 5.5C17.18 6.53 19 9.06 19 12C19 14.94 17.18 17.47 14.6 18.5C14.24 18.64 14 18.97 14 19.35V19.55C14 20.18 14.63 20.62 15.21 20.4C18.6 19.11 21 15.84 21 12C21 8.16 18.6 4.89 15.21 3.6C14.63 3.37 14 3.82 14 4.45Z" })));
};

var Icon$W = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Box = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), background, border, layout, position, space);
var templateObject_1$4;

var Flex = styled(Box)(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), flexbox);
var templateObject_1$5;

var variants$1 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$1.INFO : _b;
    switch (variant) {
        case variants$1.DANGER:
            return theme.colors.failure;
        case variants$1.WARNING:
            return theme.colors.warning;
        case variants$1.SUCCESS:
            return theme.colors.success;
        case variants$1.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$1.INFO; }
    switch (variant) {
        case variants$1.DANGER:
            return Icon$2;
        case variants$1.WARNING:
            return Icon$1;
        case variants$1.SUCCESS:
            return Icon;
        case variants$1.INFO:
        default:
            return Icon$3;
    }
};
var IconLabel = styled.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 12px 0 0 12px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 12px 0 0 12px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ",
    ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return hasHandler ? withHandlerSpacing + "px" : "12px";
});
var CloseHandler = styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  border-radius: 0 12px 12px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 12px 12px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled(Flex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 12px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1),\n    0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 12px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1),\n    0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React.createElement(StyledAlert, null,
        React.createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React.createElement(Icon, { color: "currentColor", width: "24px" })),
        React.createElement(Details, { hasHandler: !!onClick },
            React.createElement(Text, { bold: true }, title),
            typeof children === "string" ? (React.createElement(Text, { as: "p" }, children)) : (children)),
        onClick && (React.createElement(CloseHandler, null,
            React.createElement(IconButton, { scale: "sm", variant: "text", onClick: onClick },
                React.createElement(Icon$n, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$6, templateObject_2$1, templateObject_3$1, templateObject_4;

var Separator = styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled.ul(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArrays(accum, [item]);
        }
        return __spreadArrays(accum, [
            React.createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React.createElement(Icon$l, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = Children.toArray(children).filter(function (child) {
        return isValidElement(child);
    });
    var items = insertSeparators(validItems, separator);
    return (React.createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React.createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$7, templateObject_2$2;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled.div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 24px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 24px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$8;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.scale, scale = _c === void 0 ? scales.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, onItemClick = _a.onItemClick, children = _a.children;
    return (React.createElement(StyledButtonMenu, { variant: variant }, Children.map(children, function (child, index) {
        return cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            scale: scale,
            variant: variant,
        });
    })));
};

var InactiveButton = styled(Button)(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? variants.PRIMARY : _c, as = _a.as, props = __rest(_a, ["isActive", "variant", "as"]);
    if (!isActive) {
        return (React.createElement(InactiveButton, __assign({ forwardedAs: as, variant: "tertiary", colorKey: variant === variants.PRIMARY ? "primary" : "textSubtle" }, props)));
    }
    return React.createElement(Button, __assign({ as: as, variant: variant }, props));
};
var templateObject_1$9;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled.div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  color: ",
    ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$a;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React.createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled.div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$b;

var CardHeader = styled.div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$c;

var CardFooter = styled.div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$d;

var StyledCardRibbon = styled.div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ",
    ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ",
    ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React.createElement(StyledCardRibbon, { variantColor: variantColor },
        React.createElement("div", { title: text }, text)));
};
var templateObject_1$e;

var scales$1 = {
    SM: "sm",
    MD: "md",
};

var getScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$1.SM:
            return "24px";
        case scales$1.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled.input.attrs({ type: "checkbox" })(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale, getScale, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales$1.MD,
};
var templateObject_1$f;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled.div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React.createElement(Container, null,
        target,
        React.createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$g, templateObject_2$3;

var bunnyFall = keyframes(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"])));
var Bunny = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"], ["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ",
    ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"])), function (_a) {
    var position = _a.position;
    return position + "vw";
}, bunnyFall, function (_a) {
    var duration = _a.duration;
    return duration + "s";
}, function (_a) {
    var iterations = _a.iterations;
    return Number.isFinite(iterations) ? String(iterations) : "infinite";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.3 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 2.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 3.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 5.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 8 + "s";
});
var FallingBunnies = function (_a) {
    var _b = _a.count, count = _b === void 0 ? 30 : _b, _c = _a.size, size = _c === void 0 ? 32 : _c, _d = _a.iterations, iterations = _d === void 0 ? Infinity : _d, _e = _a.duration, duration = _e === void 0 ? 10 : _e;
    var bunnies = __spreadArrays(Array(count)).map(function (_, index) { return (React.createElement(Bunny, { key: String(index), position: Math.random() * 100, iterations: iterations, duration: duration },
        React.createElement(Icon$x, { width: size, height: size }))); });
    return React.createElement("div", null, bunnies);
};
var templateObject_1$h, templateObject_2$4;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$1;
var style = (_a$1 = {},
    _a$1[sizes.MD] = {
        fontSize: "20px",
        fontSizeLg: "20px",
    },
    _a$1[sizes.LG] = {
        fontSize: "24px",
        fontSizeLg: "24px",
    },
    _a$1[sizes.XL] = {
        fontSize: "32px",
        fontSizeLg: "40px",
    },
    _a$1[sizes.XXL] = {
        fontSize: "48px",
        fontSizeLg: "64px",
    },
    _a$1);
var Heading = styled(Text).attrs({ bold: true })(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSizeLg;
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$i;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper = styled.div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ",
    "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return responsive ? (height / width) * 100 : 0;
}, space);
var templateObject_1$j;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = useRef(null);
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React.createElement(Wrapper, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled.img(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled.div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = useRef(null);
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React.createElement(Wrapper, __assign({ ref: imgRef }, otherProps), isLoaded ? React.createElement(StyledImage, { src: src, alt: alt }) : React.createElement(Placeholder, null)));
};
var templateObject_1$k, templateObject_2$5;

var scales$2 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow$1 = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$2.MD : _b;
    switch (scale) {
        case scales$2.SM:
            return "32px";
        case scales$2.LG:
            return "48px";
        case scales$2.MD:
        default:
            return "40px";
    }
};
var Input = styled.input(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 24px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 24px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input.defaultProps = {
    scale: scales$2.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$l;

var GridLayout = styled.div(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$m;

var GridLayout$1 = styled(GridLayout)(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$n;

var NotificationDotRoot = styled.span(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  display: inline-flex;\n  position: relative;\n"], ["\n  display: inline-flex;\n  position: relative;\n"])));
var Dot = styled.span(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"], ["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? "inline-flex" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var NotificationDot = function (_a) {
    var _b = _a.show, show = _b === void 0 ? false : _b, children = _a.children, props = __rest(_a, ["show", "children"]);
    return (React.createElement(NotificationDotRoot, null,
        Children.map(children, function (child) {
            return cloneElement(child, props);
        }),
        React.createElement(Dot, { show: show })));
};
var templateObject_1$o, templateObject_2$6;

var scales$3 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$3.SM:
            return "24px";
        case scales$3.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$3.SM:
            return "12px";
        case scales$3.MD:
        default:
            return "20px";
    }
};
var Radio = styled.input.attrs({ type: "radio" })(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, space);
Radio.defaultProps = {
    scale: scales$3.MD,
    m: 0,
};
var templateObject_1$p;

var variants$2 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    SUCCESS: "success",
    TEXTDISABLED: "textDisabled",
    TEXTSUBTLE: "textSubtle",
    HUOBI: "huobi",
    FAILURE: "failure",
};
var scales$4 = {
    MD: "md",
    SM: "sm",
};

var _a$2, _b$1;
var scaleVariants$1 = (_a$2 = {},
    _a$2[scales$4.MD] = {
        height: "28px",
        padding: "0 8px",
        fontSize: "14px",
    },
    _a$2[scales$4.SM] = {
        height: "24px",
        padding: "0 4px",
        fontSize: "12px",
    },
    _a$2);
var styleVariants$1 = (_b$1 = {},
    _b$1[variants$2.PRIMARY] = {
        backgroundColor: "primary",
    },
    _b$1[variants$2.SECONDARY] = {
        backgroundColor: "secondary",
    },
    _b$1[variants$2.SUCCESS] = {
        backgroundColor: "success",
    },
    _b$1[variants$2.TEXTDISABLED] = {
        backgroundColor: "textDisabled",
    },
    _b$1[variants$2.TEXTSUBTLE] = {
        backgroundColor: "textSubtle",
    },
    _b$1[variants$2.HUOBI] = {
        backgroundColor: "huobi",
    },
    _b$1[variants$2.FAILURE] = {
        backgroundColor: "failure",
    },
    _b$1);

var getOutlineStyles = function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variantKey = _b === void 0 ? variants$2.PRIMARY : _b;
    if (outline) {
        var themeColorKey = styleVariants$1[variantKey]
            .backgroundColor;
        var color = theme.colors[themeColorKey];
        return "\n      color: " + color + ";\n      background: transparent;\n      border: 2px solid " + color + ";\n    ";
    }
    return "";
};
var StyledTag = styled.div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  align-items: center;\n  border-radius: 12px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n  ", "\n  ", "\n\n  ", "\n"], ["\n  align-items: center;\n  border-radius: 12px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ",
    "\n  ",
    "\n  ", "\n\n  ", "\n"])), variant$1({
    prop: "scale",
    variants: scaleVariants$1,
}), variant$1({
    variants: styleVariants$1,
}), space, getOutlineStyles);
var templateObject_1$q;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React.createElement(StyledTag, __assign({}, props),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5em",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5em",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    scale: scales$4.MD,
    outline: false,
};

var StyledLink = styled(Text)(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React.createElement(StyledLink, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$r;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(Link, __assign({ external: true }, props),
        children,
        React.createElement(Icon$C, { color: "primary", ml: "4px" })));
};

var variants$3 = {
    ROUND: "round",
    FLAT: "flat",
};

var _a$3;
var styleVariants$2 = (_a$3 = {},
    _a$3[variants$3.ROUND] = {
        borderRadius: "32px",
    },
    _a$3[variants$3.FLAT] = {
        borderRadius: 0,
    },
    _a$3);

var Bar = styled.div(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ",
    ";\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) {
    return props.primary
        ? props.theme.colors.secondary
        : props.theme.colors.secondary + "80";
});
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled.div(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ", "\n  ", "\n"], ["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ",
    ";\n    border-bottom-left-radius: ",
    ";\n  }\n\n  ",
    "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, Bar, function (_a) {
    var variant = _a.variant;
    return variant === variants$3.FLAT ? "0" : "32px";
}, function (_a) {
    var variant = _a.variant;
    return variant === variants$3.FLAT ? "0" : "32px";
}, variant$1({
    variants: styleVariants$2,
}), space);
var templateObject_1$s, templateObject_2$7;

var ProgressBunnyWrapper = styled.div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$t;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? variants$3.ROUND : _b, _c = _a.primaryStep, primaryStep = _c === void 0 ? 0 : _c, _d = _a.secondaryStep, secondaryStep = _d === void 0 ? null : _d, _e = _a.showProgressBunny, showProgressBunny = _e === void 0 ? false : _e;
    return (React.createElement(StyledProgress, { variant: variant },
        showProgressBunny && (React.createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React.createElement(Icon$K, null))),
        React.createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? (React.createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } })) : null));
};

var Icon$X = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("path", { id: "C", d: "M28.13,48.36c0,2.75-1.49,5-3.32,5s-3.31-2.22-3.31-5,1.48-5,3.31-5S28.13,45.61,28.13,48.36Z", transform: "translate(0 -10.67)", fill: "#5959F4" }),
        React.createElement("path", { d: "M42.5,48.36c0,2.75-1.48,5-3.31,5s-3.32-2.22-3.32-5,1.49-5,3.32-5S42.5,45.61,42.5,48.36Z", transform: "translate(0 -10.67)", fill: "#5959F4" }),
        React.createElement("path", { d: "M64,52.79v.47H59.54l-4.21,0h-.49v-.49a13.53,13.53,0,0,0-.91-4.66,12.83,12.83,0,0,0-2.37-3.91,13.09,13.09,0,0,0-4.72-3.34,41,41,0,0,1-8.54-4.65A28.31,28.31,0,0,1,32,29.71a27.74,27.74,0,0,1-6.32,6.57,40.49,40.49,0,0,1-8.54,4.66,13.09,13.09,0,0,0-4.72,3.34,12.71,12.71,0,0,0-2.37,3.91,13.5,13.5,0,0,0-.91,4.66v.48H8.67l-4.21,0H0v-.47A22.66,22.66,0,0,1,3.76,40.27a19.7,19.7,0,0,1,9.65-7.94A22.42,22.42,0,0,0,18.17,30a22.18,22.18,0,0,0,3.32-2.63,16.73,16.73,0,0,0,2.58-3Q28,17.5,32,10.67l7.92,13.61a17.29,17.29,0,0,0,2.58,3,22.25,22.25,0,0,0,8.08,5,19.7,19.7,0,0,1,9.65,7.94A22.68,22.68,0,0,1,64,52.79Z", transform: "translate(0 -10.67)", fill: "#5959F4" })));
};

var float = keyframes(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"], ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"])));
var Container$1 = styled.div(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var FloatingOgeeIcon = styled(Icon$X)(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 30px;\n  left: 23px;\n  animation: ", " 3s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 30px;\n  left: 23px;\n  animation: ", " 3s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])), float);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 96 : _b;
    return (React.createElement(Container$1, null,
        React.createElement(FloatingOgeeIcon, { width: size * 0.75 + "px" })));
};
var templateObject_1$u, templateObject_2$8, templateObject_3$2;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = keyframes(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = keyframes(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ",
    ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small;
}, layout, space);
var Pulse = styled(Root)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled(Root)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(\n      90deg,\n      transparent,\n      rgba(243, 243, 243, 0.5),\n      transparent\n    );\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(\n      90deg,\n      transparent,\n      rgba(243, 243, 243, 0.5),\n      transparent\n    );\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React.createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React.createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$v, templateObject_2$9, templateObject_3$3, templateObject_4$1, templateObject_5;

var scaleKeyValues = {
    sm: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "2px",
        handleTop: "2px",
        checkedLeft: "calc(100% - 18px)",
        toggleHeight: "20px",
        toggleWidth: "36px",
    },
    md: {
        handleHeight: "32px",
        handleWidth: "32px",
        handleLeft: "4px",
        handleTop: "4px",
        checkedLeft: "calc(100% - 36px)",
        toggleHeight: "40px",
        toggleWidth: "72px",
    },
};
var getScale$2 = function (property) { return function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$1.MD : _b;
    return scaleKeyValues[scale][property];
}; };
var Handle = styled.div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
}, getScale$2("handleHeight"), getScale$2("handleLeft"), getScale$2("handleTop"), getScale$2("handleWidth"));
var Input$1 = styled.input(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, getScale$2("checkedLeft"), Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled.div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getScale$2("toggleHeight"), getScale$2("toggleWidth"));
var templateObject_1$w, templateObject_2$a, templateObject_3$4;

var scales$5 = {
    SM: "sm",
    MD: "md",
};

var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales$5.MD : _b, props = __rest(_a, ["checked", "scale"]);
    var isChecked = !!checked;
    return (React.createElement(StyledToggle, { checked: isChecked, scale: scale },
        React.createElement(Input$1, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })),
        React.createElement(Handle, { scale: scale })));
};
Toggle.defaultProps = {
    scale: scales$5.MD,
};

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArrays(data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending
                    ? data.sort(column.sort)
                    : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArrays(action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            columnCopy = state.columns.map(function (column) {
                if (state.sortColumn === column.name) {
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: column.sorted.asc,
                        } });
                }
                return column;
            });
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending =
                            column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending
                            ? state.rows.sort(column.sort)
                            : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id]
                        ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds
                    ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = useMemo(function () { return getColumnsByName(columnsWithSorting); }, [
        columnsWithSorting,
    ]);
    var tableData = useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop,
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = useMemo(function () {
        return __spreadArrays(state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) {
            return dispatch({ type: "SEARCH_STRING", searchString: searchString });
        },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 2px #6565F1, 0px 0px 4px 8px rgba(93, 93, 239, 0.3)",
    success: "0px 0px 0px 2px #29DCA2, 0px 0px 2px 4px rgba(41, 220, 162, 0.2)",
    warning: "0px 0px 0px 2px #F33F67, 0px 0px 2px 4px rgba(243, 63, 103, 0.2)",
    focus: "0px 0px 0px 2px #2687DA, 0px 0px 2px 4px rgba(39, 135, 218, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries$1 = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) {
    return "is" + size.charAt(0).toUpperCase() + size.slice(1);
};
var useMatchBreakpoints = function () {
    var _a = useState(function () {
        return Object.keys(mediaQueries$1).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries$1[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries$1).map(function (size) {
            var mql = window.matchMedia(mediaQueries$1[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = useCallback(function () {
        return debounce(function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var useKonamiCheatCode = function (matchedCodeHandler) {
    useEffect(function () {
        var pattern = [
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
        ];
        var currentIndex = 0;
        var onKeyUpHandler = function (event) {
            var key = event.key;
            // is key in correct order otherwise reset
            if (key !== pattern[currentIndex]) {
                currentIndex = 0;
                return;
            }
            currentIndex += 1;
            if (pattern.length === currentIndex) {
                currentIndex = 0;
                matchedCodeHandler();
            }
        };
        document.addEventListener("keyup", onKeyUpHandler);
        return function () { return document.removeEventListener("keyup", onKeyUpHandler); };
    }, [matchedCodeHandler]);
};

var StyledModal = styled.div(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1),\n    0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 2px solid ", ";\n  border-radius: 18px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1),\n    0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 2px solid ", ";\n  border-radius: 18px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader = styled.div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"], ["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"])));
var ModalTitle = styled(Flex)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (React.createElement(StyledModal, null,
        React.createElement(ModalHeader, null,
            React.createElement(ModalTitle, null,
                onBack && (React.createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React.createElement(Icon$5, { color: "primary" }))),
                React.createElement(Heading, null, title)),
            !hideCloseButton && (React.createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React.createElement(Icon$n, { color: "primary" })))),
        React.createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
var templateObject_1$x, templateObject_2$b, templateObject_3$5;

var Overlay = styled.div.attrs({ role: "presentation" })(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #363680;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #363680;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$y;

var ModalWrapper = styled.div(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React.createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React.createElement(ModalWrapper, null,
            React.createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React.isValidElement(modalNode) &&
                React.cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$z;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$Y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M21.34,11.11,17.76,10V4.65A2.72,2.72,0,0,0,16,2.1a.93.93,0,0,0-1.3,1.12,1,1,0,0,0,.52.56.92.92,0,0,1,.65.87V9.47l-1.78-.53V6.86a3,3,0,0,0-3-3.05H2.93a.93.93,0,1,0,0,1.85H3.2v7.86a5.17,5.17,0,0,0,4,8.48A5.23,5.23,0,0,0,12,18.64l2.12.38a3.34,3.34,0,0,0,6.53.55h.42a.93.93,0,0,0,.93-.92V12A.94.94,0,0,0,21.34,11.11ZM9.89,5.66h1.2a1.19,1.19,0,0,1,1.18,1.2V8.38L9.89,7.67ZM7.16,20.14a3.31,3.31,0,1,1,3.3-3.3A3.31,3.31,0,0,1,7.16,20.14Zm10.28,0a1.5,1.5,0,0,1,0-3,1.5,1.5,0,0,1,1.49,1.5A1.49,1.49,0,0,1,17.44,20.14Zm2.7-3.46a3.34,3.34,0,0,0-2.7-1.38,3.39,3.39,0,0,0-3,1.89l-2.11-.37a5.16,5.16,0,0,0-7.25-4.7V5.66H8v2.7a1,1,0,0,0,.67.9l11.43,3.42Z", transform: "translate(-2 -2)" }),
                React.createElement("path", { d: "M18.37,18.65a.93.93,0,1,1-.93-.93A.93.93,0,0,1,18.37,18.65Z", transform: "translate(-2 -2)" }),
                React.createElement("path", { d: "M7.16,14.1a2.74,2.74,0,1,0,2.73,2.74A2.73,2.73,0,0,0,7.16,14.1Zm0,3.62A.89.89,0,1,1,8,16.84.88.88,0,0,1,7.16,17.72Z", transform: "translate(-2 -2)" })),
            React.createElement("path", { d: "M18.65,15a.56.56,0,0,0,.56-.56V13.21a.56.56,0,1,0-1.12,0v1.21a.56.56,0,0,0,.56.56Zm0,0Z", transform: "translate(-2 -2)" }),
            React.createElement("path", { d: "M15,13.83a.57.57,0,0,0,.56-.57V12.05a.56.56,0,0,0-1.12,0v1.21a.57.57,0,0,0,.56.57Zm0,0Z", transform: "translate(-2 -2)" }),
            React.createElement("path", { d: "M16.84,14.38a.57.57,0,0,0,.56-.57V12.6a.57.57,0,0,0-1.13,0v1.21a.57.57,0,0,0,.57.57Zm0,0Z", transform: "translate(-2 -2)" }))));
};

var Icon$Z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$_ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$$ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$10 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "M11,18.36H8.73a.42.42,0,0,0-.43.42v2.3a.42.42,0,0,0,.43.42H11a.42.42,0,0,0,.42-.42v-2.3a.42.42,0,0,0-.42-.42Zm0,0" }),
            React.createElement("path", { d: "M15.27,18.36H13a.42.42,0,0,0-.42.42v2.3a.42.42,0,0,0,.42.42h2.29a.42.42,0,0,0,.43-.42v-2.3a.42.42,0,0,0-.43-.42Zm0,0" }),
            React.createElement("path", { d: "M13.57,16.94V14.65a.42.42,0,0,0-.42-.42h-2.3a.42.42,0,0,0-.42.42v2.29a.42.42,0,0,0,.42.43h2.3a.42.42,0,0,0,.42-.43Zm0,0" }),
            React.createElement("g", null,
                React.createElement("path", { d: "M20.06,10.34,12.3,5.27a.54.54,0,0,0-.6,0L3.94,10.34a.57.57,0,0,0-.25.47V20.94a.56.56,0,0,0,.56.56H6.63a.56.56,0,0,0,.56-.56V12h9.62v9a.56.56,0,0,0,.56.56h2.38a.56.56,0,0,0,.56-.56V10.81a.57.57,0,0,0-.25-.47Zm0,0" }),
                React.createElement("path", { d: "M21.49,8.91a.55.55,0,0,0-.24-.35l-8.94-6A.56.56,0,0,0,12,2.5h0a.56.56,0,0,0-.31.09l-8.94,6a.55.55,0,0,0-.24.35.57.57,0,0,0,.08.42l.32.48a1.64,1.64,0,0,1,.43-.4l7.75-5.07a1.67,1.67,0,0,1,1.82,0l7.75,5.07a1.64,1.64,0,0,1,.43.4l.32-.48a.57.57,0,0,0,.08-.42Zm0,0" }))),
        React.createElement("rect", { width: "24", height: "24", fill: "none" })));
};

var Icon$11 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M22,6.8,20.55,2.56A.83.83,0,0,0,19.77,2H4.23a.83.83,0,0,0-.78.56L2,6.8a.68.68,0,0,0,0,.26v.7a3.66,3.66,0,0,0,1.4,2.88v9.13A2.24,2.24,0,0,0,5.65,22h12.7a2.24,2.24,0,0,0,2.25-2.23V10.64A3.66,3.66,0,0,0,22,7.76V7A.67.67,0,0,0,22,6.8Zm-4.9-3.15h2.1L20,6.23h-3Zm-4.23,0h2.58V6.23H12.83Zm-4.24,0h2.58V6.23H8.59Zm-3.75,0h2.1V6.23H4Zm5.88,16.7V14.94h2.56v5.41Zm8.22-.58a.6.6,0,0,1-.59.58H14.94V14.11a.83.83,0,0,0-.83-.83H9.89a.83.83,0,0,0-.83.83v6.24H5.65a.6.6,0,0,1-.59-.58v-8.4a3.59,3.59,0,0,0,2.71-.64,3.7,3.7,0,0,0,4.23,0,3.7,3.7,0,0,0,4.23,0,3.59,3.59,0,0,0,2.71.64Zm-.59-10a2,2,0,0,1-1.49-.69.79.79,0,0,0-.57-.28h-.06a.82.82,0,0,0-.54.2l-.07.08a2,2,0,0,1-2.84.15l-.16-.15a.85.85,0,0,0-1.2,0l0,0a2,2,0,0,1-2.84.15l-.16-.15a.84.84,0,0,0-1.2,0l0,0a2,2,0,0,1-1.49.69,2,2,0,0,1-2-1.87H20.34A2,2,0,0,1,18.35,9.76Z" }),
        React.createElement("rect", { width: "24", height: "24", fill: "none" })));
};

var Icon$12 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13.2,2.27a.83.83,0,0,0-.84.82v7.72a.85.85,0,0,0,.84.84h7.68a.83.83,0,0,0,.82-.84A8.53,8.53,0,0,0,13.2,2.27ZM20,10H14V4A7,7,0,0,1,20,10Z" }),
        React.createElement("path", { d: "M14.07,20.12,11.43,13V5.49a.84.84,0,0,0-.84-.83,8.54,8.54,0,1,0,0,17.07,8.46,8.46,0,0,0,3-.54A.84.84,0,0,0,14.07,20.12ZM9.77,6.37v6.81a.92.92,0,0,0,0,.29l2.39,6.41a6.63,6.63,0,0,1-1.61.19,6.87,6.87,0,0,1-.82-13.7Z" }),
        React.createElement("path", { d: "M21.18,12.55H13.49a.8.8,0,0,0-.68.36.79.79,0,0,0-.09.77l2.69,7.23a.83.83,0,0,0,.78.53,1,1,0,0,0,.29,0,8.59,8.59,0,0,0,5.52-8A.83.83,0,0,0,21.18,12.55Zm-.89,1.66a6.88,6.88,0,0,1-3.63,5.28l-2-5.28Z" }),
        React.createElement("rect", { width: "24", height: "24", fill: "none" })));
};

var Icon$13 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12,2A10,10,0,0,0,2,12,10.38,10.38,0,0,0,9.66,22V18.69a2.42,2.42,0,0,1-1.28,0A2.45,2.45,0,0,1,7,17.49c-.23-.38-.63-.8-1-.77L5.8,15.56A2.4,2.4,0,0,1,8,16.89a1.31,1.31,0,0,0,.76.65,1.63,1.63,0,0,0,1-.09A2.7,2.7,0,0,1,10.39,16h0c-2.61-.39-3.64-1.77-4.06-2.86a4.59,4.59,0,0,1,.72-4.4.16.16,0,0,0,0-.12A3.79,3.79,0,0,1,7.2,6.1a4,4,0,0,1,2.22.83l.28.17c.12.07.08,0,.2,0A8.79,8.79,0,0,1,12,6.83a8.69,8.69,0,0,1,2.13.3h.09l.08,0c2-1.23,2-.83,2.5-1a3.88,3.88,0,0,1,.11,2.56,4.8,4.8,0,0,1,.76,4.52c-.42,1.09-1.45,2.47-4.06,2.86h0a2.56,2.56,0,0,1,.73,1.83V22A10.38,10.38,0,0,0,22,12,10,10,0,0,0,12,2Z", transform: "translate(-2 -2)" })));
};

var Icon$14 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo = function (_a) {
    var isDark = _a.isDark, props = __rest(_a, ["isDark"]);
    var textColor = isDark ? "#FFFFFF" : "#000000";
    var logoColor = isDark ? "#5959F4" : "#4444C6";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 620 128" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "M61.08,96.72c0,5.49-3,10-6.63,10s-6.63-4.46-6.63-10,3-10,6.63-10S61.08,91.23,61.08,96.72Z", transform: "translate(-4.83 -21.33)", fill: logoColor }),
            React.createElement("path", { d: "M89.84,96.72c0,5.49-3,10-6.63,10s-6.63-4.46-6.63-10,3-10,6.63-10S89.84,91.23,89.84,96.72Z", transform: "translate(-4.83 -21.33)", fill: logoColor }),
            React.createElement("path", { d: "M132.83,105.59l0,.93h-8.9l-8.42,0h-1l0-1a26.73,26.73,0,0,0-1.84-9.3A25.62,25.62,0,0,0,108,88.48a26.42,26.42,0,0,0-9.45-6.68c-7.54-3.24-12.65-6-17.09-9.31A56.1,56.1,0,0,1,68.86,59.42,56.53,56.53,0,0,1,56.22,72.57c-4.44,3.29-9.55,6.07-17.09,9.3a26.44,26.44,0,0,0-9.44,6.69A25.4,25.4,0,0,0,25,96.38a26.8,26.8,0,0,0-1.84,9.31l0,1h-1l-8.42,0H4.85v-.92a45.18,45.18,0,0,1,7.51-25.12c5-7.61,11.83-13.25,19.3-15.89A45.29,45.29,0,0,0,41.17,60a45.69,45.69,0,0,0,6.64-5.26A35.72,35.72,0,0,0,53,48.63l15.86-27.3L84.68,48.55a35.15,35.15,0,0,0,5.17,6.08,44.58,44.58,0,0,0,6.65,5.26A45,45,0,0,0,106,64.58c7.47,2.64,14.33,8.28,19.3,15.89A45.27,45.27,0,0,1,132.83,105.59Z", transform: "translate(-4.83 -21.33)", fill: logoColor })),
        React.createElement("g", null,
            React.createElement("path", { d: "M198.58,65.13a30.41,30.41,0,0,1-1.82,10.92,22.37,22.37,0,0,1-5,8,20.81,20.81,0,0,1-7.63,4.82,28.91,28.91,0,0,1-19.14,0A20.77,20.77,0,0,1,157.33,84a22.51,22.51,0,0,1-5-8,30.41,30.41,0,0,1-1.82-10.92,29.44,29.44,0,0,1,1.86-10.87,22.68,22.68,0,0,1,5.1-7.91,21.09,21.09,0,0,1,7.63-4.82,28.24,28.24,0,0,1,18.91,0,21,21,0,0,1,7.63,4.82,22.68,22.68,0,0,1,5.1,7.91A29.44,29.44,0,0,1,198.58,65.13Zm-10.52,0q0-8.22-3.68-12.53a13.35,13.35,0,0,0-19.61,0q-3.68,4.27-3.68,12.57t3.64,12.58a13.44,13.44,0,0,0,19.65,0Q188.07,73.44,188.06,65.13Z", transform: "translate(-4.83 -21.33)", fill: textColor }),
            React.createElement("path", { d: "M231.25,85.94a18.83,18.83,0,0,1-8.55,1.9,22.38,22.38,0,0,1-6.72-1,14.27,14.27,0,0,1-5.54-3.21,15.28,15.28,0,0,1-3.75-5.73,23.58,23.58,0,0,1-1.39-8.58,22.12,22.12,0,0,1,1.39-8.11,15.65,15.65,0,0,1,3.95-5.89,16.78,16.78,0,0,1,6.13-3.56,25,25,0,0,1,7.91-1.19,26.57,26.57,0,0,1,7.56,1A21.64,21.64,0,0,1,237.73,54,8.62,8.62,0,0,1,240,56.12a5.13,5.13,0,0,1,.83,3V89.65a15.41,15.41,0,0,1-1.47,7,13,13,0,0,1-4,4.78,17.1,17.1,0,0,1-5.93,2.73,29.65,29.65,0,0,1-7.36.87,30.21,30.21,0,0,1-7.16-.75,16,16,0,0,1-4.54-1.7,5.06,5.06,0,0,1-2.61-4.43,5.2,5.2,0,0,1,.63-2.61,4.6,4.6,0,0,1,1.5-1.66,23.16,23.16,0,0,0,5,2.21,20.24,20.24,0,0,0,6.25,1,13.16,13.16,0,0,0,7.44-1.82q2.69-1.81,2.69-5.85Zm-6.88-5.86a10.79,10.79,0,0,0,3.91-.63,12.21,12.21,0,0,0,2.81-1.5V60.07a13.6,13.6,0,0,0-2.57-1.1,11.39,11.39,0,0,0-3.52-.48,9.46,9.46,0,0,0-7,2.65q-2.66,2.65-2.65,8.19a16.41,16.41,0,0,0,.67,5.06,8.43,8.43,0,0,0,1.9,3.32,7,7,0,0,0,2.89,1.82A11.11,11.11,0,0,0,224.37,80.08Z", transform: "translate(-4.83 -21.33)", fill: textColor }),
            React.createElement("path", { d: "M258.85,74.94A9.44,9.44,0,0,0,263,80.8a14.17,14.17,0,0,0,7.44,1.82,18.33,18.33,0,0,0,6.13-1,22.5,22.5,0,0,0,4.55-2.1,5.31,5.31,0,0,1,1.82,1.74,4.35,4.35,0,0,1,.71,2.37,4.16,4.16,0,0,1-1.07,2.81,8.66,8.66,0,0,1-2.93,2.1,18,18,0,0,1-4.39,1.34,29.17,29.17,0,0,1-5.45.48,27.15,27.15,0,0,1-8.51-1.27,17.2,17.2,0,0,1-6.56-3.84,17.65,17.65,0,0,1-4.27-6.36A23.41,23.41,0,0,1,248.88,70a22.27,22.27,0,0,1,1.51-8.54,17.46,17.46,0,0,1,4.07-6.09,16.21,16.21,0,0,1,6-3.64,21.75,21.75,0,0,1,7.2-1.19,19.94,19.94,0,0,1,7.12,1.23,16.41,16.41,0,0,1,5.54,3.4,15.64,15.64,0,0,1,3.59,5.22,16.58,16.58,0,0,1,1.31,6.6A4.41,4.41,0,0,1,284,70.36a5.76,5.76,0,0,1-3.2,1.42Zm8.78-16.84a8.87,8.87,0,0,0-6.49,2.57A10.86,10.86,0,0,0,258.22,68l17.56-2.61a8.8,8.8,0,0,0-2.3-5.1A7.51,7.51,0,0,0,267.63,58.1Z", transform: "translate(-4.83 -21.33)", fill: textColor }),
            React.createElement("path", { d: "M301.09,74.94a9.44,9.44,0,0,0,4.11,5.86,14.14,14.14,0,0,0,7.44,1.82,18.37,18.37,0,0,0,6.13-1,22.38,22.38,0,0,0,4.54-2.1,5.14,5.14,0,0,1,1.82,1.74,4.27,4.27,0,0,1,.71,2.37,4.15,4.15,0,0,1-1.06,2.81,8.76,8.76,0,0,1-2.93,2.1,18,18,0,0,1-4.39,1.34,29.36,29.36,0,0,1-5.46.48,27.13,27.13,0,0,1-8.5-1.27,17.24,17.24,0,0,1-6.57-3.84,17.9,17.9,0,0,1-4.27-6.36A23.61,23.61,0,0,1,291.12,70a22.28,22.28,0,0,1,1.5-8.54,17.48,17.48,0,0,1,4.08-6.09,16.21,16.21,0,0,1,6-3.64,21.75,21.75,0,0,1,7.2-1.19A20,20,0,0,1,317,51.81a16.36,16.36,0,0,1,5.53,3.4,15.52,15.52,0,0,1,3.6,5.22,16.58,16.58,0,0,1,1.31,6.6,4.45,4.45,0,0,1-1.15,3.33,5.79,5.79,0,0,1-3.2,1.42Zm8.78-16.84a8.85,8.85,0,0,0-6.49,2.57A10.91,10.91,0,0,0,300.45,68L318,65.37a8.79,8.79,0,0,0-2.29-5.1A7.51,7.51,0,0,0,309.87,58.1Z", transform: "translate(-4.83 -21.33)", fill: textColor }),
            React.createElement("path", { d: "M383.82,41.17a8.44,8.44,0,0,1,.75,1.7,7.25,7.25,0,0,1,.36,2.33,4.73,4.73,0,0,1-1,3.25,3.36,3.36,0,0,1-2.65,1.1H362.23V62.13h18.9a7.67,7.67,0,0,1,.75,1.66,6.92,6.92,0,0,1,.36,2.29,4.57,4.57,0,0,1-1,3.21,3.44,3.44,0,0,1-2.65,1.07H362.39V89.1c-.48.11-1.15.24-2,.4a16,16,0,0,1-2.73.23c-2,0-3.43-.36-4.27-1.1a4.75,4.75,0,0,1-1.27-3.72V46.63a5.06,5.06,0,0,1,5.46-5.46Z", transform: "translate(-4.83 -21.33)", fill: textColor }),
            React.createElement("path", { d: "M391.41,40.54A5.32,5.32,0,0,1,393,36.62,5.6,5.6,0,0,1,397.19,35a5.51,5.51,0,0,1,4.11,1.62,5.43,5.43,0,0,1,1.58,3.92,5.47,5.47,0,0,1-5.69,5.61A5.6,5.6,0,0,1,393,44.53,5.39,5.39,0,0,1,391.41,40.54ZM392.2,52c.43-.11,1-.24,1.86-.4a13.81,13.81,0,0,1,2.65-.24,6.78,6.78,0,0,1,4.16,1c.87.69,1.3,1.9,1.3,3.64V89.1c-.42.11-1,.24-1.86.4a14.69,14.69,0,0,1-2.65.23,6.75,6.75,0,0,1-4.15-1c-.87-.69-1.31-1.9-1.31-3.64Z", transform: "translate(-4.83 -21.33)", fill: textColor }),
            React.createElement("path", { d: "M435.43,60.07a8.11,8.11,0,0,0-5.26-1.58,15.69,15.69,0,0,0-4.23.55,13.33,13.33,0,0,0-3.36,1.43V89.1l-1.9.4a14.51,14.51,0,0,1-2.69.23,6.76,6.76,0,0,1-4.11-1c-.9-.69-1.35-1.9-1.35-3.64V59.68a5.45,5.45,0,0,1,.79-3.09,8.82,8.82,0,0,1,2.45-2.29,20.66,20.66,0,0,1,6.09-2.65,31.07,31.07,0,0,1,8.39-1.07q8.14,0,12.61,3.6t4.47,10.56V89.1c-.42.11-1,.24-1.86.4a14.61,14.61,0,0,1-2.65.23,6.77,6.77,0,0,1-4.15-1c-.87-.69-1.3-1.9-1.3-3.64v-20A6.09,6.09,0,0,0,435.43,60.07Z", transform: "translate(-4.83 -21.33)", fill: textColor }),
            React.createElement("path", { d: "M471.85,50.58q7.75,0,12.38,3.32t4.63,10.29V82.46a4.46,4.46,0,0,1-.95,3,10,10,0,0,1-2.38,2,19.06,19.06,0,0,1-5.61,2.14,34.81,34.81,0,0,1-7.75.79q-7.92,0-12.46-3.05t-4.55-9.13q0-5.31,3.36-8.11t9.77-3.44l10.84-1.11V64.11A4.92,4.92,0,0,0,477,59.68a11.14,11.14,0,0,0-6.13-1.43,23.69,23.69,0,0,0-6,.76,28.64,28.64,0,0,0-5.22,1.85,5,5,0,0,1-1.46-1.7,4.68,4.68,0,0,1-.6-2.33,4.09,4.09,0,0,1,.76-2.57,6.43,6.43,0,0,1,2.41-1.78,23.31,23.31,0,0,1,5.22-1.42A36.59,36.59,0,0,1,471.85,50.58Zm.32,32.19a18.8,18.8,0,0,0,4.19-.43,7.84,7.84,0,0,0,2.77-1.07V72.49l-7.67.71a11,11,0,0,0-4.83,1.39A3.69,3.69,0,0,0,465,78a4.18,4.18,0,0,0,1.7,3.56C467.8,82.35,469.64,82.77,472.17,82.77Z", transform: "translate(-4.83 -21.33)", fill: textColor }),
            React.createElement("path", { d: "M521.56,60.07a8.09,8.09,0,0,0-5.26-1.58,15.69,15.69,0,0,0-4.23.55,13.65,13.65,0,0,0-3.36,1.43V89.1l-1.9.4a14.51,14.51,0,0,1-2.69.23,6.76,6.76,0,0,1-4.11-1c-.9-.69-1.35-1.9-1.35-3.64V59.68a5.53,5.53,0,0,1,.79-3.09,8.74,8.74,0,0,1,2.46-2.29A20.66,20.66,0,0,1,508,51.65a30.94,30.94,0,0,1,8.38-1.07q8.14,0,12.62,3.6t4.47,10.56V89.1c-.43.11-1.05.24-1.86.4a14.69,14.69,0,0,1-2.65.23,6.78,6.78,0,0,1-4.16-1c-.87-.69-1.3-1.9-1.3-3.64v-20A6.09,6.09,0,0,0,521.56,60.07Z", transform: "translate(-4.83 -21.33)", fill: textColor }),
            React.createElement("path", { d: "M562.89,58.57a11.86,11.86,0,0,0-4.39.79A9.73,9.73,0,0,0,555,61.65a11.13,11.13,0,0,0-2.34,3.72,14,14,0,0,0-.87,5.14q0,5.86,3.09,8.82a11,11,0,0,0,8,3,13.71,13.71,0,0,0,4.78-.75,26.48,26.48,0,0,0,3.6-1.62,6.68,6.68,0,0,1,1.78,1.82,4.19,4.19,0,0,1,.67,2.37q0,2.68-3.16,4.43A17.79,17.79,0,0,1,562,90.29a26.48,26.48,0,0,1-8.27-1.23,17.1,17.1,0,0,1-6.44-3.72,16.62,16.62,0,0,1-4.16-6.2,23.61,23.61,0,0,1-1.46-8.63,22.5,22.5,0,0,1,1.58-8.74,17.15,17.15,0,0,1,10.68-10,24,24,0,0,1,7.75-1.23,16.61,16.61,0,0,1,8.46,1.86q3.17,1.86,3.17,4.55a4.15,4.15,0,0,1-.67,2.29,6.2,6.2,0,0,1-1.55,1.66,28.24,28.24,0,0,0-3.52-1.62A13,13,0,0,0,562.89,58.57Z", transform: "translate(-4.83 -21.33)", fill: textColor }),
            React.createElement("path", { d: "M588.83,74.94a9.44,9.44,0,0,0,4.11,5.86,14.19,14.19,0,0,0,7.44,1.82,18.33,18.33,0,0,0,6.13-1,22.5,22.5,0,0,0,4.55-2.1,5.31,5.31,0,0,1,1.82,1.74,4.35,4.35,0,0,1,.71,2.37,4.16,4.16,0,0,1-1.07,2.81,8.66,8.66,0,0,1-2.93,2.1,18,18,0,0,1-4.39,1.34,29.17,29.17,0,0,1-5.45.48,27.15,27.15,0,0,1-8.51-1.27,17.28,17.28,0,0,1-6.56-3.84,17.77,17.77,0,0,1-4.27-6.36A23.41,23.41,0,0,1,578.86,70a22.27,22.27,0,0,1,1.51-8.54,17.46,17.46,0,0,1,4.07-6.09,16.21,16.21,0,0,1,6-3.64,21.75,21.75,0,0,1,7.2-1.19,19.94,19.94,0,0,1,7.12,1.23,16.41,16.41,0,0,1,5.54,3.4,15.64,15.64,0,0,1,3.59,5.22,16.58,16.58,0,0,1,1.31,6.6A4.41,4.41,0,0,1,614,70.36a5.76,5.76,0,0,1-3.2,1.42Zm8.78-16.84a8.87,8.87,0,0,0-6.49,2.57A10.86,10.86,0,0,0,588.2,68l17.56-2.61a8.8,8.8,0,0,0-2.3-5.1A7.51,7.51,0,0,0,597.61,58.1Z", transform: "translate(-4.83 -21.33)", fill: textColor }))));
};
var LogoWithText = React.memo(Logo, function (prev, next) { return prev.isDark === next.isDark; });

var Icon$15 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$16 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$17 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "M19.22,5.6a8.34,8.34,0,0,0-6-2.45A10.07,10.07,0,0,0,7.4,5.43,12.29,12.29,0,0,0,7,3.34C6.9,3,6.62,2,5.75,2S4.58,3,4.48,3.34a13.47,13.47,0,0,0-.39,2.11A55.47,55.47,0,0,0,3.75,12c0,1.57,0,3.13.14,4.49a2.57,2.57,0,0,0-.71,1.77,4.6,4.6,0,0,1,0,1.18,4.37,4.37,0,0,1-.32,1.29A4.17,4.17,0,0,1,2,22l2.59-.1a3.69,3.69,0,0,0,2.64-1,3.85,3.85,0,0,0,1.08-2.64,2.53,2.53,0,0,0-.71-1.77c0-.42.05-.85.07-1.29a3.34,3.34,0,0,1,1.95,1.13A2.49,2.49,0,0,1,10,18.22a2.15,2.15,0,0,0,.28,1.61,1.91,1.91,0,0,0,1.25.83A8.84,8.84,0,0,0,22,12,9,9,0,0,0,19.22,5.6ZM5.92,15.7H5.57c0-.54-.06-1.12-.07-1.7H6C6,14.58,6,15.16,5.92,15.7ZM5.47,12a56,56,0,0,1,.27-5.86s0,0,0-.06a.13.13,0,0,0,0,.06C5.93,7.76,6,9.84,6,12v.28H5.47Zm12.2,5.48A7.06,7.06,0,0,1,11.81,19a.19.19,0,0,1-.14-.09.33.33,0,0,1,0-.28A4.16,4.16,0,0,0,11,15.33a5.07,5.07,0,0,0-3.29-1.87c0-.29,0-.63,0-.91a2.13,2.13,0,0,0,.49.21,2,2,0,0,0,1.52-.21,2.06,2.06,0,0,0,.93-1.21,2,2,0,0,0-.2-1.51,2.05,2.05,0,0,0-1.22-.94,2,2,0,0,0-1.57.25c0-.56-.05-1.08-.09-1.59A10,10,0,0,1,9.61,6a7.81,7.81,0,0,1,3.61-1.12,6.77,6.77,0,0,1,4.82,2A7.23,7.23,0,0,1,20.28,12,7.1,7.1,0,0,1,17.67,17.48ZM7.91,10.6A.86.86,0,0,1,8.74,10,.91.91,0,0,1,9,10a.84.84,0,0,1,.6,1.05.87.87,0,0,1-.82.64.91.91,0,0,1-.23,0A.89.89,0,0,1,7.91,10.6Z" }),
            React.createElement("path", { d: "M17.78,7.37a2.06,2.06,0,0,0-2.83,0,2,2,0,0,0-.59,1.42,1.93,1.93,0,0,0,.59,1.4,2,2,0,0,0,1.41.6,2,2,0,0,0,1.42-.6,1.92,1.92,0,0,0,.58-1.4A2,2,0,0,0,17.78,7.37ZM17,9.4a.86.86,0,1,1,0-1.23A.89.89,0,0,1,17,9.4Z" }),
            React.createElement("path", { d: "M13.89,7.09a2,2,0,0,0-3.66-.48A2,2,0,0,0,12,9.6a1.93,1.93,0,0,0,.53-.07A2,2,0,0,0,13.89,7.09Zm-2.75.74a.84.84,0,0,1,.6-1,.83.83,0,0,1,.22,0,1,1,0,0,1,.44.11.93.93,0,0,1,.4.53.88.88,0,0,1-.09.65.9.9,0,0,1-.53.4.73.73,0,0,1-.22,0A.84.84,0,0,1,11.14,7.83Z" }),
            React.createElement("path", { d: "M16.25,15.88a2,2,0,0,0-.93-1.21,2,2,0,0,0-1.51-.2,2,2,0,0,0-1.49,1.93,1.84,1.84,0,0,0,.07.51,2,2,0,0,0,1.93,1.49,1.7,1.7,0,0,0,.51-.07A2,2,0,0,0,16.25,15.88Zm-2.76.74a.84.84,0,0,1,.61-1.05.82.82,0,0,1,.65.08.92.92,0,0,1,.41.52.88.88,0,0,1-.62,1.06.78.78,0,0,1-.22,0A.85.85,0,0,1,13.49,16.62Z" }),
            React.createElement("path", { d: "M18.06,11.25a1.91,1.91,0,0,0-.52-.07A2,2,0,0,0,17,15.12a2.29,2.29,0,0,0,.51.06,2,2,0,0,0,.53-3.93Zm.31,2.16a.82.82,0,0,1-.4.51.85.85,0,0,1-.43.12l-.23,0a.84.84,0,0,1-.6-1,.86.86,0,0,1,1.05-.61.87.87,0,0,1,.61,1.06Z" })),
        React.createElement("rect", { width: "24", height: "24", fill: "none" })));
};

var Icon$18 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "M21.49,13.59a.92.92,0,0,0-1,.09l-2.17,1.63h-2.3l2.65-2.65a.94.94,0,0,0,0-1.32L17.24,9.88l.26-.25A2.64,2.64,0,0,0,13.77,5.9l-.26.25L12.05,4.68a1,1,0,0,0-1.31,0l-.25.26L8.84,3.3a2.38,2.38,0,0,0-3.37,0L3.34,5.44a4.56,4.56,0,0,0,0,6.46l.09.1-.51.51a3.11,3.11,0,0,0,0,4.42l3.55,3.55a3.19,3.19,0,0,0,4.41,0l.89-.9h6.58l2.17,1.62a.87.87,0,0,0,.55.2.88.88,0,0,0,.42-.11.92.92,0,0,0,.51-.83v-6A.92.92,0,0,0,21.49,13.59ZM15.07,7.21a.78.78,0,1,1,1.11,1.11l-.25.25L14.82,7.46ZM11.4,6.65,16.74,12l-.5.5L10.89,7.16Zm-6.75.1L6.78,4.61a.57.57,0,0,1,.38-.16.55.55,0,0,1,.38.16L9.18,6.25,4.74,10.69l-.09-.1a2.7,2.7,0,0,1,0-3.84ZM9.57,19.17a1.33,1.33,0,0,1-1.8,0L4.23,15.61a1.25,1.25,0,0,1-.38-.89,1.27,1.27,0,0,1,.38-.9L9.58,8.46l5.35,5.35Zm8.16-1.44h-4.1l.57-.57h3.53Zm1.85.46v-1.5l.57-.42v2.34Z" }),
            React.createElement("path", { d: "M11.27,12.12a.67.67,0,0,0-.7-.17l-2.68.9a2.06,2.06,0,0,0-1.42,2,2.12,2.12,0,0,0,2.11,2.11,2.08,2.08,0,0,0,2-1.42l.89-2.68a.58.58,0,0,0,0-.22A.64.64,0,0,0,11.27,12.12ZM8.58,15.66a.85.85,0,0,1-.85-.86A.82.82,0,0,1,8.28,14l1.61-.54L9.36,15.1A.82.82,0,0,1,8.58,15.66Z" })),
        React.createElement("rect", { width: "24", height: "24", fill: "none" })));
};

var Icon$19 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React.createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React.createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React.createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React.createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React.createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React.createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React.createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$1a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$1b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M21.51,9,15,2.47a1.64,1.64,0,0,0-2.29,0L2.48,12.68A1.69,1.69,0,0,0,2,13.87,1.59,1.59,0,0,0,2.49,15l1.39,1.39a.9.9,0,0,0,1.21.09A1.75,1.75,0,0,1,7.54,18.9a.94.94,0,0,0,.09,1.22L9,21.53a1.7,1.7,0,0,0,1.18.48,1.63,1.63,0,0,0,1.12-.49l10.19-10.2A1.69,1.69,0,0,0,22,10.13,1.65,1.65,0,0,0,21.51,9Zm-3.38,2.38-.56-.54a.48.48,0,0,0-.68,0l-.63.64a.48.48,0,0,0,0,.68l.53.53a.49.49,0,0,1,0,.69L10.18,20l-.73-.73a3.64,3.64,0,0,0-.75-4,3.58,3.58,0,0,0-4-.76L4,13.83,10.6,7.2a.49.49,0,0,1,.69,0l.56.56a.48.48,0,0,0,.68,0l.64-.63a.48.48,0,0,0,0-.68l-.56-.58a.48.48,0,0,1,0-.68l.87-.87a.49.49,0,0,1,.69,0l5.51,5.51a.49.49,0,0,1,0,.69l-.87.87A.49.49,0,0,1,18.13,11.39Z" }),
        React.createElement("path", { d: "M14.28,7.78h.89a.48.48,0,0,1,.48.48v2.05a.49.49,0,0,1-.49.49h-.89a.48.48,0,0,1-.48-.48V8.27a.49.49,0,0,1,.49-.49Z", transform: "translate(-2.26 13.14) rotate(-45.03)" }),
        React.createElement("path", { id: "C", d: "M11.8,13.46c.18.18.23.42.11.55s-.36.07-.55-.11-.23-.42-.11-.55S11.61,13.28,11.8,13.46Z" }),
        React.createElement("path", { d: "M12.74,12.49c.18.18.24.43.12.55s-.37.08-.55-.1-.24-.43-.12-.55S12.56,12.31,12.74,12.49Z" }),
        React.createElement("path", { d: "M14.45,11.34l0,0,0,0-.24.25,0,0-.27.29,0,0,0,0a1,1,0,0,0-.38-.25,1.17,1.17,0,0,0-.41-.1,1.47,1.47,0,0,0-.54.1,3.51,3.51,0,0,1-.87.27,2.7,2.7,0,0,1-.85,0,2.51,2.51,0,0,1,0,.86,4,4,0,0,1-.25.88,1.11,1.11,0,0,0-.08.53,1.29,1.29,0,0,0,.1.42,1,1,0,0,0,.26.36l0,0,0,0-.28.28,0,0-.24.24,0,0,0,0a2.07,2.07,0,0,1-.6-1.08,1.85,1.85,0,0,1,.1-1.17,2,2,0,0,0,.15-.47,1.72,1.72,0,0,0,0-.39,1.53,1.53,0,0,0,0-.38l-.4-1.42,1.44.36a1.69,1.69,0,0,0,.37,0,1.74,1.74,0,0,0,.39,0,2,2,0,0,0,.47-.16,1.84,1.84,0,0,1,1.17-.13A2.21,2.21,0,0,1,14.45,11.34Z" }),
        React.createElement("rect", { width: "24", height: "24", fill: "none" })));
};

var Icon$1c = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19.21,5.37a1,1,0,0,1-.25.74,1,1,0,0,1-1.44.09A8.65,8.65,0,0,0,11.8,4,8.55,8.55,0,0,0,7.61,5.14l.2.2a1,1,0,0,1-.72,1.75H4.89a1,1,0,0,1-1-1V3.87a1,1,0,0,1,.63-.94,1.05,1.05,0,0,1,1.11.22l.5.51a10.63,10.63,0,0,1,12.76,1A1,1,0,0,1,19.21,5.37Z" }),
        React.createElement("path", { d: "M20.12,17.54v2.19a1,1,0,0,1-.62.94.88.88,0,0,1-.39.08,1,1,0,0,1-.72-.31L18,20.05A10.57,10.57,0,0,1,11.9,22a10.72,10.72,0,0,1-7.08-2.68,1,1,0,0,1-.33-.69,1,1,0,0,1,.25-.74,1,1,0,0,1,1.43-.09,8.6,8.6,0,0,0,10.36.79l-.34-.33A1.05,1.05,0,0,1,16,17.15a1,1,0,0,1,.94-.62h2.2A1,1,0,0,1,20.12,17.54Z" }),
        React.createElement("path", { d: "M14,14.15c0,.52-.28.94-.62.94s-.62-.42-.62-.94.27-.93.62-.93S14,13.64,14,14.15Z" }),
        React.createElement("path", { d: "M11.27,14.15c0,.52-.27.94-.62.94s-.62-.42-.62-.94.28-.93.62-.93S11.27,13.64,11.27,14.15Z" }),
        React.createElement("path", { d: "M18,15v.08H16.28V15a2.65,2.65,0,0,0-.18-.87,2.2,2.2,0,0,0-.44-.74,2.65,2.65,0,0,0-.89-.63,7.71,7.71,0,0,1-1.6-.87A5.49,5.49,0,0,1,12,10.66a5.34,5.34,0,0,1-1.18,1.23,7.71,7.71,0,0,1-1.6.87,2.4,2.4,0,0,0-.89.63,2.26,2.26,0,0,0-.44.73,2.69,2.69,0,0,0-.18.88v.09H6V15a4.3,4.3,0,0,1,.7-2.35,3.69,3.69,0,0,1,1.81-1.49,4.17,4.17,0,0,0,.9-.44,5,5,0,0,0,.62-.49,3.44,3.44,0,0,0,.48-.57L12,7.09l1.49,2.55a2.92,2.92,0,0,0,.48.57,4.19,4.19,0,0,0,1.52.93,3.74,3.74,0,0,1,1.81,1.49A4.31,4.31,0,0,1,18,15Z" }),
        React.createElement("rect", { width: "24", height: "24", fill: "none" })));
};

var Icon$1d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$1e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 26 26" }, props),
        React.createElement("path", { d: "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1ZM10.56,11.46a2,2,0,1,1,2-2A2,2,0,0,1,10.56,11.46Zm1.57,2.13,0,0a3.55,3.55,0,0,0,1.84.51,8.52,8.52,0,0,0,1.94-.16,10.47,10.47,0,0,0,1.88-.58,9.23,9.23,0,0,0,.9-.42l.3-.18.46-.31.07-.05.08,0-.06.08a7.47,7.47,0,0,1-1.69,1.08,10.28,10.28,0,0,1-1.88.68,6,6,0,0,1-2,.24,3,3,0,0,1-.83-.18A2.22,2.22,0,0,1,12.13,13.59Zm5-2.13A.43.43,0,0,1,17.6,11a.44.44,0,0,1,.43.43.42.42,0,0,1-.43.42A.42.42,0,0,1,17.17,11.46ZM13.8,22c-.42-3,2.18-5.89,3.64-7.38.33-.33.83-.79,1.29-1.27l.1-.1c1.85-1.76,2.18-3.85-1.67-4.9-.74-.21-1.5-.52-2.28-.82a1.33,1.33,0,0,0-.11-.24.15.15,0,0,0-.06-.09A2.26,2.26,0,0,0,12,6.57a5.76,5.76,0,0,0-2.67-.08c-3.7,1-4.35,2.81-4.51,5v.06a17.8,17.8,0,0,1-1.23,6.26A10.17,10.17,0,1,1,13.8,22Z", transform: "translate(-1 -1)" }),
        React.createElement("path", { d: "M11.94,9.51a1.39,1.39,0,1,1-1.38-1.38A1.38,1.38,0,0,1,11.94,9.51Z", transform: "translate(-1 -1)" })));
};

var Icon$1f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 26 26" }, props),
        React.createElement("path", { d: "M20.13,14.15a1.18,1.18,0,0,1-1.2.07,1.71,1.71,0,0,1-.68-1.61V10.2A2.08,2.08,0,0,0,17,8c-1.32-.38-2.3,1.21-2.68,1.81L12,13.51V9c0-1-.37-1.67-1-1.86C10.54,7,9.89,7.05,9.26,8l-5.2,8.23A9,9,0,1,1,21,12v.05a2.25,2.25,0,0,1-.86,2.1ZM23,12V12a11,11,0,1,0-3.53,8.12,1,1,0,0,0-1.34-1.49h0a9,9,0,0,1-12.57-.32L5.31,18,10,10.57V14c0,1.64.64,2.18,1.19,2.33s1.37.05,2.24-1.34L16,10.86l.23-.35v2.1A3.67,3.67,0,0,0,18,16a3.2,3.2,0,0,0,3.22-.13A4.19,4.19,0,0,0,23,12Z", transform: "translate(-1 -1)" })));
};

var Icon$1g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.93,13.36c1.34,2.62,2.45,4.8,2.45,4.84a14.29,14.29,0,0,1-1.27-.87,10,10,0,0,1-3.64-6.95,8,8,0,0,1,0-1.74C6.5,8.64,7.32,10.19,8.93,13.36Z", transform: "translate(-2 -2)" }),
        React.createElement("path", { d: "M13.49,15.51C12.69,17,12,18.22,12,18.22S9.24,12.89,9.22,12.8a18.53,18.53,0,0,1,2.85-.07c1.57,0,2.86,0,2.86,0Z", transform: "translate(-2 -2)" }),
        React.createElement("path", { d: "M17.56,8.62A14,14,0,0,1,17.47,11a9.92,9.92,0,0,1-4.31,6.84c-.43.29-.52.36-.52.27l1.54-2.87c.84-1.6,1.93-3.69,2.42-4.73S17.53,8.62,17.56,8.62Z", transform: "translate(-2 -2)" }),
        React.createElement("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM7.78,7c.06,0,.93-.35,2.15-.71L12,5.69l2.13.64A20.43,20.43,0,0,1,16.31,7a.22.22,0,0,1,.05.16.34.34,0,0,1-.25.24s-1-.26-2.09-.62L12,6.2l-2,.6c-1.09.33-2,.62-2,.62a.16.16,0,0,1-.16,0C7.69,7.36,7.67,7.13,7.78,7Zm9.64,6.16a10.21,10.21,0,0,1-3.91,5,12.09,12.09,0,0,1-1.44.86c-.07.05-.29-.06-.6-.24a10.4,10.4,0,0,1-5.54-9.4,5.45,5.45,0,0,1,.2-1.85.22.22,0,0,1,.2,0c.18,0,0-.36,2,3.58l.62,1.22,3.16,0,3.15,0,1.14-2.33,1.15-2.4a.33.33,0,0,1,.36,0A3.76,3.76,0,0,1,18,8.69,11.72,11.72,0,0,1,17.42,13.18Z", transform: "translate(-2 -2)" }),
        React.createElement("path", { d: "M5.77,4.56A.34.34,0,0,1,5.67,4,30.4,30.4,0,0,1,8.9,2.93L12,2l3.2,1A27.3,27.3,0,0,1,18.46,4a.3.3,0,0,1,.07.23.53.53,0,0,1-.37.37c-.07,0-1.47-.4-3.13-.93l-3-.94-3,.9c-1.63.5-3,.93-3,.93s-.13,0-.23,0Z", transform: "translate(-2.9 -2)" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$Y,
    GroupsIcon: Icon$Z,
    HamburgerIcon: Icon$_,
    HamburgerCloseIcon: Icon$$,
    HomeIcon: Icon$10,
    IfoIcon: Icon$11,
    InfoIcon: Icon$12,
    GithubIcon: Icon$13,
    LanguageIcon: Icon$14,
    LogoIcon: LogoWithText,
    MoonIcon: Icon$15,
    MoreIcon: Icon$16,
    NftIcon: Icon$17,
    PoolIcon: Icon$18,
    SunIcon: Icon$19,
    TelegramIcon: Icon$1a,
    TicketIcon: Icon$1b,
    TradeIcon: Icon$1c,
    TwitterIcon: Icon$1d,
    CgIcon: Icon$1e,
    CmcIcon: Icon$1f,
    AuditIcon: Icon$1g
});

var MenuButton = styled(Button)(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$A;

var StyledLink$1 = styled(Link$1)(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Logo$1 = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React.createElement(React.Fragment, null,
        React.createElement(Icon$x, { className: "mobile-icon" }),
        React.createElement(LogoWithText, { className: "desktop-icon", isDark: isDark })));
    return (React.createElement(Flex, null,
        React.createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "12px" }, isPushed ? (React.createElement(Icon$$, { width: "24px", color: "textSubtle" })) : (React.createElement(Icon$_, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React.createElement(StyledLink$1, { as: "a", href: href, "aria-label": "Ogeefinance home page" }, innerLogo)) : (React.createElement(StyledLink$1, { to: href, "aria-label": "Ogeefinance home page" }, innerLogo))));
};
var Logo$2 = React.memo(Logo$1, function (prev, next) { return prev.isPushed === next.isPushed && prev.isDark === next.isDark; });
var templateObject_1$B;

var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://ogee.exchange",
            },
            {
                label: "Liquidity",
                href: "https://ogee.exchange/#/pool",
            },
        ],
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        href: "/opool",
    },
    {
        label: "Lottery",
        icon: "TicketIcon",
        href: "/lottery",
    },
    {
        label: "NFT",
        icon: "NftIcon",
        href: "/nft",
    },
    {
        label: "Profile & Teams",
        icon: "GroupsIcon",
        items: [
            {
                label: "Leaderboard",
                href: "/teams",
            },
            {
                label: "YourProfile",
                href: "/",
            },
        ],
        calloutClass: "rainbow",
    },
    {
        label: "Info",
        icon: "InfoIcon",
        items: [
            {
                label: "Overview",
                href: "https://info.ogee.exchange",
            },
            {
                label: "Tokens",
                href: "https://info.ogee.exchange/tokens",
            },
            {
                label: "Pairs",
                href: "https://info.ogee.exchange/pairs",
            },
            {
                label: "Accounts",
                href: "https://info.ogee.exchange/accounts",
            },
        ],
    },
    {
        label: "IFO",
        icon: "IfoIcon",
        items: [
            {
                label: "Next",
                href: "/ifo",
            },
            {
                label: "History",
                href: "/ifo/history",
            },
        ],
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            {
                label: "Voting",
                href: "https://voting.ogee.finance",
            },
            {
                label: "Github",
                href: "https://github.com/ogeefinance",
            },
            {
                label: "Docs",
                href: "https://docs.ogee.finance",
            },
            {
                label: "Blog",
                href: "https://ogeeswap.medium.com",
            },
        ],
    },
];
var socials = [
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/ogee_finance",
    },
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: [
            {
                label: "English",
                href: "https://t.me/ogeefinance",
            },
            {
                label: "Announcements",
                href: "https://t.me/ogeefinanceann",
            },
        ],
    },
    {
        label: "Github",
        icon: "GithubIcon",
        href: "https://github.com/ogeefinance",
    },
    {
        label: "CoinMarketCap",
        icon: "CmcIcon",
        href: "#",
    },
    {
        label: "CoinGecko",
        icon: "CgIcon",
        href: "#",
    },
    {
        label: "Audit",
        icon: "AuditIcon",
        href: "#",
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = keyframes(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled.div(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  font-weight: 600;\n  flex-grow: 1;\n"], ["\n  color: ",
    ";\n  transition: color 0.4s;\n  font-weight: 600;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return isPushed ? theme.colors.textSubtle : "transparent";
});
var MenuEntry = styled.div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ",
    ";\n  color: ", ";\n  box-shadow: ",
    ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return secondary ? theme.colors.background : "transparent";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var LinkLabelMemo = React.memo(LinkLabel, function (prev, next) { return prev.isPushed === next.isPushed; });
var templateObject_1$C, templateObject_2$c, templateObject_3$6;

var Container$2 = styled.div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled.div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ",
    ";\n  border-style: solid;\n  border-width: 1px 0;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent";
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className, isActive = _a.isActive;
    var _c = useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React.createElement(Container$2, null,
        React.createElement(MenuEntry, { onClick: handleClick, className: className, isActive: isActive },
            icon,
            React.createElement(LinkLabelMemo, { isPushed: isPushed }, label),
            isOpen ? React.createElement(Icon$8, null) : React.createElement(Icon$7, null)),
        React.createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React.Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var Accordion$1 = React.memo(Accordion, function (prev, next) { return prev.isPushed === next.isPushed; });
var templateObject_1$D, templateObject_2$d;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React.createElement(Tag, __assign({}, props, otherProps));
};

var Icons = IconModule;
var Container$3 = styled.div(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React.createElement(Container$3, null, links.map(function (entry) {
        var Icon = Icons[entry.icon];
        var iconElement = React.createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass
            ? entry.calloutClass
            : undefined;
        if (entry.items) {
            var itemsMatchIndex = entry.items.findIndex(function (item) { return item.href === location.pathname; });
            var initialOpenState = entry.initialOpenState === true
                ? entry.initialOpenState
                : itemsMatchIndex >= 0;
            return (React.createElement(Accordion$1, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: initialOpenState, className: calloutClass, isActive: entry.items.some(function (item) { return item.href === location.pathname; }) }, isPushed &&
                entry.items.map(function (item) { return (React.createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React.createElement(MenuLink, { href: item.href }, item.label))); })));
        }
        return (React.createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React.createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React.createElement(LinkLabelMemo, { isPushed: isPushed }, entry.label))));
    })));
};
var templateObject_1$E;

var Icons$1 = IconModule;
var MoonIcon = Icons$1.MoonIcon, SunIcon = Icons$1.SunIcon;
var ThemeSwitcher = function (_a) {
    var isDark = _a.isDark, toggleTheme = _a.toggleTheme;
    return (React.createElement(Button, { variant: "text", onClick: function () { return toggleTheme(!isDark); } },
        React.createElement(Flex, { alignItems: "center" },
            React.createElement(SunIcon, { color: isDark ? "textDisabled" : "text", width: "24px" }),
            React.createElement(Text, { color: "textDisabled", mx: "4px" }, "/"),
            React.createElement(MoonIcon, { color: isDark ? "text" : "textDisabled", width: "24px" }))));
};
var ThemeSwitcher$1 = React.memo(ThemeSwitcher, function (prev, next) { return prev.isDark === next.isDark; });

var Icons$2 = IconModule;
var SocialLinks = function () { return (React.createElement(Flex, null, socials.map(function (social, index) {
    var Icon = Icons$2[social.icon];
    var iconProps = {
        width: "24px",
        color: "textSubtle",
        style: { cursor: "pointer" },
    };
    var mr = index < socials.length - 1 ? "10px" : 0;
    if (social.items) {
        return (React.createElement(Dropdown, { key: social.label, position: "top", target: React.createElement(Icon, __assign({}, iconProps, { mr: mr })) }, social.items.map(function (item) { return (React.createElement(Link, { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "textSubtle" }, item.label)); })));
    }
    return (React.createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
        React.createElement(Icon, __assign({}, iconProps))));
}))); };
var SocialLinks$1 = React.memo(SocialLinks, function () { return true; });

var Icons$3 = IconModule;
var LanguageIcon = Icons$3.LanguageIcon;
var LangSelector = function (_a) {
    var currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang;
    return (React.createElement(Dropdown, { position: "top-right", target: React.createElement(Button, { variant: "text", startIcon: React.createElement(LanguageIcon, { color: "textSubtle", width: "24px" }) },
            React.createElement(Text, { color: "textSubtle" }, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) }, langs.map(function (lang) { return (React.createElement(MenuButton, { key: lang.code, fullWidth: true, onClick: function () { return setLang(lang); }, 
        // Safari fix
        style: { minHeight: "32px", height: "auto" } }, lang.language)); })));
};
var LangSelector$1 = React.memo(LangSelector, function (prev, next) { return prev.currentLang === next.currentLang; });

var Container$4 = styled.div(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var SettingsEntry = styled.div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled.div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, toggleTheme = _a.toggleTheme, isDark = _a.isDark, 
    //  ogeePriceUsd,
    currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang;
    if (!isPushed) {
        return (React.createElement(Container$4, null,
            React.createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React.createElement(Icon$o, null))));
    }
    return (React.createElement(Container$4, null,
        React.createElement(SocialEntry, null,
            React.createElement(SocialLinks$1, null)),
        React.createElement(SettingsEntry, null,
            React.createElement(ThemeSwitcher$1, { isDark: isDark, toggleTheme: toggleTheme }),
            React.createElement(LangSelector$1, { currentLang: currentLang, langs: langs, setLang: setLang }))));
};
var templateObject_1$F, templateObject_2$e, templateObject_3$7;

var StyledPanel = styled.div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ",
    ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ",
    ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React.createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React.createElement(PanelBody, __assign({}, props)),
        React.createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$G;

var Icon$1h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React.createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React.createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React.createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React.createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React.createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React.createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React.createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React.createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React.createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React.createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React.createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React.createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$1i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$1j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React.createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$1k = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React.createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var ConnectorNames;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["HECO"] = "heco";
})(ConnectorNames || (ConnectorNames = {}));

var connectors = [
    {
        title: "Metamask",
        icon: Icon$1h,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "MathWallet",
        icon: Icon$1i,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "TokenPocket",
        icon: Icon$1j,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "WalletConnect",
        icon: Icon$1k,
        connectorId: ConnectorNames.WalletConnect,
    },
];
var connectorLocalStorageKey = "connectorId";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React.createElement(Button, { width: "100%", variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React.createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React.createElement(Icon, { width: "32px" })));
};

var HelpLink = styled(Link)(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React.createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React.createElement(HelpLink, { href: "https://docs.ogee.finance/guides/faq#how-do-i-set-up-my-wallet-on-huobi-eco-chain", external: true },
            React.createElement(Icon$s, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
var templateObject_1$H;

var StyleButton = styled(Text).attrs({ role: "button" })(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled.div(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ",
    ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return isTooltipDisplayed ? "block" : "none";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React.createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React.createElement(Icon$r, { width: "20px", color: "primary", ml: "4px" }),
        React.createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$I, templateObject_2$f;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React.createElement(Text, { fontSize: "20px", bold: true, style: {
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                marginBottom: "8px",
            } }, account),
        React.createElement(Flex, { mb: "32px" },
            React.createElement(LinkExternal, { small: true, href: "https://hecoinfo.com/address/" + account, mr: "16px" }, "View on HecoInfo"),
            React.createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React.createElement(Flex, { justifyContent: "center" },
            React.createElement(Button, { scale: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(connectorLocalStorageKey);
                    onDismiss();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React.createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React.createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account
        ? account.substring(0, 4) + "..." + account.substring(account.length - 4)
        : null;
    return (React.createElement("div", null, account ? (React.createElement(Button, { scale: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React.createElement(Button, { scale: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};
var UserBlock$1 = React.memo(UserBlock, function (prevProps, nextProps) { return prevProps.account === nextProps.account; });

var StyledAvatar = styled.div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"])));
var Pip = styled.div(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var Avatar = function (_a) {
    var profile = _a.profile;
    var _b = profile.username, username = _b === void 0 ? "Bunny" : _b, image = profile.image, profileLink = profile.profileLink, noProfileLink = profile.noProfileLink, _c = profile.showPip, showPip = _c === void 0 ? false : _c;
    var link = profile.username ? profileLink : noProfileLink;
    var isExternal = link.startsWith("http");
    var ariaLabel = "Link to profile";
    var icon = image ? (React.createElement("img", { src: image, alt: "profile avatar", height: "32px", width: "32px" })) : (React.createElement(Icon$B, { width: "32px", height: "32px" }));
    if (isExternal) {
        return (React.createElement(StyledAvatar, { title: username },
            React.createElement("a", { href: link, "aria-label": ariaLabel }, icon),
            showPip && React.createElement(Pip, null)));
    }
    return (React.createElement(StyledAvatar, { title: username },
        React.createElement(Link$1, { to: link, "aria-label": ariaLabel }, icon),
        showPip && React.createElement(Pip, null)));
};
var templateObject_1$J, templateObject_2$g;

var Wrapper$1 = styled.div(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled.nav(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled.div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled.div(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ",
    ";\n    max-width: ",
    ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
}, function (_a) {
    var isPushed = _a.isPushed;
    return "calc(100% - " + (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px)";
});
var MobileOnlyOverlay = styled(Overlay)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, ogeePriceUsd = _a.ogeePriceUsd, links = _a.links, profile = _a.profile, children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = useRef(window.pageYOffset);
    useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight ===
                currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle(handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React.createElement(Wrapper$1, null,
        React.createElement(StyledNav, { showMenu: showMenu },
            React.createElement(Logo$2, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React.createElement(Flex, null,
                React.createElement(UserBlock$1, { account: account, login: login, logout: logout }),
                profile && React.createElement(Avatar, { profile: profile }))),
        React.createElement(BodyWrapper, null,
            React.createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, ogeePriceUsd: ogeePriceUsd, pushNav: setIsPushed, links: links }),
            React.createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React.createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); } }))));
};
var templateObject_1$K, templateObject_2$h, templateObject_3$8, templateObject_4$2, templateObject_5$1;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React.createElement(Button, __assign({ as: "a", scale: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React.createElement(Button, { as: Link$1, scale: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a$4;
var alertTypeMap = (_a$4 = {},
    _a$4[types.INFO] = variants$1.INFO,
    _a$4[types.SUCCESS] = variants$1.SUCCESS,
    _a$4[types.DANGER] = variants$1.DANGER,
    _a$4[types.WARNING] = variants$1.WARNING,
    _a$4);
var StyledToast = styled.div(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = useRef();
    var ref = useRef(null);
    var removeHandler = useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = useCallback(function () { return removeHandler.current(id); }, [
        id,
        removeHandler,
    ]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React.createElement(CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React.createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React.createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React.createElement(React.Fragment, null,
                React.createElement(Text, { as: "p", mb: "8px" }, description),
                React.createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$L;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled.div(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React.createElement(StyledToastContainer, null,
        React.createElement(TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React.createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$M;

var ResetCSS = createGlobalStyle(templateObject_1$N || (templateObject_1$N = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Source Sans Pro', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", ";\n    border-radius: 10px;\n  }\n\n  /* Slider */\n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Source Sans Pro', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", ";\n    border-radius: 10px;\n  }\n\n  /* Slider */\n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1$N;

var baseColors = {
    failure: "#F33F67",
    primary: "#6868FF",
    primaryBright: "#53DEE9",
    primaryDark: "#6565F1",
    secondary: "#4344B5",
    success: "#29DCA2",
    warning: "#FFB237",
};
var brandColors = {
    huobi: "#088DCA",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#F9F9FF", backgroundDisabled: "#E5EAEF", contrast: "#16181D", invertedContrast: "#F7F7FD", input: "#F1F1FB", inputSecondary: "#CACAF1", tertiary: "#EEEEF5", text: "#262636", textDisabled: "#BDC2C4", textSubtle: "#646490", borderColor: "#E9EAEB", card: "#FEFEFF", gradients: {
        bubblegum: "linear-gradient(139.73deg, #F6F6FF 0%,#DDDDFF 100%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#7878FF", background: "#181822", backgroundDisabled: "#454756", contrast: "#FEFEFF", invertedContrast: "#1F212B", input: "#303240", inputSecondary: "#505096", primaryDark: "#6565F1", tertiary: "#2C2F3B", text: "#F2F2FF", textDisabled: "#606271", textSubtle: "#9797CC", borderColor: "#33373C", card: "#232430", gradients: {
        bubblegum: "linear-gradient(139.73deg, #33333F 0%, #44447A 100%)",
    } });

var light = {
    background: lightColors.card,
};
var dark = {
    background: darkColors.card,
};

var light$1 = {
    background: lightColors.card,
    boxShadow: "0px 2px 30px 0px rgba(221, 221, 238, 0.5)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #D3D3F9 0%, #E8ECFF 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$1 = {
    background: darkColors.card,
    boxShadow: "0px 2px 30px 0px rgba(23, 23, 30, 0.5)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #2E3044 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$2 = {
    handleBackground: lightColors.card,
};
var dark$2 = {
    handleBackground: darkColors.card,
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$4 = {
    background: lightColors.card,
    hover: "#EEEAF4",
};
var dark$4 = {
    background: darkColors.card,
    hover: "#473d5d",
};

var light$5 = {
    background: lightColors.card,
};
var dark$5 = {
    background: darkColors.card,
};

var light$6 = {
    background: darkColors.card,
    text: darkColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};
var dark$6 = {
    background: lightColors.card,
    text: lightColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark, colors: darkColors, card: dark$1, toggle: dark$3, nav: dark$4, modal: dark$5, radio: dark$2, tooltip: dark$6 });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light, colors: lightColors, card: light$1, toggle: light$3, nav: light$4, modal: light$5, radio: light$2, tooltip: light$6 });

export { Icon$4 as AddIcon, Alert, Icon$5 as ArrowBackIcon, Icon$6 as ArrowDownIcon, Icon$7 as ArrowDropDownIcon, Icon$8 as ArrowDropUpIcon, Icon$9 as ArrowForwardIcon, Icon$a as ArrowUpIcon, Icon$b as AutoRenewIcon, BackgroundImage, GridLayout as BaseLayout, Icon$2 as BlockIcon, Box, Breadcrumbs, Icon$d as BunnyPlaceholderIcon, Button, ButtonMenu, ButtonMenuItem, Icon$g as CalculateIcon, Card, CardBody, CardFooter, CardHeader, CardRibbon, Icon$f as CardViewIcon, Icon$e as Cards, GridLayout$1 as CardsLayout, Icon$h as ChartIcon, Checkbox, Icon as CheckmarkCircleIcon, Icon$i as CheckmarkIcon, Icon$j as ChevronDownIcon, Icon$k as ChevronLeftIcon, Icon$l as ChevronRightIcon, Icon$m as ChevronUpIcon, Icon$n as CloseIcon, Icon$o as CogIcon, Icon$p as CommunityIcon, Icon$q as Competition, ConnectorNames, Icon$r as CopyIcon, Dropdown, Icon$1 as ErrorIcon, FallingBunnies, Flex, Heading, Icon$s as HelpIcon, Icon$t as HistoryIcon, Icon$c as HuobiIcon, IconButton, Image, Icon$3 as InfoIcon, Input, Icon$u as LaurelLeftIcon, Icon$v as LaurelRightIcon, Link, LinkExternal, Icon$w as ListViewIcon, Icon$x as LogoIcon, Icon$y as LogoRoundIcon, Menu, Icon$z as MetamaskIcon, Icon$A as MinusIcon, Modal, ModalProvider, Icon$B as NoProfileAvatarIcon, NotificationDot, Icon$E as OgeefinanceRoundIcon, Icon$D as OgeefinancesIcon, Icon$C as OpenNewIcon, Icon$F as PlayCircleOutlineIcon, Icon$G as Predictions, Icon$H as PrizeIcon, Progress, Icon$K as ProgressBunny, Radio, Icon$I as RemoveIcon, ResetCSS, Icon$R as SearchIcon, Skeleton, Spinner, Svg, Icon$S as SwapVertIcon, Icon$T as SyncAltIcon, Tag, Icon$N as TestnetIcon, Text, Icon$O as Ticket, Icon$P as TicketRound, Icon$Q as TimerIcon, ToastContainer, Toggle, Icon$J as VerifiedIcon, Icon$U as VolumeOffIcon, Icon$V as VolumeUpIcon, Icon$L as WaitIcon, Icon$W as WarningIcon, Icon$M as Won, variants$1 as alertVariants, byTextAscending, byTextDescending, connectorLocalStorageKey, darkTheme as dark, darkColors, lightTheme as light, lightColors, makeRender, links as menuConfig, types as toastTypes, useKonamiCheatCode, useMatchBreakpoints, useModal, useParticleBurst, useTable, useWalletModal };
