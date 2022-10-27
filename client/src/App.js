import Sidebar from './components/sidebar/Sidebar';
import React, { useEffect, useState } from 'react'
import { Layout, Modal } from 'antd';
import './styles/App.css';
import 'antd/dist/antd.css';
import { NotesContext } from './context'
import SearchBox from './components/searchBox/SearchBox';
import WorkSpace from './components/workSpace/WorkSpace';
import { useFilterNotes } from './hooks/useFilterNotes';



function App() {
  const [activeItemId, setActiveItemId] = useState(null)
  const [query, setQuery] = useState('')
  const [editActive, setEditActive] = useState(false)
  const [activeItem, setActiveItem] = useState({})
  const [listNotes, setListNotes] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);

  const Notes = [
    {id: 1, title: 'atext titpe', text: '1text content', date: 1564813430896},
    {id: 2, title: 'btext titpe2', text: '2text content2textasdasdasdasdasdasdasdas', date: 1666018960896},
    {id: 3, title: 'ctext titpe3', text: '3text content3', date: 1666800896896},
    {id: 4, title: 'dtext titpe4', text: '4text content4', date: 1666089660896},
  ]

  const filterNotes = useFilterNotes(listNotes, query)

  console.log(filterNotes)

  function changeActiveItem(){
    listNotes.map(item =>{
      if(item.id === activeItemId){
        setActiveItem(item)
      }
      })
   
  }

  function deleteItem(){
    if(activeItemId !== null){
      setIsModalOpen(true)
      console.log('delete')
    }
    
  }

  const handleOk = () => {
    const newListNotes = [...listNotes].filter(item => item.id !== activeItemId)
    setListNotes(newListNotes)
    setIsModalOpen(false);
    setActiveItem({})
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function editItem(){
    setEditActive(!editActive)
  }

  function saveEdit(id, title, text, date){
    const newNotesList = [...listNotes]
    newNotesList.map(item =>{
      if(item.id === id){
        item.title = title
        item.text = text
        item.date = date
      }
      })
      setListNotes(newNotesList)
    console.log(title)
  }

  function cteateItem(){
    const newListNotes = [...listNotes]
    const id = Math.random()
    newListNotes.push({id: id, title: 'New notes', text: '', date: Date.now()})
    setActiveItemId(id)
    setListNotes(newListNotes)
    console.log('create')
  }

  useEffect(()=>{
    changeActiveItem()
    setEditActive(false)
  },[activeItemId])

  useEffect(()=>{
    setListNotes(Notes)
  },[])

  console.log('render')

  return (
    <NotesContext.Provider
      value={{
        listNotes:filterNotes,
        saveEdit,
        activeItem,
        editItem,
        cteateItem,
        deleteItem,
        setQuery,
      }}
    >
    
    <div className="App">
        <Modal title="Delete item?" open={isModalOpen} okText={'Delete'} onOk={handleOk} onCancel={handleCancel}>
        </Modal> 
       <SearchBox
       
      /> 
    <Layout className="layout">
      <Sidebar
        activeItemId={activeItemId}
        setActiveItemId={setActiveItemId}
      />
      <WorkSpace 
        activeItemId={activeItemId}
        setActiveItemId={setActiveItemId}
        editActive={editActive}
      />
       
  </Layout>
   
  </div>
  </NotesContext.Provider>
  );
}

export default App;

