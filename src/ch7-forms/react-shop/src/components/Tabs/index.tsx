import * as React from "react";
import Tab from "./components/Tab";

interface IState {
  activeName: string;
  activeContent: React.ReactNode;
}

// Create context to pass data from Tabs into Tab component(s)
export interface ITabsContext {
  activeName?: string;
  handleTabClick?: (name: string, content: React.ReactNode) => void;
}

export const TabsContext = React.createContext<ITabsContext>({});

class Tabs extends React.Component<{}, IState> {
  public static Tab = Tab;

  public readonly state: IState = {
    activeName: "",
    activeContent: null
  };

  public render() {
    return (
      <TabsContext.Provider
        value={{
          activeName: this.state ? this.state.activeName : "",
          handleTabClick: this.handleTabClick
        }}
      >
        <ul className="tabs">{this.props.children}</ul>
        <div>{this.state && this.state.activeContent}</div>
      </TabsContext.Provider>
    );
  }

  private handleTabClick = (name: string, content: React.ReactNode) => {
    this.setState({
      activeName: name,
      activeContent: content
    });
  };
}

export default Tabs;
