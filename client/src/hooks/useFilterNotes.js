import { useMemo } from "react"

export const useFilterNotes = (notes, query)=>{
    const sortAndSearchPosts = useMemo(()=>{
        return notes.filter((note)=> (note.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || note.text.toLocaleLowerCase().includes(query.toLocaleLowerCase())))
      },[query, notes])

      return sortAndSearchPosts
}