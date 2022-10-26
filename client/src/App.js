import Sidebar from './components/sidebar/Sidebar';
import React from 'react'
import { Layout } from 'antd';
import './styles/App.css';
import { NotesContext } from './context'
import SearchBox from './components/searchBox/SearchBox';
const { Header, Content, Footer, Sider} = Layout;


function App() {

  const notes = [
    {title: 'text titpe', text: 'text content', date: 1564813430896},
    {title: 'text titpe2', text: 'text content2textasdasdasdasdasdasdasdas', date: 1666018960896},
    {title: 'text titpe3', text: 'text content3', date: 1666800896896},
    {title: 'text titpe4', text: 'text content4', date: 1666089660896},
  ]

  return (
    <NotesContext.Provider
      value={notes}
    >
    
    <div className="App">
       <SearchBox
        
      /> 
    <Layout className="layout">
      <Sidebar
        
      />
        <div
          className="contentBody"
         >
          content
        </div>
    {/* <Layout className='contentContainer'>
      <Header
        className="contentHeader"
        style={{
          padding: 0,
        }}
      />
      <Content
       className='contentBodyContainer'
      >
        <div
          className="contentBody"
         >
          content
        </div>
      </Content>
    </Layout> */}
  </Layout>
      
  </div>
  </NotesContext.Provider>
  );
}

export default App;

