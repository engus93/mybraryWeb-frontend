import React from "react";

export const UpArrow = ({ size = 24, fill = "white", className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={fill}
    viewBox="0 0 24 24"
  >
    <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
  </svg>
);

export const DownArrow = ({ size = 24, fill = "white", className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
  >
    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
  </svg>
);

export const LeftArrow = ({
  size = 24,
  fill = "white",
  className,
  disabled
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
  >
    <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
  </svg>
);

export const RightArrow = ({
  size = 24,
  fill = "white",
  className,
  disabled
}) => (
  <svg
    disabled={disabled}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
  >
    <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
  </svg>
);

export const BackArrow = ({ size = 24, fill = "white" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
  >
    <path d="M13.427 3.021h-7.427v-3.021l-6 5.39 6 5.61v-3h7.427c3.071 0 5.561 2.356 5.561 5.427 0 3.071-2.489 5.573-5.561 5.573h-7.427v5h7.427c5.84 0 10.573-4.734 10.573-10.573s-4.733-10.406-10.573-10.406z" />
  </svg>
);

export const Person = ({ size = 24, fill = "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
  >
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z" />
  </svg>
);

export const Library = ({ size = 24, fill = "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
  >
    <path d="M18.376 13.896l-2.376.479.479-2.375 1.897 1.896zm-1.425-2.368l1.896 1.896 5.153-5.153-1.896-1.896-5.153 5.153zm3.31 3.311l-.094.08v2.241c-3.927.269-6.853 1.148-8.25 1.649v-11.74c2.705-1.602 7.582-2.172 10.083-2.303v-1.766c-4.202.128-8.307.804-11 2.481-2.693-1.677-6.798-2.353-11-2.481v15.904c3.608.11 7.146.624 9.778 1.829.775.355 1.666.356 2.444 0 2.633-1.205 6.169-1.718 9.777-1.829v-5.804l-1.738 1.739zm-10.178 3.969c-1.397-.5-4.322-1.38-8.25-1.649v-12.228c4.727.356 6.9 1.341 8.25 2.14v11.737zm4.959-4.263l.177-1.066-2.219.549v1.019l2.042-.502z" />
  </svg>
);

export const OtherPosts = ({ size = 24, fill = "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
  >
    <path d="M15 12h-10v1h10v-1zm-4 2h-6v1h6v-1zm4-6h-10v1h10v-1zm0 2h-10v1h10v-1zm0-6h-10v1h10v-1zm0 2h-10v1h10v-1zm7.44 10.277c.183-2.314-.433-2.54-3.288-5.322.171 1.223.528 3.397.911 5.001.089.382-.416.621-.586.215-.204-.495-.535-2.602-.82-4.72-.154-1.134-1.661-.995-1.657.177.005 1.822.003 3.341 0 6.041-.003 2.303 1.046 2.348 1.819 4.931.132.444.246.927.339 1.399l3.842-1.339c-1.339-2.621-.693-4.689-.56-6.383zm-6.428 1.723h-13.012v-16h14v7.894c.646-.342 1.348-.274 1.877.101l.123-.018v-8.477c0-.828-.672-1.5-1.5-1.5h-15c-.828 0-1.5.671-1.5 1.5v17c0 .829.672 1.5 1.5 1.5h13.974c-.245-.515-.425-1.124-.462-2z" />
  </svg>
);

export const LogOut = ({ size = 24, fill = "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
  >
    <path d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-2 10v-.083c-1.178.685-2.542 1.083-4 1.083-4.411 0-8-3.589-8-8s3.589-8 8-8c1.458 0 2.822.398 4 1.083v-2.245c-1.226-.536-2.577-.838-4-.838-5.522 0-10 4.477-10 10s4.478 10 10 10c1.423 0 2.774-.302 4-.838v-2.162z" />
  </svg>
);

export const DropHamburger = ({ className, size = 24, fill = "white" }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
  >
    <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
  </svg>
);

export const Home = ({ className, size = 24, fill = "white" }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
  >
    <path d="M12 9.185l7 6.514v6.301h-14v-6.301l7-6.514zm0-2.732l-9 8.375v9.172h18v-9.172l-9-8.375zm2 14.547h-4v-6h4v6zm10-8.852l-1.361 1.465-10.639-9.883-10.639 9.868-1.361-1.465 12-11.133 12 11.148z" />
  </svg>
);

export const GitHub = ({ className, size = 24, fill = "white" }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export const Write = ({ className, size = 24, fill = "white" }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
  >
    <path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z" />
  </svg>
);

export const Nothing = ({ className, size = 24, fill = "black" }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
  >
    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
  </svg>
);

export const DotMenu = ({ className, size = 24, fill = "black", onClick }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    onClick={onClick}
  >
    <path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
  </svg>
);

export const FloatingWrite = ({ className }) => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <img
    className={className}
    src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUzLjI1NSA1My4yNTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUzLjI1NSA1My4yNTU7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojRDc1QTRBOyIgZD0iTTM5LjU5OCwyLjM0M2MzLjEyNC0zLjEyNCw4LjE5LTMuMTI0LDExLjMxNCwwczMuMTI0LDguMTksMCwxMS4zMTRMMzkuNTk4LDIuMzQzeiIvPgo8cG9seWdvbiBzdHlsZT0iZmlsbDojRUQ4QTE5OyIgcG9pbnRzPSI0Mi40MjYsMTcuODk5IDE2LjUxMiw0My44MTQgMTUuOTgyLDQ4LjU4NyA0NC41NDgsMjAuMDIgNDQuNTQ4LDIwLjAyICIvPgo8cG9seWdvbiBzdHlsZT0iZmlsbDojRUQ4QTE5OyIgcG9pbnRzPSIxMC4zMjUsNDIuOTMgMTUuMDk4LDQyLjQgNDEuMDEyLDE2LjQ4NSAzNi43NywxMi4yNDMgMTAuODU1LDM4LjE1NyAiLz4KPHBvbHlnb24gc3R5bGU9ImZpbGw6I0VEOEExOTsiIHBvaW50cz0iMzUuMzU2LDEwLjgyOSAzMy4yMzQsOC43MDcgMzMuMjM0LDguNzA3IDQuNjY4LDM3LjI3MyA5LjQ0MSwzNi43NDMgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNDN0NBQzc7IiBwb2ludHM9IjQ4Ljc5LDE1Ljc3OCA0OC43OSwxNS43NzggNTAuOTEyLDEzLjY1NyAzOS41OTgsMi4zNDMgMzcuNDc2LDQuNDY1IDM3LjQ3Nyw0LjQ2NSAiLz4KPHBvbHlnb24gc3R5bGU9ImZpbGw6I0M3Q0FDNzsiIHBvaW50cz0iMzYuMDYyLDUuODc5IDM2LjA2Miw1Ljg3OSAzNC42NDgsNy4yOTMgMzQuNjQ4LDcuMjkzIDQ1Ljk2MiwxOC42MDYgNDUuOTYyLDE4LjYwNiAgIDQ3LjM3NiwxNy4xOTIgNDcuMzc2LDE3LjE5MiAiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZCQ0U5RDsiIGQ9Ik0xNC40MjQsNDQuNDg4bC01LjEyMiwwLjU2OWMtMC4wMzYsMC4wMDQtMC4wNzMsMC4wMDYtMC4xMDksMC4wMDZjMCwwLTAuMDAxLDAtMC4wMDEsMEg5LjE5Mkg5LjE5MiAgYy0wLjAwMSwwLTAuMDAxLDAtMC4wMDEsMGMtMC4wMzYsMC0wLjA3My0wLjAwMi0wLjEwOS0wLjAwNmMtMC4wMzktMC4wMDQtMC4wNzEtMC4wMjYtMC4xMDgtMC4wMzUgIGMtMC4wNzItMC4wMTctMC4xNDEtMC4wMzUtMC4yMDctMC4wNjdjLTAuMDUtMC4wMjQtMC4wOTMtMC4wNTMtMC4xMzgtMC4wODRjLTAuMDU3LTAuMDQtMC4xMDktMC4wODMtMC4xNTctMC4xMzQgIGMtMC4wMzgtMC4wNC0wLjA2OS0wLjA4MS0wLjEtMC4xMjdjLTAuMDM4LTAuMDU3LTAuMDY5LTAuMTE2LTAuMDk1LTAuMTgxYy0wLjAyMi0wLjA1NC0wLjAzOC0wLjEwNy0wLjA1LTAuMTY1ICBjLTAuMDA3LTAuMDMyLTAuMDI0LTAuMDU5LTAuMDI4LTAuMDkyYy0wLjAwNC0wLjAzOCwwLjAxLTAuMDczLDAuMDEtMC4xMWMwLTAuMDM4LTAuMDE0LTAuMDcyLTAuMDEtMC4xMWwwLjU2OS01LjEyMmwtNS4xMjIsMC41NjkgIGMtMC4wMzcsMC4wMDQtMC4wNzUsMC4wMDYtMC4xMTEsMC4wMDZjLTAuMDc5LDAtMC4xNTItMC4wMjQtMC4yMjctMC4wNDJMMC40NDIsNTEuMzk5bDIuMTA2LTIuMTA2YzAuMzkxLTAuMzkxLDEuMDIzLTAuMzkxLDEuNDE0LDAgIHMwLjM5MSwxLjAyMywwLDEuNDE0bC0yLjEwNiwyLjEwNmwxMi4wMy0yLjg2NGMtMC4wMjYtMC4xMDktMC4wNDMtMC4yMjItMC4wMy0wLjMzOUwxNC40MjQsNDQuNDg4eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojMzg0NTRGOyIgZD0iTTMuOTYyLDQ5LjI5M2MtMC4zOTEtMC4zOTEtMS4wMjMtMC4zOTEtMS40MTQsMGwtMi4xMDYsMi4xMDZMMCw1My4yNTVsMS44NTYtMC40NDJsMi4xMDYtMi4xMDYgIEM0LjM1Miw1MC4zMTYsNC4zNTIsNDkuNjg0LDMuOTYyLDQ5LjI5M3oiLz4KPHBvbHlnb24gc3R5bGU9ImZpbGw6I0YyRUNCRjsiIHBvaW50cz0iNDguNzksMTUuNzc4IDM3LjQ3Nyw0LjQ2NSAzNy40NzYsNC40NjUgMzYuMDYyLDUuODc5IDM2LjA2Miw1Ljg3OSA0Ny4zNzYsMTcuMTkyICAgNDcuMzc2LDE3LjE5MiA0OC43OSwxNS43NzggIi8+CjxwYXRoIHN0eWxlPSJmaWxsOiNFQkJBMTY7IiBkPSJNNDEuMDEyLDE2LjQ4NUwxNS4wOTgsNDIuNGwtNC43NzMsMC41M2wwLjUzLTQuNzczTDM2Ljc3LDEyLjI0M2wtMS40MTQtMS40MTRMOS40NDEsMzYuNzQzICBsLTQuNzczLDAuNTNsLTEuMTMzLDEuMTMzbC0wLjIyOCwwLjk1N2MwLjA3NSwwLjAxOCwwLjE0NywwLjA0MiwwLjIyNywwLjA0MmMwLjAzNiwwLDAuMDc0LTAuMDAyLDAuMTExLTAuMDA2bDUuMTIyLTAuNTY5ICBsLTAuNTY5LDUuMTIyYy0wLjAwNCwwLjAzOCwwLjAxLDAuMDczLDAuMDEsMC4xMWMwLDAuMDM4LTAuMDE0LDAuMDcyLTAuMDEsMC4xMWMwLjAwNCwwLjAzMywwLjAyMSwwLjA2LDAuMDI4LDAuMDkyICBjMC4wMTIsMC4wNTcsMC4wMjksMC4xMTIsMC4wNSwwLjE2NWMwLjAyNiwwLjA2NCwwLjA1NywwLjEyNCwwLjA5NSwwLjE4MWMwLjAzLDAuMDQ1LDAuMDYzLDAuMDg4LDAuMSwwLjEyNyAgYzAuMDQ3LDAuMDUsMC4xLDAuMDk0LDAuMTU3LDAuMTM0YzAuMDQ0LDAuMDMxLDAuMDg5LDAuMDYxLDAuMTM4LDAuMDg0YzAuMDY1LDAuMDMxLDAuMTM1LDAuMDUsMC4yMDcsMC4wNjcgIGMwLjAzOCwwLjAwOSwwLjA2OSwwLjAzLDAuMTA4LDAuMDM1YzAuMDM2LDAuMDA0LDAuMDcyLDAuMDA2LDAuMTA5LDAuMDA2aDAuMDAxaDBoMC4wMDFoMC4wMDFjMCwwLDAuMDAxLDAsMC4wMDEsMGgwICBjMC4wMzUsMCwwLjA3Mi0wLjAwMiwwLjEwOS0wLjAwNmw1LjEyMi0wLjU2OWwtMC41NjksNS4xMjJjLTAuMDEzLDAuMTE4LDAuMDA0LDAuMjMsMC4wMywwLjMzOWwwLjk2My0wLjIyOWwxLjEzMy0xLjEzMmwwLjUzLTQuNzczICBsMjUuOTE0LTI1LjkxNUw0MS4wMTIsMTYuNDg1eiIvPgo8cG9seWdvbiBzdHlsZT0iZmlsbDojRjJFQ0JGOyIgcG9pbnRzPSI0NS45NjIsMTguNjA2IDM0LjY0OCw3LjI5MyAzNC42NDgsNy4yOTMgMzMuMjM0LDguNzA3IDMzLjIzNCw4LjcwNyAzNS4zNTYsMTAuODI5ICAgMzYuNzcsMTIuMjQzIDQxLjAxMiwxNi40ODUgNDIuNDI2LDE3Ljg5OSA0NC41NDgsMjAuMDIgNDQuNTQ4LDIwLjAyIDQ1Ljk2MiwxOC42MDYgIi8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
  />
);

export const PostBookCover = ({ className, onClick }) => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <img
    className={className}
    onClick={onClick}
    src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBhdGggc3R5bGU9ImZpbGw6I0YxNDc0MjsiIGQ9Ik00NDQuMDIzLDBIMTAwLjg2NmwtMjMuMjIsMjIuMTU3djQ1OGwzNzUuMDgzLTE5LjQyNFY4LjcwOEM0NTIuNzMsMy44OTcsNDQ4LjgzMSwwLDQ0NC4wMjMsMHoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0NEM0YzOTsiIGQ9Ik0xMDAuODY4LDB2NDgwLjE1N2wtNDEuNTk1LDEuODU4VjIxLjI4MUM1OS4yNzEsOS41MzIsNjguODAzLDAsODAuNTUyLDBIMTAwLjg2OHoiLz4KPGNpcmNsZSBzdHlsZT0iZmlsbDojRkFENEM2OyIgY3g9IjI3Mi40NDIiIGN5PSIyNTMuMTIyIiByPSI3MC40MjciLz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRjk5RDg4OyIgZD0iTTI3Mi40NDcsMjg5Ljk4OGMtOS44NTgsMC0xOS4xMTktMy44MzEtMjYuMDc2LTEwLjc4N2MtMy40MDEtMy40MDItMy40MDEtOC45MTQsMC0xMi4zMTUgICBjMy40MDItMy4zOTksOC45MTQtMy4zOTksMTIuMzE1LDBjNy41ODcsNy41OSwxOS45MzQsNy41OSwyNy41MjIsMGMzLjQwMi0zLjM5OSw4LjkxNC0zLjM5OSwxMi4zMTUsMCAgIGMzLjQwMSwzLjQwMiwzLjQwMSw4LjkxNCwwLDEyLjMxNUMyOTEuNTY1LDI4Ni4xNTgsMjgyLjMwNSwyODkuOTg4LDI3Mi40NDcsMjg5Ljk4OHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGOTlEODg7IiBkPSJNMjcyLjQ0NywzNDYuNzY4Yy00Ny4yODIsMC04Ny43MzYsMjkuMTM1LTEwNC40NTUsNzAuNDIzaDIwOC45MDkgICBDMzYwLjE4MywzNzUuOTAzLDMxOS43MjksMzQ2Ljc2OCwyNzIuNDQ3LDM0Ni43Njh6Ii8+CjwvZz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGMUNEOyIgZD0iTTM0NC4yNTcsMTExLjQyNGMtMi4xMTUsMC00LjIzMS0wLjc2Ni01Ljg5Ny0yLjNsLTMwLjAxNC0yNy42MjVsLTMwLjAwOSwyNy42MjQgICBjLTMuMzMxLDMuMDY5LTguNDYsMy4wNy0xMS43OTMsMC4wMDFMMjM2LjUzMyw4MS41bC0zMC4wMDYsMjcuNjIzYy0zLjMzMywzLjA2OS04LjQ2NCwzLjA2OS0xMS43OTUsMEwxNTguODI3LDc2LjA3ICAgYy0zLjUzOS0zLjI1Ny0zLjc2Ni04Ljc2Ni0wLjUwOS0xMi4zMDNjMy4yNTctMy41MzksOC43NjctMy43NjcsMTIuMzAzLTAuNTA5bDMwLjAwOSwyNy42MjNsMzAuMDA2LTI3LjYyMyAgIGMzLjMzMy0zLjA2OSw4LjQ2MS0zLjA3LDExLjc5NS0wLjAwMWwzMC4wMTEsMjcuNjI1bDMwLjAwOS0yNy42MjRjMy4zMzEtMy4wNjksOC40Ni0zLjA3LDExLjc5My0wLjAwMWwzMC4wMTQsMjcuNjI1ICAgbDMwLjAxMy0yNy42MjVjMy41NC0zLjI1Nyw5LjA0NS0zLjAyOCwxMi4zMDQsMC41MWMzLjI1NywzLjUzOSwzLjAyOCw5LjA0Ny0wLjUxLDEyLjMwNGwtMzUuOTEsMzMuMDUzICAgQzM0OC40ODgsMTEwLjY1OCwzNDYuMzczLDExMS40MjQsMzQ0LjI1NywxMTEuNDI0eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRjFDRDsiIGQ9Ik04OS4yNjEsNDYwLjcyOWMtMTEuNzU0LDAtMjEuMjgyLDkuNTI4LTIxLjI4MiwyMS4yODJjMCwxMS43NTQsOS41MjgsMjEuMjgyLDIxLjI4MiwyMS4yODJoMzU0Ljc2MiAgIFY0NjAuNzNIODkuMjYxVjQ2MC43Mjl6Ii8+CjwvZz4KPHBhdGggc3R5bGU9ImZpbGw6I0Y5OUQ4ODsiIGQ9Ik00NDQuMDIzLDUxMkg4OS4yNmMtMTYuNTM2LDAtMjkuOTg5LTEzLjQ1NC0yOS45ODktMjkuOTljMC0xNi41MzYsMTMuNDUzLTI5Ljk4OSwyOS45ODktMjkuOTg5ICBoMzU0Ljc2MmM0LjgxLDAsOC43MDgsMy44OTcsOC43MDgsOC43MDhzLTMuODk3LDguNzA4LTguNzA4LDguNzA4SDg5LjI2Yy02LjkzNCwwLTEyLjU3NCw1LjY0LTEyLjU3NCwxMi41NzQgIGMwLDYuOTM1LDUuNjQsMTIuNTc1LDEyLjU3NCwxMi41NzVoMzU0Ljc2MmM0LjgxLDAsOC43MDgsMy44OTcsOC43MDgsOC43MDhDNDUyLjcyOSw1MDguMTAzLDQ0OC44MzEsNTEyLDQ0NC4wMjMsNTEyeiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
  />
);
