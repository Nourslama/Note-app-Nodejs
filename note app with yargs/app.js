console.log('-----------------------------------------');

console.log("-------starting Note Application---------")
 
console.log('-----------------------------------------');


const notes=require('./notes')
const yargs=require('yargs')




var title=yargs.argv.title
var body= yargs.argv.body
var command=yargs.argv._[0]


if((command==="add")&&(title)){
    console.log("---------------adding note---------------")
    notes.addNote(title,body)
    console.log("*****************************************")
    
}else if((command==="remove")&&(title)){
    console.log("---------------remove note---------------")
    notes.removeNote(title)
    console.log("*****************************************")
   }
    else if((command==="read")&&(title)){
        console.log("-------------reading note----------------")
        notes.readNote(title)
        console.log("*****************************************")
        }
        else if(command==="list"){
            console.log("------------listing all notes------------")
            notes.listNote()
            console.log("*****************************************")
         }
            else{
                    console.log("*****************************************************")

                    console.log("Options: ");
                    console.log("--help           Show help                 [boolean] ");
                    console.log("--title          Title of note            [required] ");
                    console.log("--body           body of note             [required] ");
                    console.log("Missing required argument : title")
                   
                }
                
                
            
          
        
