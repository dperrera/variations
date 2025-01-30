declare module "styled-jsx" {
  export interface StyleProps {
    jsx?: boolean;
    global?: boolean;
  }
}

declare module "react" {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}
