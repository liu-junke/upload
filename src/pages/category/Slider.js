import React from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile';
import Content from './Content';

export default class Slider extends React.Component {
  renderContent = tab =>{
    console.log('tab',tab)
    return(
    <div style={{  height: '100%', backgroundColor: '#fff' }}>
      { tab.floors.map( (item,index)=><Content key = {index} {...item} ></Content> ) }
    </div>)
  }
    

  render() {
    const {data} = this.props
    console.log('data',data)
    return (
        <Tabs tabs={data} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={13} />}
        tabBarPosition = "left"
        tabDirection = "vertical"
        tabBarActiveTextColor="#FC3F78"
        >
          {this.renderContent}
        </Tabs>
    );
  }
}
