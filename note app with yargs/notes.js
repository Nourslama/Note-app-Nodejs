
const fs=require('fs')
var fetchNotes=()=> {
    try{
           //objet en string JSON.parse
        return JSON.parse(fs.readFileSync('notes.txt'))
    }catch(err){
        return []
    }
    
}
var addNote=(title,body)=> {
    var notes=fetchNotes()
   
var note={
    title,
    body
}
var double=notes.filter((note)=>note.title===title)
if(double.length===0){
    notes.push(note)
    //enregister note avec JSON.stringify()
        fs.writeFileSync("notes.txt",JSON.stringify(notes))
        logNote(note)
}
else{
    console.log("--------STOP! title exist!!----------");
    
}



    
}

var removeNote=(title)=> {
    var notes=fetchNotes()

    var filterNotes=notes.filter((note)=>note.title!==title)
   
        
    fs.writeFileSync("notes.txt",JSON.stringify(filterNotes))

}

var readNote=(title)=> {
    var notes=fetchNotes()
    var filterNotes=notes.filter((note)=>note.title===title)
    if(filterNotes.length===0){
        console.log("------------Title didn't exist!-------------");
        
    }else
         logNote( filterNotes[0])
    
}
var listNote=(title)=> {
    var notes=fetchNotes()
    var length = fetchNotes().length
  console.log("You have: "+length+" note(s)")
   notes.forEach((note)=>logNote(note))
    
}
var logNote=(note)=>{
    console.log("*****************************************")
console.log(`title:${note.title}`);
console.log(`Body:${note.body}`);

}
module.exports={
    addNote,removeNote,readNote,listNote
}
