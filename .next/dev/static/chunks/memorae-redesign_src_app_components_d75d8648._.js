(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/memorae-redesign/src/app/components/Navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/memorae-redesign/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/memorae-redesign/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/memorae-redesign/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Navigation() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "5874d197132343feb02cc3664f36a5ad9ddcb0531988376c00081196db2e1187") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5874d197132343feb02cc3664f36a5ad9ddcb0531988376c00081196db2e1187";
    }
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Navigation[useEffect()]": ()=>{
                const handleScroll = {
                    "Navigation[useEffect() > handleScroll]": ()=>{
                        setIsScrolled(window.scrollY > 50);
                    }
                }["Navigation[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll);
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["Navigation[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [
            {
                name: "Features",
                href: "#features"
            },
            {
                name: "How It Works",
                href: "#how-it-works"
            },
            {
                name: "Testimonials",
                href: "#testimonials"
            },
            {
                name: "Pricing",
                href: "#pricing"
            }
        ];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const navItems = t2;
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            y: -100
        };
        t4 = {
            y: 0
        };
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    const t5 = `fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            scale: 1.05
        };
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "flex items-center space-x-2",
            whileHover: t6,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                        className: "h-6 w-6 text-white"
                    }, void 0, false, {
                        fileName: "[project]/memorae-redesign/src/app/components/Navigation.tsx",
                        lineNumber: 86,
                        columnNumber: 155
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/memorae-redesign/src/app/components/Navigation.tsx",
                    lineNumber: 86,
                    columnNumber: 78
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xl font-bold gradient-text",
                    children: "Memorae AI"
                }, void 0, false, {
                    fileName: "[project]/memorae-redesign/src/app/components/Navigation.tsx",
                    lineNumber: 86,
                    columnNumber: 201
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/memorae-redesign/src/app/components/Navigation.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex items-center space-x-8",
            children: navItems.map(_NavigationNavItemsMap)
        }, void 0, false, {
            fileName: "[project]/memorae-redesign/src/app/components/Navigation.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            className: "px-4 py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors",
            whileHover: {
                scale: 1.05
            },
            whileTap: {
                scale: 0.95
            },
            children: "Log In"
        }, void 0, false, {
            fileName: "[project]/memorae-redesign/src/app/components/Navigation.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[9] = t9;
    } else {
        t9 = $[9];
    }
    let t10;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex items-center space-x-4",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    className: "px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium shadow-lg",
                    whileHover: {
                        scale: 1.05,
                        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
                    },
                    whileTap: {
                        scale: 0.95
                    },
                    children: "Get Started"
                }, void 0, false, {
                    fileName: "[project]/memorae-redesign/src/app/components/Navigation.tsx",
                    lineNumber: 111,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/memorae-redesign/src/app/components/Navigation.tsx",
            lineNumber: 111,
            columnNumber: 11
        }, this);
        $[10] = t10;
    } else {
        t10 = $[10];
    }
    let t11;
    if ($[11] !== isMobileMenuOpen) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "container mx-auto px-6 py-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    t7,
                    t8,
                    t10,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "md:hidden p-2",
                        onClick: {
                            "Navigation[<button>.onClick]": ()=>setIsMobileMenuOpen(!isMobileMenuOpen)
                        }["Navigation[<button>.onClick]"],
                        children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/memorae-redesign/src/app/components/Navigation.tsx",
                            lineNumber: 125,
                            columnNumber: 64
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/memorae-redesign/src/app/components/Navigation.tsx",
                            lineNumber: 125,
                            columnNumber: 82
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/memorae-redesign/src/app/components/Navigation.tsx",
                        lineNumber: 123,
                        columnNumber: 120
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/memorae-redesign/src/app/components/Navigation.tsx",
                lineNumber: 123,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/memorae-redesign/src/app/components/Navigation.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, this);
        $[11] = isMobileMenuOpen;
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] !== t11 || $[14] !== t5) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
            initial: t3,
            animate: t4,
            className: t5,
            children: t11
        }, void 0, false, {
            fileName: "[project]/memorae-redesign/src/app/components/Navigation.tsx",
            lineNumber: 133,
            columnNumber: 11
        }, this);
        $[13] = t11;
        $[14] = t5;
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    if ($[16] !== isMobileMenuOpen) {
        t13 = isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                height: 0
            },
            animate: {
                opacity: 1,
                height: "auto"
            },
            exit: {
                opacity: 0,
                height: 0
            },
            className: "fixed top-20 left-0 right-0 bg-white/95 backdrop-blur-md md:hidden z-40 border-b",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col space-y-4",
                    children: [
                        navItems.map({
                            "Navigation[navItems.map()]": (item_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: item_0.href,
                                    className: "py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors",
                                    onClick: {
                                        "Navigation[navItems.map() > <a>.onClick]": ()=>setIsMobileMenuOpen(false)
                                    }["Navigation[navItems.map() > <a>.onClick]"],
                                    children: item_0.name
                                }, item_0.name, false, {
                                    fileName: "[project]/memorae-redesign/src/app/components/Navigation.tsx",
                                    lineNumber: 152,
                                    columnNumber: 53
                                }, this)
                        }["Navigation[navItems.map()]"]),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col space-y-2 pt-4 border-t",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors",
                                    children: "Log In"
                                }, void 0, false, {
                                    fileName: "[project]/memorae-redesign/src/app/components/Navigation.tsx",
                                    lineNumber: 155,
                                    columnNumber: 99
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium",
                                    children: "Get Started"
                                }, void 0, false, {
                                    fileName: "[project]/memorae-redesign/src/app/components/Navigation.tsx",
                                    lineNumber: 155,
                                    columnNumber: 203
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/memorae-redesign/src/app/components/Navigation.tsx",
                            lineNumber: 155,
                            columnNumber: 44
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/memorae-redesign/src/app/components/Navigation.tsx",
                    lineNumber: 151,
                    columnNumber: 146
                }, this)
            }, void 0, false, {
                fileName: "[project]/memorae-redesign/src/app/components/Navigation.tsx",
                lineNumber: 151,
                columnNumber: 101
            }, this)
        }, void 0, false, {
            fileName: "[project]/memorae-redesign/src/app/components/Navigation.tsx",
            lineNumber: 142,
            columnNumber: 31
        }, this);
        $[16] = isMobileMenuOpen;
        $[17] = t13;
    } else {
        t13 = $[17];
    }
    let t14;
    if ($[18] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t13
        }, void 0, false, {
            fileName: "[project]/memorae-redesign/src/app/components/Navigation.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[18] = t13;
        $[19] = t14;
    } else {
        t14 = $[19];
    }
    let t15;
    if ($[20] !== t12 || $[21] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t12,
                t14
            ]
        }, void 0, true);
        $[20] = t12;
        $[21] = t14;
        $[22] = t15;
    } else {
        t15 = $[22];
    }
    return t15;
}
_s(Navigation, "0+zEKVBL95ILuBb5rHE6ViYOHu8=");
_c = Navigation;
function _NavigationNavItemsMap(item) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
        href: item.href,
        className: "text-gray-700 hover:text-blue-600 transition-colors font-medium",
        whileHover: {
            y: -2
        },
        whileTap: {
            scale: 0.95
        },
        children: item.name
    }, item.name, false, {
        fileName: "[project]/memorae-redesign/src/app/components/Navigation.tsx",
        lineNumber: 181,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/memorae-redesign/src/app/components/HowItWorks.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HowItWorks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/memorae-redesign/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/memorae-redesign/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
'use client';
;
;
;
;
const steps = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"],
        title: 'Upload & Capture',
        description: 'Import your existing photos, videos, and notes or capture new memories directly through the app.',
        color: 'blue'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
        title: 'AI Organization',
        description: 'Our AI analyzes content, recognizes faces, locations, and events to automatically organize everything.',
        color: 'purple'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"],
        title: 'Rediscover & Share',
        description: 'Easily search, revisit, and share your organized memories with intelligent recommendations.',
        color: 'green'
    }
];
function HowItWorks() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "5fcd61a21d71f6fcfb710a79ebd9d1e9c9747004ca24544b21465b3e67b0b3e3") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5fcd61a21d71f6fcfb710a79ebd9d1e9c9747004ca24544b21465b3e67b0b3e3";
    }
    let t0;
    let t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            opacity: 0,
            y: 30
        };
        t1 = {
            opacity: 1,
            y: 0
        };
        t2 = {
            duration: 0.8
        };
        t3 = {
            once: true
        };
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t0,
            whileInView: t1,
            transition: t2,
            viewport: t3,
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl lg:text-5xl font-bold text-gray-900 mb-6",
                    children: [
                        "How ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "gradient-text",
                            children: "Memorae AI"
                        }, void 0, false, {
                            fileName: "[project]/memorae-redesign/src/app/components/HowItWorks.tsx",
                            lineNumber: 61,
                            columnNumber: 182
                        }, this),
                        " Works"
                    ]
                }, void 0, true, {
                    fileName: "[project]/memorae-redesign/src/app/components/HowItWorks.tsx",
                    lineNumber: 61,
                    columnNumber: 112
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "Three simple steps to transform how you preserve and relive your memories"
                }, void 0, false, {
                    fileName: "[project]/memorae-redesign/src/app/components/HowItWorks.tsx",
                    lineNumber: 61,
                    columnNumber: 242
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/memorae-redesign/src/app/components/HowItWorks.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto",
            children: steps.map(_HowItWorksStepsMap)
        }, void 0, false, {
            fileName: "[project]/memorae-redesign/src/app/components/HowItWorks.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "how-it-works",
            className: "py-20 bg-gradient-to-br from-gray-50 to-blue-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6",
                children: [
                    t4,
                    t5,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex justify-between items-center max-w-4xl mx-auto mt-8 px-16",
                        children: [
                            steps.map(_HowItWorksStepsMap2),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-0 right-0 h-1 bg-blue-200 -z-10 mx-16"
                            }, void 0, false, {
                                fileName: "[project]/memorae-redesign/src/app/components/HowItWorks.tsx",
                                lineNumber: 75,
                                columnNumber: 268
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/memorae-redesign/src/app/components/HowItWorks.tsx",
                        lineNumber: 75,
                        columnNumber: 145
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/memorae-redesign/src/app/components/HowItWorks.tsx",
                lineNumber: 75,
                columnNumber: 97
            }, this)
        }, void 0, false, {
            fileName: "[project]/memorae-redesign/src/app/components/HowItWorks.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    return t6;
}
_c = HowItWorks;
function _HowItWorksStepsMap2(_, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            scale: 0
        },
        whileInView: {
            scale: 1
        },
        transition: {
            delay: index_0 * 0.3 + 0.5
        },
        viewport: {
            once: true
        },
        className: "w-4 h-4 bg-blue-500 rounded-full"
    }, index_0, false, {
        fileName: "[project]/memorae-redesign/src/app/components/HowItWorks.tsx",
        lineNumber: 83,
        columnNumber: 10
    }, this);
}
function _HowItWorksStepsMap(step, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 30
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.5,
            delay: index * 0.2
        },
        viewport: {
            once: true
        },
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-xl font-bold text-gray-900 border",
                children: index + 1
            }, void 0, false, {
                fileName: "[project]/memorae-redesign/src/app/components/HowItWorks.tsx",
                lineNumber: 105,
                columnNumber: 27
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl p-8 shadow-lg hover-lift h-full border border-gray-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `inline-flex p-4 rounded-xl bg-${step.color}-100 text-${step.color}-600 mb-6`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(step.icon, {
                            className: "h-8 w-8"
                        }, void 0, false, {
                            fileName: "[project]/memorae-redesign/src/app/components/HowItWorks.tsx",
                            lineNumber: 105,
                            columnNumber: 387
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/memorae-redesign/src/app/components/HowItWorks.tsx",
                        lineNumber: 105,
                        columnNumber: 292
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-semibold text-gray-900 mb-4",
                        children: step.title
                    }, void 0, false, {
                        fileName: "[project]/memorae-redesign/src/app/components/HowItWorks.tsx",
                        lineNumber: 105,
                        columnNumber: 426
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 leading-relaxed",
                        children: step.description
                    }, void 0, false, {
                        fileName: "[project]/memorae-redesign/src/app/components/HowItWorks.tsx",
                        lineNumber: 105,
                        columnNumber: 501
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/memorae-redesign/src/app/components/HowItWorks.tsx",
                lineNumber: 105,
                columnNumber: 199
            }, this)
        ]
    }, step.title, true, {
        fileName: "[project]/memorae-redesign/src/app/components/HowItWorks.tsx",
        lineNumber: 94,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "HowItWorks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/memorae-redesign/src/app/components/Testimonials.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/memorae-redesign/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/memorae-redesign/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
'use client';
;
;
;
;
const testimonials = [
    {
        name: 'Sarah Chen',
        role: 'Photography Enthusiast',
        content: 'Memorae AI has completely changed how I preserve family memories. The automatic organization saves me hours of manual work.',
        avatar: 'SC',
        rating: 5
    },
    {
        name: 'Marcus Johnson',
        role: 'Travel Blogger',
        content: 'As a traveler with thousands of photos, Memorae AI helps me find exactly what I need in seconds with simple searches.',
        avatar: 'MJ',
        rating: 5
    },
    {
        name: 'Elena Rodriguez',
        role: 'Event Planner',
        content: 'The sharing features allowed me to create beautiful digital albums for clients. They are always thrilled with the results!',
        avatar: 'ER',
        rating: 5
    }
];
function Testimonials() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "78f2ab6c5553a107eef77b461f8a66b819c05dc940f03f107338fb7bc6a0ba2f") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "78f2ab6c5553a107eef77b461f8a66b819c05dc940f03f107338fb7bc6a0ba2f";
    }
    let t0;
    let t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            opacity: 0,
            y: 30
        };
        t1 = {
            opacity: 1,
            y: 0
        };
        t2 = {
            duration: 0.8
        };
        t3 = {
            once: true
        };
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t0,
            whileInView: t1,
            transition: t2,
            viewport: t3,
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl lg:text-5xl font-bold text-gray-900 mb-6",
                    children: [
                        "What Our ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",
                            children: "Users Say"
                        }, void 0, false, {
                            fileName: "[project]/memorae-redesign/src/app/components/Testimonials.tsx",
                            lineNumber: 64,
                            columnNumber: 187
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/memorae-redesign/src/app/components/Testimonials.tsx",
                    lineNumber: 64,
                    columnNumber: 112
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "Join thousands of satisfied users who have transformed their memory management"
                }, void 0, false, {
                    fileName: "[project]/memorae-redesign/src/app/components/Testimonials.tsx",
                    lineNumber: 64,
                    columnNumber: 301
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/memorae-redesign/src/app/components/Testimonials.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "testimonials",
            className: "py-20 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6",
                children: [
                    t4,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto",
                        children: testimonials.map(_TestimonialsTestimonialsMap)
                    }, void 0, false, {
                        fileName: "[project]/memorae-redesign/src/app/components/Testimonials.tsx",
                        lineNumber: 71,
                        columnNumber: 108
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/memorae-redesign/src/app/components/Testimonials.tsx",
                lineNumber: 71,
                columnNumber: 64
            }, this)
        }, void 0, false, {
            fileName: "[project]/memorae-redesign/src/app/components/Testimonials.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    return t5;
}
_c = Testimonials;
function _TestimonialsTestimonialsMap(testimonial, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 30
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.5,
            delay: index * 0.2
        },
        viewport: {
            once: true
        },
        className: "bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex mb-4",
                children: [
                    ...Array(testimonial.rating)
                ].map(_TestimonialsTestimonialsMapAnonymous)
            }, void 0, false, {
                fileName: "[project]/memorae-redesign/src/app/components/Testimonials.tsx",
                lineNumber: 90,
                columnNumber: 159
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                className: "text-gray-700 text-lg leading-relaxed mb-6",
                children: [
                    '"',
                    testimonial.content,
                    '"'
                ]
            }, void 0, true, {
                fileName: "[project]/memorae-redesign/src/app/components/Testimonials.tsx",
                lineNumber: 90,
                columnNumber: 267
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4",
                        children: testimonial.avatar
                    }, void 0, false, {
                        fileName: "[project]/memorae-redesign/src/app/components/Testimonials.tsx",
                        lineNumber: 90,
                        columnNumber: 405
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-semibold text-gray-900",
                                children: testimonial.name
                            }, void 0, false, {
                                fileName: "[project]/memorae-redesign/src/app/components/Testimonials.tsx",
                                lineNumber: 90,
                                columnNumber: 584
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-600 text-sm",
                                children: testimonial.role
                            }, void 0, false, {
                                fileName: "[project]/memorae-redesign/src/app/components/Testimonials.tsx",
                                lineNumber: 90,
                                columnNumber: 653
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/memorae-redesign/src/app/components/Testimonials.tsx",
                        lineNumber: 90,
                        columnNumber: 579
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/memorae-redesign/src/app/components/Testimonials.tsx",
                lineNumber: 90,
                columnNumber: 370
            }, this)
        ]
    }, testimonial.name, true, {
        fileName: "[project]/memorae-redesign/src/app/components/Testimonials.tsx",
        lineNumber: 79,
        columnNumber: 10
    }, this);
}
function _TestimonialsTestimonialsMapAnonymous(_, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
        className: "h-5 w-5 fill-yellow-400 text-yellow-400"
    }, i, false, {
        fileName: "[project]/memorae-redesign/src/app/components/Testimonials.tsx",
        lineNumber: 93,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Testimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/memorae-redesign/src/app/components/Pricing.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Pricing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/memorae-redesign/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/memorae-redesign/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
'use client';
;
;
;
;
const plans = [
    {
        name: 'Starter',
        price: 'Free',
        description: 'Perfect for getting started with memory management',
        features: [
            'Up to 1,000 memories',
            'Basic AI organization',
            '1GB storage',
            'Mobile app access',
            'Standard support'
        ],
        highlighted: false
    },
    {
        name: 'Pro',
        price: '$9',
        period: '/month',
        description: 'Best for individuals and families',
        features: [
            'Up to 10,000 memories',
            'Advanced AI organization',
            '50GB storage',
            'Priority support',
            'Family sharing (up to 5 people)',
            'Advanced search',
            'Custom memory collections'
        ],
        highlighted: true
    },
    {
        name: 'Enterprise',
        price: '$29',
        period: '/month',
        description: 'For organizations and power users',
        features: [
            'Unlimited memories',
            'Premium AI organization',
            '500GB storage',
            '24/7 premium support',
            'Team collaboration',
            'Advanced analytics',
            'Custom integrations',
            'Dedicated account manager'
        ],
        highlighted: false
    }
];
function Pricing() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "c09ddddd8907d09872e402c249591af22b9fcf4277e77ad9e1937e1b428c2688") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c09ddddd8907d09872e402c249591af22b9fcf4277e77ad9e1937e1b428c2688";
    }
    let t0;
    let t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            opacity: 0,
            y: 30
        };
        t1 = {
            opacity: 1,
            y: 0
        };
        t2 = {
            duration: 0.8
        };
        t3 = {
            once: true
        };
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t0,
            whileInView: t1,
            transition: t2,
            viewport: t3,
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl lg:text-5xl font-bold text-gray-900 mb-6",
                    children: [
                        "Simple, Transparent ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",
                            children: "Pricing"
                        }, void 0, false, {
                            fileName: "[project]/memorae-redesign/src/app/components/Pricing.tsx",
                            lineNumber: 66,
                            columnNumber: 198
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/memorae-redesign/src/app/components/Pricing.tsx",
                    lineNumber: 66,
                    columnNumber: 112
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "Choose the plan that works best for you and your memories"
                }, void 0, false, {
                    fileName: "[project]/memorae-redesign/src/app/components/Pricing.tsx",
                    lineNumber: 66,
                    columnNumber: 310
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/memorae-redesign/src/app/components/Pricing.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "pricing",
            className: "py-20 bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6",
                children: [
                    t4,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-3 gap-8 max-w-7xl mx-auto",
                        children: plans.map(_PricingPlansMap)
                    }, void 0, false, {
                        fileName: "[project]/memorae-redesign/src/app/components/Pricing.tsx",
                        lineNumber: 73,
                        columnNumber: 105
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/memorae-redesign/src/app/components/Pricing.tsx",
                lineNumber: 73,
                columnNumber: 61
            }, this)
        }, void 0, false, {
            fileName: "[project]/memorae-redesign/src/app/components/Pricing.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    return t5;
}
_c = Pricing;
function _PricingPlansMap(plan, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 30
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.5,
            delay: index * 0.2
        },
        viewport: {
            once: true
        },
        className: `relative rounded-2xl p-8 ${plan.highlighted ? "bg-white shadow-2xl border-2 border-blue-500 scale-105" : "bg-white shadow-lg border border-gray-100"}`,
        children: [
            plan.highlighted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-4 left-1/2 transform -translate-x-1/2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold",
                    children: "Most Popular"
                }, void 0, false, {
                    fileName: "[project]/memorae-redesign/src/app/components/Pricing.tsx",
                    lineNumber: 92,
                    columnNumber: 260
                }, this)
            }, void 0, false, {
                fileName: "[project]/memorae-redesign/src/app/components/Pricing.tsx",
                lineNumber: 92,
                columnNumber: 191
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-gray-900 mb-2",
                        children: plan.name
                    }, void 0, false, {
                        fileName: "[project]/memorae-redesign/src/app/components/Pricing.tsx",
                        lineNumber: 92,
                        columnNumber: 439
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-baseline justify-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-4xl font-bold text-gray-900",
                                children: plan.price
                            }, void 0, false, {
                                fileName: "[project]/memorae-redesign/src/app/components/Pricing.tsx",
                                lineNumber: 92,
                                columnNumber: 566
                            }, this),
                            plan.period && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-600 ml-1",
                                children: plan.period
                            }, void 0, false, {
                                fileName: "[project]/memorae-redesign/src/app/components/Pricing.tsx",
                                lineNumber: 92,
                                columnNumber: 652
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/memorae-redesign/src/app/components/Pricing.tsx",
                        lineNumber: 92,
                        columnNumber: 509
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: plan.description
                    }, void 0, false, {
                        fileName: "[project]/memorae-redesign/src/app/components/Pricing.tsx",
                        lineNumber: 92,
                        columnNumber: 716
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/memorae-redesign/src/app/components/Pricing.tsx",
                lineNumber: 92,
                columnNumber: 405
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-4 mb-8",
                children: plan.features.map(_PricingPlansMapPlanFeaturesMap)
            }, void 0, false, {
                fileName: "[project]/memorae-redesign/src/app/components/Pricing.tsx",
                lineNumber: 92,
                columnNumber: 773
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                className: `w-full py-3 px-6 rounded-lg font-semibold transition-all ${plan.highlighted ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                whileHover: {
                    scale: 1.02
                },
                whileTap: {
                    scale: 0.98
                },
                children: "Get Started"
            }, void 0, false, {
                fileName: "[project]/memorae-redesign/src/app/components/Pricing.tsx",
                lineNumber: 92,
                columnNumber: 861
            }, this)
        ]
    }, plan.name, true, {
        fileName: "[project]/memorae-redesign/src/app/components/Pricing.tsx",
        lineNumber: 81,
        columnNumber: 10
    }, this);
}
function _PricingPlansMapPlanFeaturesMap(feature) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                className: "h-5 w-5 text-green-500 mr-3 flex-shrink-0"
            }, void 0, false, {
                fileName: "[project]/memorae-redesign/src/app/components/Pricing.tsx",
                lineNumber: 99,
                columnNumber: 58
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$memorae$2d$redesign$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-700",
                children: feature
            }, void 0, false, {
                fileName: "[project]/memorae-redesign/src/app/components/Pricing.tsx",
                lineNumber: 99,
                columnNumber: 121
            }, this)
        ]
    }, feature, true, {
        fileName: "[project]/memorae-redesign/src/app/components/Pricing.tsx",
        lineNumber: 99,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Pricing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=memorae-redesign_src_app_components_d75d8648._.js.map