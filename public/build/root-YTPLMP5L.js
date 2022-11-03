import {
  GlobalStyles,
  createTheme_default,
  defaultTheme_default,
  red_default,
  require_jsx_runtime,
  require_prop_types,
  useThemeProps
} from "/build/_shared/chunk-YU33SMKH.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  __toESM,
  _extends,
  init_extends,
  require_emotion_react_cjs,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GPSCDPY4.js";

// node_modules/react-multi-carousel/lib/styles.css
var styles_default = "/build/_assets/styles-CKMVMKON.css";

// src/root.tsx
var import_react2 = __toESM(require_emotion_react_cjs());

// node_modules/@mui/material/esm/GlobalStyles/GlobalStyles.js
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var import_jsx_runtime = __toESM(require_jsx_runtime());
function GlobalStyles2(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalStyles, _extends({}, props, {
    defaultTheme: defaultTheme_default
  }));
}
true ? GlobalStyles2.propTypes = {
  styles: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.number, import_prop_types.default.object, import_prop_types.default.shape({
    __emotion_styles: import_prop_types.default.any.isRequired
  }), import_prop_types.default.string, import_prop_types.default.bool])
} : void 0;
var GlobalStyles_default = GlobalStyles2;

// node_modules/@mui/material/esm/CssBaseline/CssBaseline.js
init_extends();
var React2 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var html = (theme2, enableColorScheme) => _extends({
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  boxSizing: "border-box",
  WebkitTextSizeAdjust: "100%"
}, enableColorScheme && !theme2.vars && {
  colorScheme: theme2.palette.mode
});
var body = (theme2) => _extends({
  color: (theme2.vars || theme2).palette.text.primary
}, theme2.typography.body1, {
  backgroundColor: (theme2.vars || theme2).palette.background.default,
  "@media print": {
    backgroundColor: (theme2.vars || theme2).palette.common.white
  }
});
var styles = (theme2, enableColorScheme = false) => {
  var _theme$components, _theme$components$Mui;
  const colorSchemeStyles = {};
  if (enableColorScheme && theme2.colorSchemes) {
    Object.entries(theme2.colorSchemes).forEach(([key, scheme]) => {
      var _scheme$palette;
      colorSchemeStyles[theme2.getColorSchemeSelector(key).replace(/\s*&/, "")] = {
        colorScheme: (_scheme$palette = scheme.palette) == null ? void 0 : _scheme$palette.mode
      };
    });
  }
  let defaultStyles = _extends({
    html: html(theme2, enableColorScheme),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: theme2.typography.fontWeightBold
    },
    body: _extends({
      margin: 0
    }, body(theme2), {
      "&::backdrop": {
        backgroundColor: (theme2.vars || theme2).palette.background.default
      }
    })
  }, colorSchemeStyles);
  const themeOverrides = (_theme$components = theme2.components) == null ? void 0 : (_theme$components$Mui = _theme$components.MuiCssBaseline) == null ? void 0 : _theme$components$Mui.styleOverrides;
  if (themeOverrides) {
    defaultStyles = [defaultStyles, themeOverrides];
  }
  return defaultStyles;
};
function CssBaseline(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiCssBaseline"
  });
  const {
    children,
    enableColorScheme = false
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(React2.Fragment, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(GlobalStyles_default, {
      styles: (theme2) => styles(theme2, enableColorScheme)
    }), children]
  });
}
true ? CssBaseline.propTypes = {
  children: import_prop_types2.default.node,
  enableColorScheme: import_prop_types2.default.bool
} : void 0;
var CssBaseline_default = CssBaseline;

// css-theme/theme.js
var theme = createTheme_default({
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red_default.A400
    }
  }
});
var theme_default = theme;

// src/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => ({
  charset: "utf-8",
  title: "Ball Hog",
  viewport: "width=device-width,initial-scale=1"
});
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    },
    {
      rel: "stylesheet",
      href: styles_default
    }
  ];
};
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 48,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "emotion-insertion-point",
            content: ""
          }, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 49,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "src/root.tsx",
        lineNumber: 46,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.ThemeProvider, {
        theme: theme_default,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
          "data-theme": theme_default,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CssBaseline_default, {}, void 0, false, {
              fileName: "src/root.tsx",
              lineNumber: 53,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
              fileName: "src/root.tsx",
              lineNumber: 54,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
              fileName: "src/root.tsx",
              lineNumber: 55,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
              fileName: "src/root.tsx",
              lineNumber: 56,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
              fileName: "src/root.tsx",
              lineNumber: 57,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "src/root.tsx",
          lineNumber: 52,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "src/root.tsx",
        lineNumber: 51,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "src/root.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-YTPLMP5L.js.map
