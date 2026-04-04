import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&family=Dancing+Script:wght@400;500;600;700&display=swap');

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  /* Dynamic glass-card colors based on theme */
  .glass-card {
    background: ${({ theme }) => theme.cardBg || "rgba(18, 24, 48, 0.6)"};
    border-color: ${({ theme }) =>
      theme.cardBorder || "rgba(0, 212, 255, 0.15)"};
  }

  .glass-card:hover {
    border-color: ${({ theme }) => theme.imageHighlight + "59"};
    box-shadow: 0 8px 32px ${({ theme }) => theme.imageHighlight + "26"};
  }

  /* Make secondary text color dynamic */
  .subTitle {
    color: ${({ theme }) => theme.secondaryText} !important;
  }
`;
