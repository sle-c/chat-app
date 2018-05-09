import * as React from "react";
import ChannelList from "../ChannelList";

const Sidebar = () => (
  <div
    className="sidebar"
  >
    <div className="sidebar-header">
      <h2 className="sidebar-title">Channels</h2>
    </div>
    <div className="sidebar-body">
      <ChannelList />
    </div>
  </div>
);

export default Sidebar;