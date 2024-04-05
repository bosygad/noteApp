import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotesComponent } from '../notes/notes.component';
import { NoteService } from 'src/app/shared/services/note.service';
import { Notes } from 'src/app/shared/interfaces/notes';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  notes:any[] =[]
  searchValue:string=''
  
  constructor(public dialog: MatDialog ,private _NoteService:NoteService) {}
ngOnInit(): void {
  this.getNotes()
  
}
  openDialog() {
    const dialogRef = this.dialog.open(NotesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
     if(result == 'add'){
      this.getNotes()
     }
    });
  }
  getNotes(){
    this._NoteService.getNotes().subscribe({
      next:(respose)=>{console.log(respose);
this.notes = respose.notes
console.log(this.notes);


      },
      error:(err)=>{console.log(err);
      }
    })
  }

  DeleteNote(note : any){
    console.log(note);
    
    this._NoteService.deleteNotes(note._id).subscribe({
      next:(response)=>{console.log(response);
        this.getNotes()
      },
      error:(err)=>{console.log(err);
      }
    })
  }

  UpdateNote(note:Notes){
    console.log("Update" , note);
    const dialogRef = this.dialog.open(NotesComponent , {data:note});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
   if(result == 'Update'){
    this.getNotes()
   }
    });
    
  }
}


