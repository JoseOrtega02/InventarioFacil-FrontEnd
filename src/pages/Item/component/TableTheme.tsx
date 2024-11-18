import { iconSetQuartzBold, themeQuartz } from "@ag-grid-community/theming";

// to use myTheme in an application, pass it to the theme grid option
export const myTheme: any = themeQuartz
  .withPart(iconSetQuartzBold)
  .withParams({
    spacing: "12px",
    accentColor: "#ED7D31",
    backgroundColor: "#F6F1EE",
    browserColorScheme: "inherit",
    chromeBackgroundColor: {
      ref: "foregroundColor",
      mix: 0.07,
      onto: "backgroundColor"
    },
    foregroundColor: "#202729",
    headerFontSize: 14
  });

