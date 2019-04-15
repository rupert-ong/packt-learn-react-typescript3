import * as React from "react";
import { TabsContext, ITabsContext } from "../../Tabs";

interface ITabProps {
  name: string;
  initialActive?: boolean;
  heading: () => string | JSX.Element;
}

const Tab: React.FunctionComponent<ITabProps> = props => {
  const tabsContext = React.useContext(TabsContext);

  // Highlight tab and content on first load if possible
  if (!tabsContext.activeName && props.initialActive) {
    if (tabsContext.handleTabClick) {
      tabsContext.handleTabClick(props.name, props.children);
    }
    return null;
  }

  const activeName = tabsContext.activeName
    ? tabsContext.activeName
    : props.initialActive
    ? props.name
    : "";

  const handleTabClick = (e: React.MouseEvent<HTMLLIElement>) => {
    if (tabsContext.handleTabClick) {
      tabsContext.handleTabClick(props.name, props.children);
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
};

// Old way: Render props in context consumer
/*
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
*/

export default Tab;
