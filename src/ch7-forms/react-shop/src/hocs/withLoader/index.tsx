import * as React from "react";

interface IProps {
  loading: boolean;
}
// withLoader is a function that that takes in a component of type P.
// P & IProps: An intersection type combines multiple types into one.
const withLoader = <P extends object>(
  Component: React.ComponentType<P>
): React.FunctionComponent<P & IProps> => ({ loading, ...props }: IProps) =>
  loading ? (
    <div className="loader-overlay">
      <div className="loader-circle-wrap">
        <div className="loader-circle" />
      </div>
    </div>
  ) : (
    <Component {...props as P} />
  );

export default withLoader;
