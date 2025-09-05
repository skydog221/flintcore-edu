import type { ThemeConfig } from "antd";

// 橙色主题色彩定义
const orangeColors = {
  // 主橙色调
  primary: {
    50: "#fff7ed", // 最浅
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316", // 主色
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12", // 最深
  },

  // 辅助橙色调
  secondary: {
    50: "#fef3e2",
    100: "#fde5b8",
    200: "#fcd38a",
    300: "#fbbf5c",
    400: "#faac3e",
    500: "#f99220", // 辅助主色
    600: "#e8841c",
    700: "#d67518",
    800: "#c46614",
    900: "#a5500d",
  },

  // 中性色调
  neutral: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
  },

  // 功能色调
  success: "#10b981",
  warning: "#f59e0b",
  error: "#ef4444",
  info: "#3b82f6",
};

// Ant Design 主题配置
export const orangeTheme: ThemeConfig = {
  token: {
    // 主色彩
    colorPrimary: orangeColors.primary[500],
    colorSuccess: orangeColors.success,
    colorWarning: orangeColors.warning,
    colorError: orangeColors.error,
    colorInfo: orangeColors.info,

    // 链接颜色
    colorLink: orangeColors.primary[600],
    colorLinkHover: orangeColors.primary[500],
    colorLinkActive: orangeColors.primary[700],

    // 文本颜色
    colorText: orangeColors.neutral[800],
    colorTextSecondary: orangeColors.neutral[600],
    colorTextTertiary: orangeColors.neutral[500],
    colorTextQuaternary: orangeColors.neutral[400],

    // 背景颜色
    colorBgContainer: "#ffffff",
    colorBgElevated: "#ffffff",
    colorBgLayout: orangeColors.neutral[50],
    colorBgSpotlight: orangeColors.primary[50],
    colorBgMask: "rgba(0, 0, 0, 0.45)",

    // 边框颜色
    colorBorder: orangeColors.neutral[200],
    colorBorderSecondary: orangeColors.neutral[100],

    // 填充颜色
    colorFill: orangeColors.neutral[100],
    colorFillSecondary: orangeColors.neutral[50],
    colorFillTertiary: orangeColors.neutral[25] || "#fbfaf9",
    colorFillQuaternary: orangeColors.neutral[25] || "#fbfaf9",

    // 字体
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: 14,
    fontSizeHeading1: 32,
    fontSizeHeading2: 24,
    fontSizeHeading3: 20,
    fontSizeHeading4: 16,
    fontSizeHeading5: 14,

    // 圆角
    borderRadius: 8,
    borderRadiusLG: 12,
    borderRadiusSM: 6,
    borderRadiusXS: 4,

    // 阴影
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    boxShadowSecondary:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",

    // 间距
    padding: 16,
    paddingLG: 24,
    paddingSM: 12,
    paddingXS: 8,
    paddingXXS: 4,

    margin: 16,
    marginLG: 24,
    marginSM: 12,
    marginXS: 8,
    marginXXS: 4,

    // 高度
    controlHeight: 36,
    controlHeightLG: 40,
    controlHeightSM: 28,

    // 线条宽度
    lineWidth: 1,
    lineWidthBold: 2,
  },

  components: {
    // Button 按钮组件
    Button: {
      colorPrimary: orangeColors.primary[500],
      colorPrimaryHover: orangeColors.primary[400],
      colorPrimaryActive: orangeColors.primary[600],
      primaryShadow: `0 2px 4px ${orangeColors.primary[200]}`,

      // 默认按钮
      colorBgContainer: "#ffffff",
      colorBorder: orangeColors.neutral[300],
      colorText: orangeColors.neutral[700],

      // 危险按钮
      colorError: orangeColors.error,
      colorErrorHover: "#dc2626",
      colorErrorActive: "#b91c1c",

      borderRadius: 8,
      controlHeight: 36,
      controlHeightLG: 40,
      controlHeightSM: 28,
    },

    // Layout 布局组件
    Layout: {
      headerBg: "#ffffff",
      headerColor: orangeColors.neutral[800],
      headerHeight: 64,
      headerPadding: "0 24px",

      bodyBg: orangeColors.neutral[50],
      footerBg: "#ffffff",
      footerPadding: "24px 48px",

      siderBg: "#ffffff",
      triggerBg: orangeColors.primary[500],
      triggerColor: "#ffffff",
    },

    // Menu 菜单组件
    Menu: {
      itemBg: "transparent",
      itemColor: orangeColors.neutral[700],
      itemHoverBg: orangeColors.primary[50],
      itemHoverColor: orangeColors.primary[600],
      itemSelectedBg: orangeColors.primary[100],
      itemSelectedColor: orangeColors.primary[700],
      itemActiveBg: orangeColors.primary[200],

      horizontalItemSelectedBg: "transparent",
      horizontalItemSelectedColor: orangeColors.primary[600],
      horizontalItemHoverBg: orangeColors.primary[50],

      subMenuItemBg: "#ffffff",
      popupBg: "#ffffff",
    },

    // Card 卡片组件
    Card: {
      colorBgContainer: "#ffffff",
      colorBorderSecondary: orangeColors.neutral[200],
      borderRadiusLG: 12,
      paddingLG: 24,

      headerBg: "transparent",
      headerHeight: 48,

      actionsBg: orangeColors.neutral[50],
      actionsLiMargin: "12px 0",

      tabsMarginBottom: 16,
    },

    // Input 输入框组件
    Input: {
      colorBgContainer: "#ffffff",
      colorBorder: orangeColors.neutral[300],
      colorBorderHover: orangeColors.primary[400],
      colorPrimaryHover: orangeColors.primary[500],
      colorPrimaryActive: orangeColors.primary[600],

      borderRadius: 8,
      controlHeight: 36,
      controlHeightLG: 40,
      controlHeightSM: 28,

      paddingInline: 12,
      paddingBlock: 8,
    },

    // Table 表格组件
    Table: {
      colorBgContainer: "#ffffff",
      colorBorderSecondary: orangeColors.neutral[200],

      headerBg: orangeColors.neutral[50],
      headerColor: orangeColors.neutral[800],
      headerSortActiveBg: orangeColors.primary[50],
      headerSortHoverBg: orangeColors.neutral[100],

      rowHoverBg: orangeColors.primary[25] || "#fef9f5",
      rowSelectedBg: orangeColors.primary[50],
      rowSelectedHoverBg: orangeColors.primary[100],

      borderColor: orangeColors.neutral[200],
      headerSplitColor: orangeColors.neutral[200],
    },

    // Form 表单组件
    Form: {
      labelColor: orangeColors.neutral[700],
      labelFontSize: 14,
      labelHeight: 24,
      labelColonMarginInlineStart: 2,
      labelColonMarginInlineEnd: 8,

      itemMarginBottom: 24,
      verticalLabelPadding: "0 0 8px",
      verticalLabelMargin: 0,
    },

    // Notification 通知组件
    Notification: {
      colorBgElevated: "#ffffff",
      colorIcon: orangeColors.primary[500],
      colorIconHover: orangeColors.primary[600],

      colorSuccess: orangeColors.success,
      colorInfo: orangeColors.info,
      colorWarning: orangeColors.warning,
      colorError: orangeColors.error,

      borderRadiusLG: 12,
      padding: 16,
      paddingMD: 24,
    },

    // Message 消息组件
    Message: {
      colorBgElevated: "#ffffff",
      colorSuccess: orangeColors.success,
      colorInfo: orangeColors.info,
      colorWarning: orangeColors.warning,
      colorError: orangeColors.error,

      borderRadiusLG: 8,
      padding: 12,
    },

    // Modal 模态框组件
    Modal: {
      colorBgElevated: "#ffffff",
      colorBgMask: "rgba(0, 0, 0, 0.45)",

      headerBg: "#ffffff",
      titleColor: orangeColors.neutral[800],
      titleFontSize: 20,

      contentBg: "#ffffff",
      footerBg: "transparent",

      borderRadiusLG: 12,
      padding: 24,
      paddingMD: 20,
    },

    // Tabs 标签页组件
    Tabs: {
      itemColor: orangeColors.neutral[600],
      itemHoverColor: orangeColors.primary[500],
      itemSelectedColor: orangeColors.primary[600],
      itemActiveColor: orangeColors.primary[700],

      inkBarColor: orangeColors.primary[500],

      titleFontSize: 14,
      titleFontSizeLG: 16,
      titleFontSizeSM: 12,

      horizontalMargin: "0 32px 0 0",
      horizontalItemPadding: "12px 0",

      cardBg: orangeColors.neutral[50],
      cardHeight: 40,
      cardPadding: "0 16px",
      cardGutter: 2,
    },

    // Select 选择器组件
    Select: {
      colorBgContainer: "#ffffff",
      colorBgElevated: "#ffffff",
      colorBorder: orangeColors.neutral[300],
      colorBorderHover: orangeColors.primary[400],

      optionSelectedBg: orangeColors.primary[50],
      optionSelectedColor: orangeColors.primary[700],
      optionActiveBg: orangeColors.primary[100],

      borderRadius: 8,
      controlHeight: 36,
      controlHeightLG: 40,
      controlHeightSM: 28,
    },

    // DatePicker 日期选择器组件
    DatePicker: {
      colorBgContainer: "#ffffff",
      colorBgElevated: "#ffffff",
      colorBorder: orangeColors.neutral[300],
      colorBorderHover: orangeColors.primary[400],

      cellHoverBg: orangeColors.primary[50],
      cellActiveWithRangeBg: orangeColors.primary[100],
      cellRangeBorderColor: orangeColors.primary[300],

      borderRadius: 8,
      controlHeight: 36,
      controlHeightLG: 40,
      controlHeightSM: 28,
    },

    // Progress 进度条组件
    Progress: {
      defaultColor: orangeColors.primary[500],
      remainingColor: orangeColors.neutral[200],

      circleTextColor: orangeColors.neutral[700],
      lineBorderRadius: 4,

      gradientFromColor: orangeColors.primary[400],
      gradientToColor: orangeColors.primary[600],
    },

    // Tag 标签组件
    Tag: {
      defaultBg: orangeColors.neutral[100],
      defaultColor: orangeColors.neutral[700],

      colorPrimary: orangeColors.primary[500],
      colorSuccess: orangeColors.success,
      colorWarning: orangeColors.warning,
      colorError: orangeColors.error,

      borderRadiusSM: 4,
      fontSizeSM: 12,
      lineHeightSM: 20,

      paddingInlineSM: 8,
      marginInlineEnd: 8,
    },

    // Breadcrumb 面包屑组件
    Breadcrumb: {
      itemColor: orangeColors.neutral[600],
      lastItemColor: orangeColors.neutral[800],
      linkColor: orangeColors.primary[600],
      linkHoverColor: orangeColors.primary[500],

      separatorColor: orangeColors.neutral[400],
      separatorMargin: "0 8px",

      fontSize: 14,
      iconFontSize: 14,
    },

    // Switch 开关组件
    Switch: {
      colorPrimary: orangeColors.primary[500],
      colorPrimaryHover: orangeColors.primary[400],

      colorTextQuaternary: orangeColors.neutral[400],
      colorTextTertiary: orangeColors.neutral[500],

      trackHeight: 22,
      trackMinWidth: 44,
      trackPadding: 2,

      handleBg: "#ffffff",
      handleSize: 18,
      handleSizeSM: 14,

      innerMinMargin: 4,
      innerMaxMargin: 24,
    },

    // Radio 单选框组件
    Radio: {
      colorPrimary: orangeColors.primary[500],
      colorPrimaryHover: orangeColors.primary[400],
      colorPrimaryActive: orangeColors.primary[600],

      buttonBg: "#ffffff",
      buttonCheckedBg: orangeColors.primary[500],
      buttonColor: orangeColors.neutral[700],
      buttonCheckedColor: "#ffffff",

      dotSize: 8,
      dotColorDisabled: orangeColors.neutral[300],

      radioSize: 16,
      borderWidth: 1,
      padding: 8,
    },

    // Checkbox 复选框组件
    Checkbox: {
      colorPrimary: orangeColors.primary[500],
      colorPrimaryHover: orangeColors.primary[400],
      colorPrimaryActive: orangeColors.primary[600],

      colorWhite: "#ffffff",

      controlInteractiveSize: 16,
      borderWidth: 1,
      borderRadius: 4,

      marginInlineEnd: 8,
      paddingInline: 8,
    },
  },

  algorithm: undefined, // 使用浅色主题算法
};

// 导出颜色常量供其他地方使用
export { orangeColors };

// 导出主题配置的类型定义
export type OrangeThemeConfig = typeof orangeTheme;
