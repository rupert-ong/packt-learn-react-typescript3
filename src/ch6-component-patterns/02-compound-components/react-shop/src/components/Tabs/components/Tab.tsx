import * as React from "react";
import { TabsContext, ITabsContext } from "../../Tabs";

interface ITabProps {
  name: string;
  initialActive?: boolean;
  heading: () => string | JSX.Element;
}

const Tab: React.FunctionComponent<ITabProps> = props => (
  <TabsContext.Consumer>
    {(context: ITabsContext) => {
      // Highlight tab and content on first load
      if (!context.activeName && props.initialActive) {
        if (context.handleTabClick) {
          context.handleTabClick(props.name, props.children);
        }
        return null;
      }
      const activeName = context.activeName
        ? context.activeName
        : props.initialActive
        ? props.name
        : "";
      const handleTabClick = (e: React.MouseEvent<HTMLLIElement>) => {
        if (context.handleTabClick) {
          context.handleTabClick(props.name, props.children);
        }
      };
      return (
        <li
          onClick={handleTabClick}
          className={props.name === activeName ? "active" : ""}
        >
          {props.heading()}
        </li>
      );
    }}
  </TabsContext.Consumer>
);

export default Tab;
